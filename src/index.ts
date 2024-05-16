import { whoami, item, user, vault, Item } from "@1password/op-js";

const sample = <T>(items: T[]) =>
  items[Math.floor(Math.random() * items.length)];

// Force an auth for all operations
user.me();

console.log(`Hello, ${whoami()?.email}!`);

const vaults = vault.list();
const singleVault = sample(vaults);

const vaultItems = item.list({
  vault: singleVault.id,
});

console.log(
  `You have ${vaultItems.length} items in the "${singleVault.name}" vault.`
);

if (vaultItems.length > 0) {
  const singleItem = item.get(sample(vaultItems).id) as Item;
  console.log(
    `Here's a random one: in this vault, the item "${singleItem.title}" has ${
      (singleItem.fields || []).length
    } fields.`
  );
}
