# Manual partitioning (Fedora / Anaconda, ext4)

## Hard warning

Manual partitioning is the highest-risk step in most Linux installs.

- Selecting the wrong disk or deleting the wrong partition will destroy data.
- If anything looks unfamiliar, stop and re-verify disk identity before proceeding.

## What we are trying to achieve

We want a clean ext4 layout while leaving UEFI boot infrastructure intact.

### Target layout

- **EFI System Partition (ESP)**: leave as-is (FAT32), mounted at `/boot/efi`.
- (Optional) `/boot`: `1 GiB` ext4
- (Optional) `swap`: `8 GiB` swap partition (size depends on workload; hibernation wants swap ≈ RAM)
- `/` (root): `~30 GiB` ext4 (increase if we expect heavy dev toolchains, containers, or large packages)
- (Optional) `/home`: remaining space ext4

## Step-by-step (Anaconda GUI)

### 1) Select the correct disk

In **Installation Destination**:

- Confirm the disk by **capacity** and **model**.
- Confirm the device path (e.g., `nvme0n1`, `sda`) matches our intent.

If multiple disks are present, we should treat this as a change-management event: verify twice.

### 2) Enter Custom partitioning

Choose **Custom** so we control exactly what is created and what is not.

### 3) Preserve the EFI System Partition

Find the existing **EFI System Partition**:

- typically `FAT32`
- typically `100–600 MiB`
- often labeled `EFI System Partition`

Do **not** format it.

Ensure it is mounted at `/boot/efi`.

### 4) Create free space (only on the target partition)

- Identify the partition we intend to reclaim.
- Delete only that partition to create **unallocated/free space**.

Do **not** delete partitions that belong to another OS install or contain data we intend to keep.

### 5) Create Linux partitions in the free space

Create partitions in this order (practical, not sacred):

1. (Optional) `/boot` — `1 GiB`, ext4
2. (Optional) `swap` — `8 GiB`, swap
3. `/` — `~30 GiB`, ext4
4. (Optional) `/home` — remainder, ext4

### 6) Sanity check before “Begin Installation”

Before we commit:

- The ESP is still present, not formatted, and mounted at `/boot/efi`.
- The root filesystem is mounted at `/` and is ext4.
- No other disks/partitions were touched unintentionally.

If the partition table view doesn’t match our mental model, we stop and re-check.

## Notes and tradeoffs

- `/home` split is useful if we want to reinstall the OS without destroying user data.
- A single-partition (`/` only) layout is simpler but couples OS and user state.
- Fedora defaults may prefer Btrfs in some spins; this page documents the explicit ext4 choice.
