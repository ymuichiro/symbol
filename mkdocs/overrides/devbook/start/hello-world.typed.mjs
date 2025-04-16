import { PublicKey, PrivateKey } from 'symbol-sdk';
import { SymbolFacade, descriptors, models, Address }
    from 'symbol-sdk/symbol';

const facade = new SymbolFacade('testnet');

const typedDescriptor = new descriptors.TransferTransactionV1Descriptor(
    new Address('TCHBDENCLKEBILBPWP3JPB2XNY64OE7PYHHE32I'),
    [
        new descriptors.UnresolvedMosaicDescriptor(
            new models.UnresolvedMosaicId(0x7CDF3B117A3C40CCn),
            new models.Amount(1000000n))
    ],
    'hello symbol'
);

const transaction = facade.createTransactionFromTypedDescriptor(
    typedDescriptor,
    new PublicKey(
        '87DA603E7BE5656C45692D5FC7F6D0EF8F24BB7A5C10ED5FDA8C5CFBC49FCBC8'
    ),
    100,
    60 * 60
);

const privateKey = new PrivateKey(
    'EDB671EB741BD676969D8A035271D1EE5E75DF33278083D877F23615EB839FEC');
const signature = facade.signTransaction(
    new facade.static.KeyPair(privateKey), transaction);

const jsonPayload = facade.transactionFactory.static.attachSignature(
    transaction, signature);

console.log(jsonPayload);
