[**client v0.0.1**](../../../README.md)

***

[client](../../../README.md) / [lib/util](../README.md) / getComparator

# Function: getComparator()

> **getComparator**\<`Key`\>(`order`, `orderBy`): (`a`, `b`) => `number`

Defined in: [src/lib/util.ts:71](https://github.com/petelc/WMS/blob/0ba5e61a5ede3de744df1a5839724fa19a2a534f/client/src/lib/util.ts#L71)

## Type Parameters

### Key

`Key` *extends* `number` \| *typeof* `iterator` \| `"length"` \| `"toString"` \| `"concat"` \| `"slice"` \| `"indexOf"` \| `"lastIndexOf"` \| `"includes"` \| `"charAt"` \| `"charCodeAt"` \| `"localeCompare"` \| `"match"` \| `"replace"` \| `"search"` \| `"split"` \| `"substring"` \| `"toLowerCase"` \| `"toLocaleLowerCase"` \| `"toUpperCase"` \| `"toLocaleUpperCase"` \| `"trim"` \| `"substr"` \| `"codePointAt"` \| `"endsWith"` \| `"normalize"` \| `"repeat"` \| `"startsWith"` \| `"anchor"` \| `"big"` \| `"blink"` \| `"bold"` \| `"fixed"` \| `"fontcolor"` \| `"fontsize"` \| `"italics"` \| `"link"` \| `"small"` \| `"strike"` \| `"sub"` \| `"sup"` \| `"padStart"` \| `"padEnd"` \| `"trimEnd"` \| `"trimStart"` \| `"trimLeft"` \| `"trimRight"` \| `"matchAll"` \| `"valueOf"`

## Parameters

### order

`Order`

### orderBy

`Key`

## Returns

> (`a`, `b`): `number`

### Parameters

#### a

\{ \[key in number \| typeof iterator \| "length" \| "toString" \| "concat" \| "slice" \| "indexOf" \| "lastIndexOf" \| "includes" \| "charAt" \| "charCodeAt" \| "localeCompare" \| "match" \| "replace" \| "search" \| "split" \| "substring" \| "toLowerCase" \| "toLocaleLowerCase" \| "toUpperCase" \| "toLocaleUpperCase" \| "trim" \| "substr" \| "codePointAt" \| "endsWith" \| "normalize" \| "repeat" \| "startsWith" \| "anchor" \| "big" \| "blink" \| "bold" \| "fixed" \| "fontcolor" \| "fontsize" \| "italics" \| "link" \| "small" \| "strike" \| "sub" \| "sup" \| "padStart" \| "padEnd" \| "trimEnd" \| "trimStart" \| "trimLeft" \| "trimRight" \| "matchAll" \| "valueOf"\]: string \| number \}

#### b

\{ \[key in number \| typeof iterator \| "length" \| "toString" \| "concat" \| "slice" \| "indexOf" \| "lastIndexOf" \| "includes" \| "charAt" \| "charCodeAt" \| "localeCompare" \| "match" \| "replace" \| "search" \| "split" \| "substring" \| "toLowerCase" \| "toLocaleLowerCase" \| "toUpperCase" \| "toLocaleUpperCase" \| "trim" \| "substr" \| "codePointAt" \| "endsWith" \| "normalize" \| "repeat" \| "startsWith" \| "anchor" \| "big" \| "blink" \| "bold" \| "fixed" \| "fontcolor" \| "fontsize" \| "italics" \| "link" \| "small" \| "strike" \| "sub" \| "sup" \| "padStart" \| "padEnd" \| "trimEnd" \| "trimStart" \| "trimLeft" \| "trimRight" \| "matchAll" \| "valueOf"\]: string \| number \}

### Returns

`number`
