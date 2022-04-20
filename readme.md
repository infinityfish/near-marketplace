

near deploy --accountId=nearmarket.abong.testnet --wasmFile=build/release/near-marketplace-contract.wasm

near call nearmarket.abong.testnet setProduct '{"id": "0", "productName": "tea"}' --accountId=abong.testnet


near view nearmarket.abong.testnet getProduct '{"id": "0"}'


near call nearmarket.abong.testnet setProduct '{"product": {"id": "0", "name": "BBQ", "description": "Grilled chicken and beef served with vegetables and chips.", "location": "Berlin, Germany", "price": "1000000000000000000000000", "image": "https://i.imgur.com/yPreV19.png"}}' --accountId=abong.testnet


near create-account buyeraccount.abong.testnet --masterAccount abong.testnet --initialBalance 6


near call nearmarket.abong.testnet buyProduct '{"productId": "0"}' --depositYocto=1000000000000000000000000 --accountId=buyeraccount.abong.testnet