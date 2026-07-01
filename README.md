# Rugix Admin

Rugix Admin is a web UI for managing a Rugix system through `rugix-ctrl`.

## Development

Run Rugix Admin:

```sh
cargo run -- --address 127.0.0.1:8088
```

Run the frontend development server:

```sh
cd frontend
pnpm install --frozen-lockfile
pnpm run dev
```

Build the frontend assets before creating a release binary:

```sh
cd frontend
pnpm run build
cd ..
cargo build --release
```

Build release tarballs for Linux targets:

```sh
./scripts/build-binaries.sh x86_64-unknown-linux-musl
```

Run browser-driven frontend tests:

```sh
cd frontend
pnpm run test:e2e
```

## Installer

`installer/install-rugix-admin.sh` installs the release binary and a systemd
service on apt-based systems with systemd. By default, it downloads release
assets from `rugix/rugix-admin`.

```sh
sudo bash installer/install-rugix-admin.sh
```

Set `RUGIX_ADMIN_VERSION` or pass a version as the first argument to install a
specific release. Set `RUGIX_ADMIN_GITHUB_REPO` to install from another GitHub
repository.
