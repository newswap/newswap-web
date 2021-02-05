### What is NewSwap?

NewSwap is an application protocol built on Newton's NewChain, which realizes the exchange between NEW and the NRC6 token issued based on NewChain. Any two NRC6 tokens can also be exchanged on it.

Its characteristics are: system automatic pricing, fast and convenient exchange process, each transaction fee is automatically transferred to the liquidity provider, decentralized, safe and reliable, users can fully control their assets by controlling their own private keys, and the threshold is extremely low. it has global liquidity.

### How does NewSwap work?

NewSwap is an automatic liquidity agreement. There is no need to bid and match transactions, and there are no centralized organizations and facilities to guarantee transactions. Each trading pool is controlled by a smart contract, which supports operations such as the exchange of tokens and the increase or decrease of liquidity. Each fund pool uses the formula x\*y=k to guarantee transactions. x=token 1, y=token 2, k=constant.

## Exchange Related

### What tokens are supported for exchange?

It supports the exchange between NEW and NRC6 certificates, as well as the exchange between NRC6 and NRC6 tokens.

### What determines the price?

The price is determined by the relative number of tokens in each fund pool. The smart contract maintains a constant formula: x\*y=k, under this condition, x=token 1, y=token 2, k=constant. Each transaction will withdraw a certain number of tokens in exchange for the quantity of another token. During this period, the constant k remains unchanged and the balance is updated. Therefore, each transaction will adjust the balance of the token, thereby changing the price.

### Why does my exchange fail?

If the slippage tolerance is set too small during exchange, the exchange will fail. You can increase the slippage tolerance through the advanced settings window when redeeming, and the wallet account should have enough balance to ensure the successful transaction.

### What is the NewSwap exchange fee?

A transaction fee of 0.3% needs to be paid. After liquidity mining is started, 0.25% of the 0.3% transaction fee belongs to the token liquidity provider. The remaining 0.05% is used to support the value of NST. For example, if 1000 tokens A are exchanged for NEW, you need to pay 0.3% of 1000 tokens A namely 3 tokens of A as transaction fees, of which 2.5 tokens belong to the liquidity provider. To exchange 1000 NEW for token 2, you need to pay 3 NEW as a transaction fee.

### What is the initial price for creating a fund pool?

The initial price is determined by the first person to create a capital pool and increase liquidity. If the price is unreasonable, users will transfer more to fill in the price difference.

### How to calculate the token ratio for adding/deleting fund pools?

When adding/deleting the liquidity of an asset pool, it needs to be added or deleted according to the ratio of the number of tokens and NEW in the current fund pool. For example, the number of tokens in the fund pool: NEW number=1:100, the ratio of the number of tokens you add and delete to NEW must be 1:100.

### How is the number of LP tokens calculated?

The number of liquidity tokens is determined by the proportion of any token added by the user to the total number of tokens in the mining pool, and the NEW incentive for liquidity mining is obtained according to this ratio.

### How to issue a token and to be listed on NewSwap Default Token List?

First, use the NewChain token issuing tool NewGenerator to issue the token, open the link: [newswap.org](https://newswap.org/), click "NewGenerator" in the “More”, and fill in the relevant information in the blanks.

After the issuance of the token, the token with the actual business model and purpose can apply for listing on NewSwap for trading. Visit [Apply Listing for Default Token List](https://newswap.org/apply-listing/) once you are ready to apply.

After passing the review, the applicant will receive the list information via email and be able to see the token in the Default Token List. Then create a trading pair and add a fund pool on NewSwap for other to be able to trade.

## Mining Related

### What are the liquid mining pools that have launched on NewSwap?

The liquidity mining of the NUSDT-NEW trading pair has been launched. The incentive NEW for this mining pool comes from the incentives of community mining during 2021/2/1 to 2022/1/31. For details, please see [NEP-40](https:/ /neps.newtonproject.org/neps/nep-40/).

### Demonstration Video

[NUSDT-NEW Mining Demonstration](https://newton-video.oss-cn-beijing.aliyuncs.com/newpayintro/newswap-lp-mining-en.mp4) .

### After adding the liquidity mining pool, why does the number of "NEW available for collection" become 0?

Every time a liquidity token is added or removed, protocol will automatically transfer the NEW to be received to the user address, so the number of "NEW available for collection" is displayed as 0.

### Pledging liquidity tokens of trading pair will bring liquidity mining income, will it bring transaction fees for the trading pair?

Yes. NewSwap trading pair liquidity mining means adding the liquidity of a certain trading pair in NewSwap and pledge the obtained liquidity tokens into the designated mining pool to obtain additional NEW. The NEW comes from the community mining pool.

Pledge of the liquidity tokens of a certain trading pair means the liquidity of the trading pair has been added, and the transaction fees in the fund pool of the trading pair can also be obtained.

After adding a certain trading pair liquidity token,the owner will receive the addtional NEW after adding or removing the liquidity tokens of the trading pair.

After removing the liquidity tokens of a trading pair from the mining pool, the liquidity token of the trading pair will be returned. 

Removing the liquidity of the trading pair from the NewSwap fund pool means destroying the liquidity token and returning the pledge tokens and deserved transaction fees at the same time.


## Other General Questions

### Do I need to register an account?

No need to register for an account. Personal computer users only need to create a decentralized wallet through the Chrome and Firefox browser extension Newton, and successfully connect it with NewSwap to use NewSwap. Mobile phone users can use NewSwap with NewPay 1.6 version.

### Which cross-chains has NewSwap launched?

Cross-chain of NewChain and Ethereum has been launched. NUSDT, NETH and other tokens have been supported. For more assets, please visit [Cross-chain Assets Section on NewBridge's website](https://newbridge.network/docs/assets/).

### What is the contract address for NUSDT?

**NUSDT** contract is deployed at: 0x4BFB4297f9C28a373aE6ae58a8f8EfeFF334cae8

Official NUSDT is only availble on NewChain MainNet.

### What are the contract addresses for NewSwap?

**Factory** contract is deployed at: 0x723913136a42684B5e3657e3cD2f67ee3e83A82D

**WNEW** contract is deployed at: 0xf4905b9bc02Ce21C98Eac1803693A9357D5253bf

**Router** contract is deployed at: 0x9e5A14dd31D1e7120eC45E6E4EfA287c94bCcf2f

Addresses are the same for NewChain TestNet & MainNet.
