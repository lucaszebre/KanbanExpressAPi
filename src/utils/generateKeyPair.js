"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genKeyPair = void 0;
var crypto = require("crypto");
var fs = require("fs");
var path = require("path");
var genKeyPair = function () {
  var keyPair = crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
  });
  var keysDir = path.join(__dirname, "..", "modules", "auth", "keys");
  fs.writeFileSync(path.join(keysDir, "public.pem"), keyPair.publicKey);
  fs.writeFileSync(path.join(keysDir, "private.pem"), keyPair.privateKey);
};
exports.genKeyPair = genKeyPair;
(0, exports.genKeyPair)();
