<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [bitburner](./bitburner.md) &gt; [TIX](./bitburner.tix.md) &gt; [getForecast](./bitburner.tix.getforecast.md)

## TIX.getForecast() method

Returns the probability that the specified stock’s price will increase (as opposed to decrease) during the next tick.

**Signature:**

```typescript
getForecast(sym: string): number;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  sym | string | Stock symbol. |

**Returns:**

number

Probability that the specified stock’s price will increase (as opposed to decrease) during the next tick.

## Remarks

RAM cost: 2.5 GB The probability is returned as a decimal value, NOT a percentage (e.g. if a stock has a 60% chance of increasing, then this function will return 0.6, NOT 60).

In other words, if this function returned 0.30 for a stock, then this means that the stock’s price has a 30% chance of increasing and a 70% chance of decreasing during the next tick.

In order to use this function, you must first purchase access to the Four Sigma (4S) Market Data TIX API.
