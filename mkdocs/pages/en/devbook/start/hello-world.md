---
title: Hello World
---

# Creating a Hello World Transaction

In this tutorial, a transfer transaction is created, signed, announced to the network, and confirmed using both Python and JavaScript.  
The code dynamically fetches the current network time and recommended fees, constructs the transaction, and polls until it is confirmed.

## Full Code

{% import 'tutorial.jinja2' as tutorial with context %}

{{ tutorial.code_full("devbook/start/hello-world", [
  "py:Python version using urllib and symbolchain",
  "js:JavaScript version using fetch and chained promises"
]) }}

## Code Explanation

### Fetching Network Time

{{ tutorial.code_snippet(["py:22:29", "js:20:28"]) }}

### Fetching Recommended Fees

{{ tutorial.code_snippet(["py:31:39", "js:30:38"]) }}

### Building the Transaction

{{ tutorial.code_snippet(["py:41:54", 'js:40:52:\
??? info "Typed descriptor" \n\
    You can also use the <TS:SymbolFacade.createTransactionFromTypedDescriptor> \
    method and provide a <TS:TransferTransactionV1Descriptor>.\n\n\
    Be warned that the timestamps is relative']) }}

### Signing and Serializing

{{ tutorial.code_snippet(["py:56:61", "js:54:59"]) }}

### Announcing the Transaction

{{ tutorial.code_snippet(["py:63:73", "js:61:69"]) }}

### Polling for Confirmation

{{ tutorial.code_snippet(["py:75:96", "js:71:116"]) }}

## Output

```text
--8<-- "devbook/start/hello-world.log"
```

## Conclusion

This example demonstrates how to programmatically create, sign, and confirm a Symbol transfer transaction using live network data.  
It covers proper fee calculation, deadline handling, and polling for status without assuming fixed values.
