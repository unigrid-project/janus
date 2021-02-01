//var gt = require('electron').remote.getGlobal('gt');
import Gettext from 'node-gettext';
const gt = new Gettext()

export const COPIED = gt.gettext("copied to clipboard");
export const EXPORT_KEYS = gt.gettext("Export Private Keys");
export const CHANGE_DEFAULT = gt.gettext("Change Default Language");
export const UNLOCK = gt.gettext("Unlock");
export const CANCEL = gt.gettext("Cancel");
export const BLOCK = gt.gettext("Block");
export const CAUTION = gt.gettext("This mnemonic phrase is uniquely generated, and grants you access to your wallet. Do NOT screenshot this page. Carefully write down your mnemonic phrase from left to right on a piece of paper, and save a copy offline. Don’t share your unique phrase with ANYONE. CAUTION: The Janus Team can NOT recover your funds if you lose your mnemonic phrase.");
export const PASSPHRASE_ERROR = gt.gettext("Passphrase Error!");
export const MAX = gt.gettext("MAX");
export const ADDRESS = gt.gettext("Address");
export const AMOUNT = gt.gettext("Amount");
export const FAST = gt.gettext("fast");
export const SLOW = gt.gettext("slow");
export const ESTIMATED_FEE = gt.gettext("Estimated transaction fee:");
export const SEND = gt.gettext("SEND");
export const ADD_RECIPIENT = gt.gettext("ADD RECIPIENT");
export const TOTAL_COST = gt.gettext("total cost:");
export const INVALID_ADDRESS = gt.gettext("Address is not valid!");
export const RECEIVE = gt.gettext("RECEIVE");
export const TRANSACTION_FAILED = gt.gettext("Transaction failure");
export const BALANCE_INSUFFICIENT = gt.gettext("Insufficient funds");
export const NONCE_ERROR = gt.gettext("Transaction failed, you can increase the gas to make sure a transaction is successfully handled.");
export const NO_INTERNET = gt.gettext("Unable to connect to Cypherium network. Please check your firewall and internet connections.");
export const FIRST_RUN = gt.gettext("It appears this is a first time load. Import or create a new wallet");
