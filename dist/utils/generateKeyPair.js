import * as crypto from "crypto";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const genKeyPair = () => {
    const keyPair = crypto.generateKeyPairSync("rsa", {
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
    console.log("RSA key pair generated successfully!");
    const keysDir = path.join(__dirname, "..", "modules", "auth", "keys");
    fs.writeFileSync(path.join(keysDir, "public.pem"), keyPair.publicKey);
    fs.writeFileSync(path.join(keysDir, "private.pem"), keyPair.privateKey);
};
genKeyPair();
//# sourceMappingURL=generateKeyPair.js.map