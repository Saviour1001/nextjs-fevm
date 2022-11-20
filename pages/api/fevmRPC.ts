import type { SafeEventEmitterProvider } from "@web3auth/base";
import { newDelegatedAddress } from "@glif/filecoin-address";
import { ethers } from "ethers";
import * as fa from "@glif/filecoin-address";
import LotusRPCEngine from "@glif/filecoin-rpc-client";
import { FilecoinNumber, Converter } from "@glif/filecoin-number";
import { Message } from "@glif/filecoin-message";

import BigNumber from "bignumber.js";
import { SigningKey } from "ethers/lib/utils";

export default class FilecoinRpc {
  private provider: SafeEventEmitterProvider;

  constructor(provider: SafeEventEmitterProvider) {
    this.provider = provider;
  }

  lotusJWT = "aaaaaaaa.bbbbbbbbbbbb.i_ZZZZZZ-3xYYYYYY";

  config = {
    // defaults to local as seen below
    apiAddress: "https://wallaby.node.glif.io/rpc/v0",
    token: this.lotusJWT,
  };

  lotusRPC = new LotusRPCEngine(this.config);

  async getAccounts(): Promise<any> {
    try {
      const privateKey = await this.provider.request({
        method: "private_key",
      });

      const wallet = new ethers.Wallet(privateKey as SigningKey);
      const ethAddress = wallet.address;
      const filecoinAddress = fa
        .newDelegatedEthAddress(wallet.address)
        .toString();

      return { ethAddress, filecoinAddress };
    } catch (error) {
      console.log("error", error);
    }
  }

  async getBalance(): Promise<any> {
    try {
      const address = await this.getAccounts();
      const balance = await this.lotusRPC.request(
        "WalletBalance",
        address.filecoinAddress
      );
      const balanceFil = new FilecoinNumber(balance, "attofil").toFil();
      return balanceFil;
    } catch (error) {
      console.log("error", error);
    }
  }

  async sendFIL(): Promise<any> {
    const message = new Message({
      to: "t03832874859695014541",
      from: "t1pyfq7dg6sq65acyomqvzvbgwni4zllglqffw5dy",
      nonce: 1,
      value: new BigNumber("1000000000"),
      method: 0,
      params: "",
    });

    const messageForSerialization = await message.toSerializeableType();
    const messageForLotus = message.toLotusType();

    // console.log(messageForLotus);
    // console.log("message for serialization", messageForSerialization);
  }
}
