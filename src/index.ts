import { whoami, item, user } from "@1password/op-js";

// Force an auth before we call whoami
user.me();

console.log(
  `Hello, ${whoami()?.email}! You have ${
    item.list().length
  } items in your account.`
);
