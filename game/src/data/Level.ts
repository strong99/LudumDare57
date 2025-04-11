import { BoundingBoxEdge, ObjectSpawner, StaticObject } from "../models/Types";

const Level: {
    spawners: ObjectSpawner[];
    objects: StaticObject[];
    boundingBox: BoundingBoxEdge[];
} = {
    "spawners": [
        {
            "id": "3263",
            "creatureId": "clownfish",
            "position": {
                "x": 300,
                "y": 300
            },
            "startAmount": 3,
            "maxAmount": 3,
            "respawnInterval": 4000
        },
        {
            "id": "3264",
            "creatureId": "tuna",
            "position": {
                "x": 1600,
                "y": 300
            },
            "startAmount": 3,
            "maxAmount": 3,
            "respawnInterval": 6000
        },
        {
            "id": "spawner:1743931358479",
            "creatureId": "clownfish",
            "maxAmount": 4,
            "respawnInterval": 2500,
            "position": {
                "x": 1606.7798688393627,
                "y": 773.2227675873374
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743931359122",
            "creatureId": "clownfish",
            "maxAmount": 4,
            "respawnInterval": 3500,
            "position": {
                "x": 1169.7798688393627,
                "y": 869.2227675873374
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743950120762",
            "creatureId": "clownfish",
            "maxAmount": 8,
            "respawnInterval": 3500,
            "position": {
                "x": 8773.849387220798,
                "y": 1805.8590347421102
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743952043340",
            "creatureId": "tuna",
            "maxAmount": 5,
            "respawnInterval": 5000,
            "position": {
                "x": 22098.624892934487,
                "y": 423.34784554411203
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743952135205",
            "creatureId": "clownfish",
            "maxAmount": 8,
            "respawnInterval": 3500,
            "position": {
                "x": 16613.424249524596,
                "y": 1741.9617887906445
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743961031548",
            "creatureId": "kwal-oranje",
            "maxAmount": 7,
            "respawnInterval": 9000,
            "position": {
                "x": 10698.02485194742,
                "y": 3868.019397207604
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743961087496",
            "creatureId": "tuna",
            "maxAmount": 5,
            "respawnInterval": 9000,
            "position": {
                "x": 11129.726432667278,
                "y": 2533.2334292194987
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743961099980",
            "creatureId": "tuna",
            "maxAmount": 5,
            "respawnInterval": 9000,
            "position": {
                "x": 12383.673411948419,
                "y": 3534.281057383765
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743961107171",
            "creatureId": "kwal-oranje",
            "maxAmount": 7,
            "respawnInterval": 9000,
            "position": {
                "x": 11714.881925583775,
                "y": 4996.669040636895
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743961110594",
            "creatureId": "kwal-oranje",
            "maxAmount": 7,
            "respawnInterval": 9000,
            "position": {
                "x": 11728.79820949727,
                "y": 5376.287129564086
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743961136399",
            "creatureId": "clownfish",
            "maxAmount": 8,
            "respawnInterval": 5500,
            "position": {
                "x": 12629.825043065704,
                "y": 2080.98935401384
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743961152022",
            "creatureId": "kwal-oranje",
            "maxAmount": 7,
            "respawnInterval": 9000,
            "position": {
                "x": 13934.381802020418,
                "y": 4803.893014094361
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743961225569",
            "creatureId": "clownfish",
            "maxAmount": 8,
            "respawnInterval": 3500,
            "position": {
                "x": 15194.156218904449,
                "y": 4051.881937714355
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743961232821",
            "creatureId": "kwal-oranje",
            "maxAmount": 7,
            "respawnInterval": 5000,
            "position": {
                "x": 14936.596479254978,
                "y": 5466.260551155312
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743961254911",
            "creatureId": "kwal-oranje",
            "maxAmount": 7,
            "respawnInterval": 9000,
            "position": {
                "x": 18225.97512968001,
                "y": 4170.441254677329
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743962200037",
            "creatureId": "kwal-paars",
            "maxAmount": 5,
            "respawnInterval": 9000,
            "position": {
                "x": 9988.98381679979,
                "y": 2990.289599307841
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1743962287563",
            "creatureId": "tuna",
            "maxAmount": 5,
            "respawnInterval": 9000,
            "position": {
                "x": 14569.540716174155,
                "y": 1734.5474581431745
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743962293455",
            "creatureId": "clownfish",
            "maxAmount": 8,
            "respawnInterval": 4500,
            "position": {
                "x": 14680.767265866976,
                "y": 3022.5598337479605
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743962300399",
            "creatureId": "kwal-groen",
            "maxAmount": 5,
            "respawnInterval": 9000,
            "position": {
                "x": 13927.578048361333,
                "y": 3817.868077040044
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1743962399681",
            "creatureId": "kwal-groen",
            "maxAmount": 5,
            "respawnInterval": 9000,
            "position": {
                "x": 14945.058558911056,
                "y": 6671.983604999704
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1743962405370",
            "creatureId": "kwal-paars",
            "maxAmount": 5,
            "respawnInterval": 9000,
            "position": {
                "x": 14115.452264572581,
                "y": 7380.282397012918
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1743962468475",
            "creatureId": "kwal-paars",
            "maxAmount": 5,
            "respawnInterval": 9000,
            "position": {
                "x": 16491.05724848066,
                "y": 3380.4900516679722
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1743962477917",
            "creatureId": "clownfish",
            "maxAmount": 8,
            "respawnInterval": 4500,
            "position": {
                "x": 17877.46678944215,
                "y": 3171.446015155534
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743962602771",
            "creatureId": "kwal-paars",
            "maxAmount": 5,
            "respawnInterval": 9000,
            "position": {
                "x": 18732.529110332223,
                "y": 6520.478647065431
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1743962615743",
            "creatureId": "kwal-groen",
            "maxAmount": 5,
            "respawnInterval": 9000,
            "position": {
                "x": 17559.010398226514,
                "y": 5983.139374359191
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1743962701631",
            "creatureId": "clownfish",
            "maxAmount": 8,
            "respawnInterval": 4500,
            "position": {
                "x": 20756.98479742698,
                "y": 436.5291038744991
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743962708511",
            "creatureId": "clownfish",
            "maxAmount": 8,
            "respawnInterval": 4500,
            "position": {
                "x": 18887.860635851648,
                "y": 709.0280382318552
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743966931471",
            "creatureId": "paarse-vis",
            "maxAmount": 4,
            "respawnInterval": 7000,
            "position": {
                "x": 2857.2411750704323,
                "y": 818.4864347525393
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1743966936954",
            "creatureId": "paarse-vis",
            "maxAmount": 4,
            "respawnInterval": 7000,
            "position": {
                "x": 3991.864774596985,
                "y": 1751.8172591524806
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1743966942984",
            "creatureId": "paarse-vis",
            "maxAmount": 4,
            "respawnInterval": 7000,
            "position": {
                "x": 5550.89200872147,
                "y": 1601.8867130177596
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1743966947133",
            "creatureId": "clownfish",
            "maxAmount": 8,
            "respawnInterval": 4500,
            "position": {
                "x": 6160.59508577411,
                "y": 894.468792117323
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743966953331",
            "creatureId": "tuna",
            "maxAmount": 5,
            "respawnInterval": 5000,
            "position": {
                "x": 7350.18415366423,
                "y": 2076.719713271552
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743966963884",
            "creatureId": "tuna",
            "maxAmount": 5,
            "respawnInterval": 5000,
            "position": {
                "x": 9480.904898369003,
                "y": 815.8873372347433
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743966968878",
            "creatureId": "paarse-vis",
            "maxAmount": 4,
            "respawnInterval": 7000,
            "position": {
                "x": 10608.577465636925,
                "y": 391.2987393698413
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1743966973195",
            "creatureId": "paarse-vis",
            "maxAmount": 4,
            "respawnInterval": 7000,
            "position": {
                "x": 11565.176594590963,
                "y": 1414.4916669747909
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1743966980974",
            "creatureId": "paarse-vis",
            "maxAmount": 4,
            "respawnInterval": 7000,
            "position": {
                "x": 13950.269351337281,
                "y": 1098.5972474287528
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1743966986654",
            "creatureId": "clownfish",
            "maxAmount": 8,
            "respawnInterval": 4500,
            "position": {
                "x": 15269.819084274573,
                "y": 435.82445728611333
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743966996083",
            "creatureId": "tuna",
            "maxAmount": 5,
            "respawnInterval": 6000,
            "position": {
                "x": 16903.02931809223,
                "y": 533.3608289126
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1743967005780",
            "creatureId": "paarse-vis",
            "maxAmount": 4,
            "respawnInterval": 7000,
            "position": {
                "x": 17948.823013734655,
                "y": 1442.3112170529434
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1743970778211",
            "creatureId": "kwal-paars",
            "maxAmount": 5,
            "respawnInterval": 9000,
            "position": {
                "x": 16543.58157342604,
                "y": 6881.625502247545
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1743971872536",
            "creatureId": "tuna",
            "maxAmount": 5,
            "respawnInterval": 5000,
            "position": {
                "x": 4694.369304591855,
                "y": 1296.0114937537135
            },
            "startAmount": 4
        },
        {
            "id": "1744060217692",
            "creatureId": "crateRosemary",
            "maxAmount": 0,
            "startAmount": 1,
            "position": {
                "x": 14987.87947699383,
                "y": 7858.368270063361
            },
            "respawnInterval": 0
        },
        {
            "id": "1744060220406",
            "creatureId": "crateRosemary",
            "maxAmount": 0,
            "startAmount": 1,
            "position": {
                "x": 15339.879476960006,
                "y": 7713.368270074883
            },
            "respawnInterval": 0
        },
        {
            "id": "1744305389073",
            "creatureId": "crate",
            "maxAmount": 0,
            "startAmount": 1,
            "position": {
                "x": 1453.5374711936518,
                "y": 1434.3571189512268
            },
            "respawnInterval": 0
        },
        {
            "id": "1744305440584",
            "creatureId": "crate",
            "maxAmount": 0,
            "startAmount": 1,
            "position": {
                "x": 7974.4404572514495,
                "y": 3468.0395175649687
            },
            "respawnInterval": 0
        },
        {
            "id": "spawner:1744396011987",
            "creatureId": "paarse-vis",
            "maxAmount": 4,
            "respawnInterval": 1000,
            "position": {
                "x": 7721.110910646256,
                "y": 1364.5634295448956
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1744396207272",
            "creatureId": "paarse-vis",
            "maxAmount": 4,
            "respawnInterval": 1000,
            "position": {
                "x": 15214.212181953768,
                "y": 1555.2887543004038
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1744396218784",
            "creatureId": "clownfish",
            "maxAmount": 8,
            "respawnInterval": 500,
            "position": {
                "x": 19024.920476292107,
                "y": 2086.9578538878113
            },
            "startAmount": 4
        },
        {
            "id": "spawner:1744396403271",
            "creatureId": "paarse-vis",
            "maxAmount": 4,
            "respawnInterval": 1000,
            "position": {
                "x": 20939.89029113216,
                "y": 4033.92846767078
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1744396408501",
            "creatureId": "kwal-groen",
            "maxAmount": 5,
            "respawnInterval": 1000,
            "position": {
                "x": 19824.49458903163,
                "y": 3876.0395676877943
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1744396419015",
            "creatureId": "kwal-groen",
            "maxAmount": 5,
            "respawnInterval": 1000,
            "position": {
                "x": 18620.155783552385,
                "y": 5825.683806899921
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1744396446273",
            "creatureId": "paarse-vis",
            "maxAmount": 4,
            "respawnInterval": 1000,
            "position": {
                "x": 20736.676720533953,
                "y": 6835.715036504335
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1744396639462",
            "creatureId": "paarse-vis",
            "maxAmount": 4,
            "respawnInterval": 1000,
            "position": {
                "x": 16847.046862898012,
                "y": 5662.670416009936
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1744396710833",
            "creatureId": "kwal-paars",
            "maxAmount": 5,
            "respawnInterval": 1000,
            "position": {
                "x": 15567.561780218904,
                "y": 5416.372414073403
            },
            "startAmount": 2
        },
        {
            "id": "spawner:1744396769355",
            "creatureId": "kwal-paars",
            "maxAmount": 5,
            "respawnInterval": 1000,
            "position": {
                "x": 13248.820289468747,
                "y": 4901.123470016424
            },
            "startAmount": 2
        }
    ],
    "objects": [
        {
            "id": "map-00-00",
            "image": "map-00-00.png",
            "layer": "front",
            "position": {
                "x": 0,
                "y": 0
            },
            "locked": true
        },
        {
            "id": "map-01-00",
            "image": "map-01-00.png",
            "layer": "front",
            "position": {
                "x": 4096,
                "y": 0
            },
            "locked": true
        },
        {
            "id": "map-02-00",
            "image": "map-02-00.png",
            "layer": "front",
            "position": {
                "x": 8192,
                "y": 0
            },
            "locked": true
        },
        {
            "id": "map-03-00",
            "image": "map-03-00.png",
            "layer": "front",
            "position": {
                "x": 12288,
                "y": 0
            },
            "locked": true
        },
        {
            "id": "map-04-00",
            "image": "map-04-00.png",
            "layer": "front",
            "position": {
                "x": 16384,
                "y": 0
            },
            "locked": true
        },
        {
            "id": "map-05-00",
            "image": "map-05-00.png",
            "layer": "front",
            "position": {
                "x": 20480,
                "y": 0
            },
            "locked": true
        },
        {
            "id": "map-02-01",
            "image": "map-02-01.png",
            "layer": "front",
            "position": {
                "x": 8192,
                "y": 4096
            },
            "locked": true
        },
        {
            "id": "map-03-01",
            "image": "map-03-01.png",
            "layer": "front",
            "position": {
                "x": 12288,
                "y": 4096
            },
            "locked": true
        },
        {
            "id": "map-04-01",
            "image": "map-04-01.png",
            "layer": "middle",
            "position": {
                "x": 16384,
                "y": 4096
            },
            "locked": true
        },
        {
            "id": "map-05-01",
            "image": "map-05-01.png",
            "layer": "front",
            "position": {
                "x": 20480,
                "y": 4096
            },
            "locked": true
        },
        {
            "id": "1743949769021",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 757.4893010918183,
                "y": 1244.800373539253
            }
        },
        {
            "id": "1743949781324",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 1028.6892522636933,
                "y": 1158.4003491251906
            }
        },
        {
            "id": "1743949784079",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 1109.4893010918183,
                "y": 1187.2003826945265
            }
        },
        {
            "id": "1743949948008",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 415.08927667775583,
                "y": 815.2003674357376
            }
        },
        {
            "id": "1743949961581",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 2360.789155781551,
                "y": 1358.8677700095302
            }
        },
        {
            "id": "1743949969420",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 1822.9709578013956,
                "y": 1340.4815931542537
            }
        },
        {
            "id": "1743949994379",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 2735.2976477695483,
                "y": 1444.7216756261737
            }
        },
        {
            "id": "1743950010313",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 3395.078296903956,
                "y": 1782.1835131423966
            }
        },
        {
            "id": "1743950015411",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 3474.2782558775257,
                "y": 1811.783589791072
            }
        },
        {
            "id": "1743950025275",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 4330.528474713041,
                "y": 1786.8892177162409
            }
        },
        {
            "id": "1743950034451",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 4393.746082070062,
                "y": 1974.0786817155292
            }
        },
        {
            "id": "1743950054289",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 5273.344141597722,
                "y": 1856.3742161643004
            }
        },
        {
            "id": "1743950075802",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 6425.092643002157,
                "y": 2207.1999282836896
            }
        },
        {
            "id": "1743951769171",
            "image": "koraal1.png",
            "layer": "front",
            "position": {
                "x": 5103.29201298028,
                "y": 2001.4205582456893
            }
        },
        {
            "id": "1743951791303",
            "image": "koraal1.png",
            "layer": "middle",
            "position": {
                "x": 5779.177167742753,
                "y": 2156.07888167667
            }
        },
        {
            "id": "1743951801091",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 6078.377180313467,
                "y": 2160.078881957992
            }
        },
        {
            "id": "1743951833927",
            "image": "plant-klein.png",
            "layer": "front",
            "position": {
                "x": 13069.731655969754,
                "y": 2203.9999771118146
            }
        },
        {
            "id": "1743951841013",
            "image": "plant-klein.png",
            "layer": "front",
            "position": {
                "x": 12761.731656164704,
                "y": 2287.200019836424
            }
        },
        {
            "id": "1743951847262",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 12912.131680578766,
                "y": 2283.199989318846
            }
        },
        {
            "id": "1743951916205",
            "image": "plant-klein.png",
            "layer": "back",
            "position": {
                "x": 19814.20453714808,
                "y": 1296.467710683246
            }
        },
        {
            "id": "1743951924718",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 19588.845351000436,
                "y": 1573.9333901142877
            }
        },
        {
            "id": "1743951934203",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 19534.47059781215,
                "y": 1697.578723949742
            }
        },
        {
            "id": "1743951953007",
            "image": "plant-bol-1.png",
            "layer": "back",
            "position": {
                "x": 19523.633039197295,
                "y": 2140.814295622411
            }
        },
        {
            "id": "1743951959331",
            "image": "plant-bol-1.png",
            "layer": "back",
            "position": {
                "x": 19176.43414713597,
                "y": 2312.0153855193325
            }
        },
        {
            "id": "1743951965796",
            "image": "koraal1.png",
            "layer": "middle",
            "position": {
                "x": 19070.034183757063,
                "y": 2319.215367208786
            }
        },
        {
            "id": "1743951972289",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 19346.034183757063,
                "y": 2172.8153733123017
            }
        },
        {
            "id": "1743951984098",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 20717.308572183443,
                "y": 925.3487730352408
            }
        },
        {
            "id": "1743951990288",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 20564.798945242852,
                "y": 1047.535914426111
            }
        },
        {
            "id": "1743951999538",
            "image": "koraal1.png",
            "layer": "front",
            "position": {
                "x": 20667.198908623395,
                "y": 1079.535944942455
            }
        },
        {
            "id": "1743952012217",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 22539.492255237685,
                "y": 485.60939007715285
            }
        },
        {
            "id": "1743952019486",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 22513.41926576264,
                "y": 700.1478409662757
            }
        },
        {
            "id": "1743952024880",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 22297.41926576282,
                "y": 612.1478104488972
            }
        },
        {
            "id": "1743952034974",
            "image": "plant-klein.png",
            "layer": "back",
            "position": {
                "x": 22094.62490081107,
                "y": 796.1478714840534
            }
        },
        {
            "id": "1743952063055",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 23769.57651103012,
                "y": 363.6240840830691
            }
        },
        {
            "id": "1743952063846",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 23761.576513923756,
                "y": 356.39864346181673
            }
        },
        {
            "id": "1743952065783",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 23699.176550814504,
                "y": 367.2765873700788
            }
        },
        {
            "id": "1743952066553",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 23597.576514194032,
                "y": 367.61086772634064
            }
        },
        {
            "id": "1743952069346",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 23579.176550815147,
                "y": 398.35539595377134
            }
        },
        {
            "id": "1743952077345",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 23879.97647757296,
                "y": 38.59892992753896
            }
        },
        {
            "id": "1743952087040",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 24115.176550815147,
                "y": 203.71832462855633
            }
        },
        {
            "id": "1743952088923",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 24008.776526401085,
                "y": 88.16825697467988
            }
        },
        {
            "id": "1743952095780",
            "image": "plant-bol-1.png",
            "layer": "middle",
            "position": {
                "x": 24110.376624057335,
                "y": 108.58808959303116
            }
        },
        {
            "id": "1743952112375",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 21609.297159508147,
                "y": 917.1064648126857
            }
        },
        {
            "id": "1743952152644",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 13685.84300455332,
                "y": 2074.89772605777
            }
        },
        {
            "id": "1743952155668",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 13719.144030748135,
                "y": 2242.9019555891946
            }
        },
        {
            "id": "1743952170415",
            "image": "plant-klein.png",
            "layer": "back",
            "position": {
                "x": 13641.541906752138,
                "y": 1749.8333537809929
            }
        },
        {
            "id": "1743952174783",
            "image": "plant-klein.png",
            "layer": "back",
            "position": {
                "x": 13577.801990165146,
                "y": 1803.3899699130784
            }
        },
        {
            "id": "1743952185333",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 13347.379746965244,
                "y": 2032.234278790745
            }
        },
        {
            "id": "1743957698726",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 7516.133769563334,
                "y": 2853.991361869165
            }
        },
        {
            "id": "1743957703262",
            "image": "plant-bol-1.png",
            "layer": "middle",
            "position": {
                "x": 7620.93789362234,
                "y": 3113.192181646153
            }
        },
        {
            "id": "1743957712631",
            "image": "koraal1.png",
            "layer": "back",
            "position": {
                "x": 8096.937838958277,
                "y": 3387.804630984828
            }
        },
        {
            "id": "1743957726110",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 8224.937716887966,
                "y": 3187.955007881039
            }
        },
        {
            "id": "1743957736684",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 9065.833279761626,
                "y": 3036.168938842717
            }
        },
        {
            "id": "1743957738683",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 9202.908338300882,
                "y": 3119.8625293018576
            }
        },
        {
            "id": "1743957740107",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 9128.78405243385,
                "y": 3087.1578577265395
            }
        },
        {
            "id": "1743957744420",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 8723.220786720061,
                "y": 3102.3709946687795
            }
        },
        {
            "id": "1743957756043",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 9523.071363968009,
                "y": 3266.7150151223914
            }
        },
        {
            "id": "1743957758852",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 9635.741703241232,
                "y": 3427.4196939836315
            }
        },
        {
            "id": "1743957766255",
            "image": "koraal1.png",
            "layer": "middle",
            "position": {
                "x": 9915.861003362086,
                "y": 3674.5014985545504
            }
        },
        {
            "id": "1743957770315",
            "image": "plant-bol-1.png",
            "layer": "middle",
            "position": {
                "x": 9955.858633957187,
                "y": 3718.1459886615503
            }
        },
        {
            "id": "1743957780117",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 10382.288791401468,
                "y": 4097.458296004768
            }
        },
        {
            "id": "1743957785876",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 10772.9172592551,
                "y": 4069.178474353769
            }
        },
        {
            "id": "1743957790768",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 10948.920446305821,
                "y": 3972.0825330217854
            }
        },
        {
            "id": "1743957797774",
            "image": "plant-klein.png",
            "layer": "front",
            "position": {
                "x": 10308.920451025766,
                "y": 4169.744110805627
            }
        },
        {
            "id": "1743957804557",
            "image": "plant-klein.png",
            "layer": "front",
            "position": {
                "x": 10868.920512061291,
                "y": 4162.5441344548835
            }
        },
        {
            "id": "1743957817569",
            "image": "koraal1.png",
            "layer": "middle",
            "position": {
                "x": 10745.72049985426,
                "y": 4242.544119197049
            }
        },
        {
            "id": "1743957836131",
            "image": "shipwreck-rechts.png",
            "layer": "middle",
            "position": {
                "x": 9524.281063413895,
                "y": 3750.746409644635
            }
        },
        {
            "id": "1743957898651",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 10458.95782802765,
                "y": 4084.576036233462
            }
        },
        {
            "id": "1743957952450",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 10806.063731414679,
                "y": 2702.202521219808
            }
        },
        {
            "id": "1743957955427",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 10729.43938628048,
                "y": 2831.7137654236167
            }
        },
        {
            "id": "1743957964636",
            "image": "koraal1.png",
            "layer": "front",
            "position": {
                "x": 11804.618189580764,
                "y": 2882.9344254973316
            }
        },
        {
            "id": "1743957970670",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 11713.755397176235,
                "y": 2858.4156493117703
            }
        },
        {
            "id": "1743957975178",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 11628.159123099873,
                "y": 2868.816576602351
            }
        },
        {
            "id": "1743957979780",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 11354.559094302518,
                "y": 2748.8165784600674
            }
        },
        {
            "id": "1743957996075",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 11266.559083653981,
                "y": 2645.6165686421486
            }
        },
        {
            "id": "1743957997284",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 11516.285432530934,
                "y": 2809.2368841939065
            }
        },
        {
            "id": "1743958011409",
            "image": "shipwreck-links.png",
            "layer": "back",
            "position": {
                "x": 12582.708010997432,
                "y": 3158.570489220516
            }
        },
        {
            "id": "1743958030660",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 12881.040623101875,
                "y": 3504.951002607602
            }
        },
        {
            "id": "1743958035234",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 12609.040562064984,
                "y": 3563.351088057021
            }
        },
        {
            "id": "1743958039801",
            "image": "plant-bol-1.png",
            "layer": "middle",
            "position": {
                "x": 12813.840488822796,
                "y": 3668.151106367568
            }
        },
        {
            "id": "1743958043493",
            "image": "plant-bol-1.png",
            "layer": "middle",
            "position": {
                "x": 12717.040562064984,
                "y": 3681.7510819535055
            }
        },
        {
            "id": "1743958080874",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 12091.233353051339,
                "y": 4591.188114100551
            }
        },
        {
            "id": "1743958087949",
            "image": "koraal1.png",
            "layer": "front",
            "position": {
                "x": 12077.519386982587,
                "y": 4726.53812360071
            }
        },
        {
            "id": "1743958126117",
            "image": "shipwreck-rechts.png",
            "layer": "back",
            "position": {
                "x": 10162.99810287555,
                "y": 5255.746509460609
            }
        },
        {
            "id": "1743958138308",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 11072.598047941849,
                "y": 5570.946491150062
            }
        },
        {
            "id": "1743958145725",
            "image": "plant-bol-1.png",
            "layer": "middle",
            "position": {
                "x": 11153.397954851314,
                "y": 5734.946475891273
            }
        },
        {
            "id": "1743958156801",
            "image": "koraal1.png",
            "layer": "middle",
            "position": {
                "x": 11773.212965330273,
                "y": 5775.109726943093
            }
        },
        {
            "id": "1743958160358",
            "image": "koraal1.png",
            "layer": "middle",
            "position": {
                "x": 11613.757237649752,
                "y": 5794.640395200419
            }
        },
        {
            "id": "1743958229876",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 15107.425598475524,
                "y": 4696.955251291032
            }
        },
        {
            "id": "1743958234900",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 15071.4261446734,
                "y": 4815.2510029329205
            }
        },
        {
            "id": "1743958254870",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 15238.874001167405,
                "y": 7636.768177877927
            }
        },
        {
            "id": "1743958257425",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 15172.723248919903,
                "y": 7698.399539058232
            }
        },
        {
            "id": "1743958259958",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 15093.465839481334,
                "y": 7728.000001615523
            }
        },
        {
            "id": "1743958264735",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 15161.464365575206,
                "y": 7573.600058077492
            }
        },
        {
            "id": "1743958272369",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 14117.373800098672,
                "y": 7506.40000009536
            }
        },
        {
            "id": "1743958276048",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 14013.686640777156,
                "y": 7478.40000009536
            }
        },
        {
            "id": "1743958281980",
            "image": "koraal1.png",
            "layer": "middle",
            "position": {
                "x": 14176.86062707431,
                "y": 7664.7999939918445
            }
        },
        {
            "id": "1743958302272",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 15885.608884706908,
                "y": 3841.3361333760904
            }
        },
        {
            "id": "1743958303823",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 15817.741146622784,
                "y": 3658.9455484096925
            }
        },
        {
            "id": "1743958307518",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 15727.448387362703,
                "y": 3799.645276220497
            }
        },
        {
            "id": "1743958317760",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 16074.183776240461,
                "y": 3217.0013966318656
            }
        },
        {
            "id": "1743958325540",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 15966.314564500246,
                "y": 3278.5214562956585
            }
        },
        {
            "id": "1743958331607",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 16219.918121325041,
                "y": 3221.002460892375
            }
        },
        {
            "id": "1743958341397",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 16133.516888595432,
                "y": 3124.2145487721928
            }
        },
        {
            "id": "1743958346346",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 16070.316937423442,
                "y": 3162.614573224354
            }
        },
        {
            "id": "1743958358814",
            "image": "shipwreck-links.png",
            "layer": "middle",
            "position": {
                "x": 16473.962482446546,
                "y": 3144.5458685044186
            }
        },
        {
            "id": "1743958370696",
            "image": "plant-lange-slierten.png",
            "layer": "front",
            "position": {
                "x": 16425.0371286861,
                "y": 3409.0137300028664
            }
        },
        {
            "id": "1743958378431",
            "image": "koraal1.png",
            "layer": "front",
            "position": {
                "x": 16605.78348554034,
                "y": 3624.350712669162
            }
        },
        {
            "id": "1743958387016",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 16648.983326895723,
                "y": 3634.750238382631
            }
        },
        {
            "id": "1743958393212",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 16378.583302472063,
                "y": 3573.150232308958
            }
        },
        {
            "id": "1743958411650",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 16942.446561516335,
                "y": 2687.6800190826475
            }
        },
        {
            "id": "1743958415538",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 17006.609948201276,
                "y": 2494.507525317624
            }
        },
        {
            "id": "1743958421623",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 16832.788439638298,
                "y": 2908.2427540685417
            }
        },
        {
            "id": "1743958427919",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 17068.120267344228,
                "y": 2450.637366789977
            }
        },
        {
            "id": "1743958438211",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 17150.71613086887,
                "y": 2767.958389774581
            }
        },
        {
            "id": "1743958442965",
            "image": "plant-klein.png",
            "layer": "back",
            "position": {
                "x": 17282.529090263648,
                "y": 2788.8417415895583
            }
        },
        {
            "id": "1743958446806",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 17323.25573191569,
                "y": 2732.8510543366165
            }
        },
        {
            "id": "1743958453313",
            "image": "koraal1.png",
            "layer": "back",
            "position": {
                "x": 17229.74408548543,
                "y": 2920.090939356765
            }
        },
        {
            "id": "1743958469279",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 19535.911404142887,
                "y": 4135.433434764254
            }
        },
        {
            "id": "1743958470488",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 19287.220490643063,
                "y": 4174.1249228843535
            }
        },
        {
            "id": "1743958471464",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 19060.848029921413,
                "y": 4219.6358139736085
            }
        },
        {
            "id": "1743958472673",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 18980.537767597238,
                "y": 4086.0091141396565
            }
        },
        {
            "id": "1743958476110",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 19169.673098069914,
                "y": 4071.602566221198
            }
        },
        {
            "id": "1743958487495",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 19396.87706735906,
                "y": 4034.802383626906
            }
        },
        {
            "id": "1743958493112",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 19449.67693308319,
                "y": 4228.402466024341
            }
        },
        {
            "id": "1743958496140",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 19155.27715280975,
                "y": 4278.002441610279
            }
        },
        {
            "id": "1743958528536",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 18285.96392627159,
                "y": 2842.314930939996
            }
        },
        {
            "id": "1743958531872",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 18403.784856165385,
                "y": 2631.406848433493
            }
        },
        {
            "id": "1743958538360",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 18482.996183661096,
                "y": 2494.6586883568175
            }
        },
        {
            "id": "1743958544706",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 18779.35941573114,
                "y": 2308.618034780074
            }
        },
        {
            "id": "1743961156759",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 13851.164795564167,
                "y": 5037.53321219224
            }
        },
        {
            "id": "1743961163475",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 13772.764832184343,
                "y": 5137.533241317395
            }
        },
        {
            "id": "1743961165067",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 13663.164856598405,
                "y": 5031.133277938488
            }
        },
        {
            "id": "1743961183147",
            "image": "plant-bol-1.png",
            "layer": "back",
            "position": {
                "x": 14564.83608804534,
                "y": 3625.5059458348524
            }
        },
        {
            "id": "1743961185842",
            "image": "plant-bol-1.png",
            "layer": "back",
            "position": {
                "x": 14509.3053699607,
                "y": 3556.5122772944915
            }
        },
        {
            "id": "1743961192633",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 14461.21110857687,
                "y": 3339.71222550602
            }
        },
        {
            "id": "1743961269331",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 17603.483009667914,
                "y": 5155.138702943658
            }
        },
        {
            "id": "1743961271171",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 17518.683021864286,
                "y": 5239.13868771035
            }
        },
        {
            "id": "1743961274863",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 17405.883034071318,
                "y": 5285.538681606916
            }
        },
        {
            "id": "1743961280586",
            "image": "plant-klein.png",
            "layer": "back",
            "position": {
                "x": 17345.407263756693,
                "y": 5371.307410211881
            }
        },
        {
            "id": "1743961283155",
            "image": "plant-klein.png",
            "layer": "back",
            "position": {
                "x": 17271.17916681222,
                "y": 5377.796756127133
            }
        },
        {
            "id": "1743962101398",
            "image": "plant-lange-slierten.png",
            "layer": "front",
            "position": {
                "x": 1230.2634362363906,
                "y": 1220.702899715946
            }
        },
        {
            "id": "1743962105722",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 1259.0634240293593,
                "y": 1399.9029271817662
            }
        },
        {
            "id": "1743962111129",
            "image": "plant-klein.png",
            "layer": "front",
            "position": {
                "x": 1539.8633507871718,
                "y": 1372.702914974735
            }
        },
        {
            "id": "1743962159088",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 7129.700000326347,
                "y": 2417.7040965093515
            }
        },
        {
            "id": "1743962161013",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 7220.054114068946,
                "y": 2531.258735368172
            }
        },
        {
            "id": "1743962163177",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 7024.053950251453,
                "y": 2308.858577935004
            }
        },
        {
            "id": "1743962168349",
            "image": "koraal1.png",
            "layer": "middle",
            "position": {
                "x": 7088.053980603282,
                "y": 2477.6585960798598
            }
        },
        {
            "id": "1743962172717",
            "image": "koraal1.png",
            "layer": "middle",
            "position": {
                "x": 7179.253992810313,
                "y": 2554.4585991316176
            }
        },
        {
            "id": "1743962182737",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 8836.069571245074,
                "y": 3099.519755275662
            }
        },
        {
            "id": "1743962186448",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 8958.760910512847,
                "y": 3045.9063969694303
            }
        },
        {
            "id": "1743962235616",
            "image": "plant-bol-1.png",
            "layer": "middle",
            "position": {
                "x": 10844.104659991966,
                "y": 5093.121752925516
            }
        },
        {
            "id": "1743962246529",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 11891.384491734705,
                "y": 4739.859554664913
            }
        },
        {
            "id": "1743962252512",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 11986.758362088396,
                "y": 4734.985248204422
            }
        },
        {
            "id": "1743962263567",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 11913.043055051257,
                "y": 3536.02204546919
            }
        },
        {
            "id": "1743962265488",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 11848.496060206206,
                "y": 3433.2025926566134
            }
        },
        {
            "id": "1743962324613",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 12985.923342184497,
                "y": 4972.9786264307295
            }
        },
        {
            "id": "1743962328065",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 12940.323366597744,
                "y": 4859.553197366818
            }
        },
        {
            "id": "1743962334774",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 12954.580968890023,
                "y": 5467.276040376331
            }
        },
        {
            "id": "1743962336530",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 13017.507250540268,
                "y": 5616.753332742605
            }
        },
        {
            "id": "1743962347758",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 13449.730062908997,
                "y": 4529.074479526952
            }
        },
        {
            "id": "1743962349868",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 13517.926412530602,
                "y": 4454.318095663688
            }
        },
        {
            "id": "1743962352018",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 13641.92646984402,
                "y": 4336.715892303472
            }
        },
        {
            "id": "1743962365131",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 13559.526323372716,
                "y": 4387.915901673662
            }
        },
        {
            "id": "1743962375569",
            "image": "koraal1.png",
            "layer": "middle",
            "position": {
                "x": 13511.526445443029,
                "y": 4529.749226880896
            }
        },
        {
            "id": "1743962426679",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 15516.070719525798,
                "y": 5661.488211517336
            }
        },
        {
            "id": "1743962429924",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 15330.470743978412,
                "y": 5607.888124771549
            }
        },
        {
            "id": "1743962435443",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 15427.270731771381,
                "y": 5778.688167100605
            }
        },
        {
            "id": "1743962441405",
            "image": "koraal1.png",
            "layer": "middle",
            "position": {
                "x": 15452.870707357319,
                "y": 5733.088176255878
            }
        },
        {
            "id": "1743962450778",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 15789.670695150287,
                "y": 4512.8918772695515
            }
        },
        {
            "id": "1743962485764",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 17326.179103790106,
                "y": 3945.439322620853
            }
        },
        {
            "id": "1743962491571",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 17347.779314887728,
                "y": 4131.039371985618
            }
        },
        {
            "id": "1743962497411",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 17240.57927216312,
                "y": 3859.839375037376
            }
        },
        {
            "id": "1743962510845",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 18704.201584305887,
                "y": 5874.0246407977675
            }
        },
        {
            "id": "1743962514337",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 19072.284933824492,
                "y": 5966.797347742413
            }
        },
        {
            "id": "1743962516985",
            "image": "plant-klein.png",
            "layer": "back",
            "position": {
                "x": 18845.08504589705,
                "y": 5940.39735313062
            }
        },
        {
            "id": "1743962525581",
            "image": "plant-klein.png",
            "layer": "back",
            "position": {
                "x": 18933.884972655418,
                "y": 5969.197371440976
            }
        },
        {
            "id": "1743962538436",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 19090.61555696923,
                "y": 6714.180960251511
            }
        },
        {
            "id": "1743962541069",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 19436.963767729896,
                "y": 6900.999352679432
            }
        },
        {
            "id": "1743962542396",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 19324.957055798783,
                "y": 6848.179827535542
            }
        },
        {
            "id": "1743962543327",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 19297.993714798282,
                "y": 6785.11827356606
            }
        },
        {
            "id": "1743962544117",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 19247.60749002769,
                "y": 6761.974658186067
            }
        },
        {
            "id": "1743962545282",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 19842.808751896868,
                "y": 6925.979970918899
            }
        },
        {
            "id": "1743962546241",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 19771.60883564045,
                "y": 6882.780135286021
            }
        },
        {
            "id": "1743962555663",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 21510.657771787533,
                "y": 7170.852432059464
            }
        },
        {
            "id": "1743962556312",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 21559.386618677527,
                "y": 7106.052444413827
            }
        },
        {
            "id": "1743962556812",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 21454.097263149517,
                "y": 7046.052444431947
            }
        },
        {
            "id": "1743962557283",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 21398.164583057674,
                "y": 7005.252426125175
            }
        },
        {
            "id": "1743962557795",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 21342.98175246332,
                "y": 6968.452438333145
            }
        },
        {
            "id": "1743962558745",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 22048.585937609085,
                "y": 6974.852432229855
            }
        },
        {
            "id": "1743962559268",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 21989.3861813267,
                "y": 7003.652420022824
            }
        },
        {
            "id": "1743962562760",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 21001.23220421196,
                "y": 6990.052444436887
            }
        },
        {
            "id": "1743962563376",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 20967.32700097953,
                "y": 6882.852432229855
            }
        },
        {
            "id": "1743962567744",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 20798.219623875568,
                "y": 7011.455120981001
            }
        },
        {
            "id": "1743962568399",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 20776.401354786183,
                "y": 6966.200650164653
            }
        },
        {
            "id": "1743962569112",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 20675.569577866307,
                "y": 6895.733483158204
            }
        },
        {
            "id": "1743962573092",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 20251.473585560852,
                "y": 6829.898570273054
            }
        },
        {
            "id": "1743962579755",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 20251.994105119004,
                "y": 7031.9005184059415
            }
        },
        {
            "id": "1743962582081",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 20182.39406845349,
                "y": 6982.300512293361
            }
        },
        {
            "id": "1743962582294",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 20072.79415390271,
                "y": 6967.100561121486
            }
        },
        {
            "id": "1743962589520",
            "image": "koraal1.png",
            "layer": "middle",
            "position": {
                "x": 20143.194117281615,
                "y": 6944.700536707423
            }
        },
        {
            "id": "1743962648496",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 20000.40036318818,
                "y": 1148.528964025061
            }
        },
        {
            "id": "1743962649948",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 20216.400363245633,
                "y": 1138.9289577530326
            }
        },
        {
            "id": "1743962650914",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 20207.600375453276,
                "y": 1020.5289638547736
            }
        },
        {
            "id": "1743962651916",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 20110.800387660307,
                "y": 1002.1289394406198
            }
        },
        {
            "id": "1743962656482",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 20141.277870578364,
                "y": 1075.5341405704025
            }
        },
        {
            "id": "1743962657499",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 20075.593608579104,
                "y": 1217.6097816136412
            }
        },
        {
            "id": "1743962658303",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 19960.426141515414,
                "y": 1184.069076265157
            }
        },
        {
            "id": "1743962659652",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 20434.82918650584,
                "y": 1083.2747477224864
            }
        },
        {
            "id": "1743962661162",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 20351.629285042014,
                "y": 1047.2748394783748
            }
        },
        {
            "id": "1743962665876",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 21035.226281762283,
                "y": 893.6765194107244
            }
        },
        {
            "id": "1743962666690",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 21223.073907487178,
                "y": 928.8140745266446
            }
        },
        {
            "id": "1743962667233",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 20900.139681137593,
                "y": 985.6090927365308
            }
        },
        {
            "id": "1743962676981",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 21902.601888037774,
                "y": 772.7582679222438
            }
        },
        {
            "id": "1743962678921",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 21677.599210853507,
                "y": 811.9122913872858
            }
        },
        {
            "id": "1743962685382",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 21755.200769171734,
                "y": 892.7122233512187
            }
        },
        {
            "id": "1743962688419",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 21859.200708136577,
                "y": 889.5122111441874
            }
        },
        {
            "id": "1743964568241",
            "image": "shipwreck-rechts.png",
            "layer": "back",
            "position": {
                "x": 12448.631631433016,
                "y": 5510.7147468882895
            }
        },
        {
            "id": "1743964587131",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 13305.431680261141,
                "y": 6047.408521596448
            }
        },
        {
            "id": "1743964590828",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 13255.031716882235,
                "y": 5821.758553595312
            }
        },
        {
            "id": "1743964598891",
            "image": "koraal1.png",
            "layer": "middle",
            "position": {
                "x": 13258.23166805411,
                "y": 5984.158516973759
            }
        },
        {
            "id": "1743964651844",
            "image": "shipwreck-links.png",
            "layer": "back",
            "position": {
                "x": 15144.7866711668,
                "y": 7142.968949364726
            }
        },
        {
            "id": "1743964654723",
            "image": "shipwreck-links.png",
            "layer": "back",
            "position": {
                "x": 15337.298510715736,
                "y": 7643.475008378788
            }
        },
        {
            "id": "1743964708994",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 16435.332859560178,
                "y": 5806.2475450090815
            }
        },
        {
            "id": "1743964713357",
            "image": "plant-bol-1.png",
            "layer": "middle",
            "position": {
                "x": 16649.63460180559,
                "y": 5886.279072716542
            }
        },
        {
            "id": "1743964716393",
            "image": "plant-bol-1.png",
            "layer": "middle",
            "position": {
                "x": 16387.234546869484,
                "y": 5966.279072961054
            }
        },
        {
            "id": "1743964732685",
            "image": "shipwreck-rechts.png",
            "layer": "middle",
            "position": {
                "x": 15398.771986960606,
                "y": 6656.664446218787
            }
        },
        {
            "id": "1743964744275",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 16621.34707163168,
                "y": 7104.543125923045
            }
        },
        {
            "id": "1743964745378",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 16612.547083838712,
                "y": 7045.343113716014
            }
        },
        {
            "id": "1743964748008",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 16582.947108252774,
                "y": 6894.9764698103745
            }
        },
        {
            "id": "1743964760220",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 16207.747035010585,
                "y": 6939.776457603343
            }
        },
        {
            "id": "1743964766711",
            "image": "koraal1.png",
            "layer": "back",
            "position": {
                "x": 16055.747065528163,
                "y": 6930.176466758617
            }
        },
        {
            "id": "1743964772533",
            "image": "koraal1.png",
            "layer": "back",
            "position": {
                "x": 16110.947016700038,
                "y": 7014.176482017406
            }
        },
        {
            "id": "1743964776431",
            "image": "plant-klein.png",
            "layer": "back",
            "position": {
                "x": 16367.747035010587,
                "y": 7031.776457603343
            }
        },
        {
            "id": "1743964785963",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 16250.146998389491,
                "y": 7109.376463706859
            }
        },
        {
            "id": "1743964793876",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 17151.723751783215,
                "y": 6489.5340610291505
            }
        },
        {
            "id": "1743964797647",
            "image": "plant-bol-1.png",
            "layer": "middle",
            "position": {
                "x": 17119.0125884353,
                "y": 6688.66519605192
            }
        },
        {
            "id": "1743964801811",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 17347.812577032153,
                "y": 6271.86523815446
            }
        },
        {
            "id": "1743964803472",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 17253.412674688403,
                "y": 6441.465213740397
            }
        },
        {
            "id": "1743964811771",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 17838.67973045313,
                "y": 5805.331204005049
            }
        },
        {
            "id": "1743964813340",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 17729.79738513901,
                "y": 5927.013814537468
            }
        },
        {
            "id": "1743964815888",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 17956.2210160297,
                "y": 5605.3902713451225
            }
        },
        {
            "id": "1743964840432",
            "image": "shipwreck-links.png",
            "layer": "back",
            "position": {
                "x": 21587.084510799657,
                "y": 6614.8755105577075
            }
        },
        {
            "id": "1743964848784",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 21633.132212575903,
                "y": 6983.827593670264
            }
        },
        {
            "id": "1743964851774",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 21803.532236989966,
                "y": 6973.42759977378
            }
        },
        {
            "id": "1743964858412",
            "image": "koraal1.png",
            "layer": "middle",
            "position": {
                "x": 21576.33216374778,
                "y": 7111.827608929053
            }
        },
        {
            "id": "1743964861344",
            "image": "koraal1.png",
            "layer": "middle",
            "position": {
                "x": 21734.73218816184,
                "y": 7107.027605877295
            }
        },
        {
            "id": "1743964895775",
            "image": "shipwreck-links.png",
            "layer": "middle",
            "position": {
                "x": 21298.16549934494,
                "y": 3820.008898821352
            }
        },
        {
            "id": "1743964903422",
            "image": "koraal1.png",
            "layer": "back",
            "position": {
                "x": 21370.06076609521,
                "y": 4196.4421957153645
            }
        },
        {
            "id": "1743964905740",
            "image": "koraal1.png",
            "layer": "back",
            "position": {
                "x": 21524.460729474114,
                "y": 3958.842235388216
            }
        },
        {
            "id": "1743964908942",
            "image": "koraal1.png",
            "layer": "back",
            "position": {
                "x": 21430.8607233706,
                "y": 4196.292238058504
            }
        },
        {
            "id": "1743964943991",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 21241.26077830224,
                "y": 4129.892228903231
            }
        },
        {
            "id": "1743964946542",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 21386.860814923333,
                "y": 4149.092225851473
            }
        },
        {
            "id": "1743964952582",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 21130.06076609521,
                "y": 4237.092241110262
            }
        },
        {
            "id": "1743964958539",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 21062.060705060052,
                "y": 4284.292222799715
            }
        },
        {
            "id": "1743964960669",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 21507.66068064599,
                "y": 4277.092225851473
            }
        },
        {
            "id": "1743964971499",
            "image": "plant-klein.png",
            "layer": "front",
            "position": {
                "x": 20315.122591906944,
                "y": 4183.948300591471
            }
        },
        {
            "id": "1743964975042",
            "image": "plant-klein.png",
            "layer": "front",
            "position": {
                "x": 20413.04849036116,
                "y": 4216.488244005055
            }
        },
        {
            "id": "1743970323504",
            "image": "plant-bol-1.png",
            "layer": "middle",
            "position": {
                "x": 2801.6376728730793,
                "y": 1615.5558851846176
            }
        },
        {
            "id": "1743970332475",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 3023.5089187982717,
                "y": 1648.5692694003478
            }
        },
        {
            "id": "1743970335868",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 2975.5089516697,
                "y": 1628.5692977252893
            }
        },
        {
            "id": "1743970340511",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 3075.508890637346,
                "y": 1671.7693099336195
            }
        },
        {
            "id": "1743970355869",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 6163.153450308613,
                "y": 2202.128671877504
            }
        },
        {
            "id": "1743970360757",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 5607.954255321379,
                "y": 2138.9287218493287
            }
        },
        {
            "id": "1743970376920",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 7733.610889958928,
                "y": 3306.765909711826
            }
        },
        {
            "id": "1743970382216",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 7784.010914382954,
                "y": 3446.765879195238
            }
        },
        {
            "id": "1743970422710",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 10538.98464927967,
                "y": 2689.6536938345816
            }
        },
        {
            "id": "1743970427028",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 10240.30450865802,
                "y": 2675.6305395916806
            }
        },
        {
            "id": "1743970435445",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 10187.777252625987,
                "y": 2866.363142090874
            }
        },
        {
            "id": "1743970439056",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 10608.577301454105,
                "y": 2873.563184349161
            }
        },
        {
            "id": "1743970445739",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 10446.97726483301,
                "y": 2654.363172142879
            }
        },
        {
            "id": "1743970455811",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 11217.001400440386,
                "y": 2869.7271084677586
            }
        },
        {
            "id": "1743970464982",
            "image": "plant-lange-slierten.png",
            "layer": "front",
            "position": {
                "x": 11177.000085034915,
                "y": 2650.5270736894645
            }
        },
        {
            "id": "1743970511031",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 11901.003408047298,
                "y": 5568.551242611189
            }
        },
        {
            "id": "1743970513852",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 11652.203359219173,
                "y": 5669.351276180525
            }
        },
        {
            "id": "1743970519058",
            "image": "plant-lange-slierten.png",
            "layer": "front",
            "position": {
                "x": 11773.80333480511,
                "y": 5624.551288387556
            }
        },
        {
            "id": "1743970553089",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 13655.289781421448,
                "y": 3098.7166068530014
            }
        },
        {
            "id": "1743970554695",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 13553.689775317864,
                "y": 2970.7166068530105
            }
        },
        {
            "id": "1743970558293",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 13487.28978142138,
                "y": 2815.5166022753738
            }
        },
        {
            "id": "1743970600209",
            "image": "plant-klein.png",
            "layer": "front",
            "position": {
                "x": 13703.123209865515,
                "y": 5135.465452286319
            }
        },
        {
            "id": "1743970604265",
            "image": "koraal1.png",
            "layer": "front",
            "position": {
                "x": 13803.123148830358,
                "y": 5184.265470598555
            }
        },
        {
            "id": "1743970611311",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 13851.039896877233,
                "y": 5194.165525530196
            }
        },
        {
            "id": "1743970668021",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 14550.100153484396,
                "y": 7643.999999999993
            }
        },
        {
            "id": "1743970675101",
            "image": "plant-bol-1.png",
            "layer": "middle",
            "position": {
                "x": 14420.50014738088,
                "y": 7652.799962997429
            }
        },
        {
            "id": "1743970680216",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 14345.30013517385,
                "y": 7581.599981307976
            }
        },
        {
            "id": "1743970746082",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 16486.321783771287,
                "y": 5977.3377901645945
            }
        },
        {
            "id": "1743970751062",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 16586.321783771287,
                "y": 5805.337759647016
            }
        },
        {
            "id": "1743970773165",
            "image": "plant-lange-slierten.png",
            "layer": "front",
            "position": {
                "x": 16391.581573397885,
                "y": 6910.425520558687
            }
        },
        {
            "id": "1743970793763",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 18126.36491781809,
                "y": 4752.86375966179
            }
        },
        {
            "id": "1743970802102",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 18097.56493005759,
                "y": 4972.063710826689
            }
        },
        {
            "id": "1743970808564",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 18203.964862918918,
                "y": 4918.463729518706
            }
        },
        {
            "id": "1743970832648",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 19573.63215990065,
                "y": 6758.248465854508
            }
        },
        {
            "id": "1743970859419",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 21179.727564342287,
                "y": 7038.1542327209545
            }
        },
        {
            "id": "1743970882473",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 19223.472641745528,
                "y": 5952.4396072618
            }
        },
        {
            "id": "1743970884773",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 19476.272690573325,
                "y": 5938.839601158303
            }
        },
        {
            "id": "1743970889529",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 19369.872605124106,
                "y": 5920.439607261818
            }
        },
        {
            "id": "1743970892945",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 19165.072678366294,
                "y": 5958.039628624123
            }
        },
        {
            "id": "1743970899235",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 19260.272690573325,
                "y": 6120.439592003029
            }
        },
        {
            "id": "1743970901264",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 19368.272690573325,
                "y": 6126.839601158303
            }
        },
        {
            "id": "1743970911602",
            "image": "koraal1.png",
            "layer": "middle",
            "position": {
                "x": 19222.67265395223,
                "y": 6090.039582847756
            }
        },
        {
            "id": "1743970934480",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 20516.127195390087,
                "y": 4101.923211051955
            }
        },
        {
            "id": "1743970939461",
            "image": "koraal1.png",
            "layer": "front",
            "position": {
                "x": 20677.72713797554,
                "y": 4250.723183586135
            }
        },
        {
            "id": "1743971904562",
            "image": "tentakel1.png",
            "layer": "middle",
            "position": {
                "x": 10703.152930862605,
                "y": 4198.9859117885935
            }
        },
        {
            "id": "1743971909810",
            "image": "tentakel2.png",
            "layer": "middle",
            "position": {
                "x": 10679.152869827449,
                "y": 4193.38593620266
            }
        },
        {
            "id": "1743971924449",
            "image": "tentakel5.png",
            "layer": "middle",
            "position": {
                "x": 10657.552955276667,
                "y": 4158.185801925316
            }
        },
        {
            "id": "1743971938895",
            "image": "tentakel3.png",
            "layer": "middle",
            "position": {
                "x": 10572.752906448542,
                "y": 3986.1859239956284
            }
        },
        {
            "id": "1743972011095",
            "image": "tentakel4.png",
            "layer": "middle",
            "position": {
                "x": 11362.474131093099,
                "y": 5600.823468932638
            }
        },
        {
            "id": "1743972027638",
            "image": "tentakel2.png",
            "layer": "middle",
            "position": {
                "x": 11400.873848734602,
                "y": 5741.721942767265
            }
        },
        {
            "id": "1743972035900",
            "image": "tentakel1.png",
            "layer": "middle",
            "position": {
                "x": 11470.299356009957,
                "y": 5756.921985550934
            }
        },
        {
            "id": "1743972041676",
            "image": "tentakel5.png",
            "layer": "middle",
            "position": {
                "x": 11430.64098096842,
                "y": 5712.927411470856
            }
        },
        {
            "id": "1743972057654",
            "image": "plant-bol-1.png",
            "layer": "back",
            "position": {
                "x": 11231.273751154004,
                "y": 5761.621929034278
            }
        },
        {
            "id": "1743972059670",
            "image": "plant-bol-1.png",
            "layer": "back",
            "position": {
                "x": 11494.473824396191,
                "y": 5807.222014292762
            }
        },
        {
            "id": "1743972128619",
            "image": "tentakel1.png",
            "layer": "middle",
            "position": {
                "x": 13253.654195298577,
                "y": 5813.785948022012
            }
        },
        {
            "id": "1743972133282",
            "image": "tentakel3.png",
            "layer": "middle",
            "position": {
                "x": 13448.05428071458,
                "y": 5730.5858947805455
            }
        },
        {
            "id": "1743972133836",
            "image": "tentakel3.png",
            "layer": "middle",
            "position": {
                "x": 13172.854207472392,
                "y": 5620.985949712186
            }
        },
        {
            "id": "1743972162259",
            "image": "tentakel4.png",
            "layer": "middle",
            "position": {
                "x": 13180.854268507548,
                "y": 5701.785906987577
            }
        },
        {
            "id": "1743972195653",
            "image": "tentakel3.png",
            "layer": "middle",
            "position": {
                "x": 14813.562471093413,
                "y": 7583.9999536048535
            }
        },
        {
            "id": "1743972205945",
            "image": "tentakel1.png",
            "layer": "middle",
            "position": {
                "x": 14922.896778515174,
                "y": 7788.000061459912
            }
        },
        {
            "id": "1743972225631",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 14695.696827341877,
                "y": 7817.600006103508
            }
        },
        {
            "id": "1743972258804",
            "image": "tentakel4.png",
            "layer": "middle",
            "position": {
                "x": 15244.069849999254,
                "y": 4752.597938003985
            }
        },
        {
            "id": "1743972267783",
            "image": "tentakel2.png",
            "layer": "middle",
            "position": {
                "x": 15248.026662607372,
                "y": 4810.853439348801
            }
        },
        {
            "id": "1743972301097",
            "image": "tentakel3.png",
            "layer": "middle",
            "position": {
                "x": 16763.110606778788,
                "y": 2977.642300015621
            }
        },
        {
            "id": "1743972318027",
            "image": "tentakel1.png",
            "layer": "middle",
            "position": {
                "x": 16763.905364358754,
                "y": 3196.057942840988
            }
        },
        {
            "id": "1743972362841",
            "image": "tentakel1.png",
            "layer": "middle",
            "position": {
                "x": 17654.880401883314,
                "y": 4237.356244575332
            }
        },
        {
            "id": "1743972368216",
            "image": "tentakel5.png",
            "layer": "middle",
            "position": {
                "x": 17647.66303437568,
                "y": 4188.5275095858115
            }
        },
        {
            "id": "1743972381212",
            "image": "tentakel2.png",
            "layer": "middle",
            "position": {
                "x": 17598.891471755338,
                "y": 4197.33166145109
            }
        },
        {
            "id": "1743972395227",
            "image": "tentakel4.png",
            "layer": "middle",
            "position": {
                "x": 17615.66302504783,
                "y": 4109.3275483609905
            }
        },
        {
            "id": "1743972600057",
            "image": "tentakel5.png",
            "layer": "middle",
            "position": {
                "x": 21812.102681521017,
                "y": 6784.026708874597
            }
        },
        {
            "id": "1743972605871",
            "image": "tentakel1.png",
            "layer": "middle",
            "position": {
                "x": 21827.411800120328,
                "y": 6836.0268087213835
            }
        },
        {
            "id": "1743972611382",
            "image": "tentakel2.png",
            "layer": "middle",
            "position": {
                "x": 21831.302645085707,
                "y": 6829.626714988107
            }
        },
        {
            "id": "1743972647837",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 22024.102802262674,
                "y": 6780.8267271851455
            }
        },
        {
            "id": "1743972656357",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 21973.702716813455,
                "y": 6884.8267271851455
            }
        },
        {
            "id": "1743972688924",
            "image": "tentakel3.png",
            "layer": "front",
            "position": {
                "x": 20902.67768072843,
                "y": 4222.283881931424
            }
        },
        {
            "id": "1743972696869",
            "image": "tentakel1.png",
            "layer": "front",
            "position": {
                "x": 20936.25789317247,
                "y": 4287.883888034939
            }
        },
        {
            "id": "1743972702753",
            "image": "tentakel4.png",
            "layer": "front",
            "position": {
                "x": 20840.257832137315,
                "y": 4230.283912449002
            }
        },
        {
            "id": "1743972707140",
            "image": "tentakel2.png",
            "layer": "front",
            "position": {
                "x": 20867.457844344346,
                "y": 4235.883888034939
            }
        },
        {
            "id": "1743972722230",
            "image": "tentakel5.png",
            "layer": "front",
            "position": {
                "x": 20893.85786875841,
                "y": 4254.283912449002
            }
        },
        {
            "id": "1743976265633",
            "image": "tentakel7.png",
            "layer": "middle",
            "position": {
                "x": 10578.513045718386,
                "y": 4141.935331626835
            }
        },
        {
            "id": "1743976286811",
            "image": "tentakel6.png",
            "layer": "middle",
            "position": {
                "x": 10644.112960269167,
                "y": 4135.535276695195
            }
        },
        {
            "id": "1743976376814",
            "image": "tentakel6.png",
            "layer": "middle",
            "position": {
                "x": 11342.026625619927,
                "y": 5665.758304482247
            }
        },
        {
            "id": "1743976398885",
            "image": "tentakel7.png",
            "layer": "middle",
            "position": {
                "x": 11441.333004593833,
                "y": 5690.558307534005
            }
        },
        {
            "id": "1743976745820",
            "image": "plant-bol-1.png",
            "layer": "middle",
            "position": {
                "x": 13348.92590242201,
                "y": 5552.825967682645
            }
        },
        {
            "id": "1743976794862",
            "image": "tentakel6.png",
            "layer": "middle",
            "position": {
                "x": 13242.525939046887,
                "y": 5756.825967827106
            }
        },
        {
            "id": "1743976856685",
            "image": "tentakel6.png",
            "layer": "middle",
            "position": {
                "x": 14813.352692126255,
                "y": 7741.1500529573905
            }
        },
        {
            "id": "1743976864262",
            "image": "tentakel7.png",
            "layer": "middle",
            "position": {
                "x": 14893.352692126255,
                "y": 7733.1500529573905
            }
        },
        {
            "id": "1743976891679",
            "image": "tentakel5.png",
            "layer": "middle",
            "position": {
                "x": 14880.205324238705,
                "y": 7750.750059060906
            }
        },
        {
            "id": "1743976931245",
            "image": "tentakel6.png",
            "layer": "middle",
            "position": {
                "x": 15223.239696169025,
                "y": 4752.368150095273
            }
        },
        {
            "id": "1743976940122",
            "image": "tentakel5.png",
            "layer": "middle",
            "position": {
                "x": 15272.839763307697,
                "y": 4845.168153147031
            }
        },
        {
            "id": "1743977002900",
            "image": "tentakel6.png",
            "layer": "middle",
            "position": {
                "x": 16725.609624713616,
                "y": 3131.499317583748
            }
        },
        {
            "id": "1743977017229",
            "image": "tentakel6.png",
            "layer": "middle",
            "position": {
                "x": 16798.409612506584,
                "y": 3295.49928706617
            }
        },
        {
            "id": "1743977024949",
            "image": "tentakel2.png",
            "layer": "middle",
            "position": {
                "x": 16740.009588092522,
                "y": 3190.699268755623
            }
        },
        {
            "id": "1743977066725",
            "image": "tentakel6.png",
            "layer": "middle",
            "position": {
                "x": 17575.82694504455,
                "y": 4137.589494487973
            }
        },
        {
            "id": "1743977159196",
            "image": "tentakel6.png",
            "layer": "middle",
            "position": {
                "x": 21789.404330041525,
                "y": 6767.569041328788
            }
        },
        {
            "id": "1743977240018",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 20777.42825045818,
                "y": 4370.0020875671435
            }
        },
        {
            "id": "1743977244316",
            "image": "plant-klein.png",
            "layer": "front",
            "position": {
                "x": 20879.828213837085,
                "y": 4330.0020875671435
            }
        },
        {
            "id": "1744060225933",
            "image": "tentakel1.png",
            "layer": "middle",
            "position": {
                "x": 15106.379476960006,
                "y": 7755.368270074883
            }
        },
        {
            "id": "1744060227260",
            "image": "tentakel1.png",
            "layer": "middle",
            "position": {
                "x": 15275.379476960006,
                "y": 7481.368270074883
            }
        },
        {
            "id": "1744060236856",
            "image": "tentakel3.png",
            "layer": "middle",
            "position": {
                "x": 15203.379476960006,
                "y": 7255.368270074883
            }
        },
        {
            "id": "1744060245408",
            "image": "tentakel4.png",
            "layer": "middle",
            "position": {
                "x": 15203.379476960006,
                "y": 7340.368270074883
            }
        },
        {
            "id": "1744395892682",
            "image": "crate.png",
            "layer": "back",
            "position": {
                "x": 2455.287552268461,
                "y": 1503.6987646483276
            }
        },
        {
            "id": "1744396065429",
            "image": "crate.png",
            "layer": "middle",
            "position": {
                "x": 12847.546417875814,
                "y": 2263.1999855041486
            }
        },
        {
            "id": "1744396072726",
            "image": "crate.png",
            "layer": "middle",
            "position": {
                "x": 13442.257948270246,
                "y": 2005.431168978843
            }
        },
        {
            "id": "1744396227527",
            "image": "crate.png",
            "layer": "middle",
            "position": {
                "x": 19937.524000642086,
                "y": 1206.6111910968089
            }
        },
        {
            "id": "1744396236966",
            "image": "crate.png",
            "layer": "middle",
            "position": {
                "x": 21114.123057502675,
                "y": 985.9641981212942
            }
        },
        {
            "id": "1744396246966",
            "image": "crate.png",
            "layer": "middle",
            "position": {
                "x": 22638.25435297073,
                "y": 592.8795089524051
            }
        },
        {
            "id": "1744396256970",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 23418.802770345806,
                "y": 513.651343824589
            }
        },
        {
            "id": "1744396257999",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 23193.316806162864,
                "y": 313.74383250459914
            }
        },
        {
            "id": "1744396263412",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 23323.842726200564,
                "y": 315.02756253428424
            }
        },
        {
            "id": "1744396267060",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 23543.042677277666,
                "y": 296.6114105594472
            }
        },
        {
            "id": "1744396346857",
            "image": "crate.png",
            "layer": "middle",
            "position": {
                "x": 18890.194786788226,
                "y": 2318.524626462173
            }
        },
        {
            "id": "1744396353434",
            "image": "plant-lang-2.png",
            "layer": "front",
            "position": {
                "x": 18942.07197215196,
                "y": 2181.9553486126233
            }
        },
        {
            "id": "1744396369931",
            "image": "crate.png",
            "layer": "front",
            "position": {
                "x": 19605.96419443342,
                "y": 4159.998561265893
            }
        },
        {
            "id": "1744396384716",
            "image": "crate.png",
            "layer": "middle",
            "position": {
                "x": 21180.92815419662,
                "y": 4240.6117905772735
            }
        },
        {
            "id": "1744396396975",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 21240.928471270687,
                "y": 4286.728455463748
            }
        },
        {
            "id": "1744396426243",
            "image": "crate.png",
            "layer": "back",
            "position": {
                "x": 19422.268533587627,
                "y": 6061.441060899552
            }
        },
        {
            "id": "1744396438009",
            "image": "crate.png",
            "layer": "back",
            "position": {
                "x": 19653.485893871264,
                "y": 6872.1491841623565
            }
        },
        {
            "id": "1744396463270",
            "image": "crate.png",
            "layer": "back",
            "position": {
                "x": 21626.934843805415,
                "y": 6939.719617948235
            }
        },
        {
            "id": "1744396474577",
            "image": "plant-bol-1.png",
            "layer": "middle",
            "position": {
                "x": 21584.53488042651,
                "y": 7015.719617948235
            }
        },
        {
            "id": "1744396480357",
            "image": "plant-lange-slierten.png",
            "layer": "front",
            "position": {
                "x": 21658.134917047602,
                "y": 6950.9196301552665
            }
        },
        {
            "id": "1744396525892",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 18419.694790066773,
                "y": 6376.36530934189
            }
        },
        {
            "id": "1744396530304",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 18524.49480837732,
                "y": 6469.16526661728
            }
        },
        {
            "id": "1744396538952",
            "image": "plant-bol-1.png",
            "layer": "back",
            "position": {
                "x": 18346.894771756226,
                "y": 6317.1652818760695
            }
        },
        {
            "id": "1744396541727",
            "image": "plant-bol-1.png",
            "layer": "back",
            "position": {
                "x": 18705.294857205445,
                "y": 6085.165304764253
            }
        },
        {
            "id": "1744396544354",
            "image": "plant-bol-1.png",
            "layer": "back",
            "position": {
                "x": 18734.0947229281,
                "y": 6137.1652818760695
            }
        },
        {
            "id": "1744396546903",
            "image": "plant-bol-1.png",
            "layer": "back",
            "position": {
                "x": 18320.49480837732,
                "y": 6267.565275772554
            }
        },
        {
            "id": "1744396554330",
            "image": "plant-bol-1.png",
            "layer": "back",
            "position": {
                "x": 18305.294735135132,
                "y": 6165.531962021333
            }
        },
        {
            "id": "1744396605605",
            "image": "plant-bol-1.png",
            "layer": "back",
            "position": {
                "x": 18208.762502577418,
                "y": 5361.5442791304695
            }
        },
        {
            "id": "1744396610146",
            "image": "plant-bol-1.png",
            "layer": "back",
            "position": {
                "x": 18191.962575819605,
                "y": 5444.192361402334
            }
        },
        {
            "id": "1744396612977",
            "image": "plant-bol-1.png",
            "layer": "back",
            "position": {
                "x": 18705.562490370387,
                "y": 5247.392357130297
            }
        },
        {
            "id": "1744396616146",
            "image": "plant-bol-1.png",
            "layer": "back",
            "position": {
                "x": 18734.36253919851,
                "y": 5292.992347974832
            }
        },
        {
            "id": "1744396630941",
            "image": "crate.png",
            "layer": "back",
            "position": {
                "x": 16478.49036954112,
                "y": 5883.791729052751
            }
        },
        {
            "id": "1744396651272",
            "image": "crate.png",
            "layer": "back",
            "position": {
                "x": 16443.31454355569,
                "y": 7015.635462025754
            }
        },
        {
            "id": "1744396664303",
            "image": "crate.png",
            "layer": "back",
            "position": {
                "x": 17382.43891187688,
                "y": 4147.181794952042
            }
        },
        {
            "id": "1744396669480",
            "image": "koraal1.png",
            "layer": "middle",
            "position": {
                "x": 17479.667762919817,
                "y": 4183.50765263934
            }
        },
        {
            "id": "1744396674137",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 17394.867714246895,
                "y": 4209.107674040537
            }
        },
        {
            "id": "1744396696406",
            "image": "crate.png",
            "layer": "back",
            "position": {
                "x": 16542.911818132394,
                "y": 3490.1218475555725
            }
        },
        {
            "id": "1744396794196",
            "image": "crate.png",
            "layer": "back",
            "position": {
                "x": 11889.49837401516,
                "y": 3671.8451104586834
            }
        },
        {
            "id": "1744396812350",
            "image": "crate.png",
            "layer": "back",
            "position": {
                "x": 11842.267023429089,
                "y": 5715.639642558359
            }
        },
        {
            "id": "1744396877387",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 11892.344280075251,
                "y": 4006.333084313298
            }
        },
        {
            "id": "1744396883417",
            "image": "plant-klein.png",
            "layer": "back",
            "position": {
                "x": 11921.149359341443,
                "y": 4210.294748340765
            }
        },
        {
            "id": "1744396888010",
            "image": "plant-klein.png",
            "layer": "back",
            "position": {
                "x": 12453.949347134432,
                "y": 3967.0947208897815
            }
        },
        {
            "id": "1744396914785",
            "image": "plant-klein.png",
            "layer": "back",
            "position": {
                "x": 12488.349371548495,
                "y": 3907.8947239415393
            }
        },
        {
            "id": "1744396938421",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 11948.317958770062,
                "y": 2852.6044759537294
            }
        },
        {
            "id": "1744396942080",
            "image": "plant-lange-slierten.png",
            "layer": "back",
            "position": {
                "x": 11874.702954581251,
                "y": 2779.7916435462853
            }
        },
        {
            "id": "1744396951427",
            "image": "crate.png",
            "layer": "back",
            "position": {
                "x": 11378.378654195822,
                "y": 2775.1314366409206
            }
        },
        {
            "id": "1744396970071",
            "image": "crate.png",
            "layer": "back",
            "position": {
                "x": 10061.699133201364,
                "y": 3875.241078037343
            }
        },
        {
            "id": "1744396987623",
            "image": "crate.png",
            "layer": "back",
            "position": {
                "x": 10844.872505575944,
                "y": 4183.583565938078
            }
        },
        {
            "id": "1744397016116",
            "image": "crate.png",
            "layer": "back",
            "position": {
                "x": 4718.372225763912,
                "y": 2002.6242285120338
            }
        },
        {
            "id": "1744397020433",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 4812.445077532513,
                "y": 1881.3630811390592
            }
        },
        {
            "id": "1744397024103",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 4912.441802363788,
                "y": 1997.1604754749253
            }
        },
        {
            "id": "1744397026755",
            "image": "plant-lang-2.png",
            "layer": "middle",
            "position": {
                "x": 5082.139456396424,
                "y": 1901.6733260298545
            }
        },
        {
            "id": "1744397033438",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 5205.355417927468,
                "y": 1969.6646776425227
            }
        },
        {
            "id": "1744397035553",
            "image": "plant-klein.png",
            "layer": "middle",
            "position": {
                "x": 5013.035439197073,
                "y": 1972.0647020565789
            }
        },
        {
            "id": "1744397048453",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 3618.5446779140157,
                "y": 1694.9767067373298
            }
        },
        {
            "id": "1744397049533",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 3978.963554437994,
                "y": 1857.354356697565
            }
        },
        {
            "id": "1744397050487",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 3878.994552407791,
                "y": 1995.7535423187176
            }
        },
        {
            "id": "1744397051918",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 3860.5963970164657,
                "y": 1878.9535085724572
            }
        },
        {
            "id": "1744397054762",
            "image": "plant-lange-slierten.png",
            "layer": "middle",
            "position": {
                "x": 3750.196394835088,
                "y": 1759.7534958083047
            }
        },
        {
            "id": "1744397067272",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 1884.8340909016715,
                "y": 1499.8302961246661
            }
        },
        {
            "id": "1744397069058",
            "image": "plant-bol-1.png",
            "layer": "front",
            "position": {
                "x": 1950.4154846707022,
                "y": 1523.0303190603554
            }
        },
        {
            "id": "1744397076038",
            "image": "plant-lang-2.png",
            "layer": "back",
            "position": {
                "x": 2039.2153219596748,
                "y": 1479.0302885216577
            }
        },
        {
            "id": "1744397085840",
            "image": "plant-klein.png",
            "layer": "back",
            "position": {
                "x": 286.77868024543324,
                "y": 715.2966836453421
            }
        },
        {
            "id": "1744397088030",
            "image": "plant-klein.png",
            "layer": "back",
            "position": {
                "x": 240.3786736061383,
                "y": 648.8924823086908
            }
        }
    ],
    "boundingBox": [
        {
            "a": {
                "x": 119.80994454060271,
                "y": 168.9623149699031
            },
            "b": {
                "x": 217.80584982747985,
                "y": 419.29222754062016
            }
        },
        {
            "a": {
                "x": 217.80584982747985,
                "y": 419.29222754062016
            },
            "b": {
                "x": 277.80582467307266,
                "y": 689.4599486869996
            }
        },
        {
            "a": {
                "x": 277.80582467307266,
                "y": 689.4599486869996
            },
            "b": {
                "x": 437.80582467307266,
                "y": 941.4599486880993
            }
        },
        {
            "a": {
                "x": 437.80582467307266,
                "y": 941.4599486880993
            },
            "b": {
                "x": 642.6697220340553,
                "y": 1123.5278051641837
            }
        },
        {
            "a": {
                "x": 642.6697220340553,
                "y": 1123.5278051641837
            },
            "b": {
                "x": 839.6697220359838,
                "y": 1323.527805166672
            }
        },
        {
            "a": {
                "x": 839.6697220359838,
                "y": 1323.527805166672
            },
            "b": {
                "x": 971.6697220359888,
                "y": 1348.5278051666783
            }
        },
        {
            "a": {
                "x": 971.6697220359888,
                "y": 1348.5278051666783
            },
            "b": {
                "x": 1256.4212091096167,
                "y": 1437.862189302525
            }
        },
        {
            "a": {
                "x": 1256.4212091096167,
                "y": 1437.862189302525
            },
            "b": {
                "x": 1446.4499117437351,
                "y": 1489.835440584832
            }
        },
        {
            "a": {
                "x": 1446.4499117437351,
                "y": 1489.835440584832
            },
            "b": {
                "x": 1657.4499305573927,
                "y": 1522.8354227635614
            }
        },
        {
            "a": {
                "x": 1657.4499305573927,
                "y": 1522.8354227635614
            },
            "b": {
                "x": 1894.9072440970529,
                "y": 1568.7331883256304
            }
        },
        {
            "a": {
                "x": 1894.9072440970529,
                "y": 1568.7331883256304
            },
            "b": {
                "x": 2053.2084288450314,
                "y": 1598.7563625854293
            }
        },
        {
            "a": {
                "x": 2053.2084288450314,
                "y": 1598.7563625854293
            },
            "b": {
                "x": 2362.30527127934,
                "y": 1600.2686072682316
            }
        },
        {
            "a": {
                "x": 2362.30527127934,
                "y": 1600.2686072682316
            },
            "b": {
                "x": 2523.3055400939493,
                "y": 1618.2686197546293
            }
        },
        {
            "a": {
                "x": 2523.3055400939493,
                "y": 1618.2686197546293
            },
            "b": {
                "x": 2694.3055514006346,
                "y": 1644.2686202773968
            }
        },
        {
            "a": {
                "x": 2694.3055514006346,
                "y": 1644.2686202773968
            },
            "b": {
                "x": 2895.30555185945,
                "y": 1699.2686202985662
            }
        },
        {
            "a": {
                "x": 2895.30555185945,
                "y": 1699.2686202985662
            },
            "b": {
                "x": 3062.7651148676405,
                "y": 1758.8175382455004
            }
        },
        {
            "a": {
                "x": 3062.7651148676405,
                "y": 1758.8175382455004
            },
            "b": {
                "x": 3257.8361794425837,
                "y": 1821.8268381457883
            }
        },
        {
            "a": {
                "x": 3257.8361794425837,
                "y": 1821.8268381457883
            },
            "b": {
                "x": 3552.8363198378515,
                "y": 1883.8268562512706
            }
        },
        {
            "a": {
                "x": 3552.8363198378515,
                "y": 1883.8268562512706
            },
            "b": {
                "x": 3800.169531366266,
                "y": 1930.1018280808703
            }
        },
        {
            "a": {
                "x": 3800.169531366266,
                "y": 1930.1018280808703
            },
            "b": {
                "x": 4006.5192614592306,
                "y": 1985.438056397137
            }
        },
        {
            "a": {
                "x": 4006.5192614592306,
                "y": 1985.438056397137
            },
            "b": {
                "x": 4237.519261460116,
                "y": 2006.4380563979848
            }
        },
        {
            "a": {
                "x": 4237.519261460116,
                "y": 2006.4380563979848
            },
            "b": {
                "x": 4455.519261460116,
                "y": 2038.4380563979848
            }
        },
        {
            "a": {
                "x": 4455.519261460116,
                "y": 2038.4380563979848
            },
            "b": {
                "x": 4475.519261460116,
                "y": 2023.4380563979848
            }
        },
        {
            "a": {
                "x": 4475.519261460116,
                "y": 2023.4380563979848
            },
            "b": {
                "x": 4559.519261460116,
                "y": 2083.438056397985
            }
        },
        {
            "a": {
                "x": 4559.519261460116,
                "y": 2083.438056397985
            },
            "b": {
                "x": 4686.519261460116,
                "y": 2134.438056397985
            }
        },
        {
            "a": {
                "x": 4686.519261460116,
                "y": 2134.438056397985
            },
            "b": {
                "x": 4805.519261460116,
                "y": 2130.438056397985
            }
        },
        {
            "a": {
                "x": 4805.519261460116,
                "y": 2130.438056397985
            },
            "b": {
                "x": 5005.161610858285,
                "y": 2103.438056397985
            }
        },
        {
            "a": {
                "x": 5005.161610858285,
                "y": 2103.438056397985
            },
            "b": {
                "x": 5243.161612298512,
                "y": 2090.438056397985
            }
        },
        {
            "a": {
                "x": 5243.161612298512,
                "y": 2090.438056397985
            },
            "b": {
                "x": 5352.161612299817,
                "y": 2103.438056397985
            }
        },
        {
            "a": {
                "x": 5352.161612299817,
                "y": 2103.438056397985
            },
            "b": {
                "x": 5411.161612299858,
                "y": 2123.438056397985
            }
        },
        {
            "a": {
                "x": 5411.161612299858,
                "y": 2123.438056397985
            },
            "b": {
                "x": 5517.576213730931,
                "y": 2191.725642172423
            }
        },
        {
            "a": {
                "x": 5517.576213730931,
                "y": 2191.725642172423
            },
            "b": {
                "x": 5571.94596840787,
                "y": 2225.0259146229423
            }
        },
        {
            "a": {
                "x": 5571.94596840787,
                "y": 2225.0259146229423
            },
            "b": {
                "x": 5652.94747323237,
                "y": 2247.0271394632427
            }
        },
        {
            "a": {
                "x": 5652.94747323237,
                "y": 2247.0271394632427
            },
            "b": {
                "x": 5824.947633348928,
                "y": 2253.0272698310782
            }
        },
        {
            "a": {
                "x": 5824.947633348928,
                "y": 2253.0272698310782
            },
            "b": {
                "x": 5921.947641031496,
                "y": 2268.027276087524
            }
        },
        {
            "a": {
                "x": 5921.947641031496,
                "y": 2268.027276087524
            },
            "b": {
                "x": 6002.947641574718,
                "y": 2289.0272765299396
            }
        },
        {
            "a": {
                "x": 6002.947641574718,
                "y": 2289.0272765299396
            },
            "b": {
                "x": 6236.947641575955,
                "y": 2370.027276530951
            }
        },
        {
            "a": {
                "x": 6236.947641575955,
                "y": 2370.027276530951
            },
            "b": {
                "x": 6316.178795757056,
                "y": 2382.9994003321244
            }
        },
        {
            "a": {
                "x": 6316.178795757056,
                "y": 2382.9994003321244
            },
            "b": {
                "x": 6481.2394171039805,
                "y": 2406.999983845175
            }
        },
        {
            "a": {
                "x": 6481.2394171039805,
                "y": 2406.999983845175
            },
            "b": {
                "x": 6633.242966224055,
                "y": 2412.999999535781
            }
        },
        {
            "a": {
                "x": 6633.242966224055,
                "y": 2412.999999535781
            },
            "b": {
                "x": 6779.243185369653,
                "y": 2404.9999999915094
            }
        },
        {
            "a": {
                "x": 6779.243185369653,
                "y": 2404.9999999915094
            },
            "b": {
                "x": 6909.24319486276,
                "y": 2420.9999999999727
            }
        },
        {
            "a": {
                "x": 6909.24319486276,
                "y": 2420.9999999999727
            },
            "b": {
                "x": 6987.243194962989,
                "y": 2449.999999999998
            }
        },
        {
            "a": {
                "x": 6987.243194962989,
                "y": 2449.999999999998
            },
            "b": {
                "x": 7100.243194963064,
                "y": 2510.999999999998
            }
        },
        {
            "a": {
                "x": 7100.243194963064,
                "y": 2510.999999999998
            },
            "b": {
                "x": 7152.435271703177,
                "y": 2558.1944479045246
            }
        },
        {
            "a": {
                "x": 7152.435271703177,
                "y": 2558.1944479045246
            },
            "b": {
                "x": 7314.435305974576,
                "y": 2697.1944684594414
            }
        },
        {
            "a": {
                "x": 7314.435305974576,
                "y": 2697.1944684594414
            },
            "b": {
                "x": 7402.435306141509,
                "y": 2775.1944685594353
            }
        },
        {
            "a": {
                "x": 7402.435306141509,
                "y": 2775.1944685594353
            },
            "b": {
                "x": 7549.2813508823865,
                "y": 2979.952463605623
            }
        },
        {
            "a": {
                "x": 7549.2813508823865,
                "y": 2979.952463605623
            },
            "b": {
                "x": 7643.486999789165,
                "y": 3109.1830147883693
            }
        },
        {
            "a": {
                "x": 7643.486999789165,
                "y": 3109.1830147883693
            },
            "b": {
                "x": 7678.492933849229,
                "y": 3169.1896176819023
            }
        },
        {
            "a": {
                "x": 7678.492933849229,
                "y": 3169.1896176819023
            },
            "b": {
                "x": 7715.492937878238,
                "y": 3260.189622149025
            }
        },
        {
            "a": {
                "x": 7715.492937878238,
                "y": 3260.189622149025
            },
            "b": {
                "x": 7727.492938056843,
                "y": 3327.1896223469826
            }
        },
        {
            "a": {
                "x": 7727.492938056843,
                "y": 3327.1896223469826
            },
            "b": {
                "x": 7728.492938064953,
                "y": 3335.1896223559706
            }
        },
        {
            "a": {
                "x": 7728.492938064953,
                "y": 3335.1896223559706
            },
            "b": {
                "x": 7749.84386100264,
                "y": 3441.8340960306696
            }
        },
        {
            "a": {
                "x": 7749.84386100264,
                "y": 3441.8340960306696
            },
            "b": {
                "x": 7806.340103158562,
                "y": 3522.845502872681
            }
        },
        {
            "a": {
                "x": 7806.340103158562,
                "y": 3522.845502872681
            },
            "b": {
                "x": 7860.360795221638,
                "y": 3537.7082490912194
            }
        },
        {
            "a": {
                "x": 7860.360795221638,
                "y": 3537.7082490912194
            },
            "b": {
                "x": 8031.36116602282,
                "y": 3506.7056941111928
            }
        },
        {
            "a": {
                "x": 8031.36116602282,
                "y": 3506.7056941111928
            },
            "b": {
                "x": 8183.361175587075,
                "y": 3447.7056274191946
            }
        },
        {
            "a": {
                "x": 8183.361175587075,
                "y": 3447.7056274191946
            },
            "b": {
                "x": 8625.330227964738,
                "y": 3267.0873339673376
            }
        },
        {
            "a": {
                "x": 8625.330227964738,
                "y": 3267.0873339673376
            },
            "b": {
                "x": 8844.265672822028,
                "y": 3199.0776070234033
            }
        },
        {
            "a": {
                "x": 8844.265672822028,
                "y": 3199.0776070234033
            },
            "b": {
                "x": 8956.281224140792,
                "y": 3176.0774561930843
            }
        },
        {
            "a": {
                "x": 8956.281224140792,
                "y": 3176.0774561930843
            },
            "b": {
                "x": 9083.28132167054,
                "y": 3162.0774552690314
            }
        },
        {
            "a": {
                "x": 9083.28132167054,
                "y": 3162.0774552690314
            },
            "b": {
                "x": 9192.28132483534,
                "y": 3186.077455239192
            }
        },
        {
            "a": {
                "x": 9192.28132483534,
                "y": 3186.077455239192
            },
            "b": {
                "x": 9325.696585816031,
                "y": 3233.0774552365656
            }
        },
        {
            "a": {
                "x": 9325.696585816031,
                "y": 3233.0774552365656
            },
            "b": {
                "x": 9456.712863101075,
                "y": 3303.0774552365656
            }
        },
        {
            "a": {
                "x": 9456.712863101075,
                "y": 3303.0774552365656
            },
            "b": {
                "x": 9559.198490388584,
                "y": 3385.6983567439443
            }
        },
        {
            "a": {
                "x": 9559.198490388584,
                "y": 3385.6983567439443
            },
            "b": {
                "x": 9664.301181537168,
                "y": 3519.8361423396495
            }
        },
        {
            "a": {
                "x": 9664.301181537168,
                "y": 3519.8361423396495
            },
            "b": {
                "x": 9736.304753328204,
                "y": 3608.840974591516
            }
        },
        {
            "a": {
                "x": 9736.304753328204,
                "y": 3608.840974591516
            },
            "b": {
                "x": 9806.30495439351,
                "y": 3663.841247430319
            }
        },
        {
            "a": {
                "x": 9806.30495439351,
                "y": 3663.841247430319
            },
            "b": {
                "x": 9891.304959363837,
                "y": 3709.84125418508
            }
        },
        {
            "a": {
                "x": 9891.304959363837,
                "y": 3709.84125418508
            },
            "b": {
                "x": 10001.421261380734,
                "y": 3760.5544621403333
            }
        },
        {
            "a": {
                "x": 10001.421261380734,
                "y": 3760.5544621403333
            },
            "b": {
                "x": 10082.43805230392,
                "y": 3829.3295049745325
            }
        },
        {
            "a": {
                "x": 10082.43805230392,
                "y": 3829.3295049745325
            },
            "b": {
                "x": 10154.4524705412,
                "y": 3943.332813968762
            }
        },
        {
            "a": {
                "x": 10154.4524705412,
                "y": 3943.332813968762
            },
            "b": {
                "x": 10210.915450196253,
                "y": 4089.4392820518724
            }
        },
        {
            "a": {
                "x": 10210.915450196253,
                "y": 4089.4392820518724
            },
            "b": {
                "x": 10261.990343834532,
                "y": 4194.776062168053
            }
        },
        {
            "a": {
                "x": 10261.990343834532,
                "y": 4194.776062168053
            },
            "b": {
                "x": 10313.99367594365,
                "y": 4268.791353132572
            }
        },
        {
            "a": {
                "x": 10313.99367594365,
                "y": 4268.791353132572
            },
            "b": {
                "x": 10364.99391902134,
                "y": 4306.792477343659
            }
        },
        {
            "a": {
                "x": 10364.99391902134,
                "y": 4306.792477343659
            },
            "b": {
                "x": 10469.993928159056,
                "y": 4307.792519779065
            }
        },
        {
            "a": {
                "x": 10469.993928159056,
                "y": 4307.792519779065
            },
            "b": {
                "x": 10542.993929058694,
                "y": 4296.792523963239
            }
        },
        {
            "a": {
                "x": 10542.993929058694,
                "y": 4296.792523963239
            },
            "b": {
                "x": 10656.993929115102,
                "y": 4299.792524225879
            }
        },
        {
            "a": {
                "x": 10656.993929115102,
                "y": 4299.792524225879
            },
            "b": {
                "x": 10773.993929115722,
                "y": 4313.792524228938
            }
        },
        {
            "a": {
                "x": 10773.993929115722,
                "y": 4313.792524228938
            },
            "b": {
                "x": 10862.993929115722,
                "y": 4313.792524228938
            }
        },
        {
            "a": {
                "x": 10862.993929115722,
                "y": 4313.792524228938
            },
            "b": {
                "x": 11001.597958133421,
                "y": 4252.696601632577
            }
        },
        {
            "a": {
                "x": 11001.597958133421,
                "y": 4252.696601632577
            },
            "b": {
                "x": 11087.597962816153,
                "y": 4141.099795256907
            }
        },
        {
            "a": {
                "x": 11087.597962816153,
                "y": 4141.099795256907
            },
            "b": {
                "x": 11147.597962816988,
                "y": 3845.0998771648974
            }
        },
        {
            "a": {
                "x": 11147.597962816988,
                "y": 3845.0998771648974
            },
            "b": {
                "x": 11168.597962816988,
                "y": 3803.0998773945466
            }
        },
        {
            "a": {
                "x": 11168.597962816988,
                "y": 3803.0998773945466
            },
            "b": {
                "x": 11133.597962816988,
                "y": 3467.6959667250603
            }
        },
        {
            "a": {
                "x": 11133.597962816988,
                "y": 3467.6959667250603
            },
            "b": {
                "x": 11081.597962816988,
                "y": 3327.989647512148
            }
        },
        {
            "a": {
                "x": 11081.597962816988,
                "y": 3327.989647512148
            },
            "b": {
                "x": 10940.792113161338,
                "y": 3209.0150462110278
            }
        },
        {
            "a": {
                "x": 10940.792113161338,
                "y": 3209.0150462110278
            },
            "b": {
                "x": 10704.506630531458,
                "y": 3072.7305829804163
            }
        },
        {
            "a": {
                "x": 10704.506630531458,
                "y": 3072.7305829804163
            },
            "b": {
                "x": 10412.506436208456,
                "y": 2997.7303886636323
            }
        },
        {
            "a": {
                "x": 10412.506436208456,
                "y": 2997.7303886636323
            },
            "b": {
                "x": 10332.506434354113,
                "y": 2990.730386809313
            }
        },
        {
            "a": {
                "x": 10332.506434354113,
                "y": 2990.730386809313
            },
            "b": {
                "x": 10233.506434346447,
                "y": 2994.7303868016393
            }
        },
        {
            "a": {
                "x": 10233.506434346447,
                "y": 2994.7303868016393
            },
            "b": {
                "x": 10198.50643434605,
                "y": 2990.730386801248
            }
        },
        {
            "a": {
                "x": 10198.50643434605,
                "y": 2990.730386801248
            },
            "b": {
                "x": 10181.506434346009,
                "y": 2997.730386801184
            }
        },
        {
            "a": {
                "x": 10181.506434346009,
                "y": 2997.730386801184
            },
            "b": {
                "x": 10162.506434346009,
                "y": 2980.730386801184
            }
        },
        {
            "a": {
                "x": 10162.506434346009,
                "y": 2980.730386801184
            },
            "b": {
                "x": 10177.506434346009,
                "y": 2955.730386801184
            }
        },
        {
            "a": {
                "x": 10177.506434346009,
                "y": 2955.730386801184
            },
            "b": {
                "x": 10334.506434346009,
                "y": 2899.730386801184
            }
        },
        {
            "a": {
                "x": 10334.506434346009,
                "y": 2899.730386801184
            },
            "b": {
                "x": 10445.388247761839,
                "y": 2873.2453140387715
            }
        },
        {
            "a": {
                "x": 10445.388247761839,
                "y": 2873.2453140387715
            },
            "b": {
                "x": 10514.296463873923,
                "y": 2877.0928368828622
            }
        },
        {
            "a": {
                "x": 10514.296463873923,
                "y": 2877.0928368828622
            },
            "b": {
                "x": 10707.294763637105,
                "y": 2908.033101849292
            }
        },
        {
            "a": {
                "x": 10707.294763637105,
                "y": 2908.033101849292
            },
            "b": {
                "x": 10839.294753901393,
                "y": 2914.032026979455
            }
        },
        {
            "a": {
                "x": 10839.294753901393,
                "y": 2914.032026979455
            },
            "b": {
                "x": 11134.919546128607,
                "y": 2883.3525090166045
            }
        },
        {
            "a": {
                "x": 11134.919546128607,
                "y": 2883.3525090166045
            },
            "b": {
                "x": 11307.700446161409,
                "y": 2880.3524708070304
            }
        },
        {
            "a": {
                "x": 11307.700446161409,
                "y": 2880.3524708070304
            },
            "b": {
                "x": 11463.700492378302,
                "y": 2886.35247080502
            }
        },
        {
            "a": {
                "x": 11463.700492378302,
                "y": 2886.35247080502
            },
            "b": {
                "x": 11555.70049301886,
                "y": 2926.352470804999
            }
        },
        {
            "a": {
                "x": 11555.70049301886,
                "y": 2926.352470804999
            },
            "b": {
                "x": 11611.560318538022,
                "y": 2991.538123260553
            }
        },
        {
            "a": {
                "x": 11611.560318538022,
                "y": 2991.538123260553
            },
            "b": {
                "x": 11712.46377030702,
                "y": 3003.6196649113945
            }
        },
        {
            "a": {
                "x": 11712.46377030702,
                "y": 3003.6196649113945
            },
            "b": {
                "x": 11771.508582421555,
                "y": 2989.6235788652357
            }
        },
        {
            "a": {
                "x": 11771.508582421555,
                "y": 2989.6235788652357
            },
            "b": {
                "x": 11807.511085866541,
                "y": 2971.623794746566
            }
        },
        {
            "a": {
                "x": 11807.511085866541,
                "y": 2971.623794746566
            },
            "b": {
                "x": 11838.511351254594,
                "y": 2975.6238175109856
            }
        },
        {
            "a": {
                "x": 11838.511351254594,
                "y": 2975.6238175109856
            },
            "b": {
                "x": 11909.511365456376,
                "y": 2954.623818725256
            }
        },
        {
            "a": {
                "x": 11909.511365456376,
                "y": 2954.623818725256
            },
            "b": {
                "x": 12005.511366429328,
                "y": 2979.6238188083234
            }
        },
        {
            "a": {
                "x": 12005.511366429328,
                "y": 2979.6238188083234
            },
            "b": {
                "x": 12057.511366460285,
                "y": 3050.6238188109646
            }
        },
        {
            "a": {
                "x": 12057.511366460285,
                "y": 3050.6238188109646
            },
            "b": {
                "x": 12080.511366463485,
                "y": 3090.6238188112293
            }
        },
        {
            "a": {
                "x": 12080.511366463485,
                "y": 3090.6238188112293
            },
            "b": {
                "x": 12089.291280839436,
                "y": 3160.7334768671594
            }
        },
        {
            "a": {
                "x": 12089.291280839436,
                "y": 3160.7334768671594
            },
            "b": {
                "x": 12049.054924522885,
                "y": 3252.0181591764544
            }
        },
        {
            "a": {
                "x": 12049.054924522885,
                "y": 3252.0181591764544
            },
            "b": {
                "x": 11935.11187888563,
                "y": 3445.0383339711457
            }
        },
        {
            "a": {
                "x": 11935.11187888563,
                "y": 3445.0383339711457
            },
            "b": {
                "x": 11911.111880189224,
                "y": 3540.0383344161937
            }
        },
        {
            "a": {
                "x": 11911.111880189224,
                "y": 3540.0383344161937
            },
            "b": {
                "x": 11914.111880308914,
                "y": 3598.038334457009
            }
        },
        {
            "a": {
                "x": 11914.111880308914,
                "y": 3598.038334457009
            },
            "b": {
                "x": 11949.11188032453,
                "y": 3664.0383344623324
            }
        },
        {
            "a": {
                "x": 11949.11188032453,
                "y": 3664.0383344623324
            },
            "b": {
                "x": 12006.683703548355,
                "y": 3733.4367493513405
            }
        },
        {
            "a": {
                "x": 12046.683703506347,
                "y": 3807.436749368921
            },
            "b": {
                "x": 12054.085012440215,
                "y": 3945.722373232784
            }
        },
        {
            "a": {
                "x": 12006.683703548355,
                "y": 3733.4367493513405
            },
            "b": {
                "x": 12046.683703506347,
                "y": 3807.436749368921
            }
        },
        {
            "a": {
                "x": 12054.085012440215,
                "y": 3945.722373232784
            },
            "b": {
                "x": 11985.139633803541,
                "y": 4175.008026538453
            }
        },
        {
            "a": {
                "x": 11985.139633803541,
                "y": 4175.008026538453
            },
            "b": {
                "x": 11997.127421435427,
                "y": 4195.011507251715
            }
        },
        {
            "a": {
                "x": 11997.127421435427,
                "y": 4195.011507251715
            },
            "b": {
                "x": 11998.12513080211,
                "y": 4347.012153054018
            }
        },
        {
            "a": {
                "x": 11998.12513080211,
                "y": 4347.012153054018
            },
            "b": {
                "x": 11974.124963138513,
                "y": 4435.012199967323
            }
        },
        {
            "a": {
                "x": 11974.124963138513,
                "y": 4435.012199967323
            },
            "b": {
                "x": 11926.124929034426,
                "y": 4505.012209478904
            }
        },
        {
            "a": {
                "x": 11926.124929034426,
                "y": 4505.012209478904
            },
            "b": {
                "x": 11842.566680383372,
                "y": 4556.410286965541
            }
        },
        {
            "a": {
                "x": 11842.566680383372,
                "y": 4556.410286965541
            },
            "b": {
                "x": 11726.566014339438,
                "y": 4644.410552744224
            }
        },
        {
            "a": {
                "x": 11726.566014339438,
                "y": 4644.410552744224
            },
            "b": {
                "x": 11626.566012395226,
                "y": 4692.410553517324
            }
        },
        {
            "a": {
                "x": 11626.566012395226,
                "y": 4692.410553517324
            },
            "b": {
                "x": 11553.566012170317,
                "y": 4713.410553606714
            }
        },
        {
            "a": {
                "x": 11553.566012170317,
                "y": 4713.410553606714
            },
            "b": {
                "x": 11509.566012167752,
                "y": 4704.410553607732
            }
        },
        {
            "a": {
                "x": 11509.566012167752,
                "y": 4704.410553607732
            },
            "b": {
                "x": 11385.566012167414,
                "y": 4737.410553607865
            }
        },
        {
            "a": {
                "x": 11385.566012167414,
                "y": 4737.410553607865
            },
            "b": {
                "x": 11226.566012167414,
                "y": 4803.410553607865
            }
        },
        {
            "a": {
                "x": 11226.566012167414,
                "y": 4803.410553607865
            },
            "b": {
                "x": 11212.566012167414,
                "y": 4797.410553607865
            }
        },
        {
            "a": {
                "x": 11212.566012167414,
                "y": 4797.410553607865
            },
            "b": {
                "x": 11098.24245260526,
                "y": 4855.240143166769
            }
        },
        {
            "a": {
                "x": 11093.206978941604,
                "y": 4855.363395583281
            },
            "b": {
                "x": 11033.77146563557,
                "y": 4909.395943938563
            }
        },
        {
            "a": {
                "x": 11033.77146563557,
                "y": 4909.395943938563
            },
            "b": {
                "x": 10984.65973015949,
                "y": 4932.398331130745
            }
        },
        {
            "a": {
                "x": 10984.65973015949,
                "y": 4932.398331130745
            },
            "b": {
                "x": 10992.655351103136,
                "y": 4950.398422167551
            }
        },
        {
            "a": {
                "x": 10992.655351103136,
                "y": 4950.398422167551
            },
            "b": {
                "x": 10918.653852233416,
                "y": 5020.398453061008
            }
        },
        {
            "a": {
                "x": 10918.653852233416,
                "y": 5020.398453061008
            },
            "b": {
                "x": 10896.653765088016,
                "y": 5075.398454841632
            }
        },
        {
            "a": {
                "x": 10896.653765088016,
                "y": 5075.398454841632
            },
            "b": {
                "x": 10912.653761090065,
                "y": 5116.398454922966
            }
        },
        {
            "a": {
                "x": 10912.653761090065,
                "y": 5116.398454922966
            },
            "b": {
                "x": 10917.653761073248,
                "y": 5177.398454923306
            }
        },
        {
            "a": {
                "x": 10917.653761073248,
                "y": 5177.398454923306
            },
            "b": {
                "x": 10873.400553347403,
                "y": 5268.360083495992
            }
        },
        {
            "a": {
                "x": 10873.400553347403,
                "y": 5268.360083495992
            },
            "b": {
                "x": 10812.32751189346,
                "y": 5411.88796491265
            }
        },
        {
            "a": {
                "x": 10812.32751189346,
                "y": 5411.88796491265
            },
            "b": {
                "x": 10814.32641348978,
                "y": 5527.912395688112
            }
        },
        {
            "a": {
                "x": 10814.32641348978,
                "y": 5527.912395688112
            },
            "b": {
                "x": 10848.326402431472,
                "y": 5653.912646355506
            }
        },
        {
            "a": {
                "x": 10848.326402431472,
                "y": 5653.912646355506
            },
            "b": {
                "x": 10881.326402315166,
                "y": 5706.912649006541
            }
        },
        {
            "a": {
                "x": 10881.326402315166,
                "y": 5706.912649006541
            },
            "b": {
                "x": 10944.107105465244,
                "y": 5752.995241750754
            }
        },
        {
            "a": {
                "x": 10944.107105465244,
                "y": 5752.995241750754
            },
            "b": {
                "x": 11072.123073337858,
                "y": 5796.916625794939
            }
        },
        {
            "a": {
                "x": 11072.123073337858,
                "y": 5796.916625794939
            },
            "b": {
                "x": 11317.123507922239,
                "y": 5826.914421481784
            }
        },
        {
            "a": {
                "x": 11317.123507922239,
                "y": 5826.914421481784
            },
            "b": {
                "x": 11364.123516991134,
                "y": 5829.914374957241
            }
        },
        {
            "a": {
                "x": 11364.123516991134,
                "y": 5829.914374957241
            },
            "b": {
                "x": 11555.12351703266,
                "y": 5882.914374743228
            }
        },
        {
            "a": {
                "x": 11555.12351703266,
                "y": 5882.914374743228
            },
            "b": {
                "x": 11615.123517033078,
                "y": 5893.9143747410635
            }
        },
        {
            "a": {
                "x": 11615.123517033078,
                "y": 5893.9143747410635
            },
            "b": {
                "x": 11777.123517033078,
                "y": 5864.914374740976
            }
        },
        {
            "a": {
                "x": 11777.123517033078,
                "y": 5864.914374740976
            },
            "b": {
                "x": 11820.123517033078,
                "y": 5854.914374740976
            }
        },
        {
            "a": {
                "x": 11820.123517033078,
                "y": 5854.914374740976
            },
            "b": {
                "x": 11864.665563517552,
                "y": 5861.914374740976
            }
        },
        {
            "a": {
                "x": 11864.665563517552,
                "y": 5861.914374740976
            },
            "b": {
                "x": 11958.008424238296,
                "y": 5820.914374740976
            }
        },
        {
            "a": {
                "x": 11958.008424238296,
                "y": 5820.914374740976
            },
            "b": {
                "x": 12045.031774491632,
                "y": 5753.914374740976
            }
        },
        {
            "a": {
                "x": 12045.031774491632,
                "y": 5753.914374740976
            },
            "b": {
                "x": 12080.031863063849,
                "y": 5688.914374740976
            }
        },
        {
            "a": {
                "x": 12080.031863063849,
                "y": 5688.914374740976
            },
            "b": {
                "x": 12080.031873495564,
                "y": 5627.914374740976
            }
        },
        {
            "a": {
                "x": 12080.031873495564,
                "y": 5627.914374740976
            },
            "b": {
                "x": 12058.031875409726,
                "y": 5623.914374740976
            }
        },
        {
            "a": {
                "x": 12058.031875409726,
                "y": 5623.914374740976
            },
            "b": {
                "x": 12044.0318754561,
                "y": 5544.914374740976
            }
        },
        {
            "a": {
                "x": 12044.0318754561,
                "y": 5544.914374740976
            },
            "b": {
                "x": 12005.031875456203,
                "y": 5463.914374740976
            }
        },
        {
            "a": {
                "x": 12005.031875456203,
                "y": 5463.914374740976
            },
            "b": {
                "x": 11924.031875456203,
                "y": 5365.385119251527
            }
        },
        {
            "a": {
                "x": 11924.031875456203,
                "y": 5365.385119251527
            },
            "b": {
                "x": 11919.031875456203,
                "y": 5300.32430873369
            }
        },
        {
            "a": {
                "x": 11919.031875456203,
                "y": 5300.32430873369
            },
            "b": {
                "x": 11910.031875456203,
                "y": 5273.323917160628
            }
        },
        {
            "a": {
                "x": 11910.031875456203,
                "y": 5273.323917160628
            },
            "b": {
                "x": 11927.031875456203,
                "y": 4992.164805733708
            }
        },
        {
            "a": {
                "x": 11927.031875456203,
                "y": 4992.164805733708
            },
            "b": {
                "x": 11956.031875456203,
                "y": 4906.983466392781
            }
        },
        {
            "a": {
                "x": 11956.031875456203,
                "y": 4906.983466392781
            },
            "b": {
                "x": 11983.031875456203,
                "y": 4874.981047256723
            }
        },
        {
            "a": {
                "x": 11983.031875456203,
                "y": 4874.981047256723
            },
            "b": {
                "x": 12084.031875456203,
                "y": 4821.980685264691
            }
        },
        {
            "a": {
                "x": 12084.031875456203,
                "y": 4821.980685264691
            },
            "b": {
                "x": 12106.031875456203,
                "y": 4817.980685261336
            }
        },
        {
            "a": {
                "x": 12106.031875456203,
                "y": 4817.980685261336
            },
            "b": {
                "x": 12133.031875456203,
                "y": 4803.980685260952
            }
        },
        {
            "a": {
                "x": 12133.031875456203,
                "y": 4803.980685260952
            },
            "b": {
                "x": 12169.031875456203,
                "y": 4805.9806852609245
            }
        },
        {
            "a": {
                "x": 12169.031875456203,
                "y": 4805.9806852609245
            },
            "b": {
                "x": 12207.041508216087,
                "y": 4786.669915040228
            }
        },
        {
            "a": {
                "x": 12207.041508216087,
                "y": 4786.669915040228
            },
            "b": {
                "x": 12248.40213873924,
                "y": 4810.375695633022
            }
        },
        {
            "a": {
                "x": 12248.40213873924,
                "y": 4810.375695633022
            },
            "b": {
                "x": 12284.448557067843,
                "y": 4880.366021555099
            }
        },
        {
            "a": {
                "x": 12284.448557067843,
                "y": 4880.366021555099
            },
            "b": {
                "x": 12306.449691852475,
                "y": 4970.365788291159
            }
        },
        {
            "a": {
                "x": 12306.449691852475,
                "y": 4970.365788291159
            },
            "b": {
                "x": 12314.449721789142,
                "y": 4986.365782165934
            }
        },
        {
            "a": {
                "x": 12314.449721789142,
                "y": 4986.365782165934
            },
            "b": {
                "x": 12348.449728071793,
                "y": 4883.365780882247
            }
        },
        {
            "a": {
                "x": 12348.449728071793,
                "y": 4883.365780882247
            },
            "b": {
                "x": 12369.449728155876,
                "y": 4757.365780865089
            }
        },
        {
            "a": {
                "x": 12369.449728155876,
                "y": 4757.365780865089
            },
            "b": {
                "x": 12453.308286795234,
                "y": 4550.485106297454
            }
        },
        {
            "a": {
                "x": 12501.308286795234,
                "y": 4179.485106297438
            },
            "b": {
                "x": 12499.977099549938,
                "y": 4128.517481280431
            }
        },
        {
            "a": {
                "x": 12453.308286795234,
                "y": 4550.485106297454
            },
            "b": {
                "x": 12462.308286795234,
                "y": 4454.485106297438
            }
        },
        {
            "a": {
                "x": 12462.308286795234,
                "y": 4454.485106297438
            },
            "b": {
                "x": 12483.308286795234,
                "y": 4406.485106297438
            }
        },
        {
            "a": {
                "x": 12483.308286795234,
                "y": 4406.485106297438
            },
            "b": {
                "x": 12481.308286795234,
                "y": 4278.485106297438
            }
        },
        {
            "a": {
                "x": 12481.308286795234,
                "y": 4278.485106297438
            },
            "b": {
                "x": 12501.308286795234,
                "y": 4179.485106297438
            }
        },
        {
            "a": {
                "x": 12499.977099549938,
                "y": 4128.517481280431
            },
            "b": {
                "x": 12527.650986033512,
                "y": 4032.743337995597
            }
        },
        {
            "a": {
                "x": 12527.650986033512,
                "y": 4032.743337995597
            },
            "b": {
                "x": 12592.654146503402,
                "y": 3908.7380663948397
            }
        },
        {
            "a": {
                "x": 12592.654146503402,
                "y": 3908.7380663948397
            },
            "b": {
                "x": 12643.654360168104,
                "y": 3839.7377097716276
            }
        },
        {
            "a": {
                "x": 12643.654360168104,
                "y": 3839.7377097716276
            },
            "b": {
                "x": 12724.654386356797,
                "y": 3780.7376660472974
            }
        },
        {
            "a": {
                "x": 12724.654386356797,
                "y": 3780.7376660472974
            },
            "b": {
                "x": 12793.65438682545,
                "y": 3754.7376652646713
            }
        },
        {
            "a": {
                "x": 12793.65438682545,
                "y": 3754.7376652646713
            },
            "b": {
                "x": 12877.654386845215,
                "y": 3749.737665231666
            }
        },
        {
            "a": {
                "x": 12870.743576421302,
                "y": 3750.8487006380415
            },
            "b": {
                "x": 12906.743576421302,
                "y": 3751.8487006380415
            }
        },
        {
            "a": {
                "x": 12906.743576421302,
                "y": 3751.8487006380415
            },
            "b": {
                "x": 12989.743576421302,
                "y": 3685.8487006380415
            }
        },
        {
            "a": {
                "x": 12989.743576421302,
                "y": 3685.8487006380415
            },
            "b": {
                "x": 13039.743576421302,
                "y": 3647.8487006380415
            }
        },
        {
            "a": {
                "x": 13039.743576421302,
                "y": 3647.8487006380415
            },
            "b": {
                "x": 13102.743576421302,
                "y": 3523.8487006380415
            }
        },
        {
            "a": {
                "x": 13102.743576421302,
                "y": 3523.8487006380415
            },
            "b": {
                "x": 13061.743576421302,
                "y": 3458.8487006380415
            }
        },
        {
            "a": {
                "x": 13061.743576421302,
                "y": 3458.8487006380415
            },
            "b": {
                "x": 12945.89961476855,
                "y": 3356.2264707323375
            }
        },
        {
            "a": {
                "x": 12945.89961476855,
                "y": 3356.2264707323375
            },
            "b": {
                "x": 12912.620284633933,
                "y": 3343.8952240936314
            }
        },
        {
            "a": {
                "x": 12912.620284633933,
                "y": 3343.8952240936314
            },
            "b": {
                "x": 12844.611409766365,
                "y": 3301.8862673603107
            }
        },
        {
            "a": {
                "x": 12844.611409766365,
                "y": 3301.8862673603107
            },
            "b": {
                "x": 12752.61140710894,
                "y": 3235.886264700023
            }
        },
        {
            "a": {
                "x": 12752.61140710894,
                "y": 3235.886264700023
            },
            "b": {
                "x": 12693.611407103212,
                "y": 3175.8862646942925
            }
        },
        {
            "a": {
                "x": 12693.611407103212,
                "y": 3175.8862646942925
            },
            "b": {
                "x": 12689.611407103,
                "y": 3155.88626469405
            }
        },
        {
            "a": {
                "x": 12689.611407103,
                "y": 3155.88626469405
            },
            "b": {
                "x": 12653.611407103,
                "y": 3122.88626469405
            }
        },
        {
            "a": {
                "x": 12653.611407103,
                "y": 3122.88626469405
            },
            "b": {
                "x": 12620.611407103,
                "y": 3002.457008944996
            }
        },
        {
            "a": {
                "x": 12620.611407103,
                "y": 3002.457008944996
            },
            "b": {
                "x": 12617.611407103,
                "y": 2851.320578372301
            }
        },
        {
            "a": {
                "x": 12617.611407103,
                "y": 2851.320578372301
            },
            "b": {
                "x": 12643.611407103,
                "y": 2764.2472338184416
            }
        },
        {
            "a": {
                "x": 12643.611407103,
                "y": 2764.2472338184416
            },
            "b": {
                "x": 12645.611407103,
                "y": 2726.243138341552
            }
        },
        {
            "a": {
                "x": 12645.611407103,
                "y": 2726.243138341552
            },
            "b": {
                "x": 12696.731138214494,
                "y": 2582.0947580601573
            }
        },
        {
            "a": {
                "x": 12696.731138214494,
                "y": 2582.0947580601573
            },
            "b": {
                "x": 12710.93102047012,
                "y": 2532.5570758508866
            }
        },
        {
            "a": {
                "x": 12710.93102047012,
                "y": 2532.5570758508866
            },
            "b": {
                "x": 12763.931188090653,
                "y": 2433.553837210623
            }
        },
        {
            "a": {
                "x": 12763.931188090653,
                "y": 2433.553837210623
            },
            "b": {
                "x": 12797.93118830699,
                "y": 2394.7016163352773
            }
        },
        {
            "a": {
                "x": 12797.93118830699,
                "y": 2394.7016163352773
            },
            "b": {
                "x": 12828.93118830699,
                "y": 2397.5729574808265
            }
        },
        {
            "a": {
                "x": 12828.93118830699,
                "y": 2397.5729574808265
            },
            "b": {
                "x": 12894.93118830699,
                "y": 2373.4265753825725
            }
        },
        {
            "a": {
                "x": 12894.93118830699,
                "y": 2373.4265753825725
            },
            "b": {
                "x": 13007.93118830699,
                "y": 2359.4256251336083
            }
        },
        {
            "a": {
                "x": 13007.93118830699,
                "y": 2359.4256251336083
            },
            "b": {
                "x": 13153.45939560819,
                "y": 2323.5179308699207
            }
        },
        {
            "a": {
                "x": 13153.45939560819,
                "y": 2323.5179308699207
            },
            "b": {
                "x": 13399.167421026192,
                "y": 2194.428941110479
            }
        },
        {
            "a": {
                "x": 13399.167421026192,
                "y": 2194.428941110479
            },
            "b": {
                "x": 13514.238127009303,
                "y": 2093.426796482502
            }
        },
        {
            "a": {
                "x": 13514.238127009303,
                "y": 2093.426796482502
            },
            "b": {
                "x": 13537.241530678008,
                "y": 2091.4266955630587
            }
        },
        {
            "a": {
                "x": 13537.241530678008,
                "y": 2091.4266955630587
            },
            "b": {
                "x": 13637.03396049628,
                "y": 1912.9029320633779
            }
        },
        {
            "a": {
                "x": 13637.03396049628,
                "y": 1912.9029320633779
            },
            "b": {
                "x": 13708.577041005343,
                "y": 1867.3585992319393
            }
        },
        {
            "a": {
                "x": 13708.577041005343,
                "y": 1867.3585992319393
            },
            "b": {
                "x": 13732.780726310815,
                "y": 1890.154866357865
            }
        },
        {
            "a": {
                "x": 13732.780726310815,
                "y": 1890.154866357865
            },
            "b": {
                "x": 13722.667849363108,
                "y": 2078.6377669495805
            }
        },
        {
            "a": {
                "x": 13722.667849363108,
                "y": 2078.6377669495805
            },
            "b": {
                "x": 13725.998943695939,
                "y": 2182.6750389038325
            }
        },
        {
            "a": {
                "x": 13725.998943695939,
                "y": 2182.6750389038325
            },
            "b": {
                "x": 13767.144448919154,
                "y": 2256.735642491022
            }
        },
        {
            "a": {
                "x": 13767.144448919154,
                "y": 2256.735642491022
            },
            "b": {
                "x": 13817.15327523202,
                "y": 2346.7392242972846
            }
        },
        {
            "a": {
                "x": 13817.15327523202,
                "y": 2346.7392242972846
            },
            "b": {
                "x": 13834.153697753869,
                "y": 2430.7393938204605
            }
        },
        {
            "a": {
                "x": 13834.153697753869,
                "y": 2430.7393938204605
            },
            "b": {
                "x": 13828.15376460397,
                "y": 2506.6360982898796
            }
        },
        {
            "a": {
                "x": 13828.15376460397,
                "y": 2506.6360982898796
            },
            "b": {
                "x": 13792.153764607097,
                "y": 2571.33406702653
            }
        },
        {
            "a": {
                "x": 13792.153764607097,
                "y": 2571.33406702653
            },
            "b": {
                "x": 13730.15376460733,
                "y": 2637.831602398768
            }
        },
        {
            "a": {
                "x": 13730.15376460733,
                "y": 2637.831602398768
            },
            "b": {
                "x": 13649.153764607343,
                "y": 2718.908724529676
            }
        },
        {
            "a": {
                "x": 13649.153764607343,
                "y": 2718.908724529676
            },
            "b": {
                "x": 13594.153764607343,
                "y": 2786.9143863287286
            }
        },
        {
            "a": {
                "x": 13594.153764607343,
                "y": 2786.9143863287286
            },
            "b": {
                "x": 13572.228304005654,
                "y": 2885.1288872123114
            }
        },
        {
            "a": {
                "x": 13572.228304005654,
                "y": 2885.1288872123114
            },
            "b": {
                "x": 13573.483790554854,
                "y": 3013.4331781238766
            }
        },
        {
            "a": {
                "x": 13573.483790554854,
                "y": 3013.4331781238766
            },
            "b": {
                "x": 13602.48384417698,
                "y": 3103.4332407968095
            }
        },
        {
            "a": {
                "x": 13602.48384417698,
                "y": 3103.4332407968095
            },
            "b": {
                "x": 13621.483845045404,
                "y": 3127.433241810442
            }
        },
        {
            "a": {
                "x": 13621.483845045404,
                "y": 3127.433241810442
            },
            "b": {
                "x": 13664.483845085173,
                "y": 3209.4332418568474
            }
        },
        {
            "a": {
                "x": 13664.483845085173,
                "y": 3209.4332418568474
            },
            "b": {
                "x": 13707.483845085213,
                "y": 3246.433241856929
            }
        },
        {
            "a": {
                "x": 13707.483845085213,
                "y": 3246.433241856929
            },
            "b": {
                "x": 13775.529188327515,
                "y": 3328.099679636915
            }
        },
        {
            "a": {
                "x": 13775.529188327515,
                "y": 3328.099679636915
            },
            "b": {
                "x": 13796.299226162218,
                "y": 3402.387602124167
            }
        },
        {
            "a": {
                "x": 13796.299226162218,
                "y": 3402.387602124167
            },
            "b": {
                "x": 13792.274885289427,
                "y": 3492.4177822589863
            }
        },
        {
            "a": {
                "x": 13792.274885289427,
                "y": 3492.4177822589863
            },
            "b": {
                "x": 13761.273701788592,
                "y": 3575.4192417212194
            }
        },
        {
            "a": {
                "x": 13761.273701788592,
                "y": 3575.4192417212194
            },
            "b": {
                "x": 13728.337671053227,
                "y": 3711.000106763009
            }
        },
        {
            "a": {
                "x": 13728.337671053227,
                "y": 3711.000106763009
            },
            "b": {
                "x": 13661.204801984148,
                "y": 3901.066316865727
            }
        },
        {
            "a": {
                "x": 13661.204801984148,
                "y": 3901.066316865727
            },
            "b": {
                "x": 13594.204801983184,
                "y": 3986.0663168900364
            }
        },
        {
            "a": {
                "x": 13594.204801983184,
                "y": 3986.0663168900364
            },
            "b": {
                "x": 13495.97904800302,
                "y": 4082.966898525659
            }
        },
        {
            "a": {
                "x": 13495.97904800302,
                "y": 4082.966898525659
            },
            "b": {
                "x": 13326.979042149696,
                "y": 4279.966905352761
            }
        },
        {
            "a": {
                "x": 13326.979042149696,
                "y": 4279.966905352761
            },
            "b": {
                "x": 13197.85923977961,
                "y": 4444.24652444668
            }
        },
        {
            "a": {
                "x": 13197.85923977961,
                "y": 4444.24652444668
            },
            "b": {
                "x": 13095.859228275607,
                "y": 4609.246559927978
            }
        },
        {
            "a": {
                "x": 13095.859228275607,
                "y": 4609.246559927978
            },
            "b": {
                "x": 13046.859228021605,
                "y": 4778.246560712445
            }
        },
        {
            "a": {
                "x": 13046.859228021605,
                "y": 4778.246560712445
            },
            "b": {
                "x": 13030.859228009982,
                "y": 4940.556775129997
            }
        },
        {
            "a": {
                "x": 13030.859228009982,
                "y": 4940.556775129997
            },
            "b": {
                "x": 13061.859228009982,
                "y": 5126.45254980932
            }
        },
        {
            "a": {
                "x": 13061.859228009982,
                "y": 5126.45254980932
            },
            "b": {
                "x": 13094.859228009982,
                "y": 5220.506734453087
            }
        },
        {
            "a": {
                "x": 13094.859228009982,
                "y": 5220.506734453087
            },
            "b": {
                "x": 13054.859228009982,
                "y": 5379.507814352063
            }
        },
        {
            "a": {
                "x": 13054.859228009982,
                "y": 5379.507814352063
            },
            "b": {
                "x": 13034.087221728945,
                "y": 5543.565717491446
            }
        },
        {
            "a": {
                "x": 13034.087221728945,
                "y": 5543.565717491446
            },
            "b": {
                "x": 13071.808243184176,
                "y": 5700.015922250654
            }
        },
        {
            "a": {
                "x": 13071.808243184176,
                "y": 5700.015922250654
            },
            "b": {
                "x": 13130.869100871318,
                "y": 5829.100062325373
            }
        },
        {
            "a": {
                "x": 13130.869100871318,
                "y": 5829.100062325373
            },
            "b": {
                "x": 13182.871353976272,
                "y": 5993.13400941096
            }
        },
        {
            "a": {
                "x": 13182.871353976272,
                "y": 5993.13400941096
            },
            "b": {
                "x": 13254.871353976356,
                "y": 6051.13412494816
            }
        },
        {
            "a": {
                "x": 13254.871353976356,
                "y": 6051.13412494816
            },
            "b": {
                "x": 13288.871353976356,
                "y": 6064.134133147433
            }
        },
        {
            "a": {
                "x": 13288.871353976356,
                "y": 6064.134133147433
            },
            "b": {
                "x": 13338.871353976356,
                "y": 6067.13413317111
            }
        },
        {
            "a": {
                "x": 13338.871353976356,
                "y": 6067.13413317111
            },
            "b": {
                "x": 13403.871353976356,
                "y": 6032.134133171298
            }
        },
        {
            "a": {
                "x": 13403.871353976356,
                "y": 6032.134133171298
            },
            "b": {
                "x": 13451.871353976356,
                "y": 5845.134133171298
            }
        },
        {
            "a": {
                "x": 13451.871353976356,
                "y": 5845.134133171298
            },
            "b": {
                "x": 13414.871353976356,
                "y": 5598.134133171298
            }
        },
        {
            "a": {
                "x": 13414.871353976356,
                "y": 5598.134133171298
            },
            "b": {
                "x": 13409.495550722417,
                "y": 5466.100572242111
            }
        },
        {
            "a": {
                "x": 13409.495550722417,
                "y": 5466.100572242111
            },
            "b": {
                "x": 13420.486023971109,
                "y": 5385.810564488771
            }
        },
        {
            "a": {
                "x": 13420.486023971109,
                "y": 5385.810564488771
            },
            "b": {
                "x": 13420.485936441291,
                "y": 5304.789426401419
            }
        },
        {
            "a": {
                "x": 13420.485936441291,
                "y": 5304.789426401419
            },
            "b": {
                "x": 13410.485933200935,
                "y": 5279.788643205339
            }
        },
        {
            "a": {
                "x": 13410.485933200935,
                "y": 5279.788643205339
            },
            "b": {
                "x": 13413.485932560325,
                "y": 5198.788488329065
            }
        },
        {
            "a": {
                "x": 13413.485932560325,
                "y": 5198.788488329065
            },
            "b": {
                "x": 13444.48593251747,
                "y": 5134.788477966551
            }
        },
        {
            "a": {
                "x": 13444.48593251747,
                "y": 5134.788477966551
            },
            "b": {
                "x": 13424.485932506488,
                "y": 4879.23025933801
            }
        },
        {
            "a": {
                "x": 13424.485932506488,
                "y": 4879.23025933801
            },
            "b": {
                "x": 13467.485932506488,
                "y": 4685.226153869129
            }
        },
        {
            "a": {
                "x": 13467.485932506488,
                "y": 4685.226153869129
            },
            "b": {
                "x": 13619.485932506488,
                "y": 4539.226076573339
            }
        },
        {
            "a": {
                "x": 13619.485932506488,
                "y": 4539.226076573339
            },
            "b": {
                "x": 13753.485932506488,
                "y": 4402.226075675935
            }
        },
        {
            "a": {
                "x": 13753.485932506488,
                "y": 4402.226075675935
            },
            "b": {
                "x": 13816.884472793765,
                "y": 4384.78492778247
            }
        },
        {
            "a": {
                "x": 13816.884472793765,
                "y": 4384.78492778247
            },
            "b": {
                "x": 13828.975246711412,
                "y": 4395.559790086793
            }
        },
        {
            "a": {
                "x": 13828.975246711412,
                "y": 4395.559790086793
            },
            "b": {
                "x": 13828.108635807272,
                "y": 4526.410952143784
            }
        },
        {
            "a": {
                "x": 13828.108635807272,
                "y": 4526.410952143784
            },
            "b": {
                "x": 13798.12414909752,
                "y": 4635.393702715825
            }
        },
        {
            "a": {
                "x": 13798.12414909752,
                "y": 4635.393702715825
            },
            "b": {
                "x": 13750.124157586726,
                "y": 4867.393693304507
            }
        },
        {
            "a": {
                "x": 13749.940862819,
                "y": 4859.9012632709655
            },
            "b": {
                "x": 13707.866045219882,
                "y": 4997.8143463002
            }
        },
        {
            "a": {
                "x": 13707.866045219882,
                "y": 4997.8143463002
            },
            "b": {
                "x": 13689.852339506248,
                "y": 5176.724939065755
            }
        },
        {
            "a": {
                "x": 13689.852339506248,
                "y": 5176.724939065755
            },
            "b": {
                "x": 13727.851344048147,
                "y": 5233.7194920066295
            }
        },
        {
            "a": {
                "x": 13727.851344048147,
                "y": 5233.7194920066295
            },
            "b": {
                "x": 13787.851301304785,
                "y": 5275.719272869008
            }
        },
        {
            "a": {
                "x": 13787.851301304785,
                "y": 5275.719272869008
            },
            "b": {
                "x": 13854.85129840935,
                "y": 5275.719258351394
            }
        },
        {
            "a": {
                "x": 13854.85129840935,
                "y": 5275.719258351394
            },
            "b": {
                "x": 13918.851297999268,
                "y": 5246.719256314938
            }
        },
        {
            "a": {
                "x": 13918.851297999268,
                "y": 5246.719256314938
            },
            "b": {
                "x": 14007.851297976398,
                "y": 5144.719256202104
            }
        },
        {
            "a": {
                "x": 14007.851297976398,
                "y": 5144.719256202104
            },
            "b": {
                "x": 14086.851297974395,
                "y": 4937.7192561921465
            }
        },
        {
            "a": {
                "x": 14086.851297974395,
                "y": 4937.7192561921465
            },
            "b": {
                "x": 14131.851297974395,
                "y": 4748.7192561921465
            }
        },
        {
            "a": {
                "x": 14131.851297974395,
                "y": 4748.7192561921465
            },
            "b": {
                "x": 14158.021660858421,
                "y": 4392.25263184395
            }
        },
        {
            "a": {
                "x": 14158.021660858421,
                "y": 4392.25263184395
            },
            "b": {
                "x": 14164.021660858549,
                "y": 4294.2526271663
            }
        },
        {
            "a": {
                "x": 14164.021660858549,
                "y": 4294.2526271663
            },
            "b": {
                "x": 14171.021660858549,
                "y": 4220.252626923366
            }
        },
        {
            "a": {
                "x": 14171.021660858549,
                "y": 4220.252626923366
            },
            "b": {
                "x": 14165.021660858549,
                "y": 4099.252626913982
            }
        },
        {
            "a": {
                "x": 14165.021660858549,
                "y": 4099.252626913982
            },
            "b": {
                "x": 14155.021660858549,
                "y": 4075.252626913894
            }
        },
        {
            "a": {
                "x": 14155.021660858549,
                "y": 4075.252626913894
            },
            "b": {
                "x": 14157.021660858549,
                "y": 4037.2526269138866
            }
        },
        {
            "a": {
                "x": 14157.021660858549,
                "y": 4037.2526269138866
            },
            "b": {
                "x": 14148.021660858549,
                "y": 4012.2526269138866
            }
        },
        {
            "a": {
                "x": 14148.021660858549,
                "y": 4012.2526269138866
            },
            "b": {
                "x": 14149.021660858549,
                "y": 3975.2526269138866
            }
        },
        {
            "a": {
                "x": 14149.021660858549,
                "y": 3975.2526269138866
            },
            "b": {
                "x": 14140.532945980205,
                "y": 3952.5593448809027
            }
        },
        {
            "a": {
                "x": 14140.532945980205,
                "y": 3952.5593448809027
            },
            "b": {
                "x": 14153.74927573456,
                "y": 3887.512041433056
            }
        },
        {
            "a": {
                "x": 14153.74927573456,
                "y": 3887.512041433056
            },
            "b": {
                "x": 14152.71944464452,
                "y": 3703.441776615359
            }
        },
        {
            "a": {
                "x": 14152.71944464452,
                "y": 3703.441776615359
            },
            "b": {
                "x": 14152.717980106661,
                "y": 3622.438297569568
            }
        },
        {
            "a": {
                "x": 14152.717980106661,
                "y": 3622.438297569568
            },
            "b": {
                "x": 14170.854277731825,
                "y": 3518.8524763477967
            }
        },
        {
            "a": {
                "x": 14170.854277731825,
                "y": 3518.8524763477967
            },
            "b": {
                "x": 14206.854934149176,
                "y": 3392.7504788628876
            }
        },
        {
            "a": {
                "x": 14206.854934149176,
                "y": 3392.7504788628876
            },
            "b": {
                "x": 14243.854943248882,
                "y": 3327.746963496858
            }
        },
        {
            "a": {
                "x": 14243.854943248882,
                "y": 3327.746963496858
            },
            "b": {
                "x": 14317.85494354164,
                "y": 3327.746733322014
            }
        },
        {
            "a": {
                "x": 14317.85494354164,
                "y": 3327.746733322014
            },
            "b": {
                "x": 14389.85494355564,
                "y": 3349.7467127192394
            }
        },
        {
            "a": {
                "x": 14389.85494355564,
                "y": 3349.7467127192394
            },
            "b": {
                "x": 14466.85494355642,
                "y": 3405.7467105927644
            }
        },
        {
            "a": {
                "x": 14466.85494355642,
                "y": 3405.7467105927644
            },
            "b": {
                "x": 14509.854943556436,
                "y": 3448.7467104348148
            }
        },
        {
            "a": {
                "x": 14509.854943556436,
                "y": 3448.7467104348148
            },
            "b": {
                "x": 14561.55789535978,
                "y": 3533.3438678462135
            }
        },
        {
            "a": {
                "x": 14561.55789535978,
                "y": 3533.3438678462135
            },
            "b": {
                "x": 14630.943986027165,
                "y": 3675.437215856351
            }
        },
        {
            "a": {
                "x": 14630.943986027165,
                "y": 3675.437215856351
            },
            "b": {
                "x": 14681.956632729814,
                "y": 3796.00172814281
            }
        },
        {
            "a": {
                "x": 14681.956632729814,
                "y": 3796.00172814281
            },
            "b": {
                "x": 14713.95663273304,
                "y": 3923.52047322674
            }
        },
        {
            "a": {
                "x": 14713.95663273304,
                "y": 3923.52047322674
            },
            "b": {
                "x": 14725.956632733187,
                "y": 4040.547194244112
            }
        },
        {
            "a": {
                "x": 14725.956632733187,
                "y": 4040.547194244112
            },
            "b": {
                "x": 14712.956632733187,
                "y": 4180.550360817668
            }
        },
        {
            "a": {
                "x": 14712.956632733187,
                "y": 4180.550360817668
            },
            "b": {
                "x": 14697.956632733187,
                "y": 4281.545328771932
            }
        },
        {
            "a": {
                "x": 14697.956632733187,
                "y": 4281.545328771932
            },
            "b": {
                "x": 14657.956632733187,
                "y": 4421.617825001769
            }
        },
        {
            "a": {
                "x": 14657.956632733187,
                "y": 4421.617825001769
            },
            "b": {
                "x": 14628.956632733187,
                "y": 4547.619974068958
            }
        },
        {
            "a": {
                "x": 14628.956632733187,
                "y": 4547.619974068958
            },
            "b": {
                "x": 14620.190678172352,
                "y": 4654.283265928207
            }
        },
        {
            "a": {
                "x": 14620.190678172352,
                "y": 4654.283265928207
            },
            "b": {
                "x": 14597.724777682646,
                "y": 4685.451072264381
            }
        },
        {
            "a": {
                "x": 14597.724777682646,
                "y": 4685.451072264381
            },
            "b": {
                "x": 14603.73585796307,
                "y": 4782.466280127233
            }
        },
        {
            "a": {
                "x": 14603.73585796307,
                "y": 4782.466280127233
            },
            "b": {
                "x": 14626.736131671034,
                "y": 4842.4666538116135
            }
        },
        {
            "a": {
                "x": 14626.736131671034,
                "y": 4842.4666538116135
            },
            "b": {
                "x": 14638.736182911169,
                "y": 4967.466723662306
            }
        },
        {
            "a": {
                "x": 14638.736182911169,
                "y": 4967.466723662306
            },
            "b": {
                "x": 14647.736183455174,
                "y": 5104.771497418169
            }
        },
        {
            "a": {
                "x": 14647.736183455174,
                "y": 5104.771497418169
            },
            "b": {
                "x": 14656.736183455174,
                "y": 5361.172802030306
            }
        },
        {
            "a": {
                "x": 14656.736183455174,
                "y": 5361.172802030306
            },
            "b": {
                "x": 14653.736183455174,
                "y": 5513.217706137127
            }
        },
        {
            "a": {
                "x": 14653.736183455174,
                "y": 5513.217706137127
            },
            "b": {
                "x": 14630.736183455174,
                "y": 5690.846628617502
            }
        },
        {
            "a": {
                "x": 14630.736183455174,
                "y": 5690.846628617502
            },
            "b": {
                "x": 14550.736183455174,
                "y": 5960.550485106434
            }
        },
        {
            "a": {
                "x": 14550.736183455174,
                "y": 5960.550485106434
            },
            "b": {
                "x": 14437.853082113477,
                "y": 6430.544220972851
            }
        },
        {
            "a": {
                "x": 14439.641842741597,
                "y": 6424.501148547306
            },
            "b": {
                "x": 14418.641840189795,
                "y": 6485.501391066415
            }
        },
        {
            "a": {
                "x": 14418.641840189795,
                "y": 6485.501391066415
            },
            "b": {
                "x": 14388.641839968337,
                "y": 6519.501412218082
            }
        },
        {
            "a": {
                "x": 14388.641839968337,
                "y": 6519.501412218082
            },
            "b": {
                "x": 14362.780614569561,
                "y": 6611.390192328798
            }
        },
        {
            "a": {
                "x": 14362.780614569561,
                "y": 6611.390192328798
            },
            "b": {
                "x": 14278.557303761994,
                "y": 6762.73105602109
            }
        },
        {
            "a": {
                "x": 14278.557303761994,
                "y": 6762.73105602109
            },
            "b": {
                "x": 14210.003220997838,
                "y": 6956.647030847552
            }
        },
        {
            "a": {
                "x": 14210.003220997838,
                "y": 6956.647030847552
            },
            "b": {
                "x": 14093.966007093919,
                "y": 7041.027601225931
            }
        },
        {
            "a": {
                "x": 14093.966007093919,
                "y": 7041.027601225931
            },
            "b": {
                "x": 14077.957628174596,
                "y": 7064.047409507615
            }
        },
        {
            "a": {
                "x": 14077.957628174596,
                "y": 7064.047409507615
            },
            "b": {
                "x": 14020.955626667252,
                "y": 7097.052163155122
            }
        },
        {
            "a": {
                "x": 14020.955626667252,
                "y": 7097.052163155122
            },
            "b": {
                "x": 13966.95558013155,
                "y": 7190.052274158725
            }
        },
        {
            "a": {
                "x": 13966.95558013155,
                "y": 7190.052274158725
            },
            "b": {
                "x": 13934.955577541878,
                "y": 7309.052280344517
            }
        },
        {
            "a": {
                "x": 13934.955577541878,
                "y": 7309.052280344517
            },
            "b": {
                "x": 13933.955577339018,
                "y": 7401.052280829376
            }
        },
        {
            "a": {
                "x": 13933.955577339018,
                "y": 7401.052280829376
            },
            "b": {
                "x": 13917.955577326657,
                "y": 7444.052280858939
            }
        },
        {
            "a": {
                "x": 13917.955577326657,
                "y": 7444.052280858939
            },
            "b": {
                "x": 13951.847935724638,
                "y": 7526.868080246357
            }
        },
        {
            "a": {
                "x": 13951.847935724638,
                "y": 7526.868080246357
            },
            "b": {
                "x": 14018.84796441134,
                "y": 7614.868381882697
            }
        },
        {
            "a": {
                "x": 14018.84796441134,
                "y": 7614.868381882697
            },
            "b": {
                "x": 14192.847965243747,
                "y": 7727.86839067062
            }
        },
        {
            "a": {
                "x": 14192.847965243747,
                "y": 7727.86839067062
            },
            "b": {
                "x": 14375.847965274574,
                "y": 7785.868390996562
            }
        },
        {
            "a": {
                "x": 14375.847965274574,
                "y": 7785.868390996562
            },
            "b": {
                "x": 14568.847965274574,
                "y": 7848.868390996803
            }
        },
        {
            "a": {
                "x": 14568.847965274574,
                "y": 7848.868390996803
            },
            "b": {
                "x": 14754.847965274574,
                "y": 7903.868390996803
            }
        },
        {
            "a": {
                "x": 14754.847965274574,
                "y": 7903.868390996803
            },
            "b": {
                "x": 14900.596975636208,
                "y": 7904.868390996803
            }
        },
        {
            "a": {
                "x": 14900.596975636208,
                "y": 7904.868390996803
            },
            "b": {
                "x": 15092.599188775253,
                "y": 7862.868390996803
            }
        },
        {
            "a": {
                "x": 15092.599188775253,
                "y": 7862.868390996803
            },
            "b": {
                "x": 15214.599244937806,
                "y": 7816.868390996803
            }
        },
        {
            "a": {
                "x": 15214.599244937806,
                "y": 7816.868390996803
            },
            "b": {
                "x": 15272.599246163767,
                "y": 7776.868390996803
            }
        },
        {
            "a": {
                "x": 15272.599246163767,
                "y": 7776.868390996803
            },
            "b": {
                "x": 15368.59924630344,
                "y": 7735.868390996803
            }
        },
        {
            "a": {
                "x": 15368.59924630344,
                "y": 7735.868390996803
            },
            "b": {
                "x": 15451.430586786899,
                "y": 7676.145694818911
            }
        },
        {
            "a": {
                "x": 15451.430586786899,
                "y": 7676.145694818911
            },
            "b": {
                "x": 15542.529313931143,
                "y": 7593.7580932217115
            }
        },
        {
            "a": {
                "x": 15542.529313931143,
                "y": 7593.7580932217115
            },
            "b": {
                "x": 15570.53038596007,
                "y": 7559.757726089508
            }
        },
        {
            "a": {
                "x": 15570.53038596007,
                "y": 7559.757726089508
            },
            "b": {
                "x": 15588.530536303668,
                "y": 7489.757674726048
            }
        },
        {
            "a": {
                "x": 15588.530536303668,
                "y": 7489.757674726048
            },
            "b": {
                "x": 15594.530545227943,
                "y": 7376.757671682152
            }
        },
        {
            "a": {
                "x": 15594.530545227943,
                "y": 7376.757671682152
            },
            "b": {
                "x": 15574.530545826294,
                "y": 7310.757671478218
            }
        },
        {
            "a": {
                "x": 15574.530545826294,
                "y": 7310.757671478218
            },
            "b": {
                "x": 15565.530545896334,
                "y": 7203.175830883172
            }
        },
        {
            "a": {
                "x": 15565.530545896334,
                "y": 7203.175830883172
            },
            "b": {
                "x": 15497.530545896343,
                "y": 7091.505789170092
            }
        },
        {
            "a": {
                "x": 15497.530545896343,
                "y": 7091.505789170092
            },
            "b": {
                "x": 15360.530545896343,
                "y": 7010.478692002605
            }
        },
        {
            "a": {
                "x": 15360.530545896343,
                "y": 7010.478692002605
            },
            "b": {
                "x": 15260.55733730752,
                "y": 6825.6431213585365
            }
        },
        {
            "a": {
                "x": 15244.557329506682,
                "y": 6741.643096024367
            },
            "b": {
                "x": 15236.557329091018,
                "y": 6660.643094673085
            }
        },
        {
            "a": {
                "x": 15260.55733730752,
                "y": 6825.6431213585365
            },
            "b": {
                "x": 15244.557329506682,
                "y": 6741.643096024367
            }
        },
        {
            "a": {
                "x": 15236.557329091018,
                "y": 6660.643094673085
            },
            "b": {
                "x": 15222.557329085379,
                "y": 6603.3677638774125
            }
        },
        {
            "a": {
                "x": 15222.557329085379,
                "y": 6603.3677638774125
            },
            "b": {
                "x": 15188.557329085379,
                "y": 6333.974469769507
            }
        },
        {
            "a": {
                "x": 15188.557329085379,
                "y": 6333.974469769507
            },
            "b": {
                "x": 15175.557329085379,
                "y": 6304.962472167355
            }
        },
        {
            "a": {
                "x": 15175.557329085379,
                "y": 6304.962472167355
            },
            "b": {
                "x": 15170.557329085379,
                "y": 6189.19459375674
            }
        },
        {
            "a": {
                "x": 15170.557329085379,
                "y": 6189.19459375674
            },
            "b": {
                "x": 15152.557329085379,
                "y": 6155.445718643735
            }
        },
        {
            "a": {
                "x": 15152.557329085379,
                "y": 6155.445718643735
            },
            "b": {
                "x": 15150.557329085379,
                "y": 6094.374867225492
            }
        },
        {
            "a": {
                "x": 15150.557329085379,
                "y": 6094.374867225492
            },
            "b": {
                "x": 15138.557329085379,
                "y": 6037.374524919337
            }
        },
        {
            "a": {
                "x": 15138.557329085379,
                "y": 6037.374524919337
            },
            "b": {
                "x": 15151.557329085379,
                "y": 5864.881607482696
            }
        },
        {
            "a": {
                "x": 15151.557329085379,
                "y": 5864.881607482696
            },
            "b": {
                "x": 15152.557329085379,
                "y": 5630.881607482696
            }
        },
        {
            "a": {
                "x": 15152.557329085379,
                "y": 5630.881607482696
            },
            "b": {
                "x": 15129.557329085379,
                "y": 5471.881607482696
            }
        },
        {
            "a": {
                "x": 15129.557329085379,
                "y": 5471.881607482696
            },
            "b": {
                "x": 15105.557329085379,
                "y": 5391.172797779089
            }
        },
        {
            "a": {
                "x": 15105.557329085379,
                "y": 5391.172797779089
            },
            "b": {
                "x": 15101.557329085379,
                "y": 5280.045779532289
            }
        },
        {
            "a": {
                "x": 15101.557329085379,
                "y": 5280.045779532289
            },
            "b": {
                "x": 15097.557329085379,
                "y": 5229.042809265181
            }
        },
        {
            "a": {
                "x": 15097.557329085379,
                "y": 5229.042809265181
            },
            "b": {
                "x": 15125.557329085379,
                "y": 4988.79993351834
            }
        },
        {
            "a": {
                "x": 15125.557329085379,
                "y": 4988.79993351834
            },
            "b": {
                "x": 15138.557329085379,
                "y": 4917.799926610229
            }
        },
        {
            "a": {
                "x": 15138.557329085379,
                "y": 4917.799926610229
            },
            "b": {
                "x": 15161.557329085379,
                "y": 4874.799926120774
            }
        },
        {
            "a": {
                "x": 15161.557329085379,
                "y": 4874.799926120774
            },
            "b": {
                "x": 15192.557329085379,
                "y": 4868.799926095305
            }
        },
        {
            "a": {
                "x": 15192.557329085379,
                "y": 4868.799926095305
            },
            "b": {
                "x": 15239.557329085379,
                "y": 4901.79992609304
            }
        },
        {
            "a": {
                "x": 15239.557329085379,
                "y": 4901.79992609304
            },
            "b": {
                "x": 15291.557329085379,
                "y": 4984.799926092943
            }
        },
        {
            "a": {
                "x": 15291.557329085379,
                "y": 4984.799926092943
            },
            "b": {
                "x": 15336.557329085379,
                "y": 5116.799926092943
            }
        },
        {
            "a": {
                "x": 15336.557329085379,
                "y": 5116.799926092943
            },
            "b": {
                "x": 15360.557329085379,
                "y": 5319.799926092943
            }
        },
        {
            "a": {
                "x": 15360.557329085379,
                "y": 5319.799926092943
            },
            "b": {
                "x": 15360.148047888159,
                "y": 5373.420849012935
            }
        },
        {
            "a": {
                "x": 15360.148047888159,
                "y": 5373.420849012935
            },
            "b": {
                "x": 15363.028303799178,
                "y": 5535.652191755381
            }
        },
        {
            "a": {
                "x": 15363.028303799178,
                "y": 5535.652191755381
            },
            "b": {
                "x": 15383.05994078831,
                "y": 5694.695677182034
            }
        },
        {
            "a": {
                "x": 15383.05994078831,
                "y": 5694.695677182034
            },
            "b": {
                "x": 15422.061229590556,
                "y": 5813.398402124878
            }
        },
        {
            "a": {
                "x": 15422.061229590556,
                "y": 5813.398402124878
            },
            "b": {
                "x": 15469.061229590576,
                "y": 5854.390826717497
            }
        },
        {
            "a": {
                "x": 15469.061229590576,
                "y": 5854.390826717497
            },
            "b": {
                "x": 15537.061229590576,
                "y": 5872.390064497733
            }
        },
        {
            "a": {
                "x": 15537.061229590576,
                "y": 5872.390064497733
            },
            "b": {
                "x": 15594.061229590576,
                "y": 5846.389981862567
            }
        },
        {
            "a": {
                "x": 15594.061229590576,
                "y": 5846.389981862567
            },
            "b": {
                "x": 15651.061229590576,
                "y": 5743.389969333143
            }
        },
        {
            "a": {
                "x": 15651.061229590576,
                "y": 5743.389969333143
            },
            "b": {
                "x": 15701.67021334689,
                "y": 5551.985215689206
            }
        },
        {
            "a": {
                "x": 15701.67021334689,
                "y": 5551.985215689206
            },
            "b": {
                "x": 15721.425050697648,
                "y": 5212.633971718591
            }
        },
        {
            "a": {
                "x": 15721.425050697648,
                "y": 5212.633971718591
            },
            "b": {
                "x": 15775.425050697622,
                "y": 4918.133545258501
            }
        },
        {
            "a": {
                "x": 15775.425050697622,
                "y": 4918.133545258501
            },
            "b": {
                "x": 15850.425050697622,
                "y": 4653.240921871278
            }
        },
        {
            "a": {
                "x": 15850.425050697622,
                "y": 4653.240921871278
            },
            "b": {
                "x": 15908.425050697622,
                "y": 4535.245705576355
            }
        },
        {
            "a": {
                "x": 15908.425050697622,
                "y": 4535.245705576355
            },
            "b": {
                "x": 15916.425050697622,
                "y": 4458.936782134072
            }
        },
        {
            "a": {
                "x": 15916.425050697622,
                "y": 4458.936782134072
            },
            "b": {
                "x": 15890.425050697622,
                "y": 4345.310302400841
            }
        },
        {
            "a": {
                "x": 15890.425050697622,
                "y": 4345.310302400841
            },
            "b": {
                "x": 15846.425050697622,
                "y": 4252.538900912834
            }
        },
        {
            "a": {
                "x": 15846.425050697622,
                "y": 4252.538900912834
            },
            "b": {
                "x": 15811.425050697622,
                "y": 4206.533982170164
            }
        },
        {
            "a": {
                "x": 15811.425050697622,
                "y": 4206.533982170164
            },
            "b": {
                "x": 15763.425050697622,
                "y": 4048.3163883630136
            }
        },
        {
            "a": {
                "x": 15763.425050697622,
                "y": 4048.3163883630136
            },
            "b": {
                "x": 15778.425050697622,
                "y": 3990.8413593838245
            }
        },
        {
            "a": {
                "x": 15778.425050697622,
                "y": 3990.8413593838245
            },
            "b": {
                "x": 15811.425050697622,
                "y": 3928.841254991157
            }
        },
        {
            "a": {
                "x": 15811.425050697622,
                "y": 3928.841254991157
            },
            "b": {
                "x": 15858.425050697622,
                "y": 3883.841247760497
            }
        },
        {
            "a": {
                "x": 15858.425050697622,
                "y": 3883.841247760497
            },
            "b": {
                "x": 15943.152587161381,
                "y": 3827.9540837446457
            }
        },
        {
            "a": {
                "x": 15943.152587161381,
                "y": 3827.9540837446457
            },
            "b": {
                "x": 15979.450214151106,
                "y": 3791.4060392783163
            }
        },
        {
            "a": {
                "x": 15979.450214151106,
                "y": 3791.4060392783163
            },
            "b": {
                "x": 15983.495850627283,
                "y": 3746.163661258755
            }
        },
        {
            "a": {
                "x": 15983.495850627283,
                "y": 3746.163661258755
            },
            "b": {
                "x": 15995.49709610609,
                "y": 3718.1569504948634
            }
        },
        {
            "a": {
                "x": 15995.49709610609,
                "y": 3718.1569504948634
            },
            "b": {
                "x": 15972.497135371343,
                "y": 3619.1567378919203
            }
        },
        {
            "a": {
                "x": 15972.497135371343,
                "y": 3619.1567378919203
            },
            "b": {
                "x": 15962.497140337606,
                "y": 3525.156710958648
            }
        },
        {
            "a": {
                "x": 15962.497140337606,
                "y": 3525.156710958648
            },
            "b": {
                "x": 15988.497140553802,
                "y": 3407.5381608832863
            }
        },
        {
            "a": {
                "x": 15988.497140553802,
                "y": 3407.5381608832863
            },
            "b": {
                "x": 16031.49714055394,
                "y": 3356.268061774095
            }
        },
        {
            "a": {
                "x": 16031.49714055394,
                "y": 3356.268061774095
            },
            "b": {
                "x": 16186.49714055394,
                "y": 3279.2572926823464
            }
        },
        {
            "a": {
                "x": 16186.49714055394,
                "y": 3279.2572926823464
            },
            "b": {
                "x": 16247.034412006833,
                "y": 3275.1326734017994
            }
        },
        {
            "a": {
                "x": 16247.034412006833,
                "y": 3275.1326734017994
            },
            "b": {
                "x": 16298.218459215808,
                "y": 3295.581845804825
            }
        },
        {
            "a": {
                "x": 16298.218459215808,
                "y": 3295.581845804825
            },
            "b": {
                "x": 16335.237842117624,
                "y": 3363.6298878228326
            }
        },
        {
            "a": {
                "x": 16335.237842117624,
                "y": 3363.6298878228326
            },
            "b": {
                "x": 16379.238604976372,
                "y": 3521.6317960996284
            }
        },
        {
            "a": {
                "x": 16379.238604976372,
                "y": 3521.6317960996284
            },
            "b": {
                "x": 16400.238620603177,
                "y": 3576.6318353500333
            }
        },
        {
            "a": {
                "x": 16400.238620603177,
                "y": 3576.6318353500333
            },
            "b": {
                "x": 16446.238620963075,
                "y": 3597.631836255295
            }
        },
        {
            "a": {
                "x": 16446.238620963075,
                "y": 3597.631836255295
            },
            "b": {
                "x": 16526.238620982487,
                "y": 3631.631836304183
            }
        },
        {
            "a": {
                "x": 16526.238620982487,
                "y": 3631.631836304183
            },
            "b": {
                "x": 16599.23862098348,
                "y": 3688.945739010759
            }
        },
        {
            "a": {
                "x": 16599.23862098348,
                "y": 3688.945739010759
            },
            "b": {
                "x": 16632.23862098348,
                "y": 3719.9458010689214
            }
        },
        {
            "a": {
                "x": 16632.23862098348,
                "y": 3719.9458010689214
            },
            "b": {
                "x": 16671.23862098348,
                "y": 3718.945805392785
            }
        },
        {
            "a": {
                "x": 16671.23862098348,
                "y": 3718.945805392785
            },
            "b": {
                "x": 16730.23862098348,
                "y": 3700.9458059469393
            }
        },
        {
            "a": {
                "x": 16730.23862098348,
                "y": 3700.9458059469393
            },
            "b": {
                "x": 16761.23862098348,
                "y": 3676.945805992103
            }
        },
        {
            "a": {
                "x": 16761.23862098348,
                "y": 3676.945805992103
            },
            "b": {
                "x": 16795.23862098348,
                "y": 3554.945805995716
            }
        },
        {
            "a": {
                "x": 16795.23862098348,
                "y": 3554.945805995716
            },
            "b": {
                "x": 16826.23862098348,
                "y": 3420.945805995867
            }
        },
        {
            "a": {
                "x": 16826.23862098348,
                "y": 3420.945805995867
            },
            "b": {
                "x": 16841.23862098348,
                "y": 3336.945805995867
            }
        },
        {
            "a": {
                "x": 16841.23862098348,
                "y": 3336.945805995867
            },
            "b": {
                "x": 16847.23862098348,
                "y": 3284.4815239214854
            }
        },
        {
            "a": {
                "x": 16847.23862098348,
                "y": 3284.4815239214854
            },
            "b": {
                "x": 16876.23862098348,
                "y": 3166.220668608078
            }
        },
        {
            "a": {
                "x": 16876.23862098348,
                "y": 3166.220668608078
            },
            "b": {
                "x": 16896.23862098348,
                "y": 3074.208463189611
            }
        },
        {
            "a": {
                "x": 16896.23862098348,
                "y": 3074.208463189611
            },
            "b": {
                "x": 17012.23862098348,
                "y": 2851.489782123097
            }
        },
        {
            "a": {
                "x": 17012.23862098348,
                "y": 2851.489782123097
            },
            "b": {
                "x": 17097.007950976855,
                "y": 2577.0529908515573
            }
        },
        {
            "a": {
                "x": 17097.007950976855,
                "y": 2577.0529908515573
            },
            "b": {
                "x": 17124.229979908025,
                "y": 2521.457430627987
            }
        },
        {
            "a": {
                "x": 17124.229979908025,
                "y": 2521.457430627987
            },
            "b": {
                "x": 17143.245370573495,
                "y": 2515.4374752032822
            }
        },
        {
            "a": {
                "x": 17143.245370573495,
                "y": 2515.4374752032822
            },
            "b": {
                "x": 17166.248545133058,
                "y": 2519.4333633721153
            }
        },
        {
            "a": {
                "x": 17166.248545133058,
                "y": 2519.4333633721153
            },
            "b": {
                "x": 17180.24953237291,
                "y": 2541.4320854286016
            }
        },
        {
            "a": {
                "x": 17180.24953237291,
                "y": 2541.4320854286016
            },
            "b": {
                "x": 17190.249975352126,
                "y": 2572.431512332777
            }
        },
        {
            "a": {
                "x": 17199.249975352126,
                "y": 2665.4315123327647
            },
            "b": {
                "x": 17188.249975352126,
                "y": 2725.4315123327647
            }
        },
        {
            "a": {
                "x": 17190.249975352126,
                "y": 2572.431512332777
            },
            "b": {
                "x": 17203.249975352126,
                "y": 2597.4315123327647
            }
        },
        {
            "a": {
                "x": 17203.249975352126,
                "y": 2597.4315123327647
            },
            "b": {
                "x": 17199.249975352126,
                "y": 2665.4315123327647
            }
        },
        {
            "a": {
                "x": 17188.249975352126,
                "y": 2725.4315123327647
            },
            "b": {
                "x": 17193.249975352126,
                "y": 2773.4315123327647
            }
        },
        {
            "a": {
                "x": 17193.249975352126,
                "y": 2773.4315123327647
            },
            "b": {
                "x": 17216.249975352126,
                "y": 2868.4315123327647
            }
        },
        {
            "a": {
                "x": 17216.249975352126,
                "y": 2868.4315123327647
            },
            "b": {
                "x": 17236.249975352126,
                "y": 2998.4315123327647
            }
        },
        {
            "a": {
                "x": 17236.249975352126,
                "y": 2998.4315123327647
            },
            "b": {
                "x": 17250.249975352126,
                "y": 3015.4315123327647
            }
        },
        {
            "a": {
                "x": 17250.249975352126,
                "y": 3015.4315123327647
            },
            "b": {
                "x": 17288.249975352126,
                "y": 2991.4315123327647
            }
        },
        {
            "a": {
                "x": 17288.249975352126,
                "y": 2991.4315123327647
            },
            "b": {
                "x": 17350.249975352126,
                "y": 2899.4315123327647
            }
        },
        {
            "a": {
                "x": 17350.249975352126,
                "y": 2899.4315123327647
            },
            "b": {
                "x": 17382.249975352126,
                "y": 2845.4315123327647
            }
        },
        {
            "a": {
                "x": 17382.249975352126,
                "y": 2845.4315123327647
            },
            "b": {
                "x": 17393.50295555114,
                "y": 2836.4359527935735
            }
        },
        {
            "a": {
                "x": 17393.50295555114,
                "y": 2836.4359527935735
            },
            "b": {
                "x": 17405.50672340546,
                "y": 2835.618587644417
            }
        },
        {
            "a": {
                "x": 17405.50672340546,
                "y": 2835.618587644417
            },
            "b": {
                "x": 17418.507408774458,
                "y": 2871.6526548643906
            }
        },
        {
            "a": {
                "x": 17418.507408774458,
                "y": 2871.6526548643906
            },
            "b": {
                "x": 17429.507560570193,
                "y": 2946.6603189182233
            }
        },
        {
            "a": {
                "x": 17429.507560570193,
                "y": 2946.6603189182233
            },
            "b": {
                "x": 17417.50758313705,
                "y": 3038.661471351071
            }
        },
        {
            "a": {
                "x": 17417.50758313705,
                "y": 3038.661471351071
            },
            "b": {
                "x": 17392.91816400833,
                "y": 3165.130798620781
            }
        },
        {
            "a": {
                "x": 17392.91816400833,
                "y": 3165.130798620781
            },
            "b": {
                "x": 17379.01038769447,
                "y": 3402.350725854123
            }
        },
        {
            "a": {
                "x": 17379.01038769447,
                "y": 3402.350725854123
            },
            "b": {
                "x": 17343.247697218412,
                "y": 3561.1650581915487
            }
        },
        {
            "a": {
                "x": 17343.247697218412,
                "y": 3561.1650581915487
            },
            "b": {
                "x": 17287.478051960417,
                "y": 3818.5935749930895
            }
        },
        {
            "a": {
                "x": 17287.478051960417,
                "y": 3818.5935749930895
            },
            "b": {
                "x": 17270.478050810285,
                "y": 3943.5936011531153
            }
        },
        {
            "a": {
                "x": 17270.478050810285,
                "y": 3943.5936011531153
            },
            "b": {
                "x": 17296.478050787573,
                "y": 4039.593601671218
            }
        },
        {
            "a": {
                "x": 17296.478050787573,
                "y": 4039.593601671218
            },
            "b": {
                "x": 17339.47805078646,
                "y": 4130.593601697556
            }
        },
        {
            "a": {
                "x": 17339.47805078646,
                "y": 4130.593601697556
            },
            "b": {
                "x": 17449.47805078646,
                "y": 4223.593601697667
            }
        },
        {
            "a": {
                "x": 17449.47805078646,
                "y": 4223.593601697667
            },
            "b": {
                "x": 17651.678075569565,
                "y": 4321.959452737446
            }
        },
        {
            "a": {
                "x": 17651.678075569565,
                "y": 4321.959452737446
            },
            "b": {
                "x": 17723.678118001466,
                "y": 4377.95949101958
            }
        },
        {
            "a": {
                "x": 17723.678118001466,
                "y": 4377.95949101958
            },
            "b": {
                "x": 17778.678122421752,
                "y": 4435.959495008178
            }
        },
        {
            "a": {
                "x": 17778.678122421752,
                "y": 4435.959495008178
            },
            "b": {
                "x": 17813.38384497306,
                "y": 4498.794557145995
            }
        },
        {
            "a": {
                "x": 17813.38384497306,
                "y": 4498.794557145995
            },
            "b": {
                "x": 17832.069170857532,
                "y": 4515.932258782948
            }
        },
        {
            "a": {
                "x": 17832.069170857532,
                "y": 4515.932258782948
            },
            "b": {
                "x": 17851.125843434747,
                "y": 4559.943155888525
            }
        },
        {
            "a": {
                "x": 17851.125843434747,
                "y": 4559.943155888525
            },
            "b": {
                "x": 17867.13436611573,
                "y": 4635.944765017973
            }
        },
        {
            "a": {
                "x": 17867.13436611573,
                "y": 4635.944765017973
            },
            "b": {
                "x": 17877.135415184493,
                "y": 4666.944961011674
            }
        },
        {
            "a": {
                "x": 17877.135415184493,
                "y": 4666.944961011674
            },
            "b": {
                "x": 17842.135646744333,
                "y": 4778.945004015405
            }
        },
        {
            "a": {
                "x": 17842.135646744333,
                "y": 4778.945004015405
            },
            "b": {
                "x": 17786.13565400182,
                "y": 4827.945005356198
            }
        },
        {
            "a": {
                "x": 17786.13565400182,
                "y": 4827.945005356198
            },
            "b": {
                "x": 17667.135654933918,
                "y": 4900.945005528098
            }
        },
        {
            "a": {
                "x": 17667.135654933918,
                "y": 4900.945005528098
            },
            "b": {
                "x": 17509.1782214868,
                "y": 4961.2204900837305
            }
        },
        {
            "a": {
                "x": 17509.1782214868,
                "y": 4961.2204900837305
            },
            "b": {
                "x": 17325.392444972673,
                "y": 5024.9237327208175
            }
        },
        {
            "a": {
                "x": 17325.392444972673,
                "y": 5024.9237327208175
            },
            "b": {
                "x": 17152.392457261652,
                "y": 5092.923751114187
            }
        },
        {
            "a": {
                "x": 17152.392457261652,
                "y": 5092.923751114187
            },
            "b": {
                "x": 17026.39245768127,
                "y": 5165.923751762247
            }
        },
        {
            "a": {
                "x": 17026.39245768127,
                "y": 5165.923751762247
            },
            "b": {
                "x": 16901.58187825978,
                "y": 5295.954610106599
            }
        },
        {
            "a": {
                "x": 16901.58187825978,
                "y": 5295.954610106599
            },
            "b": {
                "x": 16773.5677870875,
                "y": 5430.462984945019
            }
        },
        {
            "a": {
                "x": 16773.5677870875,
                "y": 5430.462984945019
            },
            "b": {
                "x": 16653.535557741914,
                "y": 5542.478868904031
            }
        },
        {
            "a": {
                "x": 16653.535557741914,
                "y": 5542.478868904031
            },
            "b": {
                "x": 16513.53264433005,
                "y": 5690.480297051004
            }
        },
        {
            "a": {
                "x": 16513.53264433005,
                "y": 5690.480297051004
            },
            "b": {
                "x": 16435.823538047516,
                "y": 5796.783975972562
            }
        },
        {
            "a": {
                "x": 16435.823538047516,
                "y": 5796.783975972562
            },
            "b": {
                "x": 16400.993542706998,
                "y": 5890.828095913597
            }
        },
        {
            "a": {
                "x": 16400.993542706998,
                "y": 5890.828095913597
            },
            "b": {
                "x": 16413.922078753247,
                "y": 5965.648584331582
            }
        },
        {
            "a": {
                "x": 16413.922078753247,
                "y": 5965.648584331582
            },
            "b": {
                "x": 16441.918778438107,
                "y": 6022.640032179671
            }
        },
        {
            "a": {
                "x": 16441.918778438107,
                "y": 6022.640032179671
            },
            "b": {
                "x": 16504.91867364631,
                "y": 6045.639756999526
            }
        },
        {
            "a": {
                "x": 16504.91867364631,
                "y": 6045.639756999526
            },
            "b": {
                "x": 16581.918666632555,
                "y": 6026.639738492455
            }
        },
        {
            "a": {
                "x": 16581.918666632555,
                "y": 6026.639738492455
            },
            "b": {
                "x": 16729.918666591817,
                "y": 5952.639738384612
            }
        },
        {
            "a": {
                "x": 16729.918666591817,
                "y": 5952.639738384612
            },
            "b": {
                "x": 16856.91866659069,
                "y": 5839.639738381644
            }
        },
        {
            "a": {
                "x": 16856.91866659069,
                "y": 5839.639738381644
            },
            "b": {
                "x": 16916.91866659063,
                "y": 5777.639738381396
            }
        },
        {
            "a": {
                "x": 16916.91866659063,
                "y": 5777.639738381396
            },
            "b": {
                "x": 16962.91866659063,
                "y": 5712.639738381396
            }
        },
        {
            "a": {
                "x": 16962.91866659063,
                "y": 5712.639738381396
            },
            "b": {
                "x": 17066.613069910098,
                "y": 5606.945335061904
            }
        },
        {
            "a": {
                "x": 17066.613069910098,
                "y": 5606.945335061904
            },
            "b": {
                "x": 17235.30898573927,
                "y": 5500.249419232718
            }
        },
        {
            "a": {
                "x": 17235.30898573927,
                "y": 5500.249419232718
            },
            "b": {
                "x": 17380.49368710486,
                "y": 5497.906412811641
            }
        },
        {
            "a": {
                "x": 17380.49368710486,
                "y": 5497.906412811641
            },
            "b": {
                "x": 17548.493865343826,
                "y": 5457.906316365122
            }
        },
        {
            "a": {
                "x": 17548.493865343826,
                "y": 5457.906316365122
            },
            "b": {
                "x": 17623.493873441035,
                "y": 5434.906311987075
            }
        },
        {
            "a": {
                "x": 17623.493873441035,
                "y": 5434.906311987075
            },
            "b": {
                "x": 17730.493873564974,
                "y": 5372.906311920079
            }
        },
        {
            "a": {
                "x": 17730.493873564974,
                "y": 5372.906311920079
            },
            "b": {
                "x": 17797.01530549438,
                "y": 5307.0085332888775
            }
        },
        {
            "a": {
                "x": 17797.01530549438,
                "y": 5307.0085332888775
            },
            "b": {
                "x": 17811.117539178358,
                "y": 5301.972041676976
            }
        },
        {
            "a": {
                "x": 17811.117539178358,
                "y": 5301.972041676976
            },
            "b": {
                "x": 17816.120642891714,
                "y": 5317.00338477751
            }
        },
        {
            "a": {
                "x": 17816.120642891714,
                "y": 5317.00338477751
            },
            "b": {
                "x": 17784.121293697724,
                "y": 5404.010086192815
            }
        },
        {
            "a": {
                "x": 17784.121293697724,
                "y": 5404.010086192815
            },
            "b": {
                "x": 17753.121308859183,
                "y": 5419.010244966757
            }
        },
        {
            "a": {
                "x": 17753.121308859183,
                "y": 5419.010244966757
            },
            "b": {
                "x": 17717.121310423172,
                "y": 5484.010261426327
            }
        },
        {
            "a": {
                "x": 17717.121310423172,
                "y": 5484.010261426327
            },
            "b": {
                "x": 17645.074346051915,
                "y": 5585.159318869137
            }
        },
        {
            "a": {
                "x": 17645.074346051915,
                "y": 5585.159318869137
            },
            "b": {
                "x": 17567.14772551701,
                "y": 5661.234489506722
            }
        },
        {
            "a": {
                "x": 17567.14772551701,
                "y": 5661.234489506722
            },
            "b": {
                "x": 17464.125221154303,
                "y": 5725.260690740244
            }
        },
        {
            "a": {
                "x": 17464.125221154303,
                "y": 5725.260690740244
            },
            "b": {
                "x": 17328.124344371503,
                "y": 5823.26171259551
            }
        },
        {
            "a": {
                "x": 17328.124344371503,
                "y": 5823.26171259551
            },
            "b": {
                "x": 17256.124267242427,
                "y": 5913.261802520695
            }
        },
        {
            "a": {
                "x": 17256.124267242427,
                "y": 5913.261802520695
            },
            "b": {
                "x": 17201.124266231327,
                "y": 6067.2618036998365
            }
        },
        {
            "a": {
                "x": 17201.124266231327,
                "y": 6067.2618036998365
            },
            "b": {
                "x": 17150.951771087664,
                "y": 6213.204528511279
            }
        },
        {
            "a": {
                "x": 17150.951771087664,
                "y": 6213.204528511279
            },
            "b": {
                "x": 17058.461819199492,
                "y": 6346.50752593925
            }
        },
        {
            "a": {
                "x": 17058.461819199492,
                "y": 6346.50752593925
            },
            "b": {
                "x": 16968.928679067558,
                "y": 6438.04187935568
            }
        },
        {
            "a": {
                "x": 16968.928679067558,
                "y": 6438.04187935568
            },
            "b": {
                "x": 16871.822814629813,
                "y": 6505.147763146765
            }
        },
        {
            "a": {
                "x": 16871.822814629813,
                "y": 6505.147763146765
            },
            "b": {
                "x": 16727.817142359898,
                "y": 6627.1534358756235
            }
        },
        {
            "a": {
                "x": 16727.817142359898,
                "y": 6627.1534358756235
            },
            "b": {
                "x": 16613.053583315337,
                "y": 6710.933461655186
            }
        },
        {
            "a": {
                "x": 16613.053583315337,
                "y": 6710.933461655186
            },
            "b": {
                "x": 16424.92384443289,
                "y": 6808.218355267507
            }
        },
        {
            "a": {
                "x": 16424.92384443289,
                "y": 6808.218355267507
            },
            "b": {
                "x": 16259.89958282046,
                "y": 6856.2203787186245
            }
        },
        {
            "a": {
                "x": 16259.89958282046,
                "y": 6856.2203787186245
            },
            "b": {
                "x": 16113.898107737721,
                "y": 6902.22049985976
            }
        },
        {
            "a": {
                "x": 16113.898107737721,
                "y": 6902.22049985976
            },
            "b": {
                "x": 16058.898005592879,
                "y": 6968.220508190477
            }
        },
        {
            "a": {
                "x": 16058.898005592879,
                "y": 6968.220508190477
            },
            "b": {
                "x": 16045.897997305221,
                "y": 7022.220508864234
            }
        },
        {
            "a": {
                "x": 16045.897997305221,
                "y": 7022.220508864234
            },
            "b": {
                "x": 16062.8979961718,
                "y": 7068.220508956236
            }
        },
        {
            "a": {
                "x": 16062.8979961718,
                "y": 7068.220508956236
            },
            "b": {
                "x": 16116.897996012438,
                "y": 7102.220508969157
            }
        },
        {
            "a": {
                "x": 16116.897996012438,
                "y": 7102.220508969157
            },
            "b": {
                "x": 16194.897996004875,
                "y": 7136.220508969771
            }
        },
        {
            "a": {
                "x": 16194.897996004875,
                "y": 7136.220508969771
            },
            "b": {
                "x": 16283.897996004353,
                "y": 7164.2205089698045
            }
        },
        {
            "a": {
                "x": 16283.897996004353,
                "y": 7164.2205089698045
            },
            "b": {
                "x": 16341.897996004336,
                "y": 7153.2205089698045
            }
        },
        {
            "a": {
                "x": 16341.897996004336,
                "y": 7153.2205089698045
            },
            "b": {
                "x": 16380.897996004336,
                "y": 7164.2205089698045
            }
        },
        {
            "a": {
                "x": 16380.897996004336,
                "y": 7164.2205089698045
            },
            "b": {
                "x": 16482.897996004336,
                "y": 7128.2205089698045
            }
        },
        {
            "a": {
                "x": 16482.897996004336,
                "y": 7128.2205089698045
            },
            "b": {
                "x": 16559.897996004336,
                "y": 7129.2205089698045
            }
        },
        {
            "a": {
                "x": 16559.897996004336,
                "y": 7129.2205089698045
            },
            "b": {
                "x": 16652.897996004336,
                "y": 7122.2205089698045
            }
        },
        {
            "a": {
                "x": 16652.897996004336,
                "y": 7122.2205089698045
            },
            "b": {
                "x": 16750.897996004336,
                "y": 7089.2205089698045
            }
        },
        {
            "a": {
                "x": 16750.897996004336,
                "y": 7089.2205089698045
            },
            "b": {
                "x": 16832.897996004336,
                "y": 7043.2205089698045
            }
        },
        {
            "a": {
                "x": 16832.897996004336,
                "y": 7043.2205089698045
            },
            "b": {
                "x": 16850.897996004336,
                "y": 7028.2205089698045
            }
        },
        {
            "a": {
                "x": 16850.897996004336,
                "y": 7028.2205089698045
            },
            "b": {
                "x": 16921.897996004336,
                "y": 6997.2205089698045
            }
        },
        {
            "a": {
                "x": 16921.897996004336,
                "y": 6997.2205089698045
            },
            "b": {
                "x": 16956.897996004336,
                "y": 6962.2205089698045
            }
        },
        {
            "a": {
                "x": 16956.897996004336,
                "y": 6962.2205089698045
            },
            "b": {
                "x": 16987.897996004336,
                "y": 6932.2205089698045
            }
        },
        {
            "a": {
                "x": 16987.897996004336,
                "y": 6932.2205089698045
            },
            "b": {
                "x": 17004.897996004336,
                "y": 6916.2205089698045
            }
        },
        {
            "a": {
                "x": 17004.897996004336,
                "y": 6916.2205089698045
            },
            "b": {
                "x": 17019.897996004336,
                "y": 6911.2205089698045
            }
        },
        {
            "a": {
                "x": 17019.897996004336,
                "y": 6911.2205089698045
            },
            "b": {
                "x": 17081.311004472387,
                "y": 6862.123482717623
            }
        },
        {
            "a": {
                "x": 17081.311004472387,
                "y": 6862.123482717623
            },
            "b": {
                "x": 17266.295815923193,
                "y": 6662.42993243278
            }
        },
        {
            "a": {
                "x": 17266.295815923193,
                "y": 6662.42993243278
            },
            "b": {
                "x": 17431.310316329036,
                "y": 6495.419780659291
            }
        },
        {
            "a": {
                "x": 17431.310316329036,
                "y": 6495.419780659291
            },
            "b": {
                "x": 17525.22390448562,
                "y": 6360.627969898635
            }
        },
        {
            "a": {
                "x": 17525.22390448562,
                "y": 6360.627969898635
            },
            "b": {
                "x": 17598.07071631148,
                "y": 6274.033281240873
            }
        },
        {
            "a": {
                "x": 17598.07071631148,
                "y": 6274.033281240873
            },
            "b": {
                "x": 17633.085678701493,
                "y": 6227.00445533955
            }
        },
        {
            "a": {
                "x": 17633.085678701493,
                "y": 6227.00445533955
            },
            "b": {
                "x": 17729.087094371243,
                "y": 6172.001713336317
            }
        },
        {
            "a": {
                "x": 17729.087094371243,
                "y": 6172.001713336317
            },
            "b": {
                "x": 17837.08718766184,
                "y": 6079.00153209699
            }
        },
        {
            "a": {
                "x": 17837.08718766184,
                "y": 6079.00153209699
            },
            "b": {
                "x": 17911.56354133509,
                "y": 5983.097318079589
            }
        },
        {
            "a": {
                "x": 17911.56354133509,
                "y": 5983.097318079589
            },
            "b": {
                "x": 17990.90825282959,
                "y": 5824.749405839817
            }
        },
        {
            "a": {
                "x": 17990.90825282959,
                "y": 5824.749405839817
            },
            "b": {
                "x": 18062.91264976361,
                "y": 5673.744996678265
            }
        },
        {
            "a": {
                "x": 18062.91264976361,
                "y": 5673.744996678265
            },
            "b": {
                "x": 18096.912863829275,
                "y": 5532.744782353878
            }
        },
        {
            "a": {
                "x": 18096.912863829275,
                "y": 5532.744782353878
            },
            "b": {
                "x": 18103.60070088421,
                "y": 5505.175467652199
            }
        },
        {
            "a": {
                "x": 18103.60070088421,
                "y": 5505.175467652199
            },
            "b": {
                "x": 18140.600704696066,
                "y": 5446.175286865764
            }
        },
        {
            "a": {
                "x": 18140.600704696066,
                "y": 5446.175286865764
            },
            "b": {
                "x": 18150.60070509813,
                "y": 5268.17525475627
            }
        },
        {
            "a": {
                "x": 18150.60070509813,
                "y": 5268.17525475627
            },
            "b": {
                "x": 18142.93565166073,
                "y": 5213.334280037845
            }
        },
        {
            "a": {
                "x": 18142.93565166073,
                "y": 5213.334280037845
            },
            "b": {
                "x": 18154.93810132064,
                "y": 5082.262822402152
            }
        },
        {
            "a": {
                "x": 18154.93810132064,
                "y": 5082.262822402152
            },
            "b": {
                "x": 18176.938121949308,
                "y": 5025.236244057052
            }
        },
        {
            "a": {
                "x": 18176.938121949308,
                "y": 5025.236244057052
            },
            "b": {
                "x": 18209.938122133986,
                "y": 4976.235632164769
            }
        },
        {
            "a": {
                "x": 18209.938122133986,
                "y": 4976.235632164769
            },
            "b": {
                "x": 18236.938122147185,
                "y": 4984.235558754725
            }
        },
        {
            "a": {
                "x": 18236.938122147185,
                "y": 4984.235558754725
            },
            "b": {
                "x": 18286.938122149077,
                "y": 5054.235541659954
            }
        },
        {
            "a": {
                "x": 18286.938122149077,
                "y": 5054.235541659954
            },
            "b": {
                "x": 18314.938122149077,
                "y": 5146.235541046503
            }
        },
        {
            "a": {
                "x": 18314.938122149077,
                "y": 5146.235541046503
            },
            "b": {
                "x": 18300.938122149077,
                "y": 5335.235541025523
            }
        },
        {
            "a": {
                "x": 18300.938122149077,
                "y": 5335.235541025523
            },
            "b": {
                "x": 18284.281074834842,
                "y": 5461.444958577121
            }
        },
        {
            "a": {
                "x": 18284.281074834842,
                "y": 5461.444958577121
            },
            "b": {
                "x": 18280.285906602458,
                "y": 5573.444959484582
            }
        },
        {
            "a": {
                "x": 18280.285906602458,
                "y": 5573.444959484582
            },
            "b": {
                "x": 18265.285915251272,
                "y": 5689.148755080748
            }
        },
        {
            "a": {
                "x": 18286.285915251272,
                "y": 5832.148990579405
            },
            "b": {
                "x": 18297.93057728147,
                "y": 5871.590885202232
            }
        },
        {
            "a": {
                "x": 18265.285915251272,
                "y": 5689.148755080748
            },
            "b": {
                "x": 18286.285915251272,
                "y": 5832.148990579405
            }
        },
        {
            "a": {
                "x": 18297.93057728147,
                "y": 5871.590885202232
            },
            "b": {
                "x": 18323.12210016577,
                "y": 5937.420259195806
            }
        },
        {
            "a": {
                "x": 18323.12210016577,
                "y": 5937.420259195806
            },
            "b": {
                "x": 18323.13090507643,
                "y": 5999.509502022553
            }
        },
        {
            "a": {
                "x": 18323.13090507643,
                "y": 5999.509502022553
            },
            "b": {
                "x": 18366.13192972329,
                "y": 6153.520105240228
            }
        },
        {
            "a": {
                "x": 18366.13192972329,
                "y": 6153.520105240228
            },
            "b": {
                "x": 18385.131956865127,
                "y": 6199.520389981389
            }
        },
        {
            "a": {
                "x": 18385.131956865127,
                "y": 6199.520389981389
            },
            "b": {
                "x": 18419.89087359937,
                "y": 6355.7759902924245
            }
        },
        {
            "a": {
                "x": 18419.89087359937,
                "y": 6355.7759902924245
            },
            "b": {
                "x": 18448.562668168677,
                "y": 6429.111412980077
            }
        },
        {
            "a": {
                "x": 18448.562668168677,
                "y": 6429.111412980077
            },
            "b": {
                "x": 18496.562186730556,
                "y": 6508.11189622277
            }
        },
        {
            "a": {
                "x": 18496.562186730556,
                "y": 6508.11189622277
            },
            "b": {
                "x": 18589.562153898023,
                "y": 6624.111929115014
            }
        },
        {
            "a": {
                "x": 18589.562153898023,
                "y": 6624.111929115014
            },
            "b": {
                "x": 18660.243837168156,
                "y": 6695.5919004929265
            }
        },
        {
            "a": {
                "x": 18660.243837168156,
                "y": 6695.5919004929265
            },
            "b": {
                "x": 18787.375475756595,
                "y": 6762.823057770811
            }
        },
        {
            "a": {
                "x": 18787.375475756595,
                "y": 6762.823057770811
            },
            "b": {
                "x": 18939.454265891367,
                "y": 6822.838690199095
            }
        },
        {
            "a": {
                "x": 18939.454265891367,
                "y": 6822.838690199095
            },
            "b": {
                "x": 19203.98448320349,
                "y": 6908.719113952435
            }
        },
        {
            "a": {
                "x": 19203.98448320349,
                "y": 6908.719113952435
            },
            "b": {
                "x": 19472.052056367622,
                "y": 6956.346675477342
            }
        },
        {
            "a": {
                "x": 19472.052056367622,
                "y": 6956.346675477342
            },
            "b": {
                "x": 19704.065966601735,
                "y": 6996.079724318715
            }
        },
        {
            "a": {
                "x": 19704.065966601735,
                "y": 6996.079724318715
            },
            "b": {
                "x": 19877.096358229617,
                "y": 7018.264285549611
            }
        },
        {
            "a": {
                "x": 19877.096358229617,
                "y": 7018.264285549611
            },
            "b": {
                "x": 20085.15583136017,
                "y": 7041.281056865252
            }
        },
        {
            "a": {
                "x": 20085.15583136017,
                "y": 7041.281056865252
            },
            "b": {
                "x": 20275.157547482268,
                "y": 7059.281535895075
            }
        },
        {
            "a": {
                "x": 20275.157547482268,
                "y": 7059.281535895075
            },
            "b": {
                "x": 20370.157591951327,
                "y": 7062.281548259334
            }
        },
        {
            "a": {
                "x": 20370.157591951327,
                "y": 7062.281548259334
            },
            "b": {
                "x": 20518.42049682353,
                "y": 7086.6629835030835
            }
        },
        {
            "a": {
                "x": 20518.42049682353,
                "y": 7086.6629835030835
            },
            "b": {
                "x": 20681.191689765525,
                "y": 7103.868408793698
            }
        },
        {
            "a": {
                "x": 20681.191689765525,
                "y": 7103.868408793698
            },
            "b": {
                "x": 20851.484323968245,
                "y": 7123.883380057309
            }
        },
        {
            "a": {
                "x": 20851.484323968245,
                "y": 7123.883380057309
            },
            "b": {
                "x": 21146.510044499388,
                "y": 7152.884660910371
            }
        },
        {
            "a": {
                "x": 21146.510044499388,
                "y": 7152.884660910371
            },
            "b": {
                "x": 21377.137688082486,
                "y": 7166.884738951348
            }
        },
        {
            "a": {
                "x": 21377.137688082486,
                "y": 7166.884738951348
            },
            "b": {
                "x": 21516.32138140754,
                "y": 7181.884738951348
            }
        },
        {
            "a": {
                "x": 21516.32138140754,
                "y": 7181.884738951348
            },
            "b": {
                "x": 21691.352026223864,
                "y": 7194.884738951348
            }
        },
        {
            "a": {
                "x": 21691.352026223864,
                "y": 7194.884738951348
            },
            "b": {
                "x": 21914.354698475578,
                "y": 7182.884738951348
            }
        },
        {
            "a": {
                "x": 21914.354698475578,
                "y": 7182.884738951348
            },
            "b": {
                "x": 22076.354805387655,
                "y": 7118.884738951348
            }
        },
        {
            "a": {
                "x": 22076.354805387655,
                "y": 7118.884738951348
            },
            "b": {
                "x": 22153.354810101264,
                "y": 7023.884738951348
            }
        },
        {
            "a": {
                "x": 22153.354810101264,
                "y": 7023.884738951348
            },
            "b": {
                "x": 22149.35481029259,
                "y": 6915.884738951348
            }
        },
        {
            "a": {
                "x": 22149.35481029259,
                "y": 6915.884738951348
            },
            "b": {
                "x": 22054.354810317585,
                "y": 6781.884738951348
            }
        },
        {
            "a": {
                "x": 22054.354810317585,
                "y": 6781.884738951348
            },
            "b": {
                "x": 21918.35481031766,
                "y": 6730.884738951348
            }
        },
        {
            "a": {
                "x": 21918.35481031766,
                "y": 6730.884738951348
            },
            "b": {
                "x": 21713.757408067817,
                "y": 6690.180317641317
            }
        },
        {
            "a": {
                "x": 21713.757408067817,
                "y": 6690.180317641317
            },
            "b": {
                "x": 21508.251017258986,
                "y": 6660.6901447039445
            }
        },
        {
            "a": {
                "x": 21508.251017258986,
                "y": 6660.6901447039445
            },
            "b": {
                "x": 21278.2878941675,
                "y": 6614.59513529397
            }
        },
        {
            "a": {
                "x": 21278.2878941675,
                "y": 6614.59513529397
            },
            "b": {
                "x": 21001.287864459624,
                "y": 6597.595204852711
            }
        },
        {
            "a": {
                "x": 21001.287864459624,
                "y": 6597.595204852711
            },
            "b": {
                "x": 20889.287864187983,
                "y": 6585.595205481633
            }
        },
        {
            "a": {
                "x": 20889.287864187983,
                "y": 6585.595205481633
            },
            "b": {
                "x": 20682.9642939368,
                "y": 6554.744685046251
            }
        },
        {
            "a": {
                "x": 20682.9642939368,
                "y": 6554.744685046251
            },
            "b": {
                "x": 19915.516601698695,
                "y": 6487.744685046251
            }
        },
        {
            "a": {
                "x": 19915.516601698695,
                "y": 6487.744685046251
            },
            "b": {
                "x": 19659.787216830347,
                "y": 6455.374539927016
            }
        },
        {
            "a": {
                "x": 19659.787216830347,
                "y": 6455.374539927016
            },
            "b": {
                "x": 19182.761352284928,
                "y": 6389.468253813573
            }
        },
        {
            "a": {
                "x": 19182.761352284928,
                "y": 6389.468253813573
            },
            "b": {
                "x": 18932.761256612128,
                "y": 6328.468613206455
            }
        },
        {
            "a": {
                "x": 18932.761256612128,
                "y": 6328.468613206455
            },
            "b": {
                "x": 18800.140440255218,
                "y": 6227.707025579469
            }
        },
        {
            "a": {
                "x": 18800.140440255218,
                "y": 6227.707025579469
            },
            "b": {
                "x": 18762.46019153357,
                "y": 6154.686109950267
            }
        },
        {
            "a": {
                "x": 18762.46019153357,
                "y": 6154.686109950267
            },
            "b": {
                "x": 18761.355420172793,
                "y": 6086.558684007923
            }
        },
        {
            "a": {
                "x": 18761.355420172793,
                "y": 6086.558684007923
            },
            "b": {
                "x": 18798.33782553334,
                "y": 6062.537199157258
            }
        },
        {
            "a": {
                "x": 18798.33782553334,
                "y": 6062.537199157258
            },
            "b": {
                "x": 18964.33629226159,
                "y": 6063.53532178382
            }
        },
        {
            "a": {
                "x": 18964.33629226159,
                "y": 6063.53532178382
            },
            "b": {
                "x": 19034.336236582883,
                "y": 6101.535253501715
            }
        },
        {
            "a": {
                "x": 19034.336236582883,
                "y": 6101.535253501715
            },
            "b": {
                "x": 19130.06022898745,
                "y": 6151.3050985139325
            }
        },
        {
            "a": {
                "x": 19130.06022898745,
                "y": 6151.3050985139325
            },
            "b": {
                "x": 19200.477169862854,
                "y": 6175.3184487624085
            }
        },
        {
            "a": {
                "x": 19200.477169862854,
                "y": 6175.3184487624085
            },
            "b": {
                "x": 19281.53257696051,
                "y": 6183.320361649887
            }
        },
        {
            "a": {
                "x": 19281.53257696051,
                "y": 6183.320361649887
            },
            "b": {
                "x": 19349.53781436999,
                "y": 6195.320549817322
            }
        },
        {
            "a": {
                "x": 19349.53781436999,
                "y": 6195.320549817322
            },
            "b": {
                "x": 19424.538497465684,
                "y": 6188.320574836859
            }
        },
        {
            "a": {
                "x": 19424.538497465684,
                "y": 6188.320574836859
            },
            "b": {
                "x": 19557.53855295841,
                "y": 6153.320576894228
            }
        },
        {
            "a": {
                "x": 19557.53855295841,
                "y": 6153.320576894228
            },
            "b": {
                "x": 19629.53855483683,
                "y": 6116.320576964354
            }
        },
        {
            "a": {
                "x": 19629.53855483683,
                "y": 6116.320576964354
            },
            "b": {
                "x": 19651.538555011386,
                "y": 6076.320576970886
            }
        },
        {
            "a": {
                "x": 19651.538555011386,
                "y": 6076.320576970886
            },
            "b": {
                "x": 19664.538555022173,
                "y": 6020.320576971289
            }
        },
        {
            "a": {
                "x": 19664.538555022173,
                "y": 6020.320576971289
            },
            "b": {
                "x": 19643.538555022362,
                "y": 5940.320576971289
            }
        },
        {
            "a": {
                "x": 19643.538555022362,
                "y": 5940.320576971289
            },
            "b": {
                "x": 19585.538555022362,
                "y": 5889.320576971289
            }
        },
        {
            "a": {
                "x": 19585.538555022362,
                "y": 5889.320576971289
            },
            "b": {
                "x": 19557.538555022362,
                "y": 5884.320576971289
            }
        },
        {
            "a": {
                "x": 19557.538555022362,
                "y": 5884.320576971289
            },
            "b": {
                "x": 19493.538555022362,
                "y": 5839.320576971289
            }
        },
        {
            "a": {
                "x": 19493.538555022362,
                "y": 5839.320576971289
            },
            "b": {
                "x": 19273.10634867163,
                "y": 5744.0966240539665
            }
        },
        {
            "a": {
                "x": 19273.10634867163,
                "y": 5744.0966240539665
            },
            "b": {
                "x": 19078.55402772581,
                "y": 5645.072744543724
            }
        },
        {
            "a": {
                "x": 19078.55402772581,
                "y": 5645.072744543724
            },
            "b": {
                "x": 18961.098727432873,
                "y": 5575.546178066818
            }
        },
        {
            "a": {
                "x": 18961.098727432873,
                "y": 5575.546178066818
            },
            "b": {
                "x": 18874.081900255405,
                "y": 5488.526615169343
            }
        },
        {
            "a": {
                "x": 18874.081900255405,
                "y": 5488.526615169343
            },
            "b": {
                "x": 18784.145501513787,
                "y": 5332.6426209915
            }
        },
        {
            "a": {
                "x": 18784.145501513787,
                "y": 5332.6426209915
            },
            "b": {
                "x": 18713.878614806188,
                "y": 5142.224544664456
            }
        },
        {
            "a": {
                "x": 18713.878614806188,
                "y": 5142.224544664456
            },
            "b": {
                "x": 18679.870986540784,
                "y": 5047.212496661248
            }
        },
        {
            "a": {
                "x": 18679.870986540784,
                "y": 5047.212496661248
            },
            "b": {
                "x": 18671.87092903015,
                "y": 4827.312844450105
            }
        },
        {
            "a": {
                "x": 18671.87092903015,
                "y": 4827.312844450105
            },
            "b": {
                "x": 18725.8709290291,
                "y": 4635.5139003214945
            }
        },
        {
            "a": {
                "x": 18725.8709290291,
                "y": 4635.5139003214945
            },
            "b": {
                "x": 18753.8709290291,
                "y": 4555.408118462966
            }
        },
        {
            "a": {
                "x": 18753.8709290291,
                "y": 4555.408118462966
            },
            "b": {
                "x": 18757.8709290291,
                "y": 4528.402821157572
            }
        },
        {
            "a": {
                "x": 18757.8709290291,
                "y": 4528.402821157572
            },
            "b": {
                "x": 18793.8709290291,
                "y": 4452.402210642045
            }
        },
        {
            "a": {
                "x": 18793.8709290291,
                "y": 4452.402210642045
            },
            "b": {
                "x": 18960.8709290291,
                "y": 4316.402153523649
            }
        },
        {
            "a": {
                "x": 18960.8709290291,
                "y": 4316.402153523649
            },
            "b": {
                "x": 18992.8709290291,
                "y": 4316.402153183365
            }
        },
        {
            "a": {
                "x": 18992.8709290291,
                "y": 4316.402153183365
            },
            "b": {
                "x": 19066.756361525313,
                "y": 4289.2230741258545
            }
        },
        {
            "a": {
                "x": 19066.756361525313,
                "y": 4289.2230741258545
            },
            "b": {
                "x": 19193.195681266272,
                "y": 4276.897817684043
            }
        },
        {
            "a": {
                "x": 19193.195681266272,
                "y": 4276.897817684043
            },
            "b": {
                "x": 19496.281947011816,
                "y": 4278.886941572353
            }
        },
        {
            "a": {
                "x": 19496.281947011816,
                "y": 4278.886941572353
            },
            "b": {
                "x": 19631.993957398063,
                "y": 4288.886840603951
            }
        },
        {
            "a": {
                "x": 19631.993957398063,
                "y": 4288.886840603951
            },
            "b": {
                "x": 19782.963337526147,
                "y": 4293.88684060379
            }
        },
        {
            "a": {
                "x": 19782.963337526147,
                "y": 4293.88684060379
            },
            "b": {
                "x": 20006.18047164573,
                "y": 4305.88684060379
            }
        },
        {
            "a": {
                "x": 20006.18047164573,
                "y": 4305.88684060379
            },
            "b": {
                "x": 20206.51828616776,
                "y": 4299.88684060379
            }
        },
        {
            "a": {
                "x": 20206.51828616776,
                "y": 4299.88684060379
            },
            "b": {
                "x": 20597.051473432253,
                "y": 4335.88684060379
            }
        },
        {
            "a": {
                "x": 20597.051473432253,
                "y": 4335.88684060379
            },
            "b": {
                "x": 20839.044784394697,
                "y": 4343.88684060379
            }
        },
        {
            "a": {
                "x": 20839.044784394697,
                "y": 4343.88684060379
            },
            "b": {
                "x": 20985.04620721568,
                "y": 4356.88684060379
            }
        },
        {
            "a": {
                "x": 20985.04620721568,
                "y": 4356.88684060379
            },
            "b": {
                "x": 21096.046219478885,
                "y": 4353.88684060379
            }
        },
        {
            "a": {
                "x": 21096.046219478885,
                "y": 4353.88684060379
            },
            "b": {
                "x": 21132.0462202468,
                "y": 4360.88684060379
            }
        },
        {
            "a": {
                "x": 21132.0462202468,
                "y": 4360.88684060379
            },
            "b": {
                "x": 21271.297145401408,
                "y": 4346.88684060379
            }
        },
        {
            "a": {
                "x": 21271.297145401408,
                "y": 4346.88684060379
            },
            "b": {
                "x": 21592.28457557924,
                "y": 4354.88684060379
            }
        },
        {
            "a": {
                "x": 21592.28457557924,
                "y": 4354.88684060379
            },
            "b": {
                "x": 21626.28863203078,
                "y": 4342.88684060379
            }
        },
        {
            "a": {
                "x": 21626.28863203078,
                "y": 4342.88684060379
            },
            "b": {
                "x": 21758.289114319403,
                "y": 4340.88684060379
            }
        },
        {
            "a": {
                "x": 21758.289114319403,
                "y": 4340.88684060379
            },
            "b": {
                "x": 21820.289199113784,
                "y": 4306.88684060379
            }
        },
        {
            "a": {
                "x": 21820.289199113784,
                "y": 4306.88684060379
            },
            "b": {
                "x": 21865.289205359088,
                "y": 4240.88684060379
            }
        },
        {
            "a": {
                "x": 21865.289205359088,
                "y": 4240.88684060379
            },
            "b": {
                "x": 21866.289205476554,
                "y": 4181.88684060379
            }
        },
        {
            "a": {
                "x": 21866.289205476554,
                "y": 4181.88684060379
            },
            "b": {
                "x": 21834.28920548201,
                "y": 4083.88684060379
            }
        },
        {
            "a": {
                "x": 21834.28920548201,
                "y": 4083.88684060379
            },
            "b": {
                "x": 21743.28920548215,
                "y": 3993.88684060379
            }
        },
        {
            "a": {
                "x": 21743.28920548215,
                "y": 3993.88684060379
            },
            "b": {
                "x": 21597.28920548215,
                "y": 3957.88684060379
            }
        },
        {
            "a": {
                "x": 21597.28920548215,
                "y": 3957.88684060379
            },
            "b": {
                "x": 21507.28920548215,
                "y": 3939.88684060379
            }
        },
        {
            "a": {
                "x": 21507.28920548215,
                "y": 3939.88684060379
            },
            "b": {
                "x": 21380.232010146927,
                "y": 3894.6957721073663
            }
        },
        {
            "a": {
                "x": 21380.232010146927,
                "y": 3894.6957721073663
            },
            "b": {
                "x": 21320.15148598501,
                "y": 3868.6157732304646
            }
        },
        {
            "a": {
                "x": 21320.15148598501,
                "y": 3868.6157732304646
            },
            "b": {
                "x": 21239.083366786876,
                "y": 3856.5476683257107
            }
        },
        {
            "a": {
                "x": 21239.083366786876,
                "y": 3856.5476683257107
            },
            "b": {
                "x": 21166.08059211428,
                "y": 3835.544893896572
            }
        },
        {
            "a": {
                "x": 21166.08059211428,
                "y": 3835.544893896572
            },
            "b": {
                "x": 20849.823823208877,
                "y": 3814.5447419848556
            }
        },
        {
            "a": {
                "x": 20849.823823208877,
                "y": 3814.5447419848556
            },
            "b": {
                "x": 20715.17242431591,
                "y": 3799.544741982103
            }
        },
        {
            "a": {
                "x": 20715.17242431591,
                "y": 3799.544741982103
            },
            "b": {
                "x": 20538.13118920172,
                "y": 3766.544741982095
            }
        },
        {
            "a": {
                "x": 20538.13118920172,
                "y": 3766.544741982095
            },
            "b": {
                "x": 20369.12946925577,
                "y": 3716.544741982095
            }
        },
        {
            "a": {
                "x": 20369.12946925577,
                "y": 3716.544741982095
            },
            "b": {
                "x": 20285.603467524797,
                "y": 3721.4431490219004
            }
        },
        {
            "a": {
                "x": 20285.603467524797,
                "y": 3721.4431490219004
            },
            "b": {
                "x": 20072.28951840446,
                "y": 3664.488547978505
            }
        },
        {
            "a": {
                "x": 20072.28951840446,
                "y": 3664.488547978505
            },
            "b": {
                "x": 19835.283595991874,
                "y": 3661.469688889944
            }
        },
        {
            "a": {
                "x": 19835.283595991874,
                "y": 3661.469688889944
            },
            "b": {
                "x": 19618.95638276702,
                "y": 3657.227291713604
            }
        },
        {
            "a": {
                "x": 19354.800186820223,
                "y": 3727.6131315784755
            },
            "b": {
                "x": 19197.961258523483,
                "y": 3784.7095529287285
            }
        },
        {
            "a": {
                "x": 19197.961258523483,
                "y": 3784.7095529287285
            },
            "b": {
                "x": 19029.803375906242,
                "y": 3868.2726623168696
            }
        },
        {
            "a": {
                "x": 19618.95638276702,
                "y": 3657.227291713604
            },
            "b": {
                "x": 19354.800186820223,
                "y": 3727.6131315784755
            }
        },
        {
            "a": {
                "x": 19029.803375906242,
                "y": 3868.2726623168696
            },
            "b": {
                "x": 18956.747852146185,
                "y": 3880.791120543503
            }
        },
        {
            "a": {
                "x": 18956.747852146185,
                "y": 3880.791120543503
            },
            "b": {
                "x": 18931.66679805084,
                "y": 3901.753857292395
            }
        },
        {
            "a": {
                "x": 18931.66679805084,
                "y": 3901.753857292395
            },
            "b": {
                "x": 18772.64738146589,
                "y": 3896.7449030030393
            }
        },
        {
            "a": {
                "x": 18772.64738146589,
                "y": 3896.7449030030393
            },
            "b": {
                "x": 18669.646646938476,
                "y": 3858.7445633327334
            }
        },
        {
            "a": {
                "x": 18669.646646938476,
                "y": 3858.7445633327334
            },
            "b": {
                "x": 18649.646641786767,
                "y": 3802.744560947245
            }
        },
        {
            "a": {
                "x": 18649.646641786767,
                "y": 3802.744560947245
            },
            "b": {
                "x": 18642.646641533993,
                "y": 3753.744560830165
            }
        },
        {
            "a": {
                "x": 18642.646641533993,
                "y": 3753.744560830165
            },
            "b": {
                "x": 18611.646641478495,
                "y": 3743.7445608044527
            }
        },
        {
            "a": {
                "x": 18611.646641478495,
                "y": 3743.7445608044527
            },
            "b": {
                "x": 18520.336162691914,
                "y": 3640.4311182016786
            }
        },
        {
            "a": {
                "x": 18520.336162691914,
                "y": 3640.4311182016786
            },
            "b": {
                "x": 18522.53858787194,
                "y": 3620.554903076537
            }
        },
        {
            "a": {
                "x": 18522.53858787194,
                "y": 3620.554903076537
            },
            "b": {
                "x": 18449.933864880873,
                "y": 3512.9214809800933
            }
        },
        {
            "a": {
                "x": 18449.933864880873,
                "y": 3512.9214809800933
            },
            "b": {
                "x": 18389.928623905536,
                "y": 3401.9159713562376
            }
        },
        {
            "a": {
                "x": 18389.928623905536,
                "y": 3401.9159713562376
            },
            "b": {
                "x": 18352.92847195917,
                "y": 3287.9018990148875
            }
        },
        {
            "a": {
                "x": 18352.92847195917,
                "y": 3287.9018990148875
            },
            "b": {
                "x": 18346.92847191217,
                "y": 3161.90183844933
            }
        },
        {
            "a": {
                "x": 18346.92847191217,
                "y": 3161.90183844933
            },
            "b": {
                "x": 18369.9198565853,
                "y": 3052.3435983925765
            }
        },
        {
            "a": {
                "x": 18369.9198565853,
                "y": 3052.3435983925765
            },
            "b": {
                "x": 18568.920162650673,
                "y": 2707.34260516505
            }
        },
        {
            "a": {
                "x": 18568.920162650673,
                "y": 2707.34260516505
            },
            "b": {
                "x": 18622.75132797644,
                "y": 2648.5891886933377
            }
        },
        {
            "a": {
                "x": 18622.75132797644,
                "y": 2648.5891886933377
            },
            "b": {
                "x": 18794.696595391684,
                "y": 2507.5416564618963
            }
        },
        {
            "a": {
                "x": 18794.696595391684,
                "y": 2507.5416564618963
            },
            "b": {
                "x": 18876.697319082978,
                "y": 2457.5408545723044
            }
        },
        {
            "a": {
                "x": 18876.697319082978,
                "y": 2457.5408545723044
            },
            "b": {
                "x": 19139.052838436284,
                "y": 2400.7589407836203
            }
        },
        {
            "a": {
                "x": 19139.052838436284,
                "y": 2400.7589407836203
            },
            "b": {
                "x": 19243.828469698798,
                "y": 2392.629209970062
            }
        },
        {
            "a": {
                "x": 19243.828469698798,
                "y": 2392.629209970062
            },
            "b": {
                "x": 19413.83553029105,
                "y": 2406.628909641531
            }
        },
        {
            "a": {
                "x": 19413.83553029105,
                "y": 2406.628909641531
            },
            "b": {
                "x": 19486.836134239573,
                "y": 2382.628884238294
            }
        },
        {
            "a": {
                "x": 19486.836134239573,
                "y": 2382.628884238294
            },
            "b": {
                "x": 19514.836164743472,
                "y": 2362.628882963419
            }
        },
        {
            "a": {
                "x": 19514.836164743472,
                "y": 2362.628882963419
            },
            "b": {
                "x": 19581.836165356952,
                "y": 2253.6288829378636
            }
        },
        {
            "a": {
                "x": 19581.836165356952,
                "y": 2253.6288829378636
            },
            "b": {
                "x": 19592.83616537764,
                "y": 2172.6288829370023
            }
        },
        {
            "a": {
                "x": 19592.83616537764,
                "y": 2172.6288829370023
            },
            "b": {
                "x": 19582.836165378423,
                "y": 2048.6288829369714
            }
        },
        {
            "a": {
                "x": 19582.836165378423,
                "y": 2048.6288829369714
            },
            "b": {
                "x": 19588.45648763407,
                "y": 1962.4899423825061
            }
        },
        {
            "a": {
                "x": 19588.45648763407,
                "y": 1962.4899423825061
            },
            "b": {
                "x": 19615.144635775792,
                "y": 1821.3148188446091
            }
        },
        {
            "a": {
                "x": 19615.144635775792,
                "y": 1821.3148188446091
            },
            "b": {
                "x": 19760.905399166855,
                "y": 1541.880549123519
            }
        },
        {
            "a": {
                "x": 19760.905399166855,
                "y": 1541.880549123519
            },
            "b": {
                "x": 19805.219968014597,
                "y": 1476.3357286977189
            }
        },
        {
            "a": {
                "x": 19805.219968014597,
                "y": 1476.3357286977189
            },
            "b": {
                "x": 19908.35583786824,
                "y": 1404.1766835163544
            }
        },
        {
            "a": {
                "x": 19908.35583786824,
                "y": 1404.1766835163544
            },
            "b": {
                "x": 19938.362711155245,
                "y": 1361.1686546975047
            }
        },
        {
            "a": {
                "x": 19938.362711155245,
                "y": 1361.1686546975047
            },
            "b": {
                "x": 19993.36276441214,
                "y": 1308.1685925540876
            }
        },
        {
            "a": {
                "x": 19993.36276441214,
                "y": 1308.1685925540876
            },
            "b": {
                "x": 20121.125760334067,
                "y": 1270.5020550733866
            }
        },
        {
            "a": {
                "x": 20121.125760334067,
                "y": 1270.5020550733866
            },
            "b": {
                "x": 20315.139009451406,
                "y": 1244.5012052584766
            }
        },
        {
            "a": {
                "x": 20315.139009451406,
                "y": 1244.5012052584766
            },
            "b": {
                "x": 20382.139200228256,
                "y": 1238.5011932108505
            }
        },
        {
            "a": {
                "x": 20382.139200228256,
                "y": 1238.5011932108505
            },
            "b": {
                "x": 20532.13920539572,
                "y": 1198.501192886014
            }
        },
        {
            "a": {
                "x": 20532.13920539572,
                "y": 1198.501192886014
            },
            "b": {
                "x": 20649.917060919262,
                "y": 1174.9939628118657
            }
        },
        {
            "a": {
                "x": 20649.917060919262,
                "y": 1174.9939628118657
            },
            "b": {
                "x": 20829.915247366895,
                "y": 1169.5489650046288
            }
        },
        {
            "a": {
                "x": 20829.915247366895,
                "y": 1169.5489650046288
            },
            "b": {
                "x": 20972.915648890812,
                "y": 1154.5487880157038
            }
        },
        {
            "a": {
                "x": 20972.915648890812,
                "y": 1154.5487880157038
            },
            "b": {
                "x": 21003.915669326565,
                "y": 1144.5487790153384
            }
        },
        {
            "a": {
                "x": 21003.915669326565,
                "y": 1144.5487790153384
            },
            "b": {
                "x": 21147.15020717109,
                "y": 1115.3910199586196
            }
        },
        {
            "a": {
                "x": 21147.15020717109,
                "y": 1115.3910199586196
            },
            "b": {
                "x": 21257.79684638376,
                "y": 1085.0560751751448
            }
        },
        {
            "a": {
                "x": 21257.79684638376,
                "y": 1085.0560751751448
            },
            "b": {
                "x": 21387.941479546193,
                "y": 1073.0274102032552
            }
        },
        {
            "a": {
                "x": 21387.941479546193,
                "y": 1073.0274102032552
            },
            "b": {
                "x": 21465.947992069225,
                "y": 1058.0261366392674
            }
        },
        {
            "a": {
                "x": 21465.947992069225,
                "y": 1058.0261366392674
            },
            "b": {
                "x": 21555.948081646835,
                "y": 1044.0261192319872
            }
        },
        {
            "a": {
                "x": 21555.948081646835,
                "y": 1044.0261192319872
            },
            "b": {
                "x": 21648.948087915192,
                "y": 1044.0261180158873
            }
        },
        {
            "a": {
                "x": 21648.948087915192,
                "y": 1044.0261180158873
            },
            "b": {
                "x": 21687.475554446042,
                "y": 1034.026117990295
            }
        },
        {
            "a": {
                "x": 21687.475554446042,
                "y": 1034.026117990295
            },
            "b": {
                "x": 21830.81117664782,
                "y": 1028.026117990295
            }
        },
        {
            "a": {
                "x": 21830.81117664782,
                "y": 1028.026117990295
            },
            "b": {
                "x": 21902.87469977058,
                "y": 1010.026117990295
            }
        },
        {
            "a": {
                "x": 21902.87469977058,
                "y": 1010.026117990295
            },
            "b": {
                "x": 22002.882178439377,
                "y": 987.026117990295
            }
        },
        {
            "a": {
                "x": 22002.882178439377,
                "y": 987.026117990295
            },
            "b": {
                "x": 22181.882393108277,
                "y": 913.026117990295
            }
        },
        {
            "a": {
                "x": 22181.882393108277,
                "y": 913.026117990295
            },
            "b": {
                "x": 22345.404407849735,
                "y": 837.0706245536272
            }
        },
        {
            "a": {
                "x": 22345.404407849735,
                "y": 837.0706245536272
            },
            "b": {
                "x": 22438.108807759672,
                "y": 789.0542027704299
            }
        },
        {
            "a": {
                "x": 22438.108807759672,
                "y": 789.0542027704299
            },
            "b": {
                "x": 22528.142574960704,
                "y": 757.0534529421079
            }
        },
        {
            "a": {
                "x": 22528.142574960704,
                "y": 757.0534529421079
            },
            "b": {
                "x": 22911.702402234157,
                "y": 636.6562550161995
            }
        },
        {
            "a": {
                "x": 22911.702402234157,
                "y": 636.6562550161995
            },
            "b": {
                "x": 23335.082205952895,
                "y": 496.7567654813782
            }
        },
        {
            "a": {
                "x": 23335.082205952895,
                "y": 496.7567654813782
            },
            "b": {
                "x": 23523.90799821372,
                "y": 415.52841570503836
            }
        },
        {
            "a": {
                "x": 23523.90799821372,
                "y": 415.52841570503836
            },
            "b": {
                "x": 23683.460634048897,
                "y": 360.6794836668151
            }
        },
        {
            "a": {
                "x": 23683.460634048897,
                "y": 360.6794836668151
            },
            "b": {
                "x": 23890.439275195706,
                "y": 302.5427849632742
            }
        },
        {
            "a": {
                "x": 23890.439275195706,
                "y": 302.5427849632742
            },
            "b": {
                "x": 24063.181845740874,
                "y": 223.3859978124242
            }
        },
        {
            "a": {
                "x": 24063.181845740874,
                "y": 223.3859978124242
            },
            "b": {
                "x": 24167.160999760345,
                "y": 186.6798380865735
            }
        },
        {
            "a": {
                "x": 24167.160999760345,
                "y": 186.6798380865735
            },
            "b": {
                "x": 24378.16099972048,
                "y": 129.6498870833076
            }
        }
    ]
}

export default Level;