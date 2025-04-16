---
title: Hello World
---

# Creating a Hello World Application

## Introduction

In this tutorial, you will learn how to create, sign, and serialize a basic Symbol transaction using code.

The goal is to generate a **transfer transaction** and produce a signed payload ready to be announced to the blockchain.

We will:

* Create a transaction object
* Sign it with a private key
* Serialize it to a JSON payload

The example is implemented in both Python and JavaScript.

## Full Code

{% import 'tutorial.jinja2' as tutorial %}

{{ tutorial.code_full("devbook/start/hello-world", ["py", "js", "tjs"]) }}

## Code Explanation

### 1. Creating the Facade

The `SymbolFacade` object is the main entry point for creating and signing transactions.
It must be initialized with the target network: `'testnet'` or `'mainnet'`.

{{ tutorial.code_snippet(["py:4:4", "js:4:4", "tjs:5:5"])}}

### 2. Creating the Transaction

This example builds a **transfer transaction**, the simplest transaction type.
It includes the signer, recipient, a mosaic, a deadline, and a fee.

{{ tutorial.code_snippet(["py:6:16", "js:6:16",
"tjs:7:24:The <TS:TransferTransactionV1Descriptor> constructor only accepts parameters of the right type, \
making it easier to use during development. We can do lists:\n
* One **black**\n
* Two"])}}

### 3. Signing the Transaction

We use a known private key to create a <key pair:|KeyPair>, which can sign the transaction.
The result is a cryptographic signature tied to the transaction contents.

{{ tutorial.code_snippet(["py:18:21", "js:18:21", "tjs:26:29"])}}

### 4. Attaching the Signature

After signing, we combine the transaction and signature into a final payload.

{{ tutorial.code_snippet(["py:23:24", "js:23:24", "tjs:31:32"])}}

This payload is ready to be announced to a Symbol node using the [transaction announcement API](../api-reference.md).

## Conclusion

You have now created, signed, and serialized a basic Symbol transfer transaction using code.
This is the foundation for automating account operations, sending mosaics, or building larger blockchain applications.

## Next Steps

* Try changing the `recipientAddress` or `amount` and running the code again.

* Use the JSON payload to [announce the transaction](./announce-transaction.md) to the network.

* Learn more about <transaction:> structure and <mosaic:> handling in the [Textbook](../../textbook/intro.md).
