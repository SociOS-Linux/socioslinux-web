# Install

This section is intentionally operational.

Some steps here are destructive (partition deletion, filesystem creation). Treat every action as irreversible unless we have verified backups.

## Principles

- Do not touch the EFI System Partition (ESP) unless we are deliberately creating a separate ESP.
- Always verify the target disk by model + size + device path before deleting anything.
- Prefer predictable layouts that can later be validated automatically (contracts/conformance).

## Fedora (Anaconda) manual partitioning (ext4)

This is the baseline layout we document and support for an ext4-first Fedora install.

- Reuse existing **EFI System Partition** (FAT32) mounted at `/boot/efi`.
- (Optional) `1 GiB` **ext4** mounted at `/boot`.
- (Optional) `8 GiB` **swap** (increase if we want hibernation).
- `~30 GiB` (or larger) **ext4** mounted at `/`.
- (Optional) remaining space as **ext4** mounted at `/home`.

See the step-by-step guide: [Manual partitioning details](/install/partitioning).
