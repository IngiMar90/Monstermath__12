# Skrímsla stærðfræði - v11 ultimate attack

Þessi útgáfa heldur myndasafninu í tveimur möppum, en bætir við ofurárásum, ódýrari skrímslum og hraðari þróun.

## Möppur fyrir myndir

Settu myndirnar í:

```text
assets/myndir1/
assets/myndir2/
```

Ekki nota `assets/monsters/` í þessari útgáfu.

## Myndir 1

Settu þessar myndir í:

```text
assets/myndir1/
```

### Safnanleg skrímsli í myndir1

```text
Logi: logi.png, logi_evo2.png, logi_evo3.png
Mosi: mosi.png, mosi_evo2.png, mosi_evo3.png
Steini: steini.png, steini_evo2.png, steini_evo3.png
Plús-púki: plus_puki.png, plus_puki_evo2.png, plus_puki_evo3.png
Mínus-moli: minus_moli.png, minus_moli_evo2.png, minus_moli_evo3.png
Margföldunar-minotaur: margfoldunar_minotaur.png, margfoldunar_minotaur_evo2.png, margfoldunar_minotaur_evo3.png
Deilingar-dreki: deilingar_dreki.png, deilingar_dreki_evo2.png, deilingar_dreki_evo3.png
Glóðmoli: glodmoli.png, glodmoli_evo2.png, glodmoli_evo3.png
Sveppalingur: sveppalingur.png, sveppalingur_evo2.png, sveppalingur_evo3.png
Tindurkattur: tindurkattur.png, tindurkattur_evo2.png, tindurkattur_evo3.png
Dropi: dropi.png, dropi_evo2.png, dropi_evo3.png
Spegladraugur: spegladraugur.png, spegladraugur_evo2.png, spegladraugur_evo3.png
Þyrnibjörn: thyrnibjorn.png, thyrnibjorn_evo2.png, thyrnibjorn_evo3.png
Skýli: skyli.png, skyli_evo2.png, skyli_evo3.png
Kristallín: kristallin.png, kristallin_evo2.png, kristallin_evo3.png
Næturvængur: naeturvaengur.png, naeturvaengur_evo2.png, naeturvaengur_evo3.png
```

### Óvinaskrímsli í myndir1

```text
Slímklumpur: slimklumpur.png
Skuggaköttur: skuggakottur.png
Ísbolti: isbolti.png
Tannagnýr: tannagnyr.png
Kúluloppa: kululoppa.png
```

## Myndir 2

Settu þessar myndir í:

```text
assets/myndir2/
```

### Safnanleg skrímsli í myndir2

```text
Rótari: rotari.png, rotari_evo2.png, rotari_evo3.png
Perluskel: perluskel.png, perluskel_evo2.png, perluskel_evo3.png
Stormnefur: stormnefur.png, stormnefur_evo2.png, stormnefur_evo3.png
Laufari: laufari.png, laufari_evo2.png, laufari_evo3.png
Mölvi: molvi.png, molvi_evo2.png, molvi_evo3.png
Hrafnskuggi: hrafnskuggi.png, hrafnskuggi_evo2.png, hrafnskuggi_evo3.png
Frosti: frosti.png, frosti_evo2.png, frosti_evo3.png
Kristallbjörn: kristallbjorn.png, kristallbjorn_evo2.png, kristallbjorn_evo3.png
Tölutígur: tolutigur.png, tolutigur_evo2.png, tolutigur_evo3.png
Neistli: neistli.png, neistli_evo2.png, neistli_evo3.png
Hnullungur: hnullungur.png, hnullungur_evo2.png, hnullungur_evo3.png
Myrkri: myrkri.png, myrkri_evo2.png, myrkri_evo3.png
Stjörnutrix: stjornutrix.png, stjornutrix_evo2.png, stjornutrix_evo3.png
Ryðkló: rydklo.png, rydklo_evo2.png, rydklo_evo3.png
Giljaxl: giljaxl.png, giljaxl_evo2.png, giljaxl_evo3.png
```

### Óvinaskrímsli í myndir2

```text
Bubblína: bubblina.png
Klósmári: klosmari.png
Gjóströltur: gjostroltur.png
Mýrarkjaftur: myrarkjaftur.png
Skuggasporður: skuggaspordur.png
```

## Fjöldi mynda

```text
myndir1: 53 myndir
myndir2: 50 myndir
```

## Kennarasvæði

Lykilorð:

```text
11112222
```


## Breytingar í v8

- Öll skrímslaverð hafa verið helminguð.
- Þróun 1 → 2 gerist eftir 30 bardaga.
- Þróun 2 → 3 gerist eftir 30 bardaga í viðbót.
- Eftir 5 rétt svör í röð kemur ofurárás.
- Ofurárás gerir 2x skaða.
- Ofurárás notar stutt animation eftir gerð skrímslis, t.d. eld, vatn, jörð, náttúra, ís, skuggi, stormur, kristall, stjarna, málmur eða stærðfræði.


## Breytingar í v9

- Bætt við erfiðleikaflipa sem heitir Stærðfræðitöflur.
- Hægt er að velja eina eða fleiri margföldunartöflur með checkboxum.
- Ef töflur eru valdar hreinsast venjulega erfiðleikastigið.
- Ef venjulegt erfiðleikastig er valið hreinsast töfluvalið.
- Töfluæfingar nota margföldun og vista gögn með `difficulty_mode: "tables"`.
- Dæmi úr töflum blandast í báðar áttir, t.d. 3 × 7 og 7 × 3.


## Breytingar í v10

### Ný verð
- Byrjunarskrímsli: 75 gull
- Common / áður 175: 100 gull
- Rare / áður 225: 130 gull
- Epic / áður 250: 200 gull
- Legendary / áður 450 eða 550: 300 gull

### Opnun í búð
- Byrjunarskrímsli: alltaf opin
- 100 gull skrímsli: opnast eftir 25 bardaga
- 130 gull skrímsli: opnast eftir 50 bardaga
- 200 gull skrímsli: opnast eftir 75 bardaga
- 300 gull skrímsli: opnast eftir 100 bardaga

### Þróun
- Byrjunarskrímsli: 12 + 12 bardagar
- Flest önnur skrímsli: 25 + 25 bardagar
- 300 gull / legendary skrímsli: 30 + 30 bardagar

### Bónusar eftir verðflokki
- 75 gull: 0% → 3% → 6%
- 100 gull: 0% → 5% → 10%
- 130 gull: 3% → 8% → 13%
- 200 gull: 5% → 12% → 18%
- 300 gull: 8% → 16% → 25%


## Breytingar í v11

- Bætt við batteríi með 3 hleðslustrikum við skrímsli nemandans.
- 5 rétt í röð fyllir 1 strik og gefur 2x hlaðna árás.
- 10 rétt í röð fyllir 2 strik og gefur aftur 2x hlaðna árás.
- 15 rétt í röð fyllir 3 strik og virkjar OFUR ÁRÁS.
- OFUR ÁRÁS drepur óvinaskrímslið samstundis og lýkur bardaganum með sigri.
- Rangt svar tæmir batteríið og röðin byrjar aftur.
