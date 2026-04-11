document.addEventListener('DOMContentLoaded', () => {
    // ============================================================
    // VERSÃO DO JOGO — altere aqui para atualizar na tela
    // ============================================================
    const VERSAO_JOGO = "21.0.40";

    // Versão do SCHEMA de dados (independente da versão do jogo).
    // Incremente sempre que adicionar campos novos ao gameState ou às equipesIA.
    const VERSAO_DADOS = 2;

    // --- 1. DADOS GLOBAIS ---
    const CUSTO_MUDAR_NOME    = 250000;
    const CUSTO_MUDAR_EMBLEMA = 250000;
    const CUSTO_ACADEMIA      = 50000000;

    const catalogoDePecas = {
        50: { id: 50, tipo: 'Motor', nome: 'Motor Padrão V1.0', nivel: 1, atributos: { potencia: 40, confiabilidade: 75 } },
        300: { id: 300, tipo: 'Motor', nome: 'Motor Básico X1', nivel: 1, atributos: { potencia: 41, confiabilidade: 74 } },
        301: { id: 301, tipo: 'Motor', nome: 'Motor Padrão K-Alpha', nivel: 1, atributos: { potencia: 42, confiabilidade: 76 } },
        302: { id: 302, tipo: 'Motor', nome: 'Motor EcoDrive V1', nivel: 1, atributos: { potencia: 43, confiabilidade: 75 } },
        303: { id: 303, tipo: 'Motor', nome: 'Motor Compacto Zeta', nivel: 1, atributos: { potencia: 45, confiabilidade: 77 } },
        304: { id: 304, tipo: 'Motor', nome: 'Motor LightSpeed 1', nivel: 1, atributos: { potencia: 47, confiabilidade: 76 } },
        2: { id: 2, tipo: 'Motor', nome: 'Motor Reforçado V2.0', nivel: 2, atributos: { potencia: 49, confiabilidade: 79 } },
        311: { id: 311, tipo: 'Motor', nome: 'Motor StrongLine V2', nivel: 2, atributos: { potencia: 51, confiabilidade: 80 } },
        312: { id: 312, tipo: 'Motor', nome: 'Motor Titan-2', nivel: 2, atributos: { potencia: 52, confiabilidade: 81 } },
        313: { id: 313, tipo: 'Motor', nome: 'Motor Reforçado Kappa', nivel: 2, atributos: { potencia: 50, confiabilidade: 80 } },
        314: { id: 314, tipo: 'Motor', nome: 'Motor IronDrive', nivel: 2, atributos: { potencia: 51, confiabilidade: 82 } },
        3: { id: 3, tipo: 'Motor', nome: 'Motor Reforçado D-5+1', nivel: 2, atributos: { potencia: 53, confiabilidade: 79 } },
        1: { id: 1, tipo: 'Motor', nome: 'Motor Padrão V3', nivel: 3, atributos: { potencia: 54, confiabilidade: 81 } },
        320: { id: 320, tipo: 'Motor', nome: 'Motor Padrão V3X', nivel: 3, atributos: { potencia: 56, confiabilidade: 82 } },
        321: { id: 321, tipo: 'Motor', nome: 'Motor Padrão Sigma', nivel: 3, atributos: { potencia: 59, confiabilidade: 83 } },
        322: { id: 322, tipo: 'Motor', nome: 'Motor Padrão Orion-3', nivel: 3, atributos: { potencia: 54, confiabilidade: 84 } },
        323: { id: 323, tipo: 'Motor', nome: 'Motor Padrão V3 Sport', nivel: 3, atributos: { potencia: 58, confiabilidade: 83 } },
        12: { id: 12, tipo: 'Motor', nome: 'Motor Padrão V4 Sport', nivel: 4, atributos: { potencia: 58, confiabilidade: 83 } },
        330: { id: 330, tipo: 'Motor', nome: 'Motor Padrão V4X', nivel: 4, atributos: { potencia: 60, confiabilidade: 85 } },
        331: { id: 331, tipo: 'Motor', nome: 'Motor Padrão SportLine', nivel: 4, atributos: { potencia: 63, confiabilidade: 86 } },
        332: { id: 332, tipo: 'Motor', nome: 'Motor Padrão Orion-4', nivel: 4, atributos: { potencia: 61, confiabilidade: 87 } },
        333: { id: 333, tipo: 'Motor', nome: 'Motor Padrão Nova4', nivel: 4, atributos: { potencia: 59, confiabilidade: 86 } },
        334: { id: 334, tipo: 'Motor', nome: 'Motor Padrão Delta4', nivel: 4, atributos: { potencia: 62, confiabilidade: 87 } },
        335: { id: 335, tipo: 'Motor', nome: 'Motor Padrão Prime4', nivel: 4, atributos: { potencia: 63, confiabilidade: 88 } },
        13: { id: 13, tipo: 'Motor', nome: 'Motor Especial V6 Sport', nivel: 5, atributos: { potencia: 61, confiabilidade: 82 } },
        340: { id: 340, tipo: 'Motor', nome: 'Motor Especial V5X', nivel: 5, atributos: { potencia: 62, confiabilidade: 87 } },
        341: { id: 341, tipo: 'Motor', nome: 'Motor Especial Orion-5', nivel: 5, atributos: { potencia: 63, confiabilidade: 88 } },
        342: { id: 342, tipo: 'Motor', nome: 'Motor Especial Nova5', nivel: 5, atributos: { potencia: 64, confiabilidade: 89 } },
        14: { id: 14, tipo: 'Motor', nome: 'Motor Power Sport', nivel: 6, atributos: { potencia: 65, confiabilidade: 83 } },
        343: { id: 343, tipo: 'Motor', nome: 'Motor PowerLine V6X', nivel: 6, atributos: { potencia: 66, confiabilidade: 84 } },
        344: { id: 344, tipo: 'Motor', nome: 'Motor Otimizado Z6', nivel: 6, atributos: { potencia: 67, confiabilidade: 85 } },
        345: { id: 345, tipo: 'Motor', nome: 'Motor NitroCore 6', nivel: 6, atributos: { potencia: 68, confiabilidade: 85 } },
        346: { id: 346, tipo: 'Motor', nome: 'Motor MaxDrive V6', nivel: 6, atributos: { potencia: 69, confiabilidade: 86 } },
        347: { id: 347, tipo: 'Motor', nome: 'Motor Thunder V6', nivel: 6, atributos: { potencia: 70, confiabilidade: 86 } },
        348: { id: 348, tipo: 'Motor', nome: 'Motor Fusion-6', nivel: 6, atributos: { potencia: 71, confiabilidade: 87 } },
        349: { id: 349, tipo: 'Motor', nome: 'Motor Otimizado Orion6', nivel: 6, atributos: { potencia: 72, confiabilidade: 87 } },
        350: { id: 350, tipo: 'Motor', nome: 'Motor PowerStorm 6', nivel: 6, atributos: { potencia: 73, confiabilidade: 88 } },
        351: { id: 351, tipo: 'Motor', nome: 'Motor Vortex-6', nivel: 6, atributos: { potencia: 74, confiabilidade: 88 } },
        352: { id: 352, tipo: 'Motor', nome: 'Motor TitanForce 6', nivel: 6, atributos: { potencia: 75, confiabilidade: 89 } },
        6: { id: 6, tipo: 'Motor', nome: 'Motor Otimizado V8', nivel: 6, atributos: { potencia: 78, confiabilidade: 84 } },
        15: { id: 15, tipo: 'Motor', nome: 'Motor Turbo NB', nivel: 7, atributos: { potencia: 72, confiabilidade: 88 } },
        353: { id: 353, tipo: 'Motor', nome: 'Motor Turbo V7X', nivel: 7, atributos: { potencia: 73, confiabilidade: 88 } },
        354: { id: 354, tipo: 'Motor', nome: 'Motor TurboStorm 7', nivel: 7, atributos: { potencia: 74, confiabilidade: 89 } },
        355: { id: 355, tipo: 'Motor', nome: 'Motor HyperDrive 7', nivel: 7, atributos: { potencia: 74, confiabilidade: 89 } },
        356: { id: 356, tipo: 'Motor', nome: 'Motor NitroBoost V7', nivel: 7, atributos: { potencia: 71, confiabilidade: 90 } },
        357: { id: 357, tipo: 'Motor', nome: 'Motor TurboCore 7', nivel: 7, atributos: { potencia: 70, confiabilidade: 90 } },
        358: { id: 358, tipo: 'Motor', nome: 'Motor MaxTorque 7', nivel: 7, atributos: { potencia: 72, confiabilidade: 90 } },
        359: { id: 359, tipo: 'Motor', nome: 'Motor TurboLine Z7', nivel: 7, atributos: { potencia: 73, confiabilidade: 90 } },
        360: { id: 360, tipo: 'Motor', nome: 'Motor ThunderBoost 7', nivel: 7, atributos: { potencia: 74, confiabilidade: 90 } },
        361: { id: 361, tipo: 'Motor', nome: 'Motor TurboNova 7', nivel: 7, atributos: { potencia: 71, confiabilidade: 92 } },
        362: { id: 362, tipo: 'Motor', nome: 'Motor TurboPrime 7', nivel: 7, atributos: { potencia: 75, confiabilidade: 91 } },
        16: { id: 16, tipo: 'Motor', nome: 'Motor Maxx8', nivel: 8, atributos: { potencia: 75, confiabilidade: 87 } },
        363: { id: 363, tipo: 'Motor', nome: 'Motor MaxxForce 8', nivel: 8, atributos: { potencia: 76, confiabilidade: 91 } },
        364: { id: 364, tipo: 'Motor', nome: 'Motor HyperNova 8', nivel: 8, atributos: { potencia: 77, confiabilidade: 92 } },
        365: { id: 365, tipo: 'Motor', nome: 'Motor TitanBoost 8', nivel: 8, atributos: { potencia: 78, confiabilidade: 92 } },
        366: { id: 366, tipo: 'Motor', nome: 'Motor MaxDrive V8X', nivel: 8, atributos: { potencia: 79, confiabilidade: 91 } },
        367: { id: 367, tipo: 'Motor', nome: 'Motor ThunderLine 8', nivel: 8, atributos: { potencia: 75, confiabilidade: 90 } },
        368: { id: 368, tipo: 'Motor', nome: 'Motor FusionCore 8', nivel: 8, atributos: { potencia: 76, confiabilidade: 90 } },
        369: { id: 369, tipo: 'Motor', nome: 'Motor MaxTorque 8', nivel: 8, atributos: { potencia: 79, confiabilidade: 90 } },
        370: { id: 370, tipo: 'Motor', nome: 'Motor VortexPrime 8', nivel: 8, atributos: { potencia: 72, confiabilidade: 90 } },
        371: { id: 371, tipo: 'Motor', nome: 'Motor HyperStorm 8', nivel: 8, atributos: { potencia: 71, confiabilidade: 90 } },
        372: { id: 372, tipo: 'Motor', nome: 'Motor MaxxNova 8', nivel: 8, atributos: { potencia: 75, confiabilidade: 90 } },
        17: { id: 17, tipo: 'Motor', nome: 'Motor Snn94', nivel: 9, atributos: { potencia: 78, confiabilidade: 89 } },
        373: { id: 373, tipo: 'Motor', nome: 'Motor SnnX9', nivel: 9, atributos: { potencia: 79, confiabilidade: 80 } },
        374: { id: 374, tipo: 'Motor', nome: 'Motor ThunderPrime 9', nivel: 9, atributos: { potencia: 80, confiabilidade: 85 } },
        375: { id: 375, tipo: 'Motor', nome: 'Motor HyperBoost 9', nivel: 9, atributos: { potencia: 81, confiabilidade: 88 } },
        376: { id: 376, tipo: 'Motor', nome: 'Motor MaxTorque 9', nivel: 9, atributos: { potencia: 82, confiabilidade: 89 } },
        377: { id: 377, tipo: 'Motor', nome: 'Motor FusionStorm 9', nivel: 9, atributos: { potencia: 83, confiabilidade: 82 } },
        378: { id: 378, tipo: 'Motor', nome: 'Motor VortexLine 9', nivel: 9, atributos: { potencia: 84, confiabilidade: 81 } },
        379: { id: 379, tipo: 'Motor', nome: 'Motor HyperNova 9', nivel: 9, atributos: { potencia: 85, confiabilidade: 80 } },
        380: { id: 380, tipo: 'Motor', nome: 'Motor TitanForce 9', nivel: 9, atributos: { potencia: 82, confiabilidade: 87 } },
        381: { id: 381, tipo: 'Motor', nome: 'Motor MaxxStorm 9', nivel: 9, atributos: { potencia: 84, confiabilidade: 85 } },
        382: { id: 382, tipo: 'Motor', nome: 'Motor ThunderNova 9', nivel: 9, atributos: { potencia: 81, confiabilidade: 79 } },
        18: { id: 18, tipo: 'Motor', nome: 'Motor M.86', nivel: 10, atributos: { potencia: 87, confiabilidade: 87 } },
        83: { id: 383, tipo: 'Motor', nome: 'Motor M.90X', nivel: 10, atributos: { potencia: 88, confiabilidade: 88 } },
        384: { id: 384, tipo: 'Motor', nome: 'Motor HyperPrime 10', nivel: 10, atributos: { potencia: 90, confiabilidade: 90 } },
        385: { id: 385, tipo: 'Motor', nome: 'Motor TitanNova 10', nivel: 10, atributos: { potencia: 91, confiabilidade: 90 } },
        386: { id: 386, tipo: 'Motor', nome: 'Motor MaxTorque 10', nivel: 10, atributos: { potencia: 91, confiabilidade: 90 } },
        387: { id: 387, tipo: 'Motor', nome: 'Motor FusionPrime 10', nivel: 10, atributos: { potencia: 92, confiabilidade: 90 } },
        388: { id: 388, tipo: 'Motor', nome: 'Motor ThunderNova 10', nivel: 10, atributos: { potencia: 90, confiabilidade: 90 } },
        389: { id: 389, tipo: 'Motor', nome: 'Motor VortexX 10', nivel: 10, atributos: { potencia: 92, confiabilidade: 90 } },
        390: { id: 390, tipo: 'Motor', nome: 'Motor HyperStorm 10', nivel: 10, atributos: { potencia: 91, confiabilidade: 91 } },
        391: { id: 391, tipo: 'Motor', nome: 'Motor MaxxPrime 10', nivel: 10, atributos: { potencia: 93, confiabilidade: 93 } },
        392: { id: 392, tipo: 'Motor', nome: 'Motor TitanForce 10', nivel: 10, atributos: { potencia: 91, confiabilidade: 92 } },
        200: { id: 200, tipo: 'Motor', nome: 'Motor CChaplin25', nivel: 10, atributos: { potencia: 92, confiabilidade: 89 } },

        40: { id: 40, tipo: 'Suspensão', nome: 'Suspensão Simples', nivel: 1, atributos: { aderencia: 40, confiabilidade: 80 } },
        51: { id: 51, tipo: 'Suspensão', nome: 'Suspensão Simples V2', nivel: 2, atributos: { aderencia: 43, confiabilidade: 83 } },
        52: { id: 52, tipo: 'Suspensão', nome: 'Suspensão Simples V3', nivel: 3, atributos: { aderencia: 46, confiabilidade: 85 } },
        4: { id: 4, tipo: 'Suspensão', nome: 'Suspensão de Competição', nivel: 4, atributos: { aderencia: 50, confiabilidade: 87 } },
        29: { id: 29, tipo: 'Suspensão', nome: 'Suspensão M-Pro', nivel: 5, atributos: { aderencia: 53, confiabilidade: 89 } },
        27: { id: 27, tipo: 'Suspensão', nome: 'Suspensão Avx', nivel: 6, atributos: { aderencia: 57, confiabilidade: 90 } },
        53: { id: 53, tipo: 'Suspensão', nome: 'Suspensão DC', nivel: 7, atributos: { aderencia: 61, confiabilidade: 89 } },
        28: { id: 28, tipo: 'Suspensão', nome: 'Suspensão Avx', nivel: 8, atributos: { aderencia: 65, confiabilidade: 90 } },
        31: { id: 31, tipo: 'Suspensão', nome: 'Suspensão TTz', nivel: 9, atributos: { aderencia: 66, confiabilidade: 90 } },
        54: { id: 54, tipo: 'Suspensão', nome: 'Suspensão TM86', nivel: 10, atributos: { aderencia: 69, confiabilidade: 89 } },
        201: { id: 201, tipo: 'Suspensão', nome: 'Beralta-19', nivel: 10, atributos: { aderencia: 72, confiabilidade: 89 } },

        55: { id: 55, tipo: 'Chassi', nome: 'Chassi XyX', nivel: 1, atributos: { aerodinamica: 9, aderencia: 11, confiabilidade: 75 } },
        10: { id: 10, tipo: 'Chassi', nome: 'Chassi Básico', nivel: 2, atributos: { aerodinamica: 10, aderencia: 13, confiabilidade: 76 } },
        11: { id: 11, tipo: 'Chassi', nome: 'Chassi de Carbono', nivel: 3, atributos: { aerodinamica: 11, aderencia: 14, confiabilidade: 79 } },
        32: { id: 32, tipo: 'Chassi', nome: 'Chassi XxX', nivel: 4, atributos: { aerodinamica: 12, aderencia: 15, confiabilidade: 83 } },
        5: { id: 5, tipo: 'Chassi', nome: 'Chassi Reforçado', nivel: 5, atributos: { aerodinamica: 13, aderencia: 16, confiabilidade: 84 } },
        25: { id: 25, tipo: 'Chassi', nome: 'Chassi XxX', nivel: 6, atributos: { aerodinamica: 16, aderencia: 17, confiabilidade: 86 } },
        56: { id: 56, tipo: 'Chassi', nome: 'Chassi XxX', nivel: 7, atributos: { aerodinamica: 16, aderencia: 17, confiabilidade: 86} },
        57: { id: 57, tipo: 'Chassi', nome: 'Chassi XxX', nivel: 8, atributos: { aerodinamica: 17, aderencia: 16, confiabilidade: 87 } },
        26: { id: 26, tipo: 'Chassi', nome: 'Chassi ProM', nivel: 9, atributos: { aerodinamica: 17, aderencia: 17, confiabilidade: 88 } },
        205: { id: 26, tipo: 'Chassi', nome: 'BigBig', nivel: 9, atributos: { aerodinamica: 18, aderencia: 18, confiabilidade: 88 } },
        58: { id: 58, tipo: 'Chassi', nome: 'Chassi XxX86', nivel: 10, atributos: { aerodinamica: 20, aderencia: 17, confiabilidade: 89 } },
        202: { id: 202, tipo: 'Chassi', nome: 'Luck-Boss', nivel: 10, atributos: { aerodinamica: 22, aderencia: 18, confiabilidade: 89 } },

        33: { id: 33, tipo: 'Asa Dianteira', nome: 'Asa T ProM', nivel: 1, atributos: { aerodinamica: 11, confiabilidade: 74 } },
        34: { id: 34, tipo: 'Asa Dianteira', nome: 'Asa G Pro', nivel: 2, atributos: { aerodinamica: 12, confiabilidade: 76 } },
        20: { id: 20, tipo: 'Asa Dianteira', nome: 'Asa Padrão', nivel: 3, atributos: { aerodinamica: 13, confiabilidade: 78 } },
        35: { id: 35, tipo: 'Asa Dianteira', nome: 'Asa G Pro', nivel: 3, atributos: { aerodinamica: 14, confiabilidade: 79 } },
        19: { id: 19, tipo: 'Asa Dianteira', nome: 'Asa X-Eficiência', nivel: 4, atributos: { aerodinamica: 15, confiabilidade: 80 } },
        22: { id: 22, tipo: 'Asa Dianteira', nome: 'Asa DeltaT', nivel: 5, atributos: { aerodinamica: 16, confiabilidade: 81 } },
        59: { id: 59, tipo: 'Asa Dianteira', nome: 'Asa T Pro', nivel: 6, atributos: { aerodinamica: 17, confiabilidade: 84 } },
        60: { id: 60, tipo: 'Asa Dianteira', nome: 'Asa NB', nivel: 7, atributos: { aerodinamica: 17, confiabilidade: 85 } },
        8: { id: 8, tipo: 'Asa Dianteira', nome: 'NN-25', nivel: 8, atributos: { aerodinamica: 18, confiabilidade: 86 } },
        21: { id: 21, tipo: 'Asa Dianteira', nome: 'Asa XxX', nivel: 9, atributos: { aerodinamica: 19, confiabilidade: 86 } },
        61: { id: 61, tipo: 'Asa Dianteira', nome: 'Asa Br-TN', nivel: 10, atributos: { aerodinamica: 21, confiabilidade: 89 } },
        203: { id: 203, tipo: 'Asa Dianteira', nome: 'B-CC25', nivel: 10, atributos: { aerodinamica: 24, confiabilidade: 89 } },

        30: { id: 30, tipo: 'Asa Traseira', nome: 'Asa Padrão', nivel: 1, atributos: { aerodinamica: 30, confiabilidade: 79 } },
        71: { id: 71, tipo: 'Asa Traseira', nome: 'Asa CRm', nivel: 2, atributos: { aerodinamica: 30, confiabilidade: 82 } },
        72: { id: 72, tipo: 'Asa Traseira', nome: 'Asa Lck', nivel: 3, atributos: { aerodinamica: 31, confiabilidade: 84 } },
        73: { id: 73, tipo: 'Asa Traseira', nome: 'Asa ChP', nivel: 4, atributos: { aerodinamica: 33, confiabilidade: 86 } },
        24: { id: 24, tipo: 'Asa Traseira', nome: 'Asa T ProM', nivel: 5, atributos: { aerodinamica: 35, confiabilidade: 87 } },
        74: { id: 74, tipo: 'Asa Traseira', nome: 'Asa br', nivel: 6, atributos: { aerodinamica: 37, confiabilidade: 90 } },
        23: { id: 23, tipo: 'Asa Traseira', nome: 'Asa T DRS Pro1', nivel: 7, atributos: { aerodinamica: 37, confiabilidade: 90 } },
        75: { id: 75, tipo: 'Asa Traseira', nome: 'Asa 555', nivel: 8, atributos: { aerodinamica: 38, confiabilidade: 89 } },
        9: { id: 9, tipo: 'Asa Traseira', nome: 'Asa Traseira DRS Pro', nivel: 9, atributos: { aerodinamica: 39, confiabilidade: 87 } },
        76: { id: 76, tipo: 'Asa Traseira', nome: 'Asa 333', nivel: 10, atributos: { aerodinamica: 42, confiabilidade: 89 } },
        204: { id: 204, tipo: 'Asa Traseira', nome: 'Orange-C', nivel: 10, atributos: { aerodinamica: 44, confiabilidade: 89 } },

        // ── SUSPENSÃO — novas peças (3 por nível) ──
        500: { id: 500, tipo: 'Suspensão', nome: 'Suspensão KinetiX',   nivel: 1, atributos: { aderencia: 39, confiabilidade: 79 } },
        501: { id: 501, tipo: 'Suspensão', nome: 'Suspensão PulseOne',  nivel: 1, atributos: { aderencia: 38, confiabilidade: 81 } },
        502: { id: 502, tipo: 'Suspensão', nome: 'Suspensão ZeroG',     nivel: 1, atributos: { aderencia: 40, confiabilidade: 78 } },

        503: { id: 503, tipo: 'Suspensão', nome: 'Suspensão VectorII',  nivel: 2, atributos: { aderencia: 42, confiabilidade: 82 } },
        504: { id: 504, tipo: 'Suspensão', nome: 'Suspensão NovaTrak',  nivel: 2, atributos: { aderencia: 44, confiabilidade: 81 } },
        505: { id: 505, tipo: 'Suspensão', nome: 'Suspensão FlexPro',   nivel: 2, atributos: { aderencia: 43, confiabilidade: 83 } },

        506: { id: 506, tipo: 'Suspensão', nome: 'Suspensão AlphaRide', nivel: 3, atributos: { aderencia: 45, confiabilidade: 84 } },
        507: { id: 507, tipo: 'Suspensão', nome: 'Suspensão CruXIII',   nivel: 3, atributos: { aderencia: 47, confiabilidade: 83 } },
        508: { id: 508, tipo: 'Suspensão', nome: 'Suspensão UrbanGT',   nivel: 3, atributos: { aderencia: 46, confiabilidade: 85 } },

        509: { id: 509, tipo: 'Suspensão', nome: 'Suspensão DeltaCoil', nivel: 4, atributos: { aderencia: 49, confiabilidade: 86 } },
        510: { id: 510, tipo: 'Suspensão', nome: 'Suspensão OmegaRide', nivel: 4, atributos: { aderencia: 51, confiabilidade: 85 } },
        511: { id: 511, tipo: 'Suspensão', nome: 'Suspensão TerraFlex',  nivel: 4, atributos: { aderencia: 50, confiabilidade: 87 } },

        512: { id: 512, tipo: 'Suspensão', nome: 'Suspensão VortexPro', nivel: 5, atributos: { aderencia: 52, confiabilidade: 88 } },
        513: { id: 513, tipo: 'Suspensão', nome: 'Suspensão ApexFive',  nivel: 5, atributos: { aderencia: 54, confiabilidade: 87 } },
        514: { id: 514, tipo: 'Suspensão', nome: 'Suspensão GripMaster', nivel: 5, atributos: { aderencia: 53, confiabilidade: 89 } },

        515: { id: 515, tipo: 'Suspensão', nome: 'Suspensão HyperCoil', nivel: 6, atributos: { aderencia: 56, confiabilidade: 90 } },
        516: { id: 516, tipo: 'Suspensão', nome: 'Suspensão StrikeX6',  nivel: 6, atributos: { aderencia: 58, confiabilidade: 89 } },
        517: { id: 517, tipo: 'Suspensão', nome: 'Suspensão NexaTrak',  nivel: 6, atributos: { aderencia: 57, confiabilidade: 90 } },

        518: { id: 518, tipo: 'Suspensão', nome: 'Suspensão TitanFlex', nivel: 7, atributos: { aderencia: 60, confiabilidade: 90 } },
        519: { id: 519, tipo: 'Suspensão', nome: 'Suspensão PrimeRide', nivel: 7, atributos: { aderencia: 62, confiabilidade: 88 } },
        520: { id: 520, tipo: 'Suspensão', nome: 'Suspensão CarbonSeven',nivel: 7, atributos: { aderencia: 61, confiabilidade: 89 } },

        521: { id: 521, tipo: 'Suspensão', nome: 'Suspensão PhantomG',  nivel: 8, atributos: { aderencia: 64, confiabilidade: 91 } },
        522: { id: 522, tipo: 'Suspensão', nome: 'Suspensão IronGrip8',  nivel: 8, atributos: { aderencia: 66, confiabilidade: 89 } },
        523: { id: 523, tipo: 'Suspensão', nome: 'Suspensão OctaLink',   nivel: 8, atributos: { aderencia: 65, confiabilidade: 90 } },

        524: { id: 524, tipo: 'Suspensão', nome: 'Suspensão StealthNX',  nivel: 9, atributos: { aderencia: 65, confiabilidade: 91 } },
        525: { id: 525, tipo: 'Suspensão', nome: 'Suspensão MaxGrip9',   nivel: 9, atributos: { aderencia: 67, confiabilidade: 90 } },
        526: { id: 526, tipo: 'Suspensão', nome: 'Suspensão ZenithIX',   nivel: 9, atributos: { aderencia: 66, confiabilidade: 91 } },

        527: { id: 527, tipo: 'Suspensão', nome: 'Suspensão LegacyX',    nivel: 10, atributos: { aderencia: 70, confiabilidade: 90 } },
        528: { id: 528, tipo: 'Suspensão', nome: 'Suspensão AbsoluteG',  nivel: 10, atributos: { aderencia: 71, confiabilidade: 89 } },
        529: { id: 529, tipo: 'Suspensão', nome: 'Suspensão ApexLord',   nivel: 10, atributos: { aderencia: 72, confiabilidade: 90 } },

        // ── CHASSI — novas peças (3 por nível) ──
        530: { id: 530, tipo: 'Chassi', nome: 'Chassi KinetiCore',  nivel: 1, atributos: { aerodinamica: 8,  aderencia: 10, confiabilidade: 74 } },
        531: { id: 531, tipo: 'Chassi', nome: 'Chassi SlimShell',   nivel: 1, atributos: { aerodinamica: 9,  aderencia: 11, confiabilidade: 76 } },
        532: { id: 532, tipo: 'Chassi', nome: 'Chassi NovaPod',     nivel: 1, atributos: { aerodinamica: 8,  aderencia: 12, confiabilidade: 75 } },

        533: { id: 533, tipo: 'Chassi', nome: 'Chassi AlphaFrame',  nivel: 2, atributos: { aerodinamica: 10, aderencia: 12, confiabilidade: 77 } },
        534: { id: 534, tipo: 'Chassi', nome: 'Chassi DeltaShell',  nivel: 2, atributos: { aerodinamica: 11, aderencia: 13, confiabilidade: 75 } },
        535: { id: 535, tipo: 'Chassi', nome: 'Chassi IronBird',    nivel: 2, atributos: { aerodinamica: 10, aderencia: 14, confiabilidade: 76 } },

        536: { id: 536, tipo: 'Chassi', nome: 'Chassi CarbonEdge',  nivel: 3, atributos: { aerodinamica: 11, aderencia: 13, confiabilidade: 80 } },
        537: { id: 537, tipo: 'Chassi', nome: 'Chassi VectorBody',  nivel: 3, atributos: { aerodinamica: 12, aderencia: 14, confiabilidade: 78 } },
        538: { id: 538, tipo: 'Chassi', nome: 'Chassi AirCross III',nivel: 3, atributos: { aerodinamica: 11, aderencia: 15, confiabilidade: 79 } },

        539: { id: 539, tipo: 'Chassi', nome: 'Chassi OmegaRig',    nivel: 4, atributos: { aerodinamica: 12, aderencia: 14, confiabilidade: 84 } },
        540: { id: 540, tipo: 'Chassi', nome: 'Chassi TorqueFrame', nivel: 4, atributos: { aerodinamica: 13, aderencia: 15, confiabilidade: 82 } },
        541: { id: 541, tipo: 'Chassi', nome: 'Chassi PrimeCell IV',nivel: 4, atributos: { aerodinamica: 12, aderencia: 16, confiabilidade: 83 } },

        542: { id: 542, tipo: 'Chassi', nome: 'Chassi StrikeBody',  nivel: 5, atributos: { aerodinamica: 13, aderencia: 15, confiabilidade: 85 } },
        543: { id: 543, tipo: 'Chassi', nome: 'Chassi ApexShell V', nivel: 5, atributos: { aerodinamica: 14, aderencia: 16, confiabilidade: 83 } },
        544: { id: 544, tipo: 'Chassi', nome: 'Chassi NexaCraft',   nivel: 5, atributos: { aerodinamica: 13, aderencia: 17, confiabilidade: 84 } },

        545: { id: 545, tipo: 'Chassi', nome: 'Chassi PhantomRig',  nivel: 6, atributos: { aerodinamica: 15, aderencia: 16, confiabilidade: 87 } },
        546: { id: 546, tipo: 'Chassi', nome: 'Chassi HyperFrame',  nivel: 6, atributos: { aerodinamica: 16, aderencia: 17, confiabilidade: 85 } },
        547: { id: 547, tipo: 'Chassi', nome: 'Chassi SteelPulse',  nivel: 6, atributos: { aerodinamica: 15, aderencia: 18, confiabilidade: 86 } },

        548: { id: 548, tipo: 'Chassi', nome: 'Chassi TitanShell',  nivel: 7, atributos: { aerodinamica: 16, aderencia: 16, confiabilidade: 87 } },
        549: { id: 549, tipo: 'Chassi', nome: 'Chassi ZenithPod',   nivel: 7, atributos: { aerodinamica: 17, aderencia: 17, confiabilidade: 85 } },
        550: { id: 550, tipo: 'Chassi', nome: 'Chassi NovaBlade VII',nivel: 7, atributos: { aerodinamica: 15, aderencia: 18, confiabilidade: 86 } },

        551: { id: 551, tipo: 'Chassi', nome: 'Chassi OctaFrame',   nivel: 8, atributos: { aerodinamica: 17, aderencia: 15, confiabilidade: 88 } },
        552: { id: 552, tipo: 'Chassi', nome: 'Chassi StealthBody',  nivel: 8, atributos: { aerodinamica: 18, aderencia: 16, confiabilidade: 86 } },
        553: { id: 553, tipo: 'Chassi', nome: 'Chassi IronSpectre',  nivel: 8, atributos: { aerodinamica: 17, aderencia: 17, confiabilidade: 87 } },

        554: { id: 554, tipo: 'Chassi', nome: 'Chassi MaxFrame IX',  nivel: 9, atributos: { aerodinamica: 17, aderencia: 17, confiabilidade: 89 } },
        555: { id: 555, tipo: 'Chassi', nome: 'Chassi AbsolutePod',  nivel: 9, atributos: { aerodinamica: 18, aderencia: 18, confiabilidade: 87 } },
        556: { id: 556, tipo: 'Chassi', nome: 'Chassi LegacyRig',    nivel: 9, atributos: { aerodinamica: 19, aderencia: 17, confiabilidade: 88 } },

        557: { id: 557, tipo: 'Chassi', nome: 'Chassi UltraCore X',  nivel: 10, atributos: { aerodinamica: 21, aderencia: 18, confiabilidade: 90 } },
        558: { id: 558, tipo: 'Chassi', nome: 'Chassi ApexLord',     nivel: 10, atributos: { aerodinamica: 22, aderencia: 19, confiabilidade: 88 } },
        559: { id: 559, tipo: 'Chassi', nome: 'Chassi TitanMind',    nivel: 10, atributos: { aerodinamica: 20, aderencia: 19, confiabilidade: 89 } },

        // ── ASA DIANTEIRA — novas peças (3 por nível) ──
        560: { id: 560, tipo: 'Asa Dianteira', nome: 'Asa SlipCut I',    nivel: 1, atributos: { aerodinamica: 10, confiabilidade: 73 } },
        561: { id: 561, tipo: 'Asa Dianteira', nome: 'Asa KiteOne',      nivel: 1, atributos: { aerodinamica: 11, confiabilidade: 75 } },
        562: { id: 562, tipo: 'Asa Dianteira', nome: 'Asa ZeroDrag I',   nivel: 1, atributos: { aerodinamica: 10, confiabilidade: 74 } },

        563: { id: 563, tipo: 'Asa Dianteira', nome: 'Asa VectorFin II', nivel: 2, atributos: { aerodinamica: 12, confiabilidade: 75 } },
        564: { id: 564, tipo: 'Asa Dianteira', nome: 'Asa DeltaBlade',   nivel: 2, atributos: { aerodinamica: 13, confiabilidade: 74 } },
        565: { id: 565, tipo: 'Asa Dianteira', nome: 'Asa NovaCut II',   nivel: 2, atributos: { aerodinamica: 12, confiabilidade: 76 } },

        566: { id: 566, tipo: 'Asa Dianteira', nome: 'Asa PrimeFin III', nivel: 3, atributos: { aerodinamica: 13, confiabilidade: 78 } },
        567: { id: 567, tipo: 'Asa Dianteira', nome: 'Asa CarbonKite',   nivel: 3, atributos: { aerodinamica: 14, confiabilidade: 77 } },
        568: { id: 568, tipo: 'Asa Dianteira', nome: 'Asa ApexSlice',    nivel: 3, atributos: { aerodinamica: 13, confiabilidade: 79 } },

        569: { id: 569, tipo: 'Asa Dianteira', nome: 'Asa HyperFin IV',  nivel: 4, atributos: { aerodinamica: 15, confiabilidade: 79 } },
        570: { id: 570, tipo: 'Asa Dianteira', nome: 'Asa OmegaCut',     nivel: 4, atributos: { aerodinamica: 16, confiabilidade: 78 } },
        571: { id: 571, tipo: 'Asa Dianteira', nome: 'Asa StrikeWing IV',nivel: 4, atributos: { aerodinamica: 15, confiabilidade: 80 } },

        572: { id: 572, tipo: 'Asa Dianteira', nome: 'Asa TorqueFin',    nivel: 5, atributos: { aerodinamica: 16, confiabilidade: 80 } },
        573: { id: 573, tipo: 'Asa Dianteira', nome: 'Asa PhantomCut V', nivel: 5, atributos: { aerodinamica: 17, confiabilidade: 79 } },
        574: { id: 574, tipo: 'Asa Dianteira', nome: 'Asa NexaWing',     nivel: 5, atributos: { aerodinamica: 16, confiabilidade: 81 } },

        575: { id: 575, tipo: 'Asa Dianteira', nome: 'Asa TitanBlade VI',nivel: 6, atributos: { aerodinamica: 17, confiabilidade: 83 } },
        576: { id: 576, tipo: 'Asa Dianteira', nome: 'Asa ZenithFin',    nivel: 6, atributos: { aerodinamica: 18, confiabilidade: 82 } },
        577: { id: 577, tipo: 'Asa Dianteira', nome: 'Asa VortexCut VI', nivel: 6, atributos: { aerodinamica: 17, confiabilidade: 84 } },

        578: { id: 578, tipo: 'Asa Dianteira', nome: 'Asa ShadowFin VII',nivel: 7, atributos: { aerodinamica: 17, confiabilidade: 86 } },
        579: { id: 579, tipo: 'Asa Dianteira', nome: 'Asa IronKite VII', nivel: 7, atributos: { aerodinamica: 18, confiabilidade: 84 } },
        580: { id: 580, tipo: 'Asa Dianteira', nome: 'Asa MaxSlice VII', nivel: 7, atributos: { aerodinamica: 17, confiabilidade: 85 } },

        581: { id: 581, tipo: 'Asa Dianteira', nome: 'Asa StealthBlade', nivel: 8, atributos: { aerodinamica: 18, confiabilidade: 87 } },
        582: { id: 582, tipo: 'Asa Dianteira', nome: 'Asa PrimeCut VIII',nivel: 8, atributos: { aerodinamica: 19, confiabilidade: 85 } },
        583: { id: 583, tipo: 'Asa Dianteira', nome: 'Asa UltraFin VIII',nivel: 8, atributos: { aerodinamica: 18, confiabilidade: 86 } },

        584: { id: 584, tipo: 'Asa Dianteira', nome: 'Asa AbsoluteKite', nivel: 9, atributos: { aerodinamica: 19, confiabilidade: 87 } },
        585: { id: 585, tipo: 'Asa Dianteira', nome: 'Asa LegacyFin IX', nivel: 9, atributos: { aerodinamica: 20, confiabilidade: 85 } },
        586: { id: 586, tipo: 'Asa Dianteira', nome: 'Asa OmegaSlice IX',nivel: 9, atributos: { aerodinamica: 19, confiabilidade: 86 } },

        587: { id: 587, tipo: 'Asa Dianteira', nome: 'Asa ApexLord X',   nivel: 10, atributos: { aerodinamica: 22, confiabilidade: 90 } },
        588: { id: 588, tipo: 'Asa Dianteira', nome: 'Asa TitanKite X',  nivel: 10, atributos: { aerodinamica: 23, confiabilidade: 88 } },
        589: { id: 589, tipo: 'Asa Dianteira', nome: 'Asa NovaBlade X',  nivel: 10, atributos: { aerodinamica: 21, confiabilidade: 89 } },

        // ── ASA TRASEIRA — novas peças (3 por nível) ──
        590: { id: 590, tipo: 'Asa Traseira', nome: 'Asa Traseira DriftI',   nivel: 1, atributos: { aerodinamica: 29, confiabilidade: 78 } },
        591: { id: 591, tipo: 'Asa Traseira', nome: 'Asa Traseira SlipBack', nivel: 1, atributos: { aerodinamica: 30, confiabilidade: 77 } },
        592: { id: 592, tipo: 'Asa Traseira', nome: 'Asa Traseira ZeroOne',  nivel: 1, atributos: { aerodinamica: 29, confiabilidade: 79 } },

        593: { id: 593, tipo: 'Asa Traseira', nome: 'Asa Traseira VectoII',  nivel: 2, atributos: { aerodinamica: 31, confiabilidade: 81 } },
        594: { id: 594, tipo: 'Asa Traseira', nome: 'Asa Traseira KiteBack', nivel: 2, atributos: { aerodinamica: 30, confiabilidade: 82 } },
        595: { id: 595, tipo: 'Asa Traseira', nome: 'Asa Traseira DeltaRear',nivel: 2, atributos: { aerodinamica: 31, confiabilidade: 80 } },

        596: { id: 596, tipo: 'Asa Traseira', nome: 'Asa Traseira ApexIII',  nivel: 3, atributos: { aerodinamica: 31, confiabilidade: 85 } },
        597: { id: 597, tipo: 'Asa Traseira', nome: 'Asa Traseira CarbonIII',nivel: 3, atributos: { aerodinamica: 32, confiabilidade: 83 } },
        598: { id: 598, tipo: 'Asa Traseira', nome: 'Asa Traseira NovaTail', nivel: 3, atributos: { aerodinamica: 31, confiabilidade: 84 } },

        599: { id: 599, tipo: 'Asa Traseira', nome: 'Asa Traseira StrikeIV', nivel: 4, atributos: { aerodinamica: 32, confiabilidade: 87 } },
        600: { id: 600, tipo: 'Asa Traseira', nome: 'Asa Traseira OmegaRear',nivel: 4, atributos: { aerodinamica: 34, confiabilidade: 85 } },
        601: { id: 601, tipo: 'Asa Traseira', nome: 'Asa Traseira TorqueIV', nivel: 4, atributos: { aerodinamica: 33, confiabilidade: 86 } },

        602: { id: 602, tipo: 'Asa Traseira', nome: 'Asa Traseira PhantomV', nivel: 5, atributos: { aerodinamica: 34, confiabilidade: 88 } },
        603: { id: 603, tipo: 'Asa Traseira', nome: 'Asa Traseira HyperTail',nivel: 5, atributos: { aerodinamica: 36, confiabilidade: 86 } },
        604: { id: 604, tipo: 'Asa Traseira', nome: 'Asa Traseira VortexV',  nivel: 5, atributos: { aerodinamica: 35, confiabilidade: 87 } },

        605: { id: 605, tipo: 'Asa Traseira', nome: 'Asa Traseira TitanVI',  nivel: 6, atributos: { aerodinamica: 36, confiabilidade: 91 } },
        606: { id: 606, tipo: 'Asa Traseira', nome: 'Asa Traseira ZenithVI', nivel: 6, atributos: { aerodinamica: 38, confiabilidade: 89 } },
        607: { id: 607, tipo: 'Asa Traseira', nome: 'Asa Traseira IronTail', nivel: 6, atributos: { aerodinamica: 37, confiabilidade: 90 } },

        608: { id: 608, tipo: 'Asa Traseira', nome: 'Asa Traseira ShadowVII',nivel: 7, atributos: { aerodinamica: 36, confiabilidade: 91 } },
        609: { id: 609, tipo: 'Asa Traseira', nome: 'Asa Traseira MaxRearVII',nivel: 7, atributos: { aerodinamica: 38, confiabilidade: 89 } },
        610: { id: 610, tipo: 'Asa Traseira', nome: 'Asa Traseira NovaDRS',  nivel: 7, atributos: { aerodinamica: 37, confiabilidade: 90 } },

        611: { id: 611, tipo: 'Asa Traseira', nome: 'Asa Traseira StealthVIII',nivel: 8, atributos: { aerodinamica: 37, confiabilidade: 90 } },
        612: { id: 612, tipo: 'Asa Traseira', nome: 'Asa Traseira OctaTail', nivel: 8, atributos: { aerodinamica: 39, confiabilidade: 88 } },
        613: { id: 613, tipo: 'Asa Traseira', nome: 'Asa Traseira PrimeDRS', nivel: 8, atributos: { aerodinamica: 38, confiabilidade: 89 } },

        614: { id: 614, tipo: 'Asa Traseira', nome: 'Asa Traseira LegacyIX', nivel: 9, atributos: { aerodinamica: 38, confiabilidade: 88 } },
        615: { id: 615, tipo: 'Asa Traseira', nome: 'Asa Traseira AbsoluteIX',nivel: 9, atributos: { aerodinamica: 40, confiabilidade: 86 } },
        616: { id: 616, tipo: 'Asa Traseira', nome: 'Asa Traseira MaxDRS IX',nivel: 9, atributos: { aerodinamica: 39, confiabilidade: 87 } },

        617: { id: 617, tipo: 'Asa Traseira', nome: 'Asa Traseira ApexLordX',nivel: 10, atributos: { aerodinamica: 43, confiabilidade: 90 } },
        618: { id: 618, tipo: 'Asa Traseira', nome: 'Asa Traseira TitanDRS', nivel: 10, atributos: { aerodinamica: 44, confiabilidade: 88 } },
        619: { id: 619, tipo: 'Asa Traseira', nome: 'Asa Traseira UltraRear',nivel: 10, atributos: { aerodinamica: 42, confiabilidade: 89 } },

        // ── MOTOR — novas peças (3 por nível) ──
        620: { id: 620, tipo: 'Motor', nome: 'Motor Ignis V1',       nivel: 1, atributos: { potencia: 40, confiabilidade: 76 } },
        621: { id: 621, tipo: 'Motor', nome: 'Motor Zephyr-1',       nivel: 1, atributos: { potencia: 42, confiabilidade: 74 } },
        622: { id: 622, tipo: 'Motor', nome: 'Motor ArcOne',         nivel: 1, atributos: { potencia: 41, confiabilidade: 75 } },

        623: { id: 623, tipo: 'Motor', nome: 'Motor Ignis V2',       nivel: 2, atributos: { potencia: 50, confiabilidade: 80 } },
        624: { id: 624, tipo: 'Motor', nome: 'Motor Zephyr-2',       nivel: 2, atributos: { potencia: 52, confiabilidade: 79 } },
        625: { id: 625, tipo: 'Motor', nome: 'Motor Chronos II',     nivel: 2, atributos: { potencia: 51, confiabilidade: 81 } },

        626: { id: 626, tipo: 'Motor', nome: 'Motor Ignis V3',       nivel: 3, atributos: { potencia: 55, confiabilidade: 82 } },
        627: { id: 627, tipo: 'Motor', nome: 'Motor Zephyr-3',       nivel: 3, atributos: { potencia: 57, confiabilidade: 81 } },
        628: { id: 628, tipo: 'Motor', nome: 'Motor Nexus III',      nivel: 3, atributos: { potencia: 56, confiabilidade: 83 } },

        629: { id: 629, tipo: 'Motor', nome: 'Motor Ignis V4',       nivel: 4, atributos: { potencia: 60, confiabilidade: 85 } },
        630: { id: 630, tipo: 'Motor', nome: 'Motor Zephyr-4',       nivel: 4, atributos: { potencia: 62, confiabilidade: 84 } },
        631: { id: 631, tipo: 'Motor', nome: 'Motor Solaris IV',     nivel: 4, atributos: { potencia: 61, confiabilidade: 86 } },

        632: { id: 632, tipo: 'Motor', nome: 'Motor Ignis V5',       nivel: 5, atributos: { potencia: 63, confiabilidade: 87 } },
        633: { id: 633, tipo: 'Motor', nome: 'Motor Zephyr-5',       nivel: 5, atributos: { potencia: 64, confiabilidade: 86 } },
        634: { id: 634, tipo: 'Motor', nome: 'Motor Kronos V',       nivel: 5, atributos: { potencia: 62, confiabilidade: 88 } },

        635: { id: 635, tipo: 'Motor', nome: 'Motor Ignis V6',       nivel: 6, atributos: { potencia: 68, confiabilidade: 86 } },
        636: { id: 636, tipo: 'Motor', nome: 'Motor Zephyr-6',       nivel: 6, atributos: { potencia: 72, confiabilidade: 85 } },
        637: { id: 637, tipo: 'Motor', nome: 'Motor Aether VI',      nivel: 6, atributos: { potencia: 70, confiabilidade: 87 } },

        638: { id: 638, tipo: 'Motor', nome: 'Motor Ignis V7',       nivel: 7, atributos: { potencia: 73, confiabilidade: 89 } },
        639: { id: 639, tipo: 'Motor', nome: 'Motor Zephyr-7',       nivel: 7, atributos: { potencia: 74, confiabilidade: 88 } },
        640: { id: 640, tipo: 'Motor', nome: 'Motor Pulsar VII',     nivel: 7, atributos: { potencia: 72, confiabilidade: 90 } },

        641: { id: 641, tipo: 'Motor', nome: 'Motor Ignis V8',       nivel: 8, atributos: { potencia: 77, confiabilidade: 92 } },
        642: { id: 642, tipo: 'Motor', nome: 'Motor Zephyr-8',       nivel: 8, atributos: { potencia: 79, confiabilidade: 91 } },
        643: { id: 643, tipo: 'Motor', nome: 'Motor Vertex VIII',    nivel: 8, atributos: { potencia: 78, confiabilidade: 93 } },

        644: { id: 644, tipo: 'Motor', nome: 'Motor Ignis V9',       nivel: 9, atributos: { potencia: 82, confiabilidade: 92 } },
        645: { id: 645, tipo: 'Motor', nome: 'Motor Zephyr-9',       nivel: 9, atributos: { potencia: 84, confiabilidade: 92 } },
        646: { id: 646, tipo: 'Motor', nome: 'Motor Solstice IX',    nivel: 9, atributos: { potencia: 83, confiabilidade: 91 } },

        647: { id: 647, tipo: 'Motor', nome: 'Motor Ignis V10',      nivel: 10, atributos: { potencia: 90, confiabilidade: 91 } },
        648: { id: 648, tipo: 'Motor', nome: 'Motor Zephyr-10',      nivel: 10, atributos: { potencia: 91, confiabilidade: 92 } },
        649: { id: 649, tipo: 'Motor', nome: 'Motor Apex Eternum',   nivel: 10, atributos: { potencia: 89, confiabilidade: 91 } },
    };
    const especialistasDisponiveis = [ { id: 1, nome: "Adrian Newey Jr.", tipo: "Aerodinamicista", nivel: 5, salario: 15000 }, { id: 2, nome: "Paddy Lowe", tipo: "Projetista", nivel: 5, salario: 11900 }, { id: 3, nome: "Luca Marmorini", tipo: "Engenheiro de Motor", nivel: 5, salario: 12000 }, { id: 4, nome: "Helmut Marko Jr.", tipo: "Olheiro", nivel: 5, salario: 11650 }, { id: 5, nome: "Jo Bauer", tipo: "Treinador de Pilotos", nivel: 5, salario: 11750 } ];
    const CUSTO_BASE_PROJETO = 50000;
    const calendarioCorridas = [
        { nome: "GP da Austrália (Melbourne)", imagem: "Autodromos/Australia.png", voltas: 58, tempoBaseVolta: 79, pitstopTime: 20, demandaMotor: 0.6, demandaAero: 0.7, demandaAderencia: 0.7 },
        { nome: "GP da China (Xangai)", imagem: "Autodromos/China.png", voltas: 56, tempoBaseVolta: 92, pitstopTime: 25, demandaMotor: 0.9, demandaAero: 0.7, demandaAderencia: 0.95 },
        { nome: "GP do Japão (Suzuka)", imagem: "Autodromos/Japan.png", voltas: 53, tempoBaseVolta: 90, pitstopTime: 28, demandaMotor: 0.7, demandaAero: 0.9, demandaAderencia: 0.78 },
        { nome: "GP do Bahrein (Sakhir)", imagem: "Autodromos/Bahrain.png", voltas: 57, tempoBaseVolta: 91, pitstopTime: 22, demandaMotor: 0.9, demandaAero: 0.8, demandaAderencia: 0.75 },
        { nome: "GP da Arábia Saudita (Jeddah)", imagem: "Autodromos/Arabia.png", voltas: 50, tempoBaseVolta: 90, pitstopTime: 26, demandaMotor: 0.9, demandaAero: 0.6, demandaAderencia: 0.8 },
        { nome: "Gp de Miami (EUA)", imagem: "Autodromos/Miami.png", voltas: 57, tempoBaseVolta: 89, pitstopTime: 21, demandaMotor: 0.6, demandaAero: 0.8, demandaAderencia: 0.7 },
        { nome: "GP de Emília-Romanha (Ímola)", imagem: "Autodromos/Imola.png", voltas: 63, tempoBaseVolta: 75, pitstopTime: 20, demandaMotor: 0.9, demandaAero: 0.6, demandaAderencia: 0.95 },
        { nome: "GP de Mônaco", imagem: "Autodromos/Monaco.png", voltas: 78, tempoBaseVolta: 75, pitstopTime: 28, demandaMotor: 0.7, demandaAero: 0.5, demandaAderencia: 0.92 },
        { nome: "GP da Espanha (Barcelona)", imagem: "Autodromos/Spain.png", voltas: 66, tempoBaseVolta: 76, pitstopTime: 23, demandaMotor: 0.8, demandaAero: 0.9, demandaAderencia: 0.90 },
        { nome: "GP do Canadá (Montreal)", imagem: "Autodromos/Canada.png", voltas: 70, tempoBaseVolta: 73, pitstopTime: 24, demandaMotor: 0.7, demandaAero: 0.5, demandaAderencia: 0.96 },
        { nome: "Gp da Áustria (Red Bull Ring)", imagem: "Autodromos/Austria.png", voltas: 71, tempoBaseVolta: 65, pitstopTime: 28, demandaMotor: 0.7, demandaAero: 0.8, demandaAderencia: 0.85 },
        { nome: "GP da Inglaterra (Silverstone)", imagem: "Autodromos/Inglaterra.png", voltas: 52, tempoBaseVolta: 87, pitstopTime: 22, demandaMotor: 0.7, demandaAero: 0.9, demandaAderencia: 0.7 },
        { nome: "GP da Bélgica (Spa)", imagem: "Autodromos/Belgica.png", voltas: 44, tempoBaseVolta: 106, pitstopTime: 21, demandaMotor: 0.8, demandaAero: 0.5, demandaAderencia: 0.92 },
        { nome: "GP da Hungria (Hungaroring)", imagem: "Autodromos/Hungria.png", voltas: 70, tempoBaseVolta: 76, pitstopTime: 20, demandaMotor: 0.8, demandaAero: 0.8, demandaAderencia: 0.8 },
        { nome: "Gp da Holanda (Zandvoort)", imagem: "Autodromos/Holanda.png", voltas: 72, tempoBaseVolta: 71, pitstopTime: 29, demandaMotor: 0.8, demandaAero: 0.5, demandaAderencia: 0.9 },
        { nome: "GP de Monza (Itália)", imagem: "Autodromos/Italia.png", voltas: 53, tempoBaseVolta: 85, pitstopTime: 22, demandaMotor: 0.7, demandaAero: 0.9, demandaAderencia: 0.5 },
        { nome: "GP do Azerbaijão (Baku)", imagem: "Autodromos/Azerbaijan.png", voltas: 51, tempoBaseVolta: 103, pitstopTime: 24, demandaMotor: 0.9, demandaAero: 0.5, demandaAderencia: 0.95 },
        { nome: "GP de Singapura (Marina Bay)", imagem: "Autodromos/Singapura.png", voltas: 61, tempoBaseVolta: 94, pitstopTime: 22, demandaMotor: 0.7, demandaAero: 0.7, demandaAderencia: 0.85 },
        { nome: "Gp dos EUA (Austin)", imagem: "Autodromos/EUA.png", voltas: 56, tempoBaseVolta: 96, pitstopTime: 21, demandaMotor: 0.8, demandaAero: 0.9, demandaAderencia: 0.83 },
        { nome: "GP do México (CDMX)", imagem: "Autodromos/Mexico.png", voltas: 71, tempoBaseVolta: 81, pitstopTime: 25, demandaMotor: 0.9, demandaAero: 0.8, demandaAderencia: 0.85 },
        { nome: "Gp do Brasil (Interlagos)", imagem: "Autodromos/Brasil.png", voltas: 71, tempoBaseVolta: 70, pitstopTime: 22, demandaMotor: 0.8, demandaAero: 0.9, demandaAderencia: 0.95 },
        { nome: "GP de Las Vegas", imagem: "Autodromos/LasVegas.png", voltas: 50, tempoBaseVolta: 95, pitstopTime: 21, demandaMotor: 0.9, demandaAero: 0.9, demandaAderencia: 0.83 },
        { nome: "GP do Catar (Lusail)", imagem: "Autodromos/Qatar.png", voltas: 57, tempoBaseVolta: 84, pitstopTime: 26, demandaMotor: 0.9, demandaAero: 0.8, demandaAderencia: 0.79 },
        { nome: "GP de Abu Dhabi (Yas Marina)", imagem: "Autodromos/Abudabi.png", voltas: 55, tempoBaseVolta: 86, pitstopTime: 21, demandaMotor: 0.9, demandaAero: 0.9, demandaAderencia: 0.99 },
    ];
    const coordenadasPistas = {
        "GP da Austrália (Melbourne)": [{ x: 380, y: 360 }, 	{ x: 270, y: 360 }, 	{ x: 260, y: 340 }, 	{ x: 250, y: 330 }, 	{ x: 200, y: 340 }, 	{ x: 80, y: 330 }, 	{ x: 80, y: 320 }, 	{ x: 90, y: 310 }, 	{ x: 130, y: 270 }, 	{ x: 70, y: 210 }, 	{ x: 80, y: 170 }, 	{ x: 90, y: 130 }, 	{ x: 100, y: 100 }, 	{ x: 120, y: 100 }, 	{ x: 160, y: 70 }, 	{ x: 200, y: 110 }, 	{ x: 230, y: 170 }, 	{ x: 240, y: 180 }, 	{ x: 300, y: 190 }, 	{ x: 340, y: 200 }, 	{ x: 430, y: 200 }, 	{ x: 460, y: 170 }, 	{ x: 530, y: 160 }, 	{ x: 570, y: 150 }, 	{ x: 710, y: 220 }, 	{ x: 710, y: 230 }, 	{ x: 630, y: 330 }, 	{ x: 610, y: 330 }, 	{ x: 550, y: 290 }, 	{ x: 550, y: 350 }, 	{ x: 540, y: 360 }, 	{ x: 380, y: 360 }],
        "GP da China (Xangai)": [{ x: 200, y: 240 }, 	{ x: 230, y: 100 }, 	{ x: 250, y: 80 }, 	{ x: 260, y: 80 }, 	{ x: 290, y: 120 }, 	{ x: 290, y: 150 }, 	{ x: 270, y: 170 }, 	{ x: 250, y: 150 }, 	{ x: 240, y: 160 }, 	{ x: 240, y: 180 }, 	{ x: 270, y: 210 }, 	{ x: 440, y: 130 }, 	{ x: 600, y: 130 }, 	{ x: 620, y: 150 }, 	{ x: 620, y: 170 }, 	{ x: 570, y: 190 }, 	{ x: 560, y: 210 }, 	{ x: 590, y: 240 }, 	{ x: 590, y: 260 }, 	{ x: 570, y: 280 }, 	{ x: 540, y: 290 }, 	{ x: 500, y: 270 }, 	{ x: 480, y: 260 }, 	{ x: 470, y: 270 }, 	{ x: 480, y: 330 }, 	{ x: 650, y: 340 }, 	{ x: 660, y: 330 }, 	{ x: 660, y: 320 }, 	{ x: 640, y: 300 }, 	{ x: 640, y: 290 }, 	{ x: 660, y: 270 }, 	{ x: 670, y: 270 }, 	{ x: 710, y: 310 }, 	{ x: 710, y: 320 }, 	{ x: 660, y: 370 }, 	{ x: 100, y: 370 }, 	{ x: 80, y: 350 }, 	{ x: 80, y: 340 }, 	{ x: 180, y: 330 }, 	{ x: 200, y: 240 }],
        "GP do Japão (Suzuka)": [{ x: 570, y: 190 }, 	{ x: 700, y: 320 }, 	{ x: 700, y: 350 }, 	{ x: 680, y: 370 }, 	{ x: 620, y: 310 }, 	{ x: 600, y: 330 }, 	{ x: 590, y: 320 }, 	{ x: 580, y: 280 }, 	{ x: 560, y: 280 }, 	{ x: 540, y: 300 }, 	{ x: 530, y: 300 }, 	{ x: 520, y: 290 }, 	{ x: 520, y: 270 }, 	{ x: 530, y: 240 }, 	{ x: 510, y: 220 }, 	{ x: 500, y: 220 }, 	{ x: 450, y: 270 }, 	{ x: 420, y: 270 }, 	{ x: 410, y: 260 }, 	{ x: 360, y: 160 }, 	{ x: 360, y: 130 }, 	{ x: 370, y: 100 }, 	{ x: 360, y: 90 }, 	{ x: 260, y: 200 }, 	{ x: 240, y: 200 }, 	{ x: 160, y: 110 }, 	{ x: 140, y: 110 }, 	{ x: 110, y: 140 }, 	{ x: 100, y: 170 }, 	{ x: 110, y: 190 }, 	{ x: 150, y: 230 }, 	{ x: 330, y: 270 }, 	{ x: 350, y: 270 }, 	{ x: 480, y: 170 }, 	{ x: 510, y: 200 }, 	{ x: 530, y: 160 }, 	{ x: 540, y: 160 }, 	{ x: 570, y: 190 } ],
        "GP do Bahrein (Sakhir)": [{ x: 520, y: 370 }, 	{ x: 90, y: 370 }, 	{ x: 80, y: 360 }, 	{ x: 120, y: 320 }, 	{ x: 120, y: 310 }, 	{ x: 100, y: 280 }, 	{ x: 100, y: 270 }, 	{ x: 170, y: 100 }, 	{ x: 180, y: 90 }, 	{ x: 190, y: 100 }, 	{ x: 240, y: 150 }, 	{ x: 260, y: 150 }, 	{ x: 270, y: 160 }, 	{ x: 280, y: 190 }, 	{ x: 360, y: 270 }, 	{ x: 360, y: 280 }, 	{ x: 350, y: 290 }, 	{ x: 250, y: 280 }, 	{ x: 220, y: 310 }, 	{ x: 220, y: 320 }, 	{ x: 330, y: 340 }, 	{ x: 550, y: 320 }, 	{ x: 560, y: 310 }, 	{ x: 560, y: 280 }, 	{ x: 490, y: 230 }, 	{ x: 490, y: 200 }, 	{ x: 580, y: 100 }, 	{ x: 590, y: 100 }, 	{ x: 730, y: 290 }, 	{ x: 730, y: 300 }, 	{ x: 660, y: 370 }, 	{ x: 520, y: 370 }],
        "GP da Arábia Saudita (Jeddah)": [{ x: 640, y: 110 }, 	{ x: 560, y: 120 }, 	{ x: 550, y: 130 }, 	{ x: 570, y: 150 }, 	{ x: 570, y: 170 }, 	{ x: 560, y: 180 }, 	{ x: 450, y: 180 }, 	{ x: 440, y: 190 }, 	{ x: 410, y: 240 }, 	{ x: 390, y: 250 }, 	{ x: 380, y: 250 }, 	{ x: 360, y: 230 }, 	{ x: 340, y: 230 }, 	{ x: 330, y: 240 }, 	{ x: 320, y: 240 }, 	{ x: 280, y: 210 }, 	{ x: 260, y: 210 }, 	{ x: 220, y: 230 }, 	{ x: 160, y: 250 }, 	{ x: 120, y: 280 }, 	{ x: 100, y: 310 }, 	{ x: 90, y: 330 }, 	{ x: 110, y: 350 }, 	{ x: 140, y: 370 }, 	{ x: 170, y: 360 }, 	{ x: 200, y: 330 }, 	{ x: 210, y: 320 }, 	{ x: 230, y: 320 }, 	{ x: 240, y: 330 }, 	{ x: 270, y: 330 }, 	{ x: 300, y: 300 }, 	{ x: 310, y: 290 }, 	{ x: 320, y: 300 }, 	{ x: 350, y: 340 }, 	{ x: 360, y: 350 }, 	{ x: 390, y: 350 }, 	{ x: 450, y: 260 }, 	{ x: 460, y: 250 }, 	{ x: 510, y: 240 }, 	{ x: 570, y: 220 }, 	{ x: 590, y: 220 }, 	{ x: 590, y: 190 }, 	{ x: 600, y: 170 }, 	{ x: 620, y: 170 }, 	{ x: 640, y: 190 }, 	{ x: 650, y: 200 }, 	{ x: 690, y: 200 }, 	{ x: 730, y: 160 }, 	{ x: 740, y: 100 }, 	{ x: 730, y: 80 }, 	{ x: 700, y: 90 }, 	{ x: 640, y: 110 }],
        "Gp de Miami (EUA)": [{ x: 330, y: 130 }, 	{ x: 410, y: 220 }, 	{ x: 420, y: 240 }, 	{ x: 410, y: 250 }, 	{ x: 400, y: 270 }, 	{ x: 400, y: 310 }, 	{ x: 390, y: 330 }, 	{ x: 370, y: 340 }, 	{ x: 350, y: 340 }, 	{ x: 330, y: 320 }, 	{ x: 270, y: 270 }, 	{ x: 260, y: 260 }, 	{ x: 250, y: 260 }, 	{ x: 240, y: 270 }, 	{ x: 220, y: 290 }, 	{ x: 210, y: 290 }, 	{ x: 200, y: 260 }, 	{ x: 190, y: 250 }, 	{ x: 170, y: 250 }, 	{ x: 160, y: 260 }, 	{ x: 150, y: 280 }, 	{ x: 140, y: 300 }, 	{ x: 150, y: 320 }, 	{ x: 170, y: 310 }, 	{ x: 180, y: 310 }, 	{ x: 200, y: 330 }, 	{ x: 220, y: 330 }, 	{ x: 300, y: 330 }, 	{ x: 320, y: 340 }, 	{ x: 350, y: 360 }, 	{ x: 370, y: 370 }, 	{ x: 390, y: 370 }, 	{ x: 420, y: 360 }, 	{ x: 510, y: 310 }, 	{ x: 550, y: 270 }, 	{ x: 560, y: 260 }, 	{ x: 550, y: 240 }, 	{ x: 540, y: 220 }, 	{ x: 530, y: 210 }, 	{ x: 540, y: 200 }, 	{ x: 570, y: 200 }, 	{ x: 580, y: 190 }, 	{ x: 590, y: 170 }, 	{ x: 570, y: 160 }, 	{ x: 590, y: 130 }, 	{ x: 580, y: 120 }, 	{ x: 210, y: 90 }, 	{ x: 200, y: 100 }, 	{ x: 210, y: 120 }, 	{ x: 230, y: 140 }, 	{ x: 240, y: 140 }, 	{ x: 270, y: 120 }, 	{ x: 290, y: 110 }, 	{ x: 310, y: 120 }, 	{ x: 330, y: 130 }],
        "GP de Emília-Romanha (Ímola)": [{ x: 630, y: 110 }, 	{ x: 580, y: 110 }, 	{ x: 410, y: 70 }, 	{ x: 310, y: 80 }, 	{ x: 290, y: 130 }, 	{ x: 280, y: 140 }, 	{ x: 250, y: 140 }, 	{ x: 170, y: 220 }, 	{ x: 160, y: 230 }, 	{ x: 160, y: 270 }, 	{ x: 80, y: 350 }, 	{ x: 70, y: 360 }, 	{ x: 70, y: 370 }, 	{ x: 80, y: 380 }, 	{ x: 210, y: 340 }, 	{ x: 290, y: 360 }, 	{ x: 300, y: 350 }, 	{ x: 310, y: 340 }, 	{ x: 320, y: 300 }, 	{ x: 300, y: 240 }, 	{ x: 340, y: 200 }, 	{ x: 370, y: 230 }, 	{ x: 560, y: 200 }, 	{ x: 570, y: 220 }, 	{ x: 640, y: 210 }, 	{ x: 690, y: 150 }, 	{ x: 730, y: 110 }, 	{ x: 740, y: 100 }, 	{ x: 710, y: 70 }, 	{ x: 700, y: 70 }, 	{ x: 650, y: 110 }, 	{ x: 630, y: 110 }],
        "GP de Mônaco": [{ x: 150, y: 220 }, 	{ x: 190, y: 170 }, 	{ x: 240, y: 130 }, 	{ x: 280, y: 100 }, 	{ x: 290, y: 80 }, 	{ x: 350, y: 170 }, 	{ x: 410, y: 190 }, 	{ x: 460, y: 200 }, 	{ x: 510, y: 240 }, 	{ x: 520, y: 250 }, 	{ x: 550, y: 250 }, 	{ x: 570, y: 220 }, 	{ x: 580, y: 170 }, 	{ x: 580, y: 120 }, 	{ x: 590, y: 100 }, 	{ x: 600, y: 90 }, 	{ x: 670, y: 90 }, 	{ x: 680, y: 100 }, 	{ x: 670, y: 120 }, 	{ x: 660, y: 190 }, 	{ x: 670, y: 200 }, 	{ x: 690, y: 200 }, 	{ x: 700, y: 190 }, 	{ x: 690, y: 130 }, 	{ x: 700, y: 120 }, 	{ x: 720, y: 130 }, 	{ x: 730, y: 130 }, 	{ x: 740, y: 140 }, 	{ x: 730, y: 200 }, 	{ x: 690, y: 270 }, 	{ x: 640, y: 300 }, 	{ x: 560, y: 330 }, 	{ x: 350, y: 200 }, 	{ x: 340, y: 200 }, 	{ x: 340, y: 220 }, 	{ x: 310, y: 220 }, 	{ x: 280, y: 200 }, 	{ x: 250, y: 160 }, 	{ x: 190, y: 220 }, 	{ x: 180, y: 230 }, 	{ x: 180, y: 270 }, 	{ x: 170, y: 280 }, 	{ x: 150, y: 320 }, 	{ x: 130, y: 330 }, 	{ x: 130, y: 360 }, 	{ x: 120, y: 370 }, 	{ x: 90, y: 340 }, 	{ x: 80, y: 320 }, 	{ x: 100, y: 310 }, 	{ x: 150, y: 220 }],
        "GP da Espanha (Barcelona)": [{ x: 550, y: 370 }, 	{ x: 230, y: 370 }, 	{ x: 220, y: 360 }, 	{ x: 210, y: 350 }, 	{ x: 210, y: 320 }, 	{ x: 200, y: 290 }, 	{ x: 170, y: 270 }, 	{ x: 150, y: 240 }, 	{ x: 140, y: 210 }, 	{ x: 140, y: 200 }, 	{ x: 150, y: 170 }, 	{ x: 170, y: 140 }, 	{ x: 210, y: 120 }, 	{ x: 310, y: 120 }, 	{ x: 330, y: 140 }, 	{ x: 340, y: 160 }, 	{ x: 330, y: 180 }, 	{ x: 300, y: 210 }, 	{ x: 220, y: 210 }, 	{ x: 210, y: 220 }, 	{ x: 200, y: 230 }, 	{ x: 200, y: 240 }, 	{ x: 210, y: 250 }, 	{ x: 270, y: 310 }, 	{ x: 290, y: 320 }, 	{ x: 340, y: 320 }, 	{ x: 350, y: 310 }, 	{ x: 350, y: 280 }, 	{ x: 350, y: 270 }, 	{ x: 400, y: 160 }, 	{ x: 410, y: 140 }, 	{ x: 430, y: 130 }, 	{ x: 450, y: 140 }, 	{ x: 610, y: 290 }, 	{ x: 620, y: 300 }, 	{ x: 630, y: 300 }, 	{ x: 640, y: 290 }, 	{ x: 650, y: 270 }, 	{ x: 650, y: 250 }, 	{ x: 630, y: 230 }, 	{ x: 600, y: 210 }, 	{ x: 580, y: 190 }, 	{ x: 580, y: 170 }, 	{ x: 590, y: 150 }, 	{ x: 610, y: 140 }, 	{ x: 620, y: 140 }, 	{ x: 680, y: 180 }, 	{ x: 690, y: 190 }, 	{ x: 690, y: 320 }, 	{ x: 690, y: 340 }, 	{ x: 680, y: 350 }, 	{ x: 670, y: 360 }, 	{ x: 660, y: 370 }, 	{ x: 550, y: 370 }],
        "GP do Canadá (Montreal)": [{ x: 550, y: 210 }, 	{ x: 620, y: 240 }, 	{ x: 630, y: 250 }, 	{ x: 640, y: 240 }, 	{ x: 650, y: 240 }, 	{ x: 660, y: 250 }, 	{ x: 650, y: 260 }, 	{ x: 630, y: 280 }, 	{ x: 590, y: 310 }, 	{ x: 580, y: 320 }, 	{ x: 560, y: 300 }, 	{ x: 520, y: 320 }, 	{ x: 500, y: 330 }, 	{ x: 490, y: 330 }, 	{ x: 450, y: 300 }, 	{ x: 440, y: 300 }, 	{ x: 440, y: 310 }, 	{ x: 440, y: 320 }, 	{ x: 430, y: 330 }, 	{ x: 420, y: 330 }, 	{ x: 350, y: 300 }, 	{ x: 330, y: 290 }, 	{ x: 280, y: 240 }, 	{ x: 270, y: 230 }, 	{ x: 280, y: 220 }, 	{ x: 280, y: 210 }, 	{ x: 270, y: 200 }, 	{ x: 240, y: 170 }, 	{ x: 180, y: 130 }, 	{ x: 140, y: 120 }, 	{ x: 130, y: 110 }, 	{ x: 140, y: 100 }, 	{ x: 170, y: 110 }, 	{ x: 230, y: 110 }, 	{ x: 280, y: 120 }, 	{ x: 440, y: 160 }, 	{ x: 450, y: 170 }, 	{ x: 450, y: 180 }, 	{ x: 460, y: 190 }, 	{ x: 550, y: 210 }],
        "Gp da Áustria (Red Bull Ring)": [{ x: 500, y: 290 }, 	{ x: 430, y: 360 }, 	{ x: 420, y: 370 }, 	{ x: 410, y: 360 }, 	{ x: 330, y: 310 }, 	{ x: 320, y: 300 }, 	{ x: 280, y: 250 }, 	{ x: 270, y: 240 }, 	{ x: 200, y: 210 }, 	{ x: 190, y: 200 }, 	{ x: 200, y: 190 }, 	{ x: 230, y: 170 }, 	{ x: 270, y: 160 }, 	{ x: 320, y: 150 }, 	{ x: 400, y: 110 }, 	{ x: 410, y: 120 }, 	{ x: 410, y: 140 }, 	{ x: 400, y: 170 }, 	{ x: 370, y: 190 }, 	{ x: 320, y: 200 }, 	{ x: 310, y: 210 }, 	{ x: 310, y: 240 }, 	{ x: 300, y: 220 }, 	{ x: 360, y: 280 }, 	{ x: 370, y: 280 }, 	{ x: 380, y: 270 }, 	{ x: 390, y: 250 }, 	{ x: 390, y: 240 }, 	{ x: 390, y: 230 }, 	{ x: 400, y: 220 }, 	{ x: 410, y: 210 }, 	{ x: 530, y: 150 }, 	{ x: 540, y: 140 }, 	{ x: 550, y: 150 }, 	{ x: 580, y: 190 }, 	{ x: 580, y: 220 }, 	{ x: 570, y: 230 }, 	{ x: 520, y: 280 }, 	{ x: 500, y: 290 }],
        "GP da Inglaterra (Silverstone)": [{ x: 330, y: 100 }, 	{ x: 390, y: 150 }, 	{ x: 400, y: 160 }, 	{ x: 400, y: 220 }, 	{ x: 400, y: 240 }, 	{ x: 410, y: 250 }, 	{ x: 430, y: 280 }, 	{ x: 430, y: 290 }, 	{ x: 420, y: 300 }, 	{ x: 400, y: 310 }, 	{ x: 400, y: 320 }, 	{ x: 410, y: 330 }, 	{ x: 430, y: 340 }, 	{ x: 450, y: 330 }, 	{ x: 550, y: 180 }, 	{ x: 550, y: 160 }, 	{ x: 540, y: 150 }, 	{ x: 520, y: 140 }, 	{ x: 510, y: 130 }, 	{ x: 520, y: 110 }, 	{ x: 540, y: 120 }, 	{ x: 570, y: 140 }, 	{ x: 580, y: 150 }, 	{ x: 590, y: 170 }, 	{ x: 600, y: 300 }, 	{ x: 600, y: 320 }, 	{ x: 590, y: 330 }, 	{ x: 540, y: 350 }, 	{ x: 490, y: 350 }, 	{ x: 470, y: 360 }, 	{ x: 460, y: 370 }, 	{ x: 450, y: 370 }, 	{ x: 430, y: 360 }, 	{ x: 420, y: 360 }, 	{ x: 410, y: 370 }, 	{ x: 390, y: 380 }, 	{ x: 380, y: 370 }, 	{ x: 370, y: 350 }, 	{ x: 360, y: 340 }, 	{ x: 210, y: 240 }, 	{ x: 190, y: 220 }, 	{ x: 190, y: 200 }, 	{ x: 200, y: 180 }, 	{ x: 220, y: 170 }, 	{ x: 240, y: 150 }, 	{ x: 270, y: 120 }, 	{ x: 270, y: 110 }, 	{ x: 260, y: 100 }, 	{ x: 260, y: 90 }, 	{ x: 270, y: 80 }, 	{ x: 290, y: 70 }, 	{ x: 300, y: 70 }, 	{ x: 310, y: 80 }, 	{ x: 330, y: 100 }],
        "GP da Bélgica (Spa)": [{ x: 250, y: 300 }, 	{ x: 210, y: 350 }, 	{ x: 200, y: 360 }, 	{ x: 190, y: 360 }, 	{ x: 190, y: 350 }, 	{ x: 200, y: 320 }, 	{ x: 210, y: 290 }, 	{ x: 230, y: 260 }, 	{ x: 250, y: 230 }, 	{ x: 260, y: 210 }, 	{ x: 280, y: 210 }, 	{ x: 300, y: 180 }, 	{ x: 320, y: 150 }, 	{ x: 360, y: 130 }, 	{ x: 450, y: 80 }, 	{ x: 460, y: 80 }, 	{ x: 470, y: 90 }, 	{ x: 480, y: 90 }, 	{ x: 490, y: 80 }, 	{ x: 500, y: 90 }, 	{ x: 530, y: 130 }, 	{ x: 530, y: 140 }, 	{ x: 530, y: 150 }, 	{ x: 520, y: 150 }, 	{ x: 510, y: 140 }, 	{ x: 500, y: 130 }, 	{ x: 490, y: 130 }, 	{ x: 460, y: 150 }, 	{ x: 420, y: 160 }, 	{ x: 410, y: 170 }, 	{ x: 410, y: 180 }, 	{ x: 410, y: 210 }, 	{ x: 420, y: 220 }, 	{ x: 430, y: 230 }, 	{ x: 450, y: 240 }, 	{ x: 480, y: 250 }, 	{ x: 490, y: 260 }, 	{ x: 490, y: 280 }, 	{ x: 490, y: 300 }, 	{ x: 500, y: 310 }, 	{ x: 530, y: 320 }, 	{ x: 530, y: 330 }, 	{ x: 520, y: 360 }, 	{ x: 510, y: 370 }, 	{ x: 500, y: 370 }, 	{ x: 480, y: 360 }, 	{ x: 460, y: 340 }, 	{ x: 440, y: 310 }, 	{ x: 420, y: 280 }, 	{ x: 400, y: 260 }, 	{ x: 370, y: 250 }, 	{ x: 360, y: 250 }, 	{ x: 320, y: 280 }, 	{ x: 300, y: 290 }, 	{ x: 280, y: 300 }, 	{ x: 280, y: 280 }, 	{ x: 270, y: 280 }, 	{ x: 250, y: 300 }],
        "GP da Hungria (Hungaroring)": [{ x: 260, y: 280 }, 	{ x: 260, y: 90 }, 	{ x: 280, y: 70 }, 	{ x: 300, y: 90 }, 	{ x: 310, y: 100 }, 	{ x: 310, y: 210 }, 	{ x: 320, y: 220 }, 	{ x: 330, y: 230 }, 	{ x: 340, y: 230 }, 	{ x: 350, y: 220 }, 	{ x: 360, y: 210 }, 	{ x: 370, y: 180 }, 	{ x: 380, y: 170 }, 	{ x: 460, y: 150 }, 	{ x: 500, y: 160 }, 	{ x: 510, y: 140 }, 	{ x: 530, y: 100 }, 	{ x: 540, y: 100 }, 	{ x: 550, y: 110 }, 	{ x: 560, y: 130 }, 	{ x: 560, y: 160 }, 	{ x: 550, y: 190 }, 	{ x: 540, y: 200 }, 	{ x: 530, y: 200 }, 	{ x: 510, y: 230 }, 	{ x: 510, y: 250 }, 	{ x: 520, y: 260 }, 	{ x: 530, y: 280 }, 	{ x: 520, y: 290 }, 	{ x: 490, y: 310 }, 	{ x: 480, y: 320 }, 	{ x: 470, y: 340 }, 	{ x: 470, y: 360 }, 	{ x: 460, y: 370 }, 	{ x: 370, y: 370 }, 	{ x: 350, y: 370 }, 	{ x: 350, y: 350 }, 	{ x: 360, y: 320 }, 	{ x: 360, y: 300 }, 	{ x: 350, y: 280 }, 	{ x: 340, y: 270 }, 	{ x: 330, y: 270 }, 	{ x: 320, y: 280 }, 	{ x: 310, y: 300 }, 	{ x: 310, y: 350 }, 	{ x: 310, y: 360 }, 	{ x: 300, y: 370 }, 	{ x: 280, y: 380 }, 	{ x: 260, y: 360 }, 	{ x: 260, y: 340 }, 	{ x: 260, y: 280 }],
        "Gp da Holanda (Zandvoort)": [{ x: 530, y: 250 }, 	{ x: 490, y: 370 }, 	{ x: 480, y: 380 }, 	{ x: 450, y: 380 }, 	{ x: 440, y: 370 }, 	{ x: 440, y: 350 }, 	{ x: 460, y: 310 }, 	{ x: 460, y: 290 }, 	{ x: 470, y: 270 }, 	{ x: 500, y: 260 }, 	{ x: 510, y: 250 }, 	{ x: 510, y: 230 }, 	{ x: 490, y: 230 }, 	{ x: 440, y: 250 }, 	{ x: 400, y: 250 }, 	{ x: 360, y: 240 }, 	{ x: 330, y: 250 }, 	{ x: 300, y: 270 }, 	{ x: 280, y: 280 }, 	{ x: 230, y: 280 }, 	{ x: 210, y: 270 }, 	{ x: 190, y: 250 }, 	{ x: 190, y: 220 }, 	{ x: 200, y: 190 }, 	{ x: 240, y: 130 }, 	{ x: 260, y: 120 }, 	{ x: 280, y: 120 }, 	{ x: 310, y: 130 }, 	{ x: 330, y: 140 }, 	{ x: 340, y: 160 }, 	{ x: 330, y: 180 }, 	{ x: 260, y: 190 }, 	{ x: 250, y: 200 }, 	{ x: 250, y: 220 }, 	{ x: 260, y: 230 }, 	{ x: 280, y: 240 }, 	{ x: 360, y: 220 }, 	{ x: 440, y: 190 }, 	{ x: 450, y: 180 }, 	{ x: 460, y: 180 }, 	{ x: 480, y: 200 }, 	{ x: 490, y: 200 }, 	{ x: 500, y: 190 }, 	{ x: 500, y: 170 }, 	{ x: 480, y: 100 }, 	{ x: 480, y: 80 }, 	{ x: 490, y: 70 }, 	{ x: 540, y: 70 }, 	{ x: 570, y: 90 }, 	{ x: 580, y: 110 }, 	{ x: 580, y: 140 }, 	{ x: 530, y: 250 }],
        "GP de Monza (Itália)": [{ x: 510, y: 350 }, 	{ x: 330, y: 350 }, 	{ x: 330, y: 330 }, 	{ x: 310, y: 340 }, 	{ x: 280, y: 350 }, 	{ x: 260, y: 350 }, 	{ x: 230, y: 340 }, 	{ x: 210, y: 310 }, 	{ x: 210, y: 280 }, 	{ x: 210, y: 200 }, 	{ x: 190, y: 200 }, 	{ x: 190, y: 160 }, 	{ x: 170, y: 120 }, 	{ x: 170, y: 110 }, 	{ x: 180, y: 100 }, 	{ x: 220, y: 90 }, 	{ x: 230, y: 90 }, 	{ x: 240, y: 100 }, 	{ x: 270, y: 170 }, 	{ x: 350, y: 260 }, 	{ x: 360, y: 270 }, 	{ x: 380, y: 270 }, 	{ x: 390, y: 280 }, 	{ x: 390, y: 290 }, 	{ x: 400, y: 290 }, 	{ x: 570, y: 290 }, 	{ x: 580, y: 300 }, 	{ x: 580, y: 310 }, 	{ x: 570, y: 330 }, 	{ x: 560, y: 340 }, 	{ x: 540, y: 350 }, 	{ x: 510, y: 350 }],
        "GP do Azerbaijão (Baku)": [{ x: 470, y: 340 }, 	{ x: 510, y: 370 }, 	{ x: 520, y: 380 }, 	{ x: 530, y: 380 }, 	{ x: 560, y: 310 }, 	{ x: 420, y: 200 }, 	{ x: 400, y: 250 }, 	{ x: 340, y: 210 }, 	{ x: 330, y: 230 }, 	{ x: 270, y: 190 }, 	{ x: 290, y: 160 }, 	{ x: 290, y: 150 }, 	{ x: 280, y: 140 }, 	{ x: 290, y: 120 }, 	{ x: 220, y: 80 }, 	{ x: 190, y: 100 }, 	{ x: 160, y: 130 }, 	{ x: 150, y: 140 }, 	{ x: 160, y: 210 }, 	{ x: 160, y: 220 }, 	{ x: 170, y: 220 }, 	{ x: 200, y: 210 }, 	{ x: 240, y: 230 }, 	{ x: 270, y: 220 }, 	{ x: 310, y: 240 }, 	{ x: 380, y: 270 }, 	{ x: 470, y: 340 }],
        "GP de Singapura (Marina Bay)": [{ x: 560, y: 240 }, 	{ x: 540, y: 90 }, 	{ x: 520, y: 90 }, 	{ x: 510, y: 70 }, 	{ x: 500, y: 80 }, 	{ x: 500, y: 120 }, 	{ x: 510, y: 190 }, 	{ x: 500, y: 200 }, 	{ x: 390, y: 190 }, 	{ x: 320, y: 130 }, 	{ x: 310, y: 140 }, 	{ x: 290, y: 180 }, 	{ x: 280, y: 190 }, 	{ x: 270, y: 180 }, 	{ x: 260, y: 160 }, 	{ x: 250, y: 150 }, 	{ x: 240, y: 160 }, 	{ x: 190, y: 260 }, 	{ x: 190, y: 280 }, 	{ x: 210, y: 300 }, 	{ x: 220, y: 330 }, 	{ x: 230, y: 340 }, 	{ x: 250, y: 370 }, 	{ x: 290, y: 210 }, 	{ x: 340, y: 250 }, 	{ x: 460, y: 260 }, 	{ x: 460, y: 280 }, 	{ x: 470, y: 290 }, 	{ x: 540, y: 300 }, 	{ x: 560, y: 260 }, 	{ x: 560, y: 240 }],
        "Gp dos EUA (Austin)": [{ x: 190, y: 220 }, 	{ x: 270, y: 340 }, 	{ x: 280, y: 350 }, 	{ x: 290, y: 350 }, 	{ x: 290, y: 330 }, 	{ x: 280, y: 300 }, 	{ x: 280, y: 280 }, 	{ x: 290, y: 260 }, 	{ x: 330, y: 240 }, 	{ x: 340, y: 220 }, 	{ x: 360, y: 210 }, 	{ x: 360, y: 180 }, 	{ x: 370, y: 170 }, 	{ x: 380, y: 160 }, 	{ x: 390, y: 160 }, 	{ x: 400, y: 170 }, 	{ x: 420, y: 180 }, 	{ x: 430, y: 160 }, 	{ x: 440, y: 150 }, 	{ x: 450, y: 160 }, 	{ x: 460, y: 170 }, 	{ x: 490, y: 170 }, 	{ x: 500, y: 160 }, 	{ x: 550, y: 90 }, 	{ x: 550, y: 70 }, 	{ x: 530, y: 80 }, 	{ x: 450, y: 100 }, 	{ x: 390, y: 110 }, 	{ x: 330, y: 110 }, 	{ x: 310, y: 110 }, 	{ x: 310, y: 120 }, 	{ x: 330, y: 180 }, 	{ x: 320, y: 180 }, 	{ x: 310, y: 170 }, 	{ x: 300, y: 140 }, 	{ x: 280, y: 130 }, 	{ x: 280, y: 150 }, 	{ x: 300, y: 190 }, 	{ x: 300, y: 210 }, 	{ x: 290, y: 230 }, 	{ x: 270, y: 230 }, 	{ x: 250, y: 220 }, 	{ x: 240, y: 190 }, 	{ x: 230, y: 170 }, 	{ x: 220, y: 160 }, 	{ x: 170, y: 180 }, 	{ x: 160, y: 190 }, 	{ x: 170, y: 200 }, 	{ x: 190, y: 220 }],
        "GP do México (CDMX)": [{ x: 230, y: 90 }, 	{ x: 560, y: 90 }, 	{ x: 560, y: 120 }, 	{ x: 580, y: 120 }, 	{ x: 590, y: 130 }, 	{ x: 580, y: 170 }, 	{ x: 560, y: 220 }, 	{ x: 520, y: 330 }, 	{ x: 540, y: 350 }, 	{ x: 500, y: 380 }, 	{ x: 490, y: 370 }, 	{ x: 490, y: 270 }, 	{ x: 470, y: 260 }, 	{ x: 460, y: 240 }, 	{ x: 440, y: 230 }, 	{ x: 400, y: 230 }, 	{ x: 390, y: 200 }, 	{ x: 340, y: 180 }, 	{ x: 240, y: 180 }, 	{ x: 220, y: 120 }, 	{ x: 210, y: 150 }, 	{ x: 190, y: 130 }, 	{ x: 170, y: 130 }, 	{ x: 170, y: 120 }, 	{ x: 190, y: 100 }, 	{ x: 200, y: 90 }, 	{ x: 230, y: 90 }],
        "Gp do Brasil (Interlagos)": [{ x: 290, y: 100 }, 	{ x: 190, y: 140 }, 	{ x: 180, y: 150 }, 	{ x: 180, y: 160 }, 	{ x: 190, y: 170 }, 	{ x: 210, y: 200 }, 	{ x: 190, y: 230 }, 	{ x: 190, y: 250 }, 	{ x: 200, y: 280 }, 	{ x: 210, y: 300 }, 	{ x: 230, y: 320 }, 	{ x: 420, y: 380 }, 	{ x: 440, y: 380 }, 	{ x: 450, y: 370 }, 	{ x: 450, y: 310 }, 	{ x: 440, y: 280 }, 	{ x: 430, y: 270 }, 	{ x: 340, y: 180 }, 	{ x: 330, y: 160 }, 	{ x: 330, y: 140 }, 	{ x: 340, y: 120 }, 	{ x: 360, y: 110 }, 	{ x: 400, y: 100 }, 	{ x: 410, y: 110 }, 	{ x: 400, y: 130 }, 	{ x: 390, y: 160 }, 	{ x: 400, y: 170 }, 	{ x: 420, y: 170 }, 	{ x: 440, y: 130 }, 	{ x: 460, y: 120 }, 	{ x: 480, y: 120 }, 	{ x: 490, y: 130 }, 	{ x: 480, y: 150 }, 	{ x: 460, y: 170 }, 	{ x: 450, y: 190 }, 	{ x: 450, y: 210 }, 	{ x: 460, y: 230 }, 	{ x: 510, y: 280 }, 	{ x: 520, y: 290 }, 	{ x: 530, y: 280 }, 	{ x: 550, y: 240 }, 	{ x: 550, y: 210 }, 	{ x: 540, y: 160 }, 	{ x: 520, y: 120 }, 	{ x: 490, y: 90 }, 	{ x: 410, y: 70 }, 	{ x: 390, y: 70 }, 	{ x: 370, y: 70 }, 	{ x: 350, y: 80 }, 	{ x: 290, y: 100 }],
        "GP de Las Vegas": [{ x: 500, y: 130 }, 	{ x: 480, y: 90 }, 	{ x: 470, y: 80 }, 	{ x: 460, y: 90 }, 	{ x: 470, y: 120 }, 	{ x: 470, y: 140 }, 	{ x: 460, y: 150 }, 	{ x: 290, y: 160 }, 	{ x: 280, y: 150 }, 	{ x: 280, y: 100 }, 	{ x: 270, y: 80 }, 	{ x: 260, y: 70 }, 	{ x: 250, y: 70 }, 	{ x: 250, y: 90 }, 	{ x: 240, y: 100 }, 	{ x: 210, y: 70 }, 	{ x: 210, y: 170 }, 	{ x: 210, y: 190 }, 	{ x: 200, y: 200 }, 	{ x: 160, y: 230 }, 	{ x: 140, y: 280 }, 	{ x: 150, y: 280 }, 	{ x: 200, y: 320 }, 	{ x: 250, y: 350 }, 	{ x: 270, y: 360 }, 	{ x: 490, y: 360 }, 	{ x: 500, y: 350 }, 	{ x: 500, y: 330 }, 	{ x: 520, y: 320 }, 	{ x: 520, y: 160 }, 	{ x: 510, y: 140 }, 	{ x: 500, y: 130 }],
        "GP do Catar (Lusail)": [{ x: 400, y: 370 }, 	{ x: 240, y: 370 }, 	{ x: 220, y: 360 }, 	{ x: 220, y: 340 }, 	{ x: 230, y: 320 }, 	{ x: 270, y: 300 }, 	{ x: 280, y: 290 }, 	{ x: 280, y: 270 }, 	{ x: 270, y: 260 }, 	{ x: 230, y: 250 }, 	{ x: 220, y: 240 }, 	{ x: 190, y: 130 }, 	{ x: 190, y: 120 }, 	{ x: 200, y: 110 }, 	{ x: 230, y: 100 }, 	{ x: 240, y: 110 }, 	{ x: 270, y: 180 }, 	{ x: 280, y: 180 }, 	{ x: 290, y: 170 }, 	{ x: 300, y: 80 }, 	{ x: 310, y: 70 }, 	{ x: 320, y: 70 }, 	{ x: 330, y: 80 }, 	{ x: 330, y: 110 }, 	{ x: 340, y: 130 }, 	{ x: 350, y: 140 }, 	{ x: 370, y: 150 }, 	{ x: 370, y: 160 }, 	{ x: 360, y: 200 }, 	{ x: 360, y: 220 }, 	{ x: 380, y: 230 }, 	{ x: 410, y: 220 }, 	{ x: 450, y: 180 }, 	{ x: 460, y: 140 }, 	{ x: 470, y: 100 }, 	{ x: 480, y: 80 }, 	{ x: 530, y: 80 }, 	{ x: 540, y: 90 }, 	{ x: 560, y: 130 }, 	{ x: 570, y: 140 }, 	{ x: 560, y: 150 }, 	{ x: 510, y: 210 }, 	{ x: 500, y: 220 }, 	{ x: 510, y: 240 }, 	{ x: 570, y: 330 }, 	{ x: 580, y: 350 }, 	{ x: 570, y: 360 }, 	{ x: 550, y: 370 }, 	{ x: 400, y: 370 }],
        "GP de Abu Dhabi (Yas Marina)": [{ x: 360, y: 190 }, 	{ x: 360, y: 350 }, 	{ x: 370, y: 360 }, 	{ x: 420, y: 360 }, 	{ x: 430, y: 350 }, 	{ x: 440, y: 320 }, 	{ x: 450, y: 300 }, 	{ x: 470, y: 290 }, 	{ x: 490, y: 300 }, 	{ x: 520, y: 320 }, 	{ x: 540, y: 330 }, 	{ x: 610, y: 330 }, 	{ x: 630, y: 320 }, 	{ x: 630, y: 310 }, 	{ x: 620, y: 290 }, 	{ x: 330, y: 80 }, 	{ x: 330, y: 120 }, 	{ x: 300, y: 120 }, 	{ x: 270, y: 130 }, 	{ x: 240, y: 160 }, 	{ x: 170, y: 240 }, 	{ x: 130, y: 320 }, 	{ x: 120, y: 340 }, 	{ x: 120, y: 360 }, 	{ x: 130, y: 370 }, 	{ x: 150, y: 380 }, 	{ x: 170, y: 370 }, 	{ x: 180, y: 340 }, 	{ x: 180, y: 280 }, 	{ x: 190, y: 260 }, 	{ x: 210, y: 230 }, 	{ x: 240, y: 230 }, 	{ x: 250, y: 240 }, 	{ x: 250, y: 270 }, 	{ x: 260, y: 280 }, 	{ x: 280, y: 290 }, 	{ x: 290, y: 280 }, 	{ x: 290, y: 180 }, 	{ x: 300, y: 160 }, 	{ x: 340, y: 140 }, 	{ x: 350, y: 140 }, 	{ x: 360, y: 150 }, 	{ x: 360, y: 190 }]
    };
    const pneus = {
        macio: { nome: 'Macio', multiplicadorPerformance: 1.289, desgastePorVolta: 5.20, duracaoIdeal: 0.31 },
        medio: { nome: 'Médio', multiplicadorPerformance: 1.0, desgastePorVolta: 3.0, duracaoIdeal: 0.45 },
        duro: { nome: 'Duro', multiplicadorPerformance: 0.995, desgastePorVolta: 1.9, duracaoIdeal: 0.65 }
    };
    const pontosPorPosicao = { 1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4, 9: 2, 10: 1 };
    const especialistaHabilidades = {
        "Aerodinamicista": ["Asa Dianteira", "Asa Traseira"],
        "Engenheiro de Motor": ["Motor"],
        "Projetista": ["Suspensão", "Chassi"],
    };
    const marcasPatrocinadores = [
        { nome: "Heuer", tipo: "Relógios de Luxo", reputacaoMin: 0 }, { nome: "Petrobras", tipo: "Combustíveis", reputacaoMin: 0 }, { nome: "Santander", tipo: "Banco", reputacaoMin: 1 }, { nome: "Pirelli", tipo: "Pneus", reputacaoMin: 1 }, { nome: "Rolex", tipo: "Relógios de Luxo", reputacaoMin: 2 }, { nome: "Amazon AWS", tipo: "Tecnologia", reputacaoMin: 4 }, { nome: "Red Bull", tipo: "Bebidas Energéticas", reputacaoMin: 3 }, { nome: "Louis Vuitton", tipo: "Artigos de Luxo", reputacaoMin: 4 }, { nome: "Brahma", tipo: "Cerveja", reputacaoMin: 3 }, { nome: "Geodados WebSystem", tipo: "Sistemas de Informação", reputacaoMin: 1 }, { nome: "Geodados Geoprocessamento", tipo: "Geoprocessamento", reputacaoMin: 5 }, { nome: "Pitu", tipo: "Alimentos", reputacaoMin: 5 }, { nome: "Heineken", tipo: "Cerveja", reputacaoMin: 4 }, { nome: "Mercado Livre", tipo: "Comércio", reputacaoMin: 2 }, { nome: "Shopee", tipo: "Comércio", reputacaoMin: 0 }, { nome: "Shen", tipo: "Comércio", reputacaoMin: 1 }, { nome: "Colorado Beer", tipo: "cerveja", reputacaoMin: 0 }, { nome: "Tibia", tipo: "Jogo Eletrônico", reputacaoMin: 3 }, { nome: "League of Legends", tipo: "Jogo Eletrônico", reputacaoMin: 1 }, { nome: "Forza", tipo: "Jogo Eletrônico", reputacaoMin: 6 }, { nome: "Jardim Paraiso fest", tipo: "Comércio", reputacaoMin: 0 }, { nome: "H2 Games", tipo: "Comércio", reputacaoMin: 0 }, { nome: "Esfirras do Bairro", tipo: "Alimenticios", reputacaoMin: 1 }, { nome: "Pizzas BR", tipo: "Alimenticios", reputacaoMin: 0 }, { nome: "Petrobras Gás", tipo: "Comércio", reputacaoMin: 1 }, { nome: "Shell", tipo: "Combustível", reputacaoMin: 1 },
    ];

    const baseDePilotos = [
        { id: 1, rosto: 'img/Pilotos/verstapen.png', nome: "Max Verstappen", idade: 28, habilidade: 95, consistencia: 97, gerenciamentoPneus: 92, atributosBase: { habilidade: 95, consistencia: 97, gerenciamentoPneus: 92 }, status: 'Red Bull', campeonatosGanhos: [] },
        { id: 3, rosto: 'img/Pilotos/hamilton.png', nome: "Lewis Hamilton", idade: 41, habilidade: 95, consistencia: 93, gerenciamentoPneus: 90, atributosBase: { habilidade: 95, consistencia: 93, gerenciamentoPneus: 90 }, status: 'Ferrari', campeonatosGanhos: [] },
        { id: 4, rosto: 'img/Pilotos/leclerc.png', nome: "Charles Leclerc", idade: 28, habilidade: 92, consistencia: 90, gerenciamentoPneus: 94, atributosBase: { habilidade: 92, consistencia: 90, gerenciamentoPneus: 94 }, status: 'Ferrari', campeonatosGanhos: [] },
        { id: 5, rosto: 'img/Pilotos/russel.png', nome: "George Russell", idade: 28, habilidade: 91, consistencia: 91, gerenciamentoPneus: 93, atributosBase: { habilidade: 91, consistencia: 91, gerenciamentoPneus: 93 }, status: 'Mercedes', campeonatosGanhos: [] },
        { id: 6, rosto: 'img/Pilotos/antonele.png', nome: "K. Antonelli", idade: 19, habilidade: 89, consistencia: 90, gerenciamentoPneus: 88, atributosBase: { habilidade: 89, consistencia: 90, gerenciamentoPneus: 88 }, status: 'Mercedes', campeonatosGanhos: [] },
        { id: 7, rosto: 'img/Pilotos/sainz.png', nome: "Carlos Sainz", idade: 31, habilidade: 90, consistencia: 90, gerenciamentoPneus: 88, atributosBase: { habilidade: 90, consistencia: 90, gerenciamentoPneus: 88 }, status: 'Wilians', campeonatosGanhos: [] },
        { id: 8, rosto: 'img/Pilotos/albon.png', nome: "Alex Albon", idade: 30, habilidade: 85, consistencia: 89, gerenciamentoPneus: 89, atributosBase: { habilidade: 85, consistencia: 89, gerenciamentoPneus: 89 }, status: 'Wilians', campeonatosGanhos: [] },
        { id: 9, rosto: 'img/Pilotos/bortoleto.png', nome: "G. Bortoleto", idade: 21, habilidade: 89, consistencia: 89, gerenciamentoPneus: 86, atributosBase: { habilidade: 89, consistencia: 89, gerenciamentoPneus: 86 }, status: 'Audi', campeonatosGanhos: [] },
        { id: 10, rosto: 'img/Pilotos/hulkenberg.png', nome: "Nico Hulkenberg", idade: 38, habilidade: 89, consistencia: 88, gerenciamentoPneus: 86, atributosBase: { habilidade: 89, consistencia: 88, gerenciamentoPneus: 86 }, status: 'Audi', campeonatosGanhos: [] },
        { id: 11, rosto: 'img/Pilotos/alonso.png', nome: "Fernando Alonso", idade: 44, habilidade: 92, consistencia: 91, gerenciamentoPneus: 96, atributosBase: { habilidade: 92, consistencia: 91, gerenciamentoPneus: 96 }, status: 'Aston Martin', campeonatosGanhos: [] },
        { id: 12, rosto: 'img/Pilotos/stroll.png', nome: "Lance Stroll", idade: 27, habilidade: 86, consistencia: 78, gerenciamentoPneus: 86, atributosBase: { habilidade: 86, consistencia: 78, gerenciamentoPneus: 86 }, status: 'Aston Martin', campeonatosGanhos: [] },
        { id: 13, rosto: 'img/Pilotos/gasly.png', nome: "Pierre Gasly", idade: 30, habilidade: 82, consistencia: 86, gerenciamentoPneus: 87, atributosBase: { habilidade: 82, consistencia: 86, gerenciamentoPneus: 87 }, status: 'Alpine', campeonatosGanhos: [] },
        { id: 14, rosto: 'img/Pilotos/colapinto.png', nome: "F. Colapinto", idade: 23, habilidade: 80, consistencia: 80, gerenciamentoPneus: 88, atributosBase: { habilidade: 80, consistencia: 80, gerenciamentoPneus: 88 }, status: 'Alpine', campeonatosGanhos: [] },
        { id: 15, rosto: 'img/Pilotos/ocon.png', nome: "Esteban Ocon", idade: 29, habilidade: 85, consistencia: 87, gerenciamentoPneus: 86, atributosBase: { habilidade: 85, consistencia: 87, gerenciamentoPneus: 86 }, status: 'Haas', campeonatosGanhos: [] },
        { id: 16, rosto: 'img/Pilotos/bearman.png', nome: "Oliver Bearman", idade: 21, habilidade: 83, consistencia: 81, gerenciamentoPneus: 82, atributosBase: { habilidade: 83, consistencia: 81, gerenciamentoPneus: 82 }, status: 'Haas', campeonatosGanhos: [] },
        { id: 17, rosto: 'img/Pilotos/hadjar.png', nome: "Isack Hadjar", idade: 21, habilidade: 88, consistencia: 82, gerenciamentoPneus: 83, atributosBase: { habilidade: 88, consistencia: 82, gerenciamentoPneus: 83 }, status: 'Red Bull', campeonatosGanhos: [] },
        { id: 18, rosto: 'img/Pilotos/lawson.png', nome: "Liam Lawson", idade: 24, habilidade: 88, consistencia: 84, gerenciamentoPneus: 85, atributosBase: { habilidade: 88, consistencia: 84, gerenciamentoPneus: 85 }, status: 'RB', campeonatosGanhos: [] },
        { id: 21, rosto: 'img/Pilotos/Arvid.png', nome: "Arvid Lindblad", idade: 18, habilidade: 82, consistencia: 76, gerenciamentoPneus: 77, atributosBase: { habilidade: 82, consistencia: 76, gerenciamentoPneus: 77 }, status: 'RB', campeonatosGanhos: [] },
        { id: 19, rosto: 'img/Pilotos/piastri.png', nome: "Oscar Piastri", idade: 25, habilidade: 92, consistencia: 93, gerenciamentoPneus: 92, atributosBase: { habilidade: 92, consistencia: 93, gerenciamentoPneus: 92 }, status: 'MacLaren', campeonatosGanhos: [] },
        { id: 20, rosto: 'img/Pilotos/norris.png', nome: "Lando Norris", idade: 26, habilidade: 92, consistencia: 93, gerenciamentoPneus: 93, atributosBase: { habilidade: 92, consistencia: 93, gerenciamentoPneus: 93 }, status: 'MacLaren', campeonatosGanhos: [] },
        { id: 101, rosto: 'img/Pilotos/lucasdigrassi.png', nome: "Lucas di Grassi", idade: 33, habilidade: 94, consistencia: 92, gerenciamentoPneus: 93, atributosBase: { habilidade: 94, consistencia: 92, gerenciamentoPneus: 93 },salario: 14000, precoContrato: 1200000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 102, rosto: 'img/Pilotos/felipedrugovich.png', nome: "Felipe Drugovich", idade: 19, habilidade: 89, consistencia: 87, gerenciamentoPneus: 88, salario: 17000, precoContrato: 3800000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 103, rosto: 'img/Pilotos/dudubarrichello.png', nome: "Dudu Barrichello", idade: 21, habilidade: 84, consistencia: 85, gerenciamentoPneus: 88, salario: 15000, precoContrato: 319000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 104, rosto: 'img/Pilotos/fbarrichello.png', nome: "F. Barrichello", idade: 17, habilidade: 80, consistencia: 81, gerenciamentoPneus: 85, salario: 15000, precoContrato: 318000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 107, rosto: 'img/Pilotos/caiocole.png', nome: "Caio Collet", idade: 20, habilidade: 85, consistencia: 86, gerenciamentoPneus: 87, salario: 17000, precoContrato: 780000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 108, rosto: 'img/Pilotos/buenofilho.png', nome: "Bueno Filho", idade: 25, habilidade: 89, consistencia: 86, gerenciamentoPneus: 87, salario: 17000, precoContrato: 780000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 109, rosto: 'img/Pilotos/default.png', nome: "Roberty Moreno", idade: 22, habilidade: 80, consistencia: 95, gerenciamentoPneus: 88, salario: 18000, precoContrato: 750000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 110, rosto: 'img/Pilotos/default.png', nome: "Nonato André", idade: 21, habilidade: 75, consistencia: 79, gerenciamentoPneus: 79, salario: 14000, precoContrato: 500000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 111, rosto: 'img/Pilotos/default.png', nome: "Brian EUA", idade: 30, habilidade: 89, consistencia: 88, gerenciamentoPneus: 91, salario: 13500, precoContrato: 480000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 112, rosto: 'img/Pilotos/default.png', nome: "Leonardo Fornaroli", idade: 28, habilidade: 88, consistencia: 88, gerenciamentoPneus: 79, salario: 13500, precoContrato: 480000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 113, rosto: 'img/Pilotos/default.png', nome: "Roman Staněk", idade: 23, habilidade: 87, consistencia: 90, gerenciamentoPneus: 85, salario: 13500, precoContrato: 480000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 114, rosto: 'img/Pilotos/default.png', nome: "Roberto Moreno", idade: 24, habilidade: 85, consistencia: 89, gerenciamentoPneus: 91, salario: 14000, precoContrato: 550000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 115, rosto: 'img/Pilotos/pepe.png', nome: "Pepe Martí", idade: 25, habilidade: 88, consistencia: 80, gerenciamentoPneus: 88, salario: 16000, precoContrato: 650000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 116, rosto: 'img/Pilotos/default.png', nome: "Oliver Goethe", idade: 26, habilidade: 91, consistencia: 85, gerenciamentoPneus: 84, salario: 14000, precoContrato: 550000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 117, rosto: 'img/Pilotos/default.png', nome: "Richard Verschoo", idade: 19, habilidade: 82, consistencia: 85, gerenciamentoPneus: 88, salario: 15000, precoContrato: 350000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 118, rosto: 'img/Pilotos/default.png', nome: "Luke Browning", idade: 24, habilidade: 90, consistencia: 75, gerenciamentoPneus: 88, salario: 14000, precoContrato: 290000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 119, rosto: 'img/Pilotos/default.png', nome: "Dino Beganovic", idade: 25, habilidade: 82, consistencia: 85, gerenciamentoPneus: 78, salario: 15000, precoContrato: 350000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 120, rosto: 'img/Pilotos/default.png', nome: "Gabriele Minì", idade: 38, habilidade: 90, consistencia: 92, gerenciamentoPneus: 91, salario: 16000, precoContrato: 350000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 121, rosto: 'img/Pilotos/default.png', nome: "Jak Crawford", idade: 24, habilidade: 88, consistencia: 82, gerenciamentoPneus: 85, salario: 11000, precoContrato: 350000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 122, rosto: 'img/Pilotos/default.png', nome: "Amaury Cordeel", idade: 25, habilidade: 85, consistencia: 88, gerenciamentoPneus: 82, salario: 13000, precoContrato: 350000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 123, rosto: 'img/Pilotos/default.png', nome: "Cian Shields", idade: 26, habilidade: 86, consistencia: 85, gerenciamentoPneus: 78, salario: 12000, precoContrato: 350000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 124, rosto: 'img/Pilotos/default.png', nome: "Sami Meguetounif", idade: 16, habilidade: 84, consistencia: 85, gerenciamentoPneus: 86, salario: 14000, precoContrato: 310000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 125, rosto: 'img/Pilotos/rafaelcamara.png', nome: "Rafael Camara", idade: 17, habilidade: 85, consistencia: 85, gerenciamentoPneus: 88, salario: 19000, precoContrato: 310000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 126, rosto: 'img/Pilotos/default.png', nome: "Charlie Chaplin", idade: 17, habilidade: 85, consistencia: 85, gerenciamentoPneus: 88, salario: 18000, precoContrato: 319000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 127, rosto: 'img/Pilotos/default.png', nome: "P. Beralta", idade: 17, habilidade: 85, consistencia: 85, gerenciamentoPneus: 88, salario: 17000, precoContrato: 318000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 2, rosto: 'img/Pilotos/tsunoda.png', nome: "Yuki Tsunoda", idade: 24, habilidade: 89, consistencia: 85, gerenciamentoPneus: 88, atributosBase: { habilidade: 89, consistencia: 85, gerenciamentoPneus: 88 }, salario: 18000, precoContrato: 950000, status: 'Disponível', campeonatosGanhos: [] },
        { id: 128, rosto: 'img/Pilotos/sergio.png', nome: "Sérgio Perez", idade: 35, habilidade: 90, consistencia: 91, gerenciamentoPneus: 89, atributosBase: { habilidade: 90, consistencia: 91, gerenciamentoPneus: 89 }, status: 'Cadillac Racing', campeonatosGanhos: [] },
        { id: 129, rosto: 'img/Pilotos/valtteri.png', nome: "Valtteri Bottas", idade: 35, habilidade: 88, consistencia: 86, gerenciamentoPneus: 84, atributosBase: { habilidade: 88, consistencia: 86, gerenciamentoPneus: 84 }, status: 'Cadillac Racing', campeonatosGanhos: [] },
    ];

    const equipesIA = [
        // Spread rebalanceado: Top → ~88-92 | Meio → ~78-86 | Campo → ~68-77
        // Cada equipe tem uma característica dominante para dar personalidade ao grid.
        { nome: "Red Bull",        ftequipe: 'img/equipes/redbull.png',     cor: "rgb(30,65,255)",   piloto1Id: 1,   piloto2Id: 17,  carro: { potencia: 91, aerodinamica: 89, aderencia: 90, confiabilidade: 82 } }, // equilibrado/potência
        { nome: "Mercedes",        ftequipe: 'img/equipes/mercedes.png',     cor: "rgb(0,210,190)",   piloto1Id: 5,   piloto2Id: 6,   carro: { potencia: 95, aerodinamica: 93, aderencia: 92, confiabilidade: 89 } }, // aerodinâmica dominante
        { nome: "Ferrari",         ftequipe: 'img/equipes/ferrari.png',      cor: "rgb(220,0,0)",     piloto1Id: 3,   piloto2Id: 4,   carro: { potencia: 94, aerodinamica: 92, aderencia: 91, confiabilidade: 88 } }, // potência alta, conf. frágil
        { nome: "Audi",            ftequipe: 'img/equipes/audi.png',         cor: "rgb(80,80,80)",    piloto1Id: 9,   piloto2Id: 10,  carro: { potencia: 88, aerodinamica: 87, aderencia: 87, confiabilidade: 85 } }, // aderência e confiabilidade sólidas
        { nome: "Aston Martin",    ftequipe: 'img/equipes/astonmartin.png',  cor: "rgb(0,111,98)",    piloto1Id: 11,  piloto2Id: 12,  carro: { potencia: 82, aerodinamica: 81, aderencia: 80, confiabilidade: 76 } }, // aderência forte
        { nome: "MacLaren",        ftequipe: 'img/equipes/maclaren.png',     cor: "rgb(255,135,0)",   piloto1Id: 19,  piloto2Id: 20,  carro: { potencia: 92, aerodinamica: 95, aderencia: 92, confiabilidade: 88 } }, // o mais rápido, conf. média
        { nome: "Alpine",          ftequipe: 'img/equipes/alpine.png',       cor: "rgb(255,192,203)", piloto1Id: 13,  piloto2Id: 14,  carro: { potencia: 86, aerodinamica: 88, aderencia: 88, confiabilidade: 81 } }, // midfield equilibrado
        { nome: "Haas",            ftequipe: 'img/equipes/haas.png',         cor: "rgb(128,95,95)",   piloto1Id: 15,  piloto2Id: 16,  carro: { potencia: 85, aerodinamica: 83, aderencia: 84, confiabilidade: 85 } }, // campo de trás
        { nome: "RB",              ftequipe: 'img/equipes/racingbulls.png',  cor: "rgb(240,240,240)", piloto1Id: 18,  piloto2Id: 21,  carro: { potencia: 87, aerodinamica: 85, aderencia: 86, confiabilidade: 86 } }, // aero ligeiramente melhor
        { nome: "Wilians",         ftequipe: 'img/equipes/willians.png',     cor: "rgb(90,165,255)",  piloto1Id: 7,   piloto2Id: 8,   carro: { potencia: 86, aerodinamica: 87, aderencia: 85, confiabilidade: 85 } }, // melhor que Haas/RB
        { nome: "Cadillac Racing", ftequipe: 'img/equipes/cadillac.png',     cor: "rgb(199,199,199)", piloto1Id: 128, piloto2Id: 129, carro: { potencia: 78, aerodinamica: 80, aderencia: 80, confiabilidade: 75 } }, // estreante sólida
    ];

    // Snapshot imutável dos atributos de fábrica de cada equipe IA.
    // Derivado automaticamente de equipesIA — NUNCA edite este objeto diretamente.
    // Para alterar valores, edite apenas o array equipesIA acima.
    // Usado por: resetGameState (restauração) e renderTelemBenchmark (clamp anti-inflate).
    const CARRO_INICIAL = Object.fromEntries(
        equipesIA.map(e => [e.nome, { ...e.carro }])
    );

    const catalogoMensagens = {
        ataque_pneu_bom: [{ remetente: 'Piloto', texto: "O carro está ótimo, estou indo pra cima!" }, { remetente: 'Engenheiro', texto: "Isso! Continue pressionando, o ritmo está excelente." }],
        lidercorrida: [{ remetente: 'Piloto', texto: "Acho que consigo segurar a vantagem!" }, { remetente: 'Engenheiro', texto: "Não Alivie, o ritmo está bom." }],
        lidercorrida_perigo: [{ remetente: 'Piloto', texto: "Acho que não consigo segurar a vantagem!" }, { remetente: 'Engenheiro', texto: "Não Alivie, matenha o rítmo." }],
        ataque_pneu_ruim: [{ remetente: 'Piloto', texto: "Meus pneus estão esfarelando! Não sei quanto tempo mais aguentam." }, { remetente: 'Engenheiro', texto: "Entendido. Alivie o ritmo ou teremos que antecipar o pit stop." }],
        conservar_pneu_bom: [{ remetente: 'Piloto', texto: "Pneus estão bons, acho que podemos pressionar mais se precisar." }, { remetente: 'Engenheiro', texto: "Copiado. Mantenha assim, a estratégia está funcionando." }],
        conservar_pneu_ruim: [{ remetente: 'Piloto', texto: "Estou só gerenciando o desgaste agora." }, { remetente: 'Engenheiro', texto: "Bom trabalho. Continue gerenciando, estamos estendendo o stint." }],
        pit_stop_proximo: [{ remetente: 'Engenheiro', texto: "Box, box, box! Confirme." }, { remetente: 'Piloto', texto: "Entendido, estou indo para os boxes." }],
        gap_pequeno: [{ remetente: 'Engenheiro', texto: "Ok, você está na zona de DRS. Pode atacar na próxima reta!" }, { remetente: 'Piloto', texto: "Estou mais rápido, só preciso de uma oportunidade para passar." }]
    };

    const catalogoInstalacoes = {
        simulador: {
            nome: "Simulador de Pilotos", icone: "🏎️",
            descricao: "Tecnologia de ponta para acelerar o desenvolvimento e a adaptação dos seus pilotos.",
            niveis: [
                { custo: 0,        titulo: "Não construído",  descricao: "Nenhum bônus ativo. Construa o simulador para começar a evoluir seus pilotos mais rápido." },
                { custo: 300000,   titulo: "Básico",          descricao: "+5% de desempenho extra nos treinos dos pilotos. Ideal para equipes iniciantes." },
                { custo: 800000,   titulo: "Intermediário",   descricao: "+8% de desempenho extra nos treinos. Simuladores de média fidelidade." },
                { custo: 2500000,  titulo: "Avançado",        descricao: "+10% de desempenho extra nos treinos. Simuladores de alta fidelidade." },
                { custo: 7000000,  titulo: "Elite",           descricao: "+12% de desempenho. Desbloqueia 2 slots de piloto reserva para treinar simultaneamente." },
                { custo: 18000000, titulo: "Estado da Arte",  descricao: "+15% de desempenho. 2 pilotos reserva + sem limite de idade para evolução de pilotos." }
            ]
        },
        tunelDeVento: {
            nome: "Túnel de Vento", icone: "💨",
            descricao: "Uma instalação crucial para o desenvolvimento e teste de peças aerodinâmicas. Reduz custo e tempo de preparo.",
            niveis: [
                { custo: 0,        titulo: "Não construído",  descricao: "Nenhum bônus ativo." },
                { custo: 300000,   titulo: "Básico",          descricao: "-5% no preço das peças aerodinâmicas (Asa Dianteira, Asa Traseira, Chassi)." },
                { custo: 1200000,  titulo: "Intermediário",   descricao: "-10% no preço das peças aerodinâmicas." },
                { custo: 3000000,  titulo: "Avançado",        descricao: "-12% no preço. Reduz em 1 corrida o tempo de preparo de peças aero." },
                { custo: 8000000,  titulo: "Elite",           descricao: "-15% no preço. Reduz entre 1 e 2 corridas no tempo de preparo de peças aero." },
                { custo: 20000000, titulo: "Estado da Arte",  descricao: "-25% no preço. Roleta: 10%→5 corridas a menos, 40%→4 corridas, 50%→2 corridas no preparo." }
            ]
        },
        treinoDeBox: {
            nome: "Centro de Treinamento da Equipe de Box", icone: "🔧",
            descricao: "Equipamentos e treinamento especializado para tornar sua equipe de pit stop a mais rápida do grid.",
            niveis: [
                { custo: 0,        titulo: "Não construído",  descricao: "Nenhum bônus ativo." },
                { custo: 300000,   titulo: "Básico",          descricao: "Reduz entre 0.1s e 0.3s por parada." },
                { custo: 1200000,  titulo: "Intermediário",   descricao: "Reduz entre 0.3s e 0.5s por parada." },
                { custo: 3000000,  titulo: "Avançado",        descricao: "Reduz entre 0.5s e 0.6s por parada." },
                { custo: 8000000,  titulo: "Elite",           descricao: "Reduz entre 0.6s e 0.8s por parada." },
                { custo: 15000000, titulo: "Estado da Arte",  descricao: "Reduz entre 0.8s e 1.0s por parada. A equipe de box mais veloz do grid!" }
            ]
        },
        marketing: {
            nome: "Departamento de Marketing e Hospitalidade", icone: "📣",
            descricao: "Estrutura para receber patrocinadores e promover a marca da equipe globalmente.",
            niveis: [
                { custo: 0,        titulo: "Não construído",  descricao: "Nenhum bônus ativo." },
                { custo: 300000,   titulo: "Básico",          descricao: "+5% de bônus nas vendas de merchandise e chances de patrocínio." },
                { custo: 1200000,  titulo: "Intermediário",   descricao: "+8% de bônus nas vendas e patrocínios." },
                { custo: 4000000,  titulo: "Avançado",        descricao: "+15% de bônus. Hospitality suite de alto padrão." },
                { custo: 10000000, titulo: "Elite",           descricao: "+20% de bônus. Presença global da marca." },
                { custo: 20000000, titulo: "Estado da Arte",  descricao: "+25% de bônus. Departamento de nível de grande construtora." }
            ]
        },
        ers: {
            nome: "Centro de Otimização de ERS", icone: "⚡",
            descricao: "Melhora a potência da bateria ERS quando ativada, garantindo um bônus de desempenho maior por volta.",
            niveis: [
                { custo: 0,        titulo: "Padrão (incluído)", descricao: "ERS padrão de série: −0.200s/v com ERS ativo · 3 voltas ativas por ciclo." },
                { custo: 0,        titulo: "Padrão (incluído)", descricao: "ERS padrão de série: −0.200s/v com ERS ativo · 3 voltas ativas por ciclo." },
                { custo: 3000000,  titulo: "Otimizado",         descricao: "−0.300s/v com ERS ativo · 3 voltas ativas por ciclo. Gestão energética aprimorada." },
                { custo: 6000000,  titulo: "Avançado",          descricao: "−0.350s/v com ERS ativo · 2 voltas ativas por ciclo. Descarga mais concentrada." },
                { custo: 12000000, titulo: "Elite",             descricao: "−0.500s/v com ERS ativo · 1 volta ativa por ciclo. Bônus máximo por ativação." },
                { custo: 20000000, titulo: "Estado da Arte",    descricao: "−0.550s a −0.600s/v com ERS ativo · 1 volta ativa, recarga mais rápida. Potência de fábrica de ponta." }
            ]
        },
        centroMotores: {
            nome: "Centro de Desenvolvimento de Motores", icone: "🏁",
            descricao: "A alma de uma corrida. Crucial para o desenvolvimento de motores mais potentes e duradouros.",
            niveis: [
                { custo: 0,        titulo: "Não construído",  descricao: "Nenhum bônus ativo." },
                { custo: 300000,   titulo: "Básico",          descricao: "Motores mais resistentes. Reduz 0–2 corridas no preparo de motores." },
                { custo: 1200000,  titulo: "Intermediário",   descricao: "Motores mais resistentes + força extra. Reduz 1–2 corridas no preparo." },
                { custo: 4000000,  titulo: "Avançado",        descricao: "Durabilidade e potência aprimoradas. Reduz 1–3 corridas no preparo." },
                { custo: 10000000, titulo: "Elite",           descricao: "Alta resistência e performance. Reduz 2–3 corridas no preparo." },
                { custo: 20000000, titulo: "Estado da Arte",  descricao: "Motores de alto rendimento. Reduz 3–5 corridas no preparo. Domínio total!" }
            ]
        },
        centroSuspensoes: {
            nome: "Centro de Desenvolvimento de Suspensões", icone: "⚙️",
            descricao: "Suspensões equilibradas fazem o carro performar melhor em qualquer circuito. Reduz custo e tempo de produção.",
            niveis: [
                { custo: 0,        titulo: "Não construído",  descricao: "Nenhum bônus ativo." },
                { custo: 300000,   titulo: "Básico",          descricao: "5% de desconto em projetos de Suspensão. Reduz 0–1 corrida no preparo." },
                { custo: 1200000,  titulo: "Intermediário",   descricao: "10% de desconto. Reduz 0–1 corrida no preparo de Suspensão." },
                { custo: 4000000,  titulo: "Avançado",        descricao: "15% de desconto. Reduz 1–2 corridas no preparo." },
                { custo: 10000000, titulo: "Elite",           descricao: "20% de desconto. Reduz 2–3 corridas no preparo." },
                { custo: 20000000, titulo: "Estado da Arte",  descricao: "25% de desconto. Reduz 3–4 corridas no preparo. Manuseio perfeito!" }
            ]
        },
        centroChassis: {
            nome: "Centro de Desenvolvimento de Chassi", icone: "🏗️",
            descricao: "O chassi é a espinha dorsal do carro. Um centro dedicado reduz custo, tempo de produção e melhora a qualidade estrutural das peças.",
            niveis: [
                { custo: 0,        titulo: "Não construído",  descricao: "Nenhum bônus ativo." },
                { custo: 300000,   titulo: "Básico",          descricao: "5% de desconto em projetos de Chassi. Reduz 0–1 corrida no preparo. +3% nos atributos do chassi gerado." },
                { custo: 1200000,  titulo: "Intermediário",   descricao: "8% de desconto. Reduz 0–1 corrida no preparo. +5% nos atributos." },
                { custo: 4000000,  titulo: "Avançado",        descricao: "12% de desconto. Reduz 1–2 corridas no preparo. +7% nos atributos." },
                { custo: 10000000, titulo: "Elite",           descricao: "15% de desconto. Reduz 2–3 corridas no preparo. +10% nos atributos." },
                { custo: 20000000, titulo: "Estado da Arte",  descricao: "20% de desconto. Reduz 3–4 corridas no preparo. +13% nos atributos. Chassi de nível de construtora!" }
            ]
        }
    };

    const catalogoMarketing = {
        'Chaveiro': { nome: 'Chaveiro', img: 'img/marketing/chaveiro.png', custo_desbloqueio: 0, custo_producao: 5, preco_venda_minimo: 5 },
        'Bonés': { nome: 'Bonés', img: 'img/marketing/bones.png', custo_desbloqueio: 200000, custo_producao: 30, preco_venda_minimo: 30 },
        'Camisa': { nome: 'Camisa', img: 'img/marketing/camisa.png', custo_desbloqueio: 300000, custo_producao: 75, preco_venda_minimo: 75 },
        'Carro em miniatura': { nome: 'Carro em miniatura', img: 'img/marketing/miniatura.png', custo_desbloqueio: 500000, custo_producao: 150, preco_venda_minimo: 150 },
        'Anel com joia': { nome: 'Anel com joia', img: 'img/marketing/anel.png', custo_desbloqueio: 1000000, custo_producao: 3000, preco_venda_minimo: 3000 },
        'Combo Presentes': { nome: 'Combo Presentes', img: 'img/marketing/combo.png', custo_desbloqueio: 5000000, custo_producao: 7500, preco_venda_minimo: 7500 }
    };

    const carIcon = new Image(); carIcon.src = 'img/carf1.png';
    const DESIGN_WIDTH = 800;
    const DESIGN_HEIGHT = 450;

    // *************************** Inicio ***************************
    let gameState = {};
    let animacaoAtiva = false;
    let garagemState = { carroSelecionadoIndex: 0 };
    let raceData = {};
    let pilotosMonitorados = []; // ID do piloto IA monitorado (máx. 1)
    let watchlistRefPiloto = 1;   // 1=Piloto1 2=Piloto2 (referência da comparação com IA)
    let sortState = { column: 'preco', direction: 'asc' };
    let projetoAtual = {};
    let gapsAnteriores = {};
    let telemetryChartInstance = null;
    let scTimerId = null; // intervalo do timer de 60s do safety car


    // ------------ 2. ESTADO DO JOGO ------------

    function resetGameState() {
        // Restaura IDs de pilotos E atributos de carro originais das equipes IA.
        // Os IDs de piloto estão hardcoded aqui (são fixos por design).
        // Os atributos de carro são restaurados via CARRO_INICIAL — derivado
        // automaticamente de equipesIA, então sempre reflete os valores atuais.
        const defaultPilotIds = {
            "Red Bull":        { p1: 1,   p2: 17  },
            "Mercedes":        { p1: 5,   p2: 6   },
            "Ferrari":         { p1: 3,   p2: 4   },
            "Audi":            { p1: 9,   p2: 10  },
            "Aston Martin":    { p1: 11,  p2: 12  },
            "MacLaren":        { p1: 19,  p2: 20  },
            "Alpine":          { p1: 13,  p2: 14  },
            "Haas":            { p1: 15,  p2: 16  },
            "RB":              { p1: 18,  p2: 21  },
            "Wilians":         { p1: 7,   p2: 8   },
            "Cadillac Racing": { p1: 128, p2: 129 }
        };
        equipesIA.forEach(equipe => {
            const ids = defaultPilotIds[equipe.nome];
            if (ids) {
                equipe.piloto1Id = ids.p1;
                equipe.piloto2Id = ids.p2;
            }
            // Restaura atributos de fábrica via snapshot — sempre em sync com equipesIA
            if (CARRO_INICIAL[equipe.nome]) {
                equipe.carro = { ...CARRO_INICIAL[equipe.nome] };
            }
            // Inicializa campos de fornecedor
            equipe.componenteNivel   = estimarNivelComponentes(equipe);
            equipe.relacaoComJogador = 'neutra';
        });

        const pilotosDoJogo = JSON.parse(JSON.stringify(baseDePilotos)).map(p => {
            // Cria uma cópia do objeto do piloto
            const newPilot = {...p, campeonatosGanhos: p.campeonatosGanhos || [] };

            // --- INÍCIO DA CORREÇÃO ---
            // Se 'atributosBase' não existir nos dados do piloto, cria a partir dos atributos atuais.
            // Isso torna o jogo resistente a dados de entrada incompletos.
            if (!newPilot.atributosBase) {
                newPilot.atributosBase = {
                    habilidade: newPilot.habilidade,
                    consistencia: newPilot.consistencia,
                    gerenciamentoPneus: newPilot.gerenciamentoPneus
                };
            }
            // --- FIM DA CORREÇÃO ---
            return newPilot;
        });

        equipesIA.forEach(equipe => {
            const piloto1 = pilotosDoJogo.find(p => p.id === equipe.piloto1Id);
            if (piloto1) piloto1.status = equipe.nome;
            const piloto2 = pilotosDoJogo.find(p => p.id === equipe.piloto2Id);
            if (piloto2) piloto2.status = equipe.nome;
        });

        const pilotosDeMercado = pilotosDoJogo.filter(p => p.status === 'Disponível');
        let piloto1Jogador = null;
        let piloto2Jogador = null;
        if (pilotosDeMercado.length >= 2) {
            piloto1Jogador = pilotosDeMercado[0];
            piloto1Jogador.status = 'Jogador';
            piloto2Jogador = pilotosDeMercado[1];
            piloto2Jogador.status = 'Jogador';
        }
        atualizarMercadoDePilotos(pilotosDoJogo);

        gameState = {
            escuderia: { nome: "Equipe Novata", cor: "rgb(255,255,0)", dinheiro: 10000000, especialistas: [], emblema: {
                forma: 'circle.svg',
                corForma: '#ff0000',
                icone: 'asterik.svg',
                corIcone: '#030303',
                escalaIcone: 0.7,
                iconeNaFrente: true,
                corFundo: 'transparent',
                centroPDDesbloqueado: false,
                primeiroNomeSalvo: false,
                primeiroEmblemaSalvo: false
                }
            },
            campeonato: { ano: 2026, corridaAtualIndex: 0, resultadosCorridas: [], classificacaoPilotos: [], classificacaoConstrutores: [] },
            projetosEmAndamento: [],
            patrocinio: { ofertas: [], ativos: [] },
            historicoAutodromos: {},
            galeria: { titulosConstrutores: [], titulosPilotos: [], hallDaFama: [], estatisticasPilotos: {}, estatisticasTodosPilotos: {} },
            historicoTemporadas: [],
            instalacoes: {
                simulador: 0,
                tunelDeVento: 0,
                treinoDeBox: 0,
                marketing: 0,
                ers: 1,
                centroMotores: 0,
                centroSuspensoes: 0,
                centroChassis: 0
            },
            marketing: {
                'Chaveiro': { desbloqueado: true, inventario: 0, preco_venda_definido: 5, lote_referencia: 0, posicaoIcone: { top: 25, left: 25 }, tamanhoIcone: { width: 50, height: 50 } },
                'Bonés': { desbloqueado: false, inventario: 0, preco_venda_definido: 30, lote_referencia: 0, posicaoIcone: { top: 25, left: 25 }, tamanhoIcone: { width: 50, height: 50 } },
                'Camisa': { desbloqueado: false, inventario: 0, preco_venda_definido: 75, lote_referencia: 0, posicaoIcone: { top: 25, left: 25 }, tamanhoIcone: { width: 50, height: 50 } },
                'Carro em miniatura': { desbloqueado: false, inventario: 0, preco_venda_definido: 150, lote_referencia: 0, posicaoIcone: { top: 25, left: 25 }, tamanhoIcone: { width: 50, height: 50 } },
                'Anel com joia': { desbloqueado: false, inventario: 0, preco_venda_definido: 3000, lote_referencia: 0, posicaoIcone: { top: 25, left: 25 }, tamanhoIcone: { width: 50, height: 50 } },
                'Combo Presentes': { desbloqueado: false, inventario: 0, preco_venda_definido: 7500, lote_referencia: 0, posicaoIcone: { top: 25, left: 25 }, tamanhoIcone: { width: 50, height: 50 } },
            },
            pilotos: pilotosDoJogo,
            todasAsPecas: [
                { ...catalogoDePecas[14], instanceId: Date.now() + 1 }, { ...catalogoDePecas[6], instanceId: Date.now() + 2 },
                { ...catalogoDePecas[11], instanceId: Date.now() + 3 }, { ...catalogoDePecas[11], instanceId: Date.now() + 4 },
                { ...catalogoDePecas[20], instanceId: Date.now() + 5 }, { ...catalogoDePecas[20], instanceId: Date.now() + 6 },
                { ...catalogoDePecas[73], instanceId: Date.now() + 7 }, { ...catalogoDePecas[73], instanceId: Date.now() + 8 },
                { ...catalogoDePecas[29], instanceId: Date.now() + 9 }, { ...catalogoDePecas[4], instanceId: Date.now() + 10 }
            ].map(peca => ({
                ...peca,
                corridasUsadas: 0,
                atributosOriginais: JSON.parse(JSON.stringify(peca.atributos))
            })),
            torcedores: 4000,
            notificacoes: { pilotos: false, marketing: false, instalacoes: false },
            // ── Teto de produção de peças ──────────────────────────────────────
            versaoDados: VERSAO_DADOS,
            tetoAtivo: false,               // ativa a partir da T3
            fornecedorAtivo: false,         // ativa a partir da T3
            novasMecanicasPendentes: false,
            producaoAnual: { 'Motor': 0, 'Suspensão': 0, 'Chassi': 0, 'Asa Dianteira': 0, 'Asa Traseira': 0 },
            quotaAnual:    { 'Motor': 4, 'Suspensão': 4, 'Chassi': 4, 'Asa Dianteira': 5, 'Asa Traseira': 5 },
            quotaBonus:    { 'Motor': 0, 'Suspensão': 0, 'Chassi': 0, 'Asa Dianteira': 0, 'Asa Traseira': 0 },
            // Livro de recordes — sequência cross-temporada
            sequenciaVitoriasAtual: { piloto: null, equipe: null, contagem: 0 },
            melhorSequenciaVitorias: { piloto: null, equipe: null, contagem: 0 },
            historicoMarketing: {},
            historicoAnualMarketing: [],
            historicoVendasPorCorrida: [],
            mercadoDePecas: [],
            carros: [
                { id: 1, pilotoId: piloto1Jogador ? piloto1Jogador.id : null, pecas: { motor: null, chassi: null, asaDianteira: null, asaTraseira: null, suspensao: null }, estrategia: { pneuInicial: 'medio', paradas: [{ pararNaVolta: 26, colocarPneu: 'duro' }] }, ers: { bateria: 0, voltasParaCarregar: 0, cicloDeCarregamento: 0, ativo: false } },
                { id: 2, pilotoId: piloto2Jogador ? piloto2Jogador.id : null, pecas: { motor: null, chassi: null, asaDianteira: null, asaTraseira: null, suspensao: null }, estrategia: { pneuInicial: 'medio', paradas: [{ pararNaVolta: 27, colocarPneu: 'duro' }] }, ers: { bateria: 0, voltasParaCarregar: 0, cicloDeCarregamento: 0, ativo: false } }
            ],
            // ── Academia Júnior ───────────────────────────────────────────────
            academia: {
                desbloqueada: false,
                pupilos: []   // até 3 pilotos júnior
            }
        };
    }


    function gerarPilotoSubstituto() {
        const nomes = ["T. Maraia", "J. Santos", "M. Oliveira", "L. Pereira", "G. Almeida", "R. Costa", "N. Bitencourt", "R. Ruffo"];
        const novoPiloto = {
            id: Date.now(),
            rosto: 'img/Pilotos/default.png',
            nome: `Rookie ${nomes[Math.floor(Math.random() * nomes.length)]}`,
            idade: Math.floor(Math.random() * 5) + 18,
            habilidade: Math.floor(Math.random() * 11) + 65,
            consistencia: Math.floor(Math.random() * 16) + 60,
            gerenciamentoPneus: Math.floor(Math.random() * 16) + 60,
            salario: Math.floor(Math.random() * 20000) + 40000,
            precoContrato: Math.floor(Math.random() * 200000) + 400000,
            status: 'Jogador',
            campeonatosGanhos: []
        };
        novoPiloto.atributosBase = { habilidade: novoPiloto.habilidade, consistencia: novoPiloto.consistencia, gerenciamentoPneus: novoPiloto.gerenciamentoPneus };
        gameState.pilotos.push(novoPiloto);
        return novoPiloto.id;
    }

    const saveGame = () => {
        // Persiste o estado mutável das equipes de IA (piloto1Id, piloto2Id, carro)
        // junto com o gameState para que substituições de pilotos sobrevivam ao reload.
        gameState._equipesIA_save = equipesIA.map(e => ({
            nome: e.nome,
            piloto1Id: e.piloto1Id,
            piloto2Id: e.piloto2Id,
            carro: JSON.parse(JSON.stringify(e.carro)),
            componenteNivel:   e.componenteNivel   ? { ...e.componenteNivel }   : null,
            relacaoComJogador: e.relacaoComJogador || 'neutra'
        }));
        localStorage.setItem('f1ManagerSave', JSON.stringify(gameState));
    };

    const loadGame = () => {
        const savedGame = localStorage.getItem('f1ManagerSave');
        if (savedGame) {
            try {
                gameState = JSON.parse(savedGame);

                // Suas verificações existentes para outras partes do jogo (se houver)...
                if (!gameState.pilotos || !Array.isArray(gameState.pilotos) || !gameState.pilotos[0] || !gameState.pilotos[0].atributosBase) {
                    console.log("Save antigo ou corrompido detectado. Iniciando novo jogo.");
                    resetGameState();
                    alert("Seu jogo salvo era de uma versão antiga ou incompatível. Um novo jogo foi iniciado.");
                    return;
                }
                if (gameState.escuderia.emblema.primeiroNomeSalvo === undefined) {
                gameState.escuderia.emblema.primeiroNomeSalvo = true;
                }

                if (gameState.escuderia.emblema.primeiroEmblemaSalvo === undefined) {
                    gameState.escuderia.emblema.primeiroEmblemaSalvo = true;
                }
                if (gameState.escuderia.centroPDDesbloqueado === undefined) {
                    gameState.escuderia.centroPDDesbloqueado = false; //
                }
                if (!gameState.notificacoes) {
                    gameState.notificacoes = { pilotos: false, marketing: false, instalacoes: false };
                }
                if (gameState.notificacoes.instalacoes === undefined) {
                    gameState.notificacoes.instalacoes = false;
                }
                if (!gameState.historicoAutodromos) gameState.historicoAutodromos = {};
                if (!gameState.torcedores) gameState.torcedores = 4000;
                if (!gameState.historicoMarketing) gameState.historicoMarketing = {};
                if (!gameState.historicoAnualMarketing) gameState.historicoAnualMarketing = [];
                if (!gameState.historicoVendasPorCorrida) gameState.historicoVendasPorCorrida = [];
                if (!gameState.historicoTemporadas) gameState.historicoTemporadas = [];
                if (!gameState.galeria) {
                    gameState.galeria = { titulosConstrutores: [], titulosPilotos: [], hallDaFama: [], estatisticasPilotos: {}, estatisticasTodosPilotos: {} };
                } else {
                    // Converte contadores antigos para o novo formato de array
                    if (typeof gameState.galeria.titulosConstrutores === 'number') {
                        gameState.galeria.titulosConstrutores = [];
                    }
                    if (typeof gameState.galeria.titulosPilotos === 'number') {
                        gameState.galeria.titulosPilotos = [];
                    }
                    // Migra saves antigos: converte anos puros para objetos {ano, piloto}
                    gameState.galeria.titulosPilotos = gameState.galeria.titulosPilotos.map(t =>
                        typeof t === 'object' ? t : { ano: t, piloto: '—' }
                    );
                    // Migra saves antigos: converte anos puros em titulosConstrutores para objetos {ano, pilotos}
                    gameState.galeria.titulosConstrutores = gameState.galeria.titulosConstrutores.map(t =>
                        typeof t === 'object' ? t : { ano: t, pilotos: [] }
                    );
                }

                gameState.pilotos = gameState.pilotos.filter(p => p !== null && typeof p === 'object');
                gameState.pilotos.forEach(piloto => {
                    if (piloto.idade == null) piloto.idade = 28;
                    if (piloto.salario == null) piloto.salario = 50000;
                    if (piloto.precoContrato == null) piloto.precoContrato = 500000;
                    if (!piloto.atributosBase) {
                        piloto.atributosBase = { habilidade: piloto.habilidade, consistencia: piloto.consistencia, gerenciamentoPneus: piloto.gerenciamentoPneus };
                    }
                    if (!piloto.campeonatosGanhos) {
                        piloto.campeonatosGanhos = [];
                    }
                    // --- INÍCIO DA CORREÇÃO PARA AS FOTOS ---
                    // Verifica se a propriedade 'rosto' não existe no piloto do save
                    if (piloto.rosto === undefined) {
                        // Procura o piloto correspondente na base de dados principal pelo ID
                        const pilotoOriginal = baseDePilotos.find(p => p.id === piloto.id);
                        if (pilotoOriginal && pilotoOriginal.rosto) {
                            // Se encontrou, copia o caminho da imagem para o piloto do save
                            piloto.rosto = pilotoOriginal.rosto;
                        } else {
                            // Se não encontrou (ex: um piloto 'Rookie' antigo), atribui a imagem padrão
                            piloto.rosto = 'img/Pilotos/default.png';
                        }
                    }
                    // --- FIM DA CORREÇÃO PARA AS FOTOS ---
                });
                gameState.carros.forEach(carro => {
                    if (carro.pilotoId) {
                        if (!gameState.pilotos.some(p => p.id === carro.pilotoId)) carro.pilotoId = null;
                    }
                     if (!carro.estrategia) {
                        console.log(`Carro ID ${carro.id} sem estratégia. Adicionando padrão.`);
                        carro.estrategia = { pneuInicial: 'medio', paradas: [{ pararNaVolta: 25, colocarPneu: 'duro' }] };
                    }
                    // Adiciona o sistema ERS a saves antigos
                    if (!carro.ers) {
                        carro.ers = { bateria: 0, voltasParaCarregar: 0, cicloDeCarregamento: 0, ativo: false };
                    }
                });
                if (!gameState.patrocinio) gameState.patrocinio = { ofertas: [], ativos: [] };
                if (!gameState.projetosEmAndamento) gameState.projetosEmAndamento = [];
                if (!gameState.academia) gameState.academia = { desbloqueada: false, pupilos: [] };

                // ── MIGRAÇÃO v2: teto de produção + sistema de fornecedor ──────────────
                const versaoSalva = gameState.versaoDados ?? 0;
                if (versaoSalva < 2) {
                    // Campos do teto de produção
                    if (!gameState.producaoAnual) gameState.producaoAnual = { 'Motor': 0, 'Suspensão': 0, 'Chassi': 0, 'Asa Dianteira': 0, 'Asa Traseira': 0 };
                    if (!gameState.quotaAnual)    gameState.quotaAnual    = { 'Motor': 4, 'Suspensão': 4, 'Chassi': 4, 'Asa Dianteira': 5, 'Asa Traseira': 5 };
                    if (!gameState.quotaBonus)    gameState.quotaBonus    = { 'Motor': 0, 'Suspensão': 0, 'Chassi': 0, 'Asa Dianteira': 0, 'Asa Traseira': 0 };
                    if (!gameState.encomendasExternas) gameState.encomendasExternas = [];
                    if (!gameState.sequenciaVitoriasAtual) gameState.sequenciaVitoriasAtual = { piloto: null, equipe: null, contagem: 0 };
                    if (!gameState.melhorSequenciaVitorias) gameState.melhorSequenciaVitorias = { piloto: null, equipe: null, contagem: 0 };

                    // Determina se está no meio de uma temporada
                    const corridasRestantes = (calendarioCorridas.length - 1) - (gameState.campeonato.corridaAtualIndex || 0);
                    const emMeioDaTemporada = corridasRestantes > 0;

                    if (emMeioDaTemporada) {
                        // Jogo ativo: ativa só na próxima virada de temporada
                        gameState.tetoAtivo              = false;
                        gameState.fornecedorAtivo        = false;
                        gameState.novasMecanicasPendentes = true;
                    } else {
                        // Entre temporadas, novo ou reset
                        const anoAtual = gameState.campeonato?.ano ?? 2026;
                        const temporadaNumero = anoAtual - 2025; // T1 = 2026, T2 = 2027, T3 = 2028...
                        gameState.tetoAtivo              = temporadaNumero >= 3;
                        gameState.fornecedorAtivo        = temporadaNumero >= 3;
                        gameState.novasMecanicasPendentes = false;
                    }

                    // Inicializa componenteNivel nas equipesIA (se ainda não restaurado via _equipesIA_save)
                    equipesIA.forEach(equipe => {
                        if (!equipe.componenteNivel)   equipe.componenteNivel   = estimarNivelComponentes(equipe);
                        if (!equipe.relacaoComJogador) equipe.relacaoComJogador = 'neutra';
                    });

                    gameState.versaoDados = VERSAO_DADOS;
                    console.log(`[Migração v2] tetoAtivo=${gameState.tetoAtivo} | pendente=${gameState.novasMecanicasPendentes}`);
                }
                // ── FIM MIGRAÇÃO v2 ───────────────────────────────────────────────────

                // Restaura o estado mutável das equipes de IA (piloto1Id, piloto2Id, carro)
                // que foi salvo por saveGame. Sem isso, substituições de pilotos se perdem ao recarregar.
                if (Array.isArray(gameState._equipesIA_save)) {
                    // Save novo: restaura exatamente o que foi salvo.
                    gameState._equipesIA_save.forEach(savedEquipe => {
                        const equipe = equipesIA.find(e => e.nome === savedEquipe.nome);
                        if (equipe) {
                            equipe.piloto1Id = savedEquipe.piloto1Id;
                            equipe.piloto2Id = savedEquipe.piloto2Id;
                            equipe.carro = savedEquipe.carro;
                            if (savedEquipe.componenteNivel)   equipe.componenteNivel   = savedEquipe.componenteNivel;
                            if (savedEquipe.relacaoComJogador) equipe.relacaoComJogador = savedEquipe.relacaoComJogador;
                        }
                    });
                } else {
                    // Save antigo (sem _equipesIA_save): executa migração automática.
                    // Para cada equipe IA, verifica se os IDs hardcoded existem em gameState.pilotos.
                    // Se não existirem, procura pilotos cujo status seja o nome da equipe e corrige os IDs.
                    equipesIA.forEach(equipe => {
                        const piloto1Valido = gameState.pilotos.some(p => p.id === equipe.piloto1Id);
                        const piloto2Valido = gameState.pilotos.some(p => p.id === equipe.piloto2Id);

                        if (!piloto1Valido || !piloto2Valido) {
                            const pilotosDaEquipe = gameState.pilotos.filter(p => p.status === equipe.nome);

                            if (!piloto1Valido) {
                                const substituto = pilotosDaEquipe.find(p => p.id !== equipe.piloto2Id);
                                if (substituto) {
                                    console.log(`Migração: corrigindo piloto1 da ${equipe.nome}: ID ${equipe.piloto1Id} -> ${substituto.id} (${substituto.nome})`);
                                    equipe.piloto1Id = substituto.id;
                                }
                            }
                            if (!piloto2Valido) {
                                const substituto = pilotosDaEquipe.find(p => p.id !== equipe.piloto1Id);
                                if (substituto) {
                                    console.log(`Migração: corrigindo piloto2 da ${equipe.nome}: ID ${equipe.piloto2Id} -> ${substituto.id} (${substituto.nome})`);
                                    equipe.piloto2Id = substituto.id;
                                }
                            }
                        }
                    });
                }

                // --- INÍCIO DA CORREÇÃO ---
                // Verifica se os dados de personalização existem no save; se não, cria com valores padrão.
                // Isso garante compatibilidade com saves antigos.
                if (!gameState.escuderia.emblema) {
                    console.log("Migrando save antigo: Adicionando dados de emblema padrão.");
                    gameState.escuderia.emblema = {
                        forma: 'circle.svg',      // Usando um nome que você já tem na sua lista
                        corForma: '#ff0000',
                        icone: 'asterik.svg',        // Usando um nome que você já tem na sua lista
                        corIcone: '#030303',
                        escalaIcone: 0.7,
                        iconeNaFrente: true,
                        corFundo: '#f0f2f5'


                    };
                    if (gameState.escuderia.emblema.iconeNaFrente === undefined) {
                        gameState.escuderia.emblema.iconeNaFrente = true;
                        gameState.escuderia.emblema.corFundo = '#f0f2f5';
                    }
                }
                // --- FIM DA CORREÇÃO ---
                if (!gameState.marketing) {
                    console.log("Migrando save antigo: Adicionando dados de Marketing padrão.");
                    gameState.marketing = {
                        'Chaveiro': { desbloqueado: true, inventario: 0, preco_venda_definido: 5, lote_referencia: 0 },
                        'Bonés': { desbloqueado: false, inventario: 0, preco_venda_definido: 30, lote_referencia: 0 },
                        'Camisa': { desbloqueado: false, inventario: 0, preco_venda_definido: 75, lote_referencia: 0 },
                        'Carro em miniatura': { desbloqueado: false, inventario: 0, preco_venda_definido: 150, lote_referencia: 0 },
                        'Anel com joia': { desbloqueado: false, inventario: 0, preco_venda_definido: 3000, lote_referencia: 0 },
                        'Combo Presentes': { desbloqueado: false, inventario: 0, preco_venda_definido: 7500, lote_referencia: 0 },
                    };
                }
                if (!gameState.instalacoes) {
                    gameState.instalacoes = { simulador: 0, tunelDeVento: 0, treinoDeBox: 0, marketing: 0, ers: 1, centroMotores: 0, centroSuspensoes: 0 };
                }
                // Adiciona a instalação ERS a saves antigos
                if (gameState.instalacoes.ers === undefined) {
                    gameState.instalacoes.ers = 1;
                }
                // Novas instalações — compatibilidade com saves antigos
                if (gameState.instalacoes.centroMotores === undefined) gameState.instalacoes.centroMotores = 0;
                if (gameState.instalacoes.centroSuspensoes === undefined) gameState.instalacoes.centroSuspensoes = 0;
                if (gameState.instalacoes.centroChassis === undefined) gameState.instalacoes.centroChassis = 0;
                // Limita ao novo máximo (5) para saves que tinham 3 níveis
                ['simulador','tunelDeVento','treinoDeBox','marketing'].forEach(k => {
                    if (gameState.instalacoes[k] > 5) gameState.instalacoes[k] = 5;
                });




                for (const key in gameState.marketing) {
                    if (typeof gameState.marketing[key].posicaoIcone === 'undefined') {
                        gameState.marketing[key].posicaoIcone = { top: 25, left: 25 };
                    }
                    if (typeof gameState.marketing[key].tamanhoIcone === 'undefined') {
                        gameState.marketing[key].tamanhoIcone = { width: 50, height: 50 };
                    }
                    // Migração: garante lote_referencia em saves antigos
                    if (typeof gameState.marketing[key].lote_referencia === 'undefined') {
                        gameState.marketing[key].lote_referencia = gameState.marketing[key].inventario;
                    }
                }

            } catch (error) {
                console.error("Erro ao carregar ou migrar o save game. Iniciando um novo jogo.", error);
                resetGameState();
            }
        } else {
            resetGameState();
            gerarMercado();
        }
    };

    function getCorDaEquipe(nomeEquipe) {
        if (nomeEquipe === gameState.escuderia.nome) {
            return gameState.escuderia.cor;
        }
        const equipeIA = equipesIA.find(e => e.nome === nomeEquipe);
        if (equipeIA) {
            return equipeIA.cor;
        }
        return '#6c757d';
    }


    // --------- 3. LÓGICA DO JOGO (CORE) ---------


    function salvarIdentidadeEquipe() {
        const emblemaState = gameState.escuderia.emblema;

        // Se for a primeira vez, o salvamento é gratuito.
        if (!emblemaState.primeiroEmblemaSalvo) {
            if (confirm("Deseja salvar a identidade visual da sua equipe? Esta ação é gratuita, mas futuras alterações terão um custo.")) {
                emblemaState.primeiroEmblemaSalvo = true; // Marca que o primeiro salvamento foi feito
                alert("Identidade da equipe salva com sucesso!");
                updateUI();
                saveGame();
            }
        } else {
            // Se não for a primeira vez, verifica o custo.
            if (gameState.escuderia.dinheiro < CUSTO_MUDAR_EMBLEMA) {
                alert(`Dinheiro insuficiente! Custo para alterar a identidade: R$ ${CUSTO_MUDAR_EMBLEMA.toLocaleString('pt-BR')}`);
                return;
            }

            if (confirm(`Deseja salvar as alterações na identidade da equipe pelo custo de R$ ${CUSTO_MUDAR_EMBLEMA.toLocaleString('pt-BR')}?`)) {
                gameState.escuderia.dinheiro -= CUSTO_MUDAR_EMBLEMA;
                alert("Identidade da equipe alterada com sucesso!");
                updateUI();
                saveGame();
            }
        }
    }

    function declararFalencia() {
        if (confirm("Tem certeza que deseja declarar falência?\n\nTODO O SEU PROGRESSO SERÁ PERDIDO e o jogo será reiniciado!")) {
            localStorage.removeItem('f1ManagerSave');
            resetGameState();
            gerarMercado();
            saveGame();
            updateUI();
            alert("Você declarou falência. O jogo foi reiniciado.");
        }
    }

    /**
     * Retorna uma cor (verde, laranja, vermelho) com base no valor de um atributo em relação a um valor máximo.
     * @param {number} valor - O valor atual do atributo.
     * @param {number} maxValor - O valor máximo teórico para este atributo.
     * @returns {string} - O nome da cor em inglês.
     */
    function getCorAtributo(valor, maxValor) {
        const percentual = (valor / maxValor) * 100;
        if (percentual >= 80) {
            return 'green'; // Bom
        } else if (percentual >= 50) {
            return 'orange'; // Médio
        } else {
            return 'red'; // Ruim
        }
    }

    function contratarPiloto(pilotoId) {
        const pilotoParaContratar = gameState.pilotos.find(p => p.id === pilotoId);
        if (!pilotoParaContratar || pilotoParaContratar.status !== 'Disponível') {
            alert("Piloto não está disponível para contratação.");
            return;
        }

        const meusPilotos = gameState.pilotos.filter(p => p.status === 'Jogador' || p.status === 'Reserva');
        const treinadorContratado = gameState.escuderia.especialistas.find(e => e.tipo === 'Treinador de Pilotos');
        const nivelSimulador = gameState.instalacoes.simulador;

        if (meusPilotos.filter(p => p.status === 'Jogador').length < 2) {
            if (gameState.escuderia.dinheiro < pilotoParaContratar.precoContrato) {
                alert(`Dinheiro insuficiente! Custo do contrato: R$ ${pilotoParaContratar.precoContrato.toLocaleString('pt-BR')}`);
                return;
            }
            gameState.escuderia.dinheiro -= pilotoParaContratar.precoContrato;
            pilotoParaContratar.status = 'Jogador';
            const carroVago = gameState.carros.find(c => c.pilotoId === null);
            if (carroVago) carroVago.pilotoId = pilotoParaContratar.id;
            alert(`Piloto ${pilotoParaContratar.nome} contratado para a equipe principal!`);
            updateUI(); saveGame();
            return;
        }

        // Determina vagas de reserva disponíveis
        const vagaReservaDesbloqueada = treinadorContratado || nivelSimulador >= 4;
        const maxReservas = nivelSimulador >= 4 ? 2 : 1;
        const reservasAtuais = gameState.pilotos.filter(p => p.status === 'Reserva');

        if (!vagaReservaDesbloqueada) {
            alert("Você já tem 2 pilotos na equipe principal. Contrate um Treinador de Pilotos ou evolua o Simulador para o Nível 4 para desbloquear uma vaga de piloto reserva.");
            return;
        }

        if (reservasAtuais.length >= maxReservas) {
            alert(`Você já atingiu o limite de ${maxReservas} piloto(s) reserva. Dispense um reserva antes de contratar outro.`);
            return;
        }

        // Limite de idade: Simulador nível 5 remove a restrição
        if (nivelSimulador < 5 && pilotoParaContratar.idade >= 23) {
            alert(`Para a vaga de reserva, o piloto deve ter menos de 23 anos. ${pilotoParaContratar.nome} tem ${pilotoParaContratar.idade} anos.\nEvoluia o Simulador para Nível 5 para remover este limite.`);
            return;
        }

        if (gameState.escuderia.dinheiro < pilotoParaContratar.precoContrato) {
            alert(`Dinheiro insuficiente! Custo do contrato: R$ ${pilotoParaContratar.precoContrato.toLocaleString('pt-BR')}`);
            return;
        }
        gameState.escuderia.dinheiro -= pilotoParaContratar.precoContrato;
        pilotoParaContratar.status = 'Reserva';
        alert(`${pilotoParaContratar.nome} contratado como Piloto Reserva! Ele começará a treinar imediatamente.`);
        updateUI(); saveGame();
    }

    function dispensarPiloto(pilotoId) {
        const piloto = gameState.pilotos.find(p => p.id === pilotoId);
        if (!piloto || (piloto.status !== 'Jogador' && piloto.status !== 'Reserva')) return;

        if (piloto.idade >= 35 && piloto.status === 'Jogador') {
            if (confirm(`Tem certeza que deseja aposentar ${piloto.nome}?\nEle será adicionado ao Hall da Fama e removido permanentemente do jogo.`)) {
                // Garante que o título do campeonato atual seja creditado ANTES do snapshot,
                // caso o piloto seja o líder da classificação no momento da aposentadoria.
                // Isso cobre o caso em que o jogador aposenta o campeão antes do modal de fim de temporada.
                const _classificacaoAtual = [...(gameState.campeonato.classificacaoPilotos || [])].sort((a, b) => b.pontos - a.pontos);
                const _liderAtual = _classificacaoAtual[0];
                const _anoAtual = gameState.campeonato.ano;
                if (_liderAtual && _liderAtual.piloto === piloto.nome) {
                    const _jaTitulo = gameState.galeria.titulosPilotos.some(t =>
                        (typeof t === 'object' ? t.ano : t) === _anoAtual
                    );
                    if (!_jaTitulo) {
                        gameState.galeria.titulosPilotos.push({ ano: _anoAtual, piloto: piloto.nome });
                        piloto.campeonatosGanhos.push(_anoAtual);
                    }
                }
                const _statsSnap = gameState.galeria.estatisticasPilotos[piloto.nome]
                               || gameState.galeria.estatisticasTodosPilotos?.[piloto.nome]
                               || { corridas: 0, vitorias: 0, podios: 0, pontos: 0 };
                gameState.galeria.hallDaFama.push({
                    piloto: JSON.parse(JSON.stringify(piloto)),
                    anoAposentadoria: gameState.campeonato.ano,
                    emblemaNaEpoca: JSON.parse(JSON.stringify(gameState.escuderia.emblema)),
                    statsCarreira: {
                        corridas: _statsSnap.corridas || 0,
                        vitorias: _statsSnap.vitorias || 0,
                        podios: _statsSnap.podios || 0,
                        pontos: _statsSnap.pontos || 0,
                        equipe: _statsSnap.equipe || gameState.escuderia.nome || '',
                        titulos: (piloto.campeonatosGanhos && piloto.campeonatosGanhos.length) || 0
                    }
                });
                const carroComPiloto = gameState.carros.find(c => c.pilotoId === pilotoId);
                if (carroComPiloto) {
                    carroComPiloto.pilotoId = null;
                }
                gameState.pilotos = gameState.pilotos.filter(p => p.id !== pilotoId);
                alert(`${piloto.nome} foi aposentado com honras e agora faz parte do Hall da Fama!`);
                updateUI();
                saveGame();
            }
        } else {
            if (confirm(`Tem certeza que deseja dispensar ${piloto.nome}?\nEle voltará para o mercado de pilotos.`)) {
                piloto.status = 'Disponível';
                const carroComPiloto = gameState.carros.find(c => c.pilotoId === pilotoId);
                if (carroComPiloto) {
                    carroComPiloto.pilotoId = null;
                }
                alert(`${piloto.nome} foi dispensado e está de volta ao mercado.`);
                updateUI();
                saveGame();
            }
        }
    }

    function processarEnvelhecimentoPilotos() {
        const pilotosAposentados = [];
        gameState.pilotos.forEach(piloto => {
            piloto.idade++;
            if (piloto.idade >= 35) {
                piloto.habilidade = Math.max(40, piloto.habilidade - (Math.floor(Math.random() * 3)));
                piloto.consistencia = Math.max(40, piloto.consistencia - (Math.floor(Math.random() * 3)));
                piloto.gerenciamentoPneus = Math.max(40, piloto.gerenciamentoPneus - (Math.floor(Math.random() * 3)));
            }
            const isPilotoDoJogador = piloto.status === 'Jogador' || piloto.status === 'Reserva';
            const idade = piloto.idade;
            let deveAposentar = false;

            if (isPilotoDoJogador) {
                // REGRA PARA PILOTOS DO JOGADOR: Apenas aposentadoria compulsória.
                if (idade > 45) {
                    deveAposentar = true;
                }
            } else {
                // REGRAS PARA PILOTOS DA I.A.: Lógica de probabilidade.
                if (idade > 45) {
                    deveAposentar = true; // 100% de chance
                } else if (idade >= 43 && idade <= 45) { // 50% de chance
                    if (Math.random() < 0.50) deveAposentar = true;
                } else if (idade >= 41 && idade <= 42) { // 30% de chance
                    if (Math.random() < 0.30) deveAposentar = true;
                } else if (idade >= 37 && idade <= 40) { // 10% de chance
                    if (Math.random() < 0.10) deveAposentar = true;
                }
            }

            if (deveAposentar) {
                pilotosAposentados.push(piloto);
            }
        });

        pilotosAposentados.forEach(pilotoAposentado => {
            alert(`${pilotoAposentado.nome} (equipe: ${pilotoAposentado.status}) se aposentou aos ${pilotoAposentado.idade} anos!`);
            const equipeDoPiloto = pilotoAposentado.status;

            if (equipeDoPiloto === 'Jogador') {
                const _statsSnap2 = gameState.galeria.estatisticasPilotos[pilotoAposentado.nome]
                                 || gameState.galeria.estatisticasTodosPilotos?.[pilotoAposentado.nome]
                                 || { corridas: 0, vitorias: 0, podios: 0, pontos: 0 };
                gameState.galeria.hallDaFama.push({
                    piloto: JSON.parse(JSON.stringify(pilotoAposentado)),
                    anoAposentadoria: gameState.campeonato.ano,
                    emblemaNaEpoca: JSON.parse(JSON.stringify(gameState.escuderia.emblema)),
                    statsCarreira: {
                        corridas: _statsSnap2.corridas || 0,
                        vitorias: _statsSnap2.vitorias || 0,
                        podios: _statsSnap2.podios || 0,
                        pontos: _statsSnap2.pontos || 0,
                        equipe: _statsSnap2.equipe || gameState.escuderia.nome || '',
                        titulos: (pilotoAposentado.campeonatosGanhos && pilotoAposentado.campeonatosGanhos.length) || 0
                    }
                });
                const novoPilotoId = gerarPilotoSubstituto();
                const carroDoAposentado = gameState.carros.find(c => c.pilotoId === pilotoAposentado.id);
                if (carroDoAposentado) {
                    carroDoAposentado.pilotoId = novoPilotoId;
                    const novoPiloto = gameState.pilotos.find(p => p.id === novoPilotoId);
                    alert(`Um novo talento da sua academia, ${novoPiloto.nome}, assume o lugar!`);
                }
            } else if (equipeDoPiloto !== 'Disponível' && equipeDoPiloto !== 'Indisponível') {
                // IA: stats ficam em estatisticasTodosPilotos, não em estatisticasPilotos
                const _statsIA = gameState.galeria.estatisticasTodosPilotos?.[pilotoAposentado.nome]
                               || gameState.galeria.estatisticasPilotos[pilotoAposentado.nome]
                               || { corridas: 0, vitorias: 0, podios: 0, pontos: 0 };
                gameState.galeria.hallDaFama.push({
                    piloto: JSON.parse(JSON.stringify(pilotoAposentado)),
                    anoAposentadoria: gameState.campeonato.ano,
                    statsCarreira: {
                        corridas: _statsIA.corridas || 0,
                        vitorias: _statsIA.vitorias || 0,
                        podios: _statsIA.podios || 0,
                        pontos: _statsIA.pontos || 0,
                        equipe: _statsIA.equipe || pilotoAposentado.status || '',
                        titulos: (pilotoAposentado.campeonatosGanhos && pilotoAposentado.campeonatosGanhos.length) || 0
                    }
                });
                const equipeIA = equipesIA.find(e => e.nome === equipeDoPiloto);
                if (equipeIA) {
                    const pilotosDeMercado = gameState.pilotos.filter(p => p.status === 'Disponível');
                    if (pilotosDeMercado.length > 0) {
                        pilotosDeMercado.sort((a, b) => b.habilidade - a.habilidade);
                        const novoPilotoContratado = pilotosDeMercado[0];
                        novoPilotoContratado.status = equipeIA.nome;
                        if (equipeIA.piloto1Id === pilotoAposentado.id) {
                            equipeIA.piloto1Id = novoPilotoContratado.id;
                        } else {
                            equipeIA.piloto2Id = novoPilotoContratado.id;
                        }
                        alert(`${equipeIA.nome} agiu rápido e contratou ${novoPilotoContratado.nome} para a vaga!`);
                    } else {
                        alert(`${equipeIA.nome} não encontrou pilotos disponíveis no mercado para substituir ${pilotoAposentado.nome}!`);
                    }
                }
            }
            gameState.pilotos = gameState.pilotos.filter(p => p.id !== pilotoAposentado.id);
        });
    }


    /**
     * Propaga a mudança de nome da escuderia para todos os lugares do gameState
     * onde o nome antigo foi gravado como string — evita inconsistências nas
     * tabelas de campeonato, resultados de corrida, galeria e pilotos.
     */
    function propagarNomeEquipe(nomeAntigo, novoNome) {
        // 1. Classificação de construtores da temporada atual
        gameState.campeonato.classificacaoConstrutores.forEach(e => {
            if (e.equipe === nomeAntigo) e.equipe = novoNome;
        });

        // 2. Classificação de pilotos (campo "equipe" de cada entrada)
        gameState.campeonato.classificacaoPilotos.forEach(p => {
            if (p.equipe === nomeAntigo) p.equipe = novoNome;
        });

        // 3. Resultados de corridas já disputadas (equipe em cada participante)
        gameState.campeonato.resultadosCorridas.forEach(corrida => {
            corrida.resultadoFinal.forEach(res => {
                if (res.equipe === nomeAntigo) res.equipe = novoNome;
            });
        });

        // 4. Status dos pilotos do jogador (armazenam o nome da equipe como status)
        gameState.pilotos.forEach(piloto => {
            if (piloto.status === nomeAntigo) piloto.status = novoNome;
        });

        // 5. Estatísticas da galeria (campo "equipe" nos registros de todos os pilotos)
        const atualizarStatsEquipe = (statsObj) => {
            if (!statsObj) return;
            Object.values(statsObj).forEach(s => {
                if (s.equipe === nomeAntigo) s.equipe = novoNome;
            });
        };
        atualizarStatsEquipe(gameState.galeria.estatisticasPilotos);
        atualizarStatsEquipe(gameState.galeria.estatisticasTodosPilotos);

        // 6. Hall da Fama — equipe registrada na entrada
        gameState.galeria.hallDaFama.forEach(entrada => {
            if (entrada.statsCarreira?.equipe === nomeAntigo) entrada.statsCarreira.equipe = novoNome;
            if (entrada.piloto?.status === nomeAntigo) entrada.piloto.status = novoNome;
        });

        // 7. Histórico anual de marketing (não tem nome de equipe, mas deixa aqui como extensão futura)
        // — nada a fazer por enquanto
    }

    function mudarNomeEquipe() {
        const novoNome = document.getElementById('input-nome-escuderia').value.trim();
        if (!novoNome || novoNome.length < 3) {
            alert("O nome da equipe deve ter pelo menos 3 caracteres.");
            return;
        }

        const emblemaState = gameState.escuderia.emblema;
        const nomeAntigo = gameState.escuderia.nome;

        // Se for a primeira vez, a mudança é grátis.
        if (!emblemaState.primeiroNomeSalvo) {
            if (confirm(`Definir o nome da equipe como "${novoNome}"? Esta ação é gratuita, mas futuras alterações terão um custo.`)) {
                gameState.escuderia.nome = novoNome;
                propagarNomeEquipe(nomeAntigo, novoNome);
                emblemaState.primeiroNomeSalvo = true;
                alert("Nome da equipe definido com sucesso!");
                updateUI();
                saveGame();
            }
        } else {
            if (gameState.escuderia.dinheiro < CUSTO_MUDAR_NOME) {
                alert(`Dinheiro insuficiente! Custo para alterar o nome: R$ ${CUSTO_MUDAR_NOME.toLocaleString('pt-BR')}`);
                return;
            }

            if (confirm(`Deseja alterar o nome da equipe para "${novoNome}" pelo custo de R$ ${CUSTO_MUDAR_NOME.toLocaleString('pt-BR')}?`)) {
                gameState.escuderia.dinheiro -= CUSTO_MUDAR_NOME;
                gameState.escuderia.nome = novoNome;
                propagarNomeEquipe(nomeAntigo, novoNome);
                alert("Nome da equipe alterado com sucesso!");
                updateUI();
                saveGame();
            }
        }
    }

    function evoluirCarrosIA() {
        const classificacaoFinal = [...gameState.campeonato.classificacaoConstrutores].sort((a, b) => b.pontos - a.pontos);
        const relatorio = [];

        // Teto de evolução por atributo (confiabilidade evolui separado, mais lentamente)
        const TETO_PERF = 95;
        const TETO_CONF = 92;

        // Limiar de "equipe de ponta" e chance de temporada problemática
        // Calibrado para os novos valores base (Top 3 inicia em ~88–92)
        const LIMIAR_PROBLEMA  = 88;  // média dos 3 atributos de perf. que dispara o risco
        const CHANCE_PROBLEMA  = 0.08; // 8% de chance (era 5%, ligeiramente mais dramático)
        const PENALIDADE_PERF  = 0.04; // -4% (era -5%)
        const PISO_PERF        = 70;   // nunca cai abaixo de 70

        equipesIA.forEach(equipe => {
            const posicao = classificacaoFinal.findIndex(e => e.equipe === equipe.nome) + 1;
            const mediaPerf = (equipe.carro.potencia + equipe.carro.aerodinamica + equipe.carro.aderencia) / 3;

            // ── TEMPORADA PROBLEMÁTICA ──────────────────────────────────────────
            // Equipes de ponta têm chance de regredir (orçamento mal investido,
            // acidente de desenvolvimento, escândalo técnico, etc.)
            if (mediaPerf >= LIMIAR_PROBLEMA && Math.random() < CHANCE_PROBLEMA) {
                equipe.carro.potencia     = Math.max(PISO_PERF, Math.round(equipe.carro.potencia     * (1 - PENALIDADE_PERF)));
                equipe.carro.aerodinamica = Math.max(PISO_PERF, Math.round(equipe.carro.aerodinamica * (1 - PENALIDADE_PERF)));
                equipe.carro.aderencia    = Math.max(PISO_PERF, Math.round(equipe.carro.aderencia    * (1 - PENALIDADE_PERF)));
                relatorio.push(`⚠️ ${equipe.nome}: temporada problemática! Carro regrediu (-4% nos atributos).`);
                return; // não evolui este ciclo
            }

            // ── EVOLUÇÃO NORMAL ──────────────────────────────────────────────────
            // Quem está atrás melhora mais (convergência orgânica).
            // Teto menor para equipes já na zona de ponta — crescimento mais lento.
            //
            // posicao === 0 significa que a equipe não pontuou na temporada
            // (não aparece em classificacaoFinal) — tratada como último lugar.
            let fatorMelhoria;
            const pos = posicao > 0 ? posicao : 12;
            if      (pos === 1) fatorMelhoria = 0.4;  // líder evolui pouco
            else if (pos <= 3)  fatorMelhoria = 0.65;
            else if (pos <= 6)  fatorMelhoria = 0.90;
            else if (pos <= 9)  fatorMelhoria = 1.10;
            else                fatorMelhoria = 1.30; // último → melhoria mais real, mas sem disparar

            // Diminishing returns na zona alta — acima de 88 de média cresce 50% mais devagar
            if (mediaPerf >= LIMIAR_PROBLEMA) {
                fatorMelhoria *= 0.50;
            } else if (mediaPerf >= 83) {
                fatorMelhoria *= 0.75; // zona intermediária: um freio suave
            }

            equipe.carro.potencia     = Math.min(TETO_PERF, equipe.carro.potencia     + (Math.random() * fatorMelhoria));
            equipe.carro.aerodinamica = Math.min(TETO_PERF, equipe.carro.aerodinamica + (Math.random() * fatorMelhoria));
            equipe.carro.aderencia    = Math.min(TETO_PERF, equipe.carro.aderencia    + (Math.random() * fatorMelhoria));
            // Confiabilidade evolui mais devagar e tem teto menor
            equipe.carro.confiabilidade = Math.min(TETO_CONF, equipe.carro.confiabilidade + (Math.random() * fatorMelhoria * 0.5));
        });

        let msg = "🔧 As equipes adversárias trabalharam em seus carros para a nova temporada!";
        if (relatorio.length > 0) msg += "\n\n" + relatorio.join("\n");
        alert(msg);
    }


    function forcarContratacaoIA() {
        console.log("Iniciando verificação de vagas em equipes de IA...");

        const equipesComVagas = equipesIA.filter(equipe => {
            const piloto1Existe = gameState.pilotos.some(p => p.id === equipe.piloto1Id);
            const piloto2Existe = gameState.pilotos.some(p => p.id === equipe.piloto2Id);
            // Retorna true se uma das vagas estiver em aberto (piloto não existe na lista principal)
            return !piloto1Existe || !piloto2Existe;
        });

        if (equipesComVagas.length === 0) {
            console.log("Nenhuma vaga encontrada. Todas as equipes de IA estão com 2 pilotos.");
            return;
        }

        console.log(`Encontradas ${equipesComVagas.length} equipes com vagas.`);

        const pilotosDeMercado = gameState.pilotos.filter(p => p.status === 'Disponível');

        if (pilotosDeMercado.length < equipesComVagas.length) {
            console.error("ERRO: Não há pilotos suficientes no mercado para preencher todas as vagas!");
            alert("Não há pilotos 'Disponíveis' suficientes no mercado para preencher as vagas das equipes de IA.");
            return;
        }

        // Ordena o mercado para pegar sempre o melhor piloto disponível
        pilotosDeMercado.sort((a, b) => b.habilidade - a.habilidade);

        equipesComVagas.forEach(equipe => {
            const piloto1Existe = gameState.pilotos.some(p => p.id === equipe.piloto1Id);

            // Pega o melhor piloto do topo da lista do mercado
            const novoPilotoContratado = pilotosDeMercado.shift();

            if (!piloto1Existe) {
                console.log(`A vaga do Piloto 1 na ${equipe.nome} está aberta.`);
                equipe.piloto1Id = novoPilotoContratado.id;
            } else { // Se o piloto 1 existe, a vaga só pode ser do piloto 2
                console.log(`A vaga do Piloto 2 na ${equipe.nome} está aberta.`);
                equipe.piloto2Id = novoPilotoContratado.id;
            }

            // Atualiza o status do piloto contratado
            novoPilotoContratado.status = equipe.nome;

            const mensagem = `${equipe.nome} contratou ${novoPilotoContratado.nome} para preencher a vaga aberta!`;
            console.log(mensagem);
            alert(mensagem);
        });

        console.log("Processo de contratação forçada concluído. Atualizando a interface...");
        updateUI(); // Atualiza a tela para mostrar o novo piloto na equipe
        saveGame(); // Salva o estado do jogo com a nova contratação
        console.log("Jogo salvo com o novo piloto.");
    }

    function atualizarMercadoDePilotos(pilotos) {
        pilotos.forEach(piloto => {
            if (piloto.status === 'Disponível') {
                piloto.status = 'Indisponível';
            }
        });
        const pilotosElegiveis = pilotos.filter(p => p.status === 'Indisponível');
        pilotosElegiveis.sort(() => 0.5 - Math.random());
        const novosDoMercado = pilotosElegiveis.slice(0, 7);
        novosDoMercado.forEach(piloto => {
            piloto.status = 'Disponível';
        });
    }

    function gerarOfertasDePatrocinio() {
        const espacosDisponiveis = 4 - (gameState.patrocinio.ativos.length + gameState.patrocinio.ofertas.length);
        if (espacosDisponiveis <= 0 || Math.random() > 0.80) return;
        const classificacao = [...gameState.campeonato.classificacaoConstrutores].sort((a, b) => b.pontos - a.pontos);
        const nossaPosicao = classificacao.findIndex(e => e.equipe === gameState.escuderia.nome) + 1;
        let reputacao = nossaPosicao > 0 ? Math.max(1, 6 - nossaPosicao) : 1;
        const _mktRepBonusPorNivel = [0, 1, 1, 2, 3, 4];
        reputacao += (_mktRepBonusPorNivel[gameState.instalacoes.marketing] || 0);
        const patrocinadoresElegiveis = marcasPatrocinadores.filter(m => m.reputacaoMin <= reputacao);
        if (patrocinadoresElegiveis.length === 0) return;
        const marca = patrocinadoresElegiveis[Math.floor(Math.random() * patrocinadoresElegiveis.length)];
        const duracao = Math.floor(Math.random() * 6) + 3;
        const valor = Math.floor((1100000 * reputacao) / (duracao * 0.2));
        gameState.patrocinio.ofertas.push({ id: Date.now(), marca: marca.nome, valor, duracao });
    }

    // ── Venda em Massa ──────────────────────────────────────────────────────
    function abrirModalVendaMassa(modo_origem) {
        const pecasEquipadasIds = new Set(gameState.carros.flatMap(c => Object.values(c.pecas)));

        // 'inventario': peças no todasAsPecas não equipadas
        // 'projetos'  : peças concluídas ainda em projetosEmAndamento (serão colocadas à venda, não debitadas)
        let pecasDisponiveis;
        if (modo_origem === 'projetos') {
            pecasDisponiveis = gameState.projetosEmAndamento
                .filter(p => p.status === 'concluido' && p.pecaConcluida)
                .map(p => ({ ...p.pecaConcluida, _projetoId: p.id }));
        } else {
            pecasDisponiveis = gameState.todasAsPecas.filter(p => !pecasEquipadasIds.has(p.instanceId));
        }

        if (pecasDisponiveis.length === 0) {
            alert(modo_origem === 'projetos'
                ? 'Nenhuma peça concluída aguardando decisão.'
                : 'Nenhuma peça no inventário para vender.');
            return;
        }

        const tipos = ['Motor', 'Chassi', 'Asa Dianteira', 'Asa Traseira', 'Suspensão'];
        const niveisExistentes = [...new Set(pecasDisponiveis.map(p => p.nivel))].sort((a, b) => a - b);

        // Referência ao modal criado abaixo (usada nas closures)
        let modal;

        function calcularSelecao() {
            const modo   = modal.querySelector('input[name="modo-venda"]:checked')?.value || 'todas';
            const nivelExato = parseInt(modal.querySelector('#venda-nivel-exato')?.value || 0);
            const nivelAte   = parseInt(modal.querySelector('#venda-nivel-ate')?.value  || 0);
            const tipoSel    = modal.querySelector('#venda-tipo-filtro')?.value || 'todos';
            return pecasDisponiveis.filter(p => {
                const tipoOk = tipoSel === 'todos' || p.tipo === tipoSel;
                if (modo === 'todas')       return tipoOk;
                if (modo === 'nivel_exato') return tipoOk && p.nivel === nivelExato;
                if (modo === 'nivel_ate')   return tipoOk && p.nivel <= nivelAte;
                return false;
            });
        }

        function renderPreview() {
            const selecao = calcularSelecao();
            const previewEl   = modal.querySelector('#venda-preview');
            const btnConfirmar = modal.querySelector('#btn-confirmar-venda-massa');

            if (selecao.length === 0) {
                previewEl.innerHTML = `<p class="venda-preview-vazio">Nenhuma peça corresponde ao filtro selecionado.</p>`;
                btnConfirmar.disabled = true;
                return;
            }

            // Para projetos não mostramos valor fixo — será vendido aleatoriamente
            const mostrarValor = modo_origem !== 'projetos';
            const totalValor   = mostrarValor
                ? selecao.reduce((s, p) => s + Math.floor(calcularPrecoPeca(p) * 0.7), 0)
                : null;

            // Agrupa por tipo
            const agrupado = {};
            selecao.forEach(p => {
                if (!agrupado[p.tipo]) agrupado[p.tipo] = { qtd: 0, valor: 0, niveis: {} };
                agrupado[p.tipo].qtd++;
                agrupado[p.tipo].valor += Math.floor(calcularPrecoPeca(p) * 0.7);
                agrupado[p.tipo].niveis[p.nivel] = (agrupado[p.tipo].niveis[p.nivel] || 0) + 1;
            });

            const valorHeader = mostrarValor ? '<th>Valor (70%)</th>' : '<th>Preço base</th>';
            const linhas = Object.entries(agrupado).map(([tipo, dados]) => {
                const niveisStr = Object.entries(dados.niveis)
                    .sort((a, b) => Number(a[0]) - Number(b[0]))
                    .map(([nvl, qtd]) => `Nvl ${nvl}×${qtd}`).join(', ');
                const valorCell = mostrarValor
                    ? `<td class="venda-valor">R$ ${dados.valor.toLocaleString('pt-BR')}</td>`
                    : `<td class="venda-valor venda-valor-estimado">~R$ ${dados.valor.toLocaleString('pt-BR')}</td>`;
                return `<tr>
                    <td>${tipo}</td>
                    <td class="venda-niveis-col">${niveisStr}</td>
                    <td class="venda-qtd">${dados.qtd}</td>
                    ${valorCell}
                </tr>`;
            }).join('');

            const rodapeValor = mostrarValor
                ? `<td class="venda-valor"><strong>R$ ${totalValor.toLocaleString('pt-BR')}</strong></td>`
                : `<td class="venda-valor venda-valor-estimado"><strong>Variável 🎲</strong></td>`;

            previewEl.innerHTML = `
                <table class="venda-massa-tabela">
                    <thead><tr><th>Tipo</th><th>Níveis</th><th>Qtd</th>${valorHeader}</tr></thead>
                    <tbody>${linhas}</tbody>
                    <tfoot><tr>
                        <td colspan="2"><strong>Total</strong></td>
                        <td class="venda-qtd"><strong>${selecao.length}</strong></td>
                        ${rodapeValor}
                    </tr></tfoot>
                </table>
                ${modo_origem === 'projetos' ? '<p class="venda-aviso-mercado">⏳ As peças serão colocadas no mercado. A cada corrida, há 60% de chance de cada peça ser comprada por uma equipe adversária.</p>' : ''}`;
            btnConfirmar.disabled = false;
        }

        function buildControlesExtras() {
            const modo = modal.querySelector('input[name="modo-venda"]:checked')?.value;
            const ctrl = modal.querySelector('#venda-controles-extras');
            if (modo === 'todas') {
                ctrl.innerHTML = '';
            } else if (modo === 'nivel_exato') {
                ctrl.innerHTML = `<div class="venda-ctrl-row"><label>Nível exato:</label>
                    <select id="venda-nivel-exato">${niveisExistentes.map(n => `<option value="${n}">Nível ${n}</option>`).join('')}</select></div>`;
            } else if (modo === 'nivel_ate') {
                ctrl.innerHTML = `<div class="venda-ctrl-row"><label>Vender até o nível:</label>
                    <select id="venda-nivel-ate">${niveisExistentes.map(n => `<option value="${n}">Nível ${n}</option>`).join('')}</select></div>`;
            }
            ctrl.querySelectorAll('select').forEach(sel => sel.addEventListener('change', renderPreview));
            renderPreview();
        }

        const tituloModal = modo_origem === 'projetos'
            ? '🏷️ Colocar Peças no Mercado'
            : '🏷️ Venda em Massa — Inventário';
        const subtitulo = modo_origem === 'projetos'
            ? 'As peças selecionadas serão <strong>colocadas à venda no mercado</strong>. A cada corrida, equipes adversárias têm chance de comprá-las. O valor será creditado quando a venda ocorrer.'
            : 'Peças equipadas nos carros <strong>não</strong> serão afetadas. O valor (70% do preço de mercado) é creditado imediatamente.';
        const textoBotao = modo_origem === 'projetos' ? '📦 Colocar no Mercado' : '✅ Confirmar Venda';

        modal = document.createElement('div');
        modal.id = 'modal-venda-massa';
        modal.className = 'modal-overlay venda-massa-overlay';
        modal.innerHTML = `
            <div class="modal-content venda-massa-modal-content">
                <button class="modal-close-btn" id="fechar-venda-massa">✕</button>
                <h2>${tituloModal}</h2>
                <p class="venda-massa-subtitulo">${subtitulo}</p>

                <div class="venda-massa-filtros">
                    <div class="venda-grupo-radio">
                        <label class="venda-radio-label"><input type="radio" name="modo-venda" value="todas"> Todas</label>
                        <label class="venda-radio-label"><input type="radio" name="modo-venda" value="nivel_ate" checked> Até o nível X</label>
                        <label class="venda-radio-label"><input type="radio" name="modo-venda" value="nivel_exato"> Nível exato</label>
                    </div>
                    <div class="venda-ctrl-row">
                        <label>Filtrar por tipo:</label>
                        <select id="venda-tipo-filtro">
                            <option value="todos">Todos os tipos</option>
                            ${tipos.map(t => `<option value="${t}">${t}</option>`).join('')}
                        </select>
                    </div>
                    <div id="venda-controles-extras"></div>
                </div>

                <div id="venda-preview" class="venda-preview-area"></div>

                <div class="venda-massa-acoes">
                    <button id="btn-confirmar-venda-massa" class="btn-confirmar-venda" disabled>${textoBotao}</button>
                    <button id="btn-cancelar-venda-massa" class="btn-cancelar-venda">Cancelar</button>
                </div>
            </div>`;

        document.body.appendChild(modal);
        buildControlesExtras();

        modal.querySelectorAll('input[name="modo-venda"]').forEach(r => r.addEventListener('change', buildControlesExtras));
        modal.querySelector('#venda-tipo-filtro').addEventListener('change', renderPreview);
        modal.querySelector('#fechar-venda-massa').addEventListener('click', () => modal.remove());
        modal.querySelector('#btn-cancelar-venda-massa').addEventListener('click', () => modal.remove());
        modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });

        modal.querySelector('#btn-confirmar-venda-massa').addEventListener('click', () => {
            const selecao = calcularSelecao();

            if (modo_origem === 'projetos') {
                // Não debita — apenas marca como 'a_venda' para o sistema de corrida processar
                const projetoIds = new Set(selecao.map(p => p._projetoId));
                gameState.projetosEmAndamento.forEach(p => {
                    if (projetoIds.has(p.id)) p.status = 'a_venda';
                });
                modal.remove();
                alert(`📦 ${selecao.length} peça(s) colocada(s) no mercado!\n\nA cada corrida, há 60% de chance de cada peça ser comprada. Você será notificado quando houver vendas.`);
            } else {
                // Inventário: débito imediato a 70%
                const totalValor = selecao.reduce((s, p) => s + Math.floor(calcularPrecoPeca(p) * 0.7), 0);
                if (!confirm(`Vender ${selecao.length} peça(s) por R$ ${totalValor.toLocaleString('pt-BR')} imediatamente?`)) return;
                const idsRemover = new Set(selecao.map(p => p.instanceId));
                gameState.todasAsPecas = gameState.todasAsPecas.filter(p => !idsRemover.has(p.instanceId));
                gameState.escuderia.dinheiro += totalValor;
                modal.remove();
                alert(`✅ ${selecao.length} peça(s) vendida(s) por R$ ${totalValor.toLocaleString('pt-BR')}!`);
            }

            updateUI();
            saveGame();
        });
    }
    // ────────────────────────────────────────────────────────────────────────

    function venderPecaInventario(instanceId) {
        const pecaIndex = gameState.todasAsPecas.findIndex(p => p.instanceId === instanceId);
        if (pecaIndex === -1) { alert("Erro: Peça não encontrada!"); return; }
        const peca = gameState.todasAsPecas[pecaIndex];
        const valorVenda = Math.floor(calcularPrecoPeca(peca) * 0.70);
        if (confirm(`Tem certeza que deseja vender "${peca.nome}" (Nvl ${peca.nivel}) por R$ ${valorVenda.toLocaleString('pt-BR')}?`)) {
            gameState.escuderia.dinheiro += valorVenda;
            gameState.todasAsPecas.splice(pecaIndex, 1);
            alert(`Peça vendida com sucesso!`);
            updateUI(); saveGame();
        }
    }

    function atualizarPatrociniosAtivos() {
        gameState.patrocinio.ativos = gameState.patrocinio.ativos.filter(p => {
            p.duracaoRestante--;
            if (p.duracaoRestante > 0) return true;
            alert(`Contrato de patrocínio com ${p.marca} finalizado!`);
            return false;
        });
    }

    function aceitarOfertaPatrocinio(ofertaId) {
        if (gameState.patrocinio.ativos.length >= 4) { alert("Você já tem o máximo de 4 patrocinadores ativos!"); return; }
        const ofertaIndex = gameState.patrocinio.ofertas.findIndex(o => o.id === ofertaId);
        if (ofertaIndex === -1) return;
        const [oferta] = gameState.patrocinio.ofertas.splice(ofertaIndex, 1);
        gameState.escuderia.dinheiro += oferta.valor;
        gameState.patrocinio.ativos.push({ ...oferta, duracaoRestante: oferta.duracao });
        alert(`Parabéns! Contrato assinado com ${oferta.marca}, você recebeu R$ ${oferta.valor.toLocaleString('pt-BR')}!`);
        updateUI(); saveGame();
    }

    function iniciarNovoProjeto(especialistaId, tipoPeca, duracao) {
        const especialista = especialistasDisponiveis.find(e => e.id === especialistaId);
        if (!especialista) { alert("Especialista não encontrado!"); return; }

        // ── Verificação do teto de produção ──────────────────────────────────
        if (!podeConstruirPeca(tipoPeca)) {
            const construidas = gameState.producaoAnual[tipoPeca] || 0;
            const cota        = (gameState.quotaAnual[tipoPeca] || 99) + (gameState.quotaBonus[tipoPeca] || 0);
            alert(`Cota de produção de ${tipoPeca} atingida!\n\nProduzidas este ano: ${construidas}/${cota}\n\nAceite uma encomenda externa para ganhar um slot extra, ou aguarde a próxima temporada.`);
            return;
        }
        let custoTotal = (especialista.nivel * duracao * CUSTO_BASE_PROJETO) * 0.45;
        const pecasAero = ["Asa Dianteira", "Asa Traseira", "Chassi"];
        if (pecasAero.includes(tipoPeca)) {
            const reducaoCusto = 1.0 - calcularDescontoTunel();
            custoTotal *= reducaoCusto;
        }
        if (tipoPeca === 'Chassi') {
            custoTotal *= (1.0 - calcularDescontoChassis());
        }
        if (tipoPeca === 'Suspensão') {
            custoTotal *= (1.0 - calcularDescontoSuspensoes());
        }
        if (duracao === 10) { custoTotal *= 0.90; }
        if (gameState.escuderia.dinheiro < custoTotal) { alert(`Dinheiro insuficiente! Custo do projeto: R$ ${custoTotal.toLocaleString('pt-BR')}`); return; }
        gameState.escuderia.dinheiro -= custoTotal;

        // Redução de tempo por instalação
        let reducaoTempo = 0;
        if (pecasAero.includes(tipoPeca)) {
            reducaoTempo = calcularReducaoTunelTempo();
        } else if (tipoPeca === 'Motor') {
            reducaoTempo = calcularReducaoMotoresTempo();
        }
        if (tipoPeca === 'Chassi') {
            reducaoTempo += calcularReducaoChassisTempo();
        }
        if (tipoPeca === 'Suspensão') {
            reducaoTempo += calcularReducaoSuspensoesTempo();
        }
        const duracaoFinal = Math.max(1, duracao - reducaoTempo);

        gameState.projetosEmAndamento.push({ id: Date.now(), tipoPeca, nomeEspecialista: especialista.nome, nivelEspecialista: especialista.nivel, duracaoOriginal: duracao, duracaoRestante: duracaoFinal, status: 'em_andamento' });

        // Incrementa o contador de produção da temporada
        if (gameState.tetoAtivo) {
            gameState.producaoAnual[tipoPeca] = (gameState.producaoAnual[tipoPeca] || 0) + 1;
        }
        const msgReducao = reducaoTempo > 0 ? `\n⚡ Redução por instalação: -${reducaoTempo} corrida(s)! (${duracaoFinal} corridas no total)` : '';
        alert(`Investimento de R$ ${custoTotal.toLocaleString('pt-BR')} realizado!\nProjeto para desenvolver "${tipoPeca}" iniciado com ${especialista.nome}.${msgReducao}`);
        updateUI(); saveGame();
    }

    function processarProjetosConcluidos() {
        let projetoProprioConcluidoNestaCorrida = false;
        gameState.projetosEmAndamento.forEach(projeto => {
            if (projeto.status === 'em_andamento' && --projeto.duracaoRestante <= 0) {
                projeto.status = 'concluido';
                projeto.pecaConcluida = criarPecaDeProjeto(projeto);

                // Se for encomenda externa, entrega para a IA e paga o jogador
                if (projeto.encomendaExterna) {
                    concluirEncomendaExterna(projeto);
                } else {
                    projetoProprioConcluidoNestaCorrida = true;
                }
            }
        });
        if (projetoProprioConcluidoNestaCorrida) {
            setTimeout(() => alert("Um ou mais projetos de pesquisa foram concluídos! Verifique a aba Escuderia para decidir o que fazer com as peças."), 500);
        }
    }

    function processarVendasDeMercado() {
        let totalVendido = 0;
        gameState.projetosEmAndamento = gameState.projetosEmAndamento.filter(projeto => {
            if (projeto.status === 'a_venda') {
                if (Math.random() < 0.6) {
                    const pecaVirtual = criarPecaDeProjeto(projeto);
                    if(pecaVirtual) totalVendido += calcularPrecoPeca(pecaVirtual);
                    return false;
                }
                return true;
            }
            return true;
        });
        if (totalVendido > 0) {
            gameState.escuderia.dinheiro += totalVendido;
            setTimeout(() => alert(`Boas notícias! Peças desenvolvidas foram vendidas, gerando um lucro de R$ ${totalVendido.toLocaleString('pt-BR')}!`), 1000);
        }
    }

    function criarPecaDeProjeto(projeto) {
        // ── Tabela de probabilidades por duração ─────────────────────────────
        // Duração 1–2 corridas: peças nível 1–7 (aprendizado básico)
        // Duração 3   corridas:  2% nível 10 |  8% nível 9 | 20% nível 8 | 45% nível 7 | 15% nível 6 | 10% nível 5
        // Duração 5–6 corridas:  8% nível 10 | 20% nível 9 | 32% nível 8 | 40% nível 7
        // Duração 10  corridas: 40% nível 10 | 33% nível 9 | 17% nível 8 | 10% nível 7
        let nivelSorteado;
        const chance = Math.random();

        if (projeto.duracaoOriginal <= 2) {
            // 1–2 corridas: peças de baixo nível, úteis para aprendizado e venda
            nivelSorteado = chance < 0.35 ? Math.floor(Math.random() * 3) + 1  // 35% → níveis 1–3
                          : chance < 0.75 ? Math.floor(Math.random() * 2) + 4  // 40% → níveis 4–5
                          :                 Math.floor(Math.random() * 2) + 6; // 25% → níveis 6–7

        } else if (projeto.duracaoOriginal === 3) {
            // 3 corridas: 2% nível 10 | 8% nível 9 | 20% nível 8 | 45% nível 7 | 15% nível 6 | 10% nível 5
            nivelSorteado = chance < 0.02 ? 10
                          : chance < 0.10 ? 9
                          : chance < 0.30 ? 8
                          : chance < 0.75 ? 7
                          : chance < 0.90 ? 6
                          :                 5;

        } else if (projeto.duracaoOriginal <= 6) {
            // 5–6 corridas: 8% nível 10 | 20% nível 9 | 32% nível 8 | 40% nível 7
            nivelSorteado = chance < 0.08 ? 10
                          : chance < 0.28 ? 9
                          : chance < 0.60 ? 8
                          :                 7;

        } else {
            // 10 corridas: 40% nível 10 | 33% nível 9 | 17% nível 8 | 10% nível 7
            nivelSorteado = chance < 0.40 ? 10
                          : chance < 0.73 ? 9
                          : chance < 0.90 ? 8
                          :                 7;
        }

        const pecasCompativeis = Object.values(catalogoDePecas).filter(p => p.tipo === projeto.tipoPeca && p.nivel === nivelSorteado);
        let pecaTemplate;
        if (pecasCompativeis.length > 0) {
            pecaTemplate = pecasCompativeis[Math.floor(Math.random() * pecasCompativeis.length)];
        } else {
            let pecasDoTipo = Object.values(catalogoDePecas).filter(p => p.tipo === projeto.tipoPeca);
            if (pecasDoTipo.length === 0) return null;
            pecasDoTipo.sort((a, b) => Math.abs(a.nivel - nivelSorteado) - Math.abs(b.nivel - nivelSorteado));
            pecaTemplate = pecasDoTipo[0];
        }
        if (!pecaTemplate) return null;
        const novaPeca = JSON.parse(JSON.stringify(pecaTemplate));
        novaPeca.nome = `${pecaTemplate.nome} (Projeto ${projeto.nomeEspecialista.split(' ')[0]})`;
        novaPeca.instanceId = projeto.id;
        for (const attr in novaPeca.atributos) {
            const multiplicadorBase = 1 + (projeto.nivelEspecialista * 0.02) + (novaPeca.nivel * 0.006);
            const bonusChassis = projeto.tipoPeca === 'Chassi' ? calcularBonusAtributosChassis() : 0;
            const fatorAleatorio = 1 + (Math.random() * 0.2 - 0.1);
            const novoValor = Math.round(novaPeca.atributos[attr] * multiplicadorBase * (1 + bonusChassis) * fatorAleatorio);
            const capFactor = novaPeca.nivel === 10 ? 1.063 : 1.1;
            const maxAtributo = novaPeca.nivel === 10 ? 99 : 100;
            novaPeca.atributos[attr] = Math.min(maxAtributo, Math.min(novoValor, Math.round(pecaTemplate.atributos[attr] * capFactor)));
        }
        novaPeca.corridasUsadas = 0;
        novaPeca.atributosOriginais = JSON.parse(JSON.stringify(novaPeca.atributos));
        return novaPeca;
    }

    // Retorna um array de strings descrevendo todos os erros da estratégia.
    // Array vazio = estratégia válida. Usado tanto pela UI quanto pelo botão de iniciar.
    /**
     * Valida a estratégia e retorna lista de erros.
     * @param {object} estrategia
     * @param {object|null} contextoSC - quando não-nulo, estamos no modal do Safety Car.
     *   { voltaAtual: number }
     *   No contexto SC, as regras 1 (pit obrigatório) e 3 (2 compostos) são isentas:
     *   o pit do próprio SC já cumpre ambas as obrigações do regulamento.
     *   Apenas a Regra 2 (coerência das voltas futuras) é aplicada.
     */
    function getErrosEstrategia(estrategia, contextoSC = null) {
        const erros = [];
        if (!estrategia || !estrategia.pneuInicial) {
            erros.push('Estratégia incompleta: selecione o pneu inicial.');
            return erros;
        }

        const pista = calendarioCorridas[gameState.campeonato.corridaAtualIndex];
        const totalVoltas = pista ? pista.voltas : 58;

        // ── Contexto SAFETY CAR ──────────────────────────────────────
        // O pit durante o SC já conta como o pit stop obrigatório e garante
        // o uso de um segundo composto. Não forçamos paradas adicionais.
        if (contextoSC) {
            // Sem paradas futuras: totalmente válido no SC.
            if (estrategia.paradas.length === 0) return erros;

            // Com paradas futuras: só valida coerência das voltas.
            const voltaAtual = contextoSC.voltaAtual;
            for (let i = 0; i < estrategia.paradas.length; i++) {
                const volta = estrategia.paradas[i].pararNaVolta;
                const voltaMinima = i === 0 ? voltaAtual : estrategia.paradas[i - 1].pararNaVolta;

                if (volta < voltaAtual) {
                    erros.push(`Parada ${i + 1}: volta ${volta} já passou (corrida na volta ${voltaAtual}).`);
                } else if (i > 0 && volta <= voltaMinima) {
                    erros.push(`Parada ${i + 1}: deve ser depois da parada ${i} (volta ${voltaMinima}).`);
                } else if (volta >= totalVoltas) {
                    erros.push(`Parada ${i + 1}: use no máximo a volta ${totalVoltas - 1}.`);
                }
            }
            return erros;
        }

        // ── Corrida normal ───────────────────────────────────────────

        // REGRA 1: ao menos 1 pit stop obrigatório (regulamento F1).
        if (estrategia.paradas.length === 0) {
            erros.push('Obrigatório fazer ao menos 1 pit stop durante a corrida.');
            return erros;
        }

        // REGRA 2: cada parada deve ter uma volta estritamente maior que a anterior
        // e estritamente menor que o total de voltas da corrida.
        for (let i = 0; i < estrategia.paradas.length; i++) {
            const volta = estrategia.paradas[i].pararNaVolta;
            const voltaMinima = i === 0 ? 1 : estrategia.paradas[i - 1].pararNaVolta;

            if (volta <= 0) {
                erros.push(`Parada ${i + 1}: a volta não pode ser 0 ou negativa.`);
            } else if (i > 0 && volta <= voltaMinima) {
                erros.push(
                    `Parada ${i + 1}: deve ser depois da parada ${i} ` +
                    `(volta ${voltaMinima}). Corrija para pelo menos volta ${voltaMinima + 1}.`
                );
            } else if (volta >= totalVoltas) {
                erros.push(
                    `Parada ${i + 1}: volta ${volta} é igual ou posterior à última volta (${totalVoltas}). ` +
                    `Use no máximo a volta ${totalVoltas - 1}.`
                );
            }
        }

        // REGRA 3: ao menos 2 compostos diferentes (regulamento F1).
        const pneusUsados = new Set(estrategia.paradas.map(p => p.colocarPneu));
        pneusUsados.add(estrategia.pneuInicial);
        if (pneusUsados.size < 2) {
            erros.push('É obrigatório usar ao menos 2 compostos de pneu diferentes.');
        }

        return erros;
    }

    function isEstrategiaValida(estrategia) {
        return getErrosEstrategia(estrategia).length === 0;
    }

    function calcularPrecoPeca(peca) {
        let precoBase = peca.nivel * 99000;
        let multiplicadorAtributos = Object.values(peca.atributos).reduce((soma, valor) => soma + valor, 0);
        return Math.floor(precoBase + (multiplicadorAtributos * 100));
    }

    function gerarMercado(fatorDeQualidade = 0) {
        gameState.mercadoDePecas = [];
        const olheiroContratado = gameState.escuderia.especialistas.find(e => e.tipo === 'Olheiro');
        let numPecas = olheiroContratado ? 12 + Math.floor(Math.random() * 9) : 5;
        for (let i = 0; i < numPecas; i++) {
            const sorteioAjustado = (Math.random() * 100) + (fatorDeQualidade * 5);
            let nivelSorteado;
            if (sorteioAjustado < 55) nivelSorteado = Math.random() < 0.7 ? 1 : 2;
            else if (sorteioAjustado < 80) nivelSorteado = Math.random() < 0.7 ? 3 : 4;
            else if (sorteioAjustado < 95) nivelSorteado = Math.random() < 0.6 ? 5 : 6;
            else nivelSorteado = Math.floor(Math.random() * 4) + 7;
            const pecasDoNivel = Object.values(catalogoDePecas).filter(p => p.nivel === nivelSorteado);
            if (pecasDoNivel.length === 0) continue;
            const pecaTemplate = JSON.parse(JSON.stringify(pecasDoNivel[Math.floor(Math.random() * pecasDoNivel.length)]));
            for (const attr in pecaTemplate.atributos) {
                pecaTemplate.atributos[attr] = Math.min(100, Math.round(pecaTemplate.atributos[attr] * (1 + (Math.random() * 0.1 - 0.05))));
            }
            const vendedor = equipesIA[Math.floor(Math.random() * equipesIA.length)].nome;
            gameState.mercadoDePecas.push({ ...pecaTemplate, instanceId: Date.now() + i, vendedor, preco: calcularPrecoPeca(pecaTemplate) });
        }
    }

    function comprarPeca(instanceId) {
        const pecaIndex = gameState.mercadoDePecas.findIndex(p => p.instanceId === instanceId);
        if (pecaIndex === -1) { alert("Esta peça não está mais disponível!"); return; }
        const peca = gameState.mercadoDePecas[pecaIndex];

        // ── Verificação do teto de produção ──────────────────────────────────
        if (!podeConstruirPeca(peca.tipo)) {
            const construidas = gameState.producaoAnual[peca.tipo] || 0;
            const cota        = (gameState.quotaAnual[peca.tipo] || 99) + (gameState.quotaBonus[peca.tipo] || 0);
            alert(`Cota de ${peca.tipo} atingida! (${construidas}/${cota})\n\nAceite encomendas externas para ganhar um slot extra, ou aguarde a próxima temporada.`);
            return;
        }

        if (gameState.escuderia.dinheiro >= peca.preco) {
            gameState.escuderia.dinheiro -= peca.preco;
            const pecaComprada = {
                ...peca,
                corridasUsadas: 0,
                atributosOriginais: JSON.parse(JSON.stringify(peca.atributos))
            };
            gameState.todasAsPecas.push(pecaComprada);
            gameState.mercadoDePecas.splice(pecaIndex, 1);

            // Consome o slot — compra equivale a construção para efeito do regulamento
            if (gameState.tetoAtivo) {
                gameState.producaoAnual[peca.tipo] = (gameState.producaoAnual[peca.tipo] || 0) + 1;
            }

            alert(`Peça "${peca.nome}" comprada com sucesso!`);
            updateUI();
            saveGame();
        } else {
            alert("Dinheiro insuficiente!");
        }
    }

    function openPartSelectorModal(slotKey) {
        const slotTypeDisplay = document.querySelector(`.btn-trocar-peca[data-slot-key="${slotKey}"]`).parentElement.querySelector('h4').textContent;
        document.getElementById('modal-title').textContent = `Selecionar: ${slotTypeDisplay}`;
        const modalList = document.getElementById('modal-parts-list');
        const pecasEquipadasIds = new Set(gameState.carros.flatMap(c => Object.values(c.pecas)));
        const normalize = (str) => str.toLowerCase().replace(/\s/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // Get currently equipped piece for this slot on the selected car
        const carroAtual = gameState.carros[garagemState.carroSelecionadoIndex];
        const instanceIdEquipado = carroAtual.pecas[slotKey];
        const pecaEquipada = instanceIdEquipado ? gameState.todasAsPecas.find(p => p.instanceId === instanceIdEquipado) : null;

        // Determine main attribute by slot type
        const atributoOrdemModal = {
            'motor': 'potencia',
            'chassi': 'aerodinamica',
            'asaDianteira': 'aerodinamica',
            'asaTraseira': 'aerodinamica',
            'suspensao': 'aderencia'
        };
        const mainAttr = atributoOrdemModal[slotKey];
        const valorAtualEquipado = pecaEquipada && mainAttr ? (pecaEquipada.atributos[mainAttr] || 0) : null;

        // Sort compatible parts
        const pecasCompatibleRaw = gameState.todasAsPecas.filter(p => !pecasEquipadasIds.has(p.instanceId) && normalize(p.tipo) === normalize(slotKey));
        const pecasCompativeis = [...pecasCompatibleRaw].sort((a, b) => {
            const valA = mainAttr ? (a.atributos[mainAttr] || 0) : 0;
            const valB = mainAttr ? (b.atributos[mainAttr] || 0) : 0;
            if (valB !== valA) return valB - valA;
            return b.nivel - a.nivel;
        });

        modalList.innerHTML = pecasCompativeis.length > 0
            ? pecasCompativeis.map(peca => {
                let indicadorHtml = '';
                if (mainAttr !== undefined && valorAtualEquipado !== null) {
                    const valorNova = peca.atributos[mainAttr] || 0;
                    const diff = valorNova - valorAtualEquipado;
                    if (diff > 0) {
                        indicadorHtml = `<div class="perf-indicator perf-up">▲ +${diff} ${mainAttr.charAt(0).toUpperCase() + mainAttr.slice(1)}</div>`;
                    } else if (diff < 0) {
                        indicadorHtml = `<div class="perf-indicator perf-down">▼ ${diff} ${mainAttr.charAt(0).toUpperCase() + mainAttr.slice(1)}</div>`;
                    } else {
                        indicadorHtml = `<div class="perf-indicator perf-neutral">● Igual ${mainAttr.charAt(0).toUpperCase() + mainAttr.slice(1)}</div>`;
                    }
                } else if (mainAttr !== undefined && valorAtualEquipado === null) {
                    const valorNova = peca.atributos[mainAttr] || 0;
                    indicadorHtml = `<div class="perf-indicator perf-up">▲ +${valorNova} ${mainAttr.charAt(0).toUpperCase() + mainAttr.slice(1)} (slot vazio)</div>`;
                }
                return `<div class="peca-card" data-instance-id="${peca.instanceId}" data-slot-key="${slotKey}">${indicadorHtml}<h5>${peca.nome} (Nvl ${peca.nivel})</h5>${gerarHtmlAtributosPeca(peca)}</div>`;
            }).join('')
            : '<p>Nenhuma peça compatível no inventário.</p>';
        document.getElementById('part-selector-modal').classList.remove('hidden');
    }

    const closePartSelectorModal = () => document.getElementById('part-selector-modal').classList.add('hidden');

    function equiparPeca(instanceId, slotKey) {
        gameState.carros[garagemState.carroSelecionadoIndex].pecas[slotKey] = instanceId;
        closePartSelectorModal();
        updateUI();
        saveGame();
    }
    function autoEquiparMelhoresPecas() {
        const slotTypes = { motor: 'Motor', chassi: 'Chassi', asaDianteira: 'Asa Dianteira', asaTraseira: 'Asa Traseira', suspensao: 'Suspensão' };

        // Atributo principal de cada slot — mesma lógica do modal de seleção manual
        const atributoPrincipal = {
            motor:        'potencia',
            chassi:       'aerodinamica',
            asaDianteira: 'aerodinamica',
            asaTraseira:  'aerodinamica',
            suspensao:    'aderencia'
        };

        // Função de pontuação: atributo principal como critério principal,
        // confiabilidade apenas como desempate
        const pontuarPeca = (peca, slotKey) => {
            const attr = atributoPrincipal[slotKey];
            const principal    = peca.atributos[attr]           || 0;
            const confianca    = peca.atributos.confiabilidade  || 0;
            // Para chassi, aerodinamica + aderencia ambos importam —
            // usa aerodinamica como principal e aderencia como segundo critério
            const secundario   = slotKey === 'chassi' ? (peca.atributos.aderencia || 0) : 0;
            return { principal, secundario, confianca };
        };

        const compararPecas = (a, b, slotKey) => {
            const pa = pontuarPeca(a, slotKey);
            const pb = pontuarPeca(b, slotKey);
            if (pb.principal  !== pa.principal)  return pb.principal  - pa.principal;
            if (pb.secundario !== pa.secundario) return pb.secundario - pa.secundario;
            return pb.confianca - pa.confianca; // desempate
        };

        let pecasDisponiveis = [...gameState.todasAsPecas];

        // Limpa todos os slots antes de reatribuir
        gameState.carros.forEach(carro => {
            for (const slotKey in carro.pecas) {
                carro.pecas[slotKey] = null;
            }
        });

        // Para cada carro, equipa o melhor disponível por slot
        gameState.carros.forEach(carro => {
            for (const slotKey in slotTypes) {
                const tipoPeca = slotTypes[slotKey];
                const compativeis = pecasDisponiveis.filter(p => p.tipo === tipoPeca);
                if (compativeis.length === 0) continue;

                compativeis.sort((a, b) => compararPecas(a, b, slotKey));
                const melhor = compativeis[0];
                carro.pecas[slotKey] = melhor.instanceId;
                pecasDisponiveis = pecasDisponiveis.filter(p => p.instanceId !== melhor.instanceId);
            }
        });

        alert("Carros 1 e 2 foram equipados com as melhores peças disponíveis no inventário!");
        renderGaragem();
        saveGame();
    }

    function calcularAtributosCarro(carro) {
        const atributosFinais = { potencia: 0, aerodinamica: 0, aderencia: 0, confiabilidade: 100 };
        if (!carro || !carro.pecas) return atributosFinais;

        for (const slot in carro.pecas) {
            const instanceId = carro.pecas[slot];
            if (instanceId) {
                const peca = gameState.todasAsPecas.find(p => p.instanceId === instanceId);
                if (peca && peca.atributos) {
                    for (const attr in peca.atributos) {
                        if (attr !== 'confiabilidade') {
                            atributosFinais[attr] += peca.atributos[attr];
                        } else {
                            atributosFinais.confiabilidade = Math.min(atributosFinais.confiabilidade, peca.atributos.confiabilidade);
                        }
                    }
                }
            }
        }
        return atributosFinais;
    }



    const CENTRO_PD_UNLOCK_COST = 5000000;
    const CENTRO_PD_COST_MULTIPLIER = 1.5;

    function calcularCustoProjetoCompleto(duracao) {
        let custoTotalBruto = 0;
        const especialistas = {
            "Engenheiro de Motor": gameState.escuderia.especialistas.find(e => e.tipo === "Engenheiro de Motor"),
            "Aerodinamicista": gameState.escuderia.especialistas.find(e => e.tipo === "Aerodinamicista"),
            "Projetista": gameState.escuderia.especialistas.find(e => e.tipo === "Projetista")
        };

        if (!especialistas["Engenheiro de Motor"] || !especialistas["Aerodinamicista"] || !especialistas["Projetista"]) {
            return -1; // Retorna -1 para indicar que faltam especialistas
        }

        const pecasPorEspecialista = {
            "Engenheiro de Motor": ["Motor"],
            "Aerodinamicista": ["Asa Dianteira", "Asa Traseira"],
            "Projetista": ["Chassi", "Suspensão"]
        };

        for (const tipoEspecialista in pecasPorEspecialista) {
            const especialista = especialistas[tipoEspecialista];
            const pecas = pecasPorEspecialista[tipoEspecialista];

            pecas.forEach(tipoPeca => {
                let custoPeca = (especialista.nivel * duracao * CUSTO_BASE_PROJETO) * 0.45;

                // Aplica desconto do túnel de vento
                const pecasAero = ["Asa Dianteira", "Asa Traseira", "Chassi"];
                if (pecasAero.includes(tipoPeca)) {
                    const reducaoCusto = 1.0 - calcularDescontoTunel();
                    custoPeca *= reducaoCusto;
                }
                // Aplica desconto adicional do Centro de Chassi
                if (tipoPeca === 'Chassi') {
                    custoPeca *= (1.0 - calcularDescontoChassis());
                }
                // Aplica desconto do Centro de Suspensões
                if (tipoPeca === 'Suspensão') {
                    custoPeca *= (1.0 - calcularDescontoSuspensoes());
                }
                if (duracao === 10) {
                     custoPeca *= 0.90;
                }
                custoTotalBruto += custoPeca;
            });
        }

        return Math.floor(custoTotalBruto * CENTRO_PD_COST_MULTIPLIER);
    }

    function desbloquearCentroPD() {
        if (gameState.escuderia.dinheiro >= CENTRO_PD_UNLOCK_COST) {
            if (confirm(`Deseja desbloquear o Centro de P&D por R$ ${CENTRO_PD_UNLOCK_COST.toLocaleString('pt-BR')}?`)) {
                gameState.escuderia.dinheiro -= CENTRO_PD_UNLOCK_COST;
                gameState.escuderia.centroPDDesbloqueado = true;
                alert("Centro de P&D desbloqueado! Agora você pode iniciar projetos de peças em massa.");
                updateUI();
                saveGame();
            }
        } else {
            alert("Dinheiro insuficiente para desbloquear o Centro de P&D.");
        }
    }

    function iniciarProjetoCompleto() {
        const duracao = parseInt(document.getElementById('pd-project-duration').value);
        const custoFinal = calcularCustoProjetoCompleto(duracao);

        if (custoFinal < 0) {
            alert("Você precisa ter um Engenheiro de Motor, um Aerodinamicista e um Projetista contratados para usar esta função.");
            return;
        }

        // ── Monta o mapa de especialistas (declarado antes de qualquer uso) ──
        const especialistas = {
            "Motor":        gameState.escuderia.especialistas.find(e => e.tipo === "Engenheiro de Motor"),
            "Asa Dianteira": gameState.escuderia.especialistas.find(e => e.tipo === "Aerodinamicista"),
            "Asa Traseira":  gameState.escuderia.especialistas.find(e => e.tipo === "Aerodinamicista"),
            "Chassi":        gameState.escuderia.especialistas.find(e => e.tipo === "Projetista"),
            "Suspensão":     gameState.escuderia.especialistas.find(e => e.tipo === "Projetista")
        };

        // ── Filtra apenas os tipos com slot disponível ────────────────────────
        const tiposDisponiveis = Object.keys(especialistas).filter(tipo =>
            !gameState.tetoAtivo || podeConstruirPeca(tipo)
        );
        const tiposBloqueados = Object.keys(especialistas).filter(tipo =>
            gameState.tetoAtivo && !podeConstruirPeca(tipo)
        );

        if (tiposDisponiveis.length === 0) {
            alert("Cotas de produção esgotadas para todos os tipos de peça.\n\nAceite encomendas externas para ganhar slots extras ou aguarde a próxima temporada.");
            return;
        }

        // ── Calcula custo proporcional (só pelos tipos disponíveis) ──────────
        const todosTipos = Object.keys(especialistas);
        const custoProportional = tiposDisponiveis.length < todosTipos.length
            ? Math.round(custoFinal * tiposDisponiveis.length / todosTipos.length)
            : custoFinal;

        if (gameState.escuderia.dinheiro < custoProportional) {
            alert(`Dinheiro insuficiente! Custo do projeto: R$ ${custoProportional.toLocaleString('pt-BR')}`);
            return;
        }

        // ── Mensagem de confirmação informando o que será criado ──────────────
        let msgConfirm = `Iniciar projeto de ${duracao} corrida(s) por R$ ${custoProportional.toLocaleString('pt-BR')}?\n\n`;
        msgConfirm += `✅ Será criado: ${tiposDisponiveis.join(', ')}`;
        if (tiposBloqueados.length > 0) {
            msgConfirm += `\n⛔ Cota esgotada (não será criado): ${tiposBloqueados.join(', ')}`;
        }

        if (confirm(msgConfirm)) {
            gameState.escuderia.dinheiro -= custoProportional;

            // 🎲 Bônus de dado
            const dadoRolado = Math.floor(Math.random() * 6) + 1;
            const reducaoDado = dadoRolado >= 5 ? 3 : dadoRolado >= 3 ? 2 : dadoRolado >= 2 ? 1 : 0;

            const pecasAero = ["Asa Dianteira", "Asa Traseira", "Chassi"];

            for (const tipoPeca of tiposDisponiveis) {
                const especialista = especialistas[tipoPeca];
                let reducaoInstalacao = 0;
                if (pecasAero.includes(tipoPeca)) reducaoInstalacao = calcularReducaoTunelTempo();
                else if (tipoPeca === 'Motor')     reducaoInstalacao = calcularReducaoMotoresTempo();
                if (tipoPeca === 'Chassi')         reducaoInstalacao += calcularReducaoChassisTempo();
                if (tipoPeca === 'Suspensão')      reducaoInstalacao += calcularReducaoSuspensoesTempo();

                const duracaoFinal = Math.max(1, duracao - reducaoDado - reducaoInstalacao);
                gameState.projetosEmAndamento.push({
                    id: Date.now() + Math.random(),
                    tipoPeca,
                    nomeEspecialista: especialista.nome,
                    nivelEspecialista: especialista.nivel,
                    duracaoOriginal: duracao,
                    duracaoRestante: duracaoFinal,
                    status: 'em_andamento'
                });

                // Consome o slot ao iniciar a construção
                if (gameState.tetoAtivo) {
                    gameState.producaoAnual[tipoPeca] = (gameState.producaoAnual[tipoPeca] || 0) + 1;
                }
            }

            const msgDado = reducaoDado > 0
                ? `\n🎲 Dado bônus: ${dadoRolado} — redução de ${reducaoDado} corrida(s)!`
                : `\n🎲 Dado bônus: ${dadoRolado} — sem redução desta vez.`;
            const resumo = tiposDisponiveis.length < todosTipos.length
                ? `\n\n(${tiposBloqueados.join(', ')} não iniciado — cota esgotada)`
                : '';
            alert(`Projetos iniciados!${msgDado}${resumo}`);
            updateUI();
            saveGame();
        }
    }


    function gerarEstrategiaIA(totalVoltas) {
        const todosOsPneus = ['macio', 'medio', 'duro'];
        let numParadas;
        let perfilCorrida;

        // Define o perfil da corrida baseado no número de voltas
        if (totalVoltas <= 50) {
            perfilCorrida = { umaParada: 0.50, duasParadas: 0.40, tresParadas: 0.10 };
        } else if (totalVoltas > 50 && totalVoltas <= 63) {
            perfilCorrida = { umaParada: 0.05, duasParadas: 0.70, tresParadas: 0.25 };
        } else {
            perfilCorrida = { umaParada: 0.05, duasParadas: 0.60, tresParadas: 0.35 };
        }

        // Decide o número de paradas
        const chance = Math.random();
        if (chance < perfilCorrida.duasParadas) {
            numParadas = 2;
        } else if (chance < perfilCorrida.duasParadas + perfilCorrida.umaParada) {
            numParadas = 1;
        } else {
            numParadas = 3;
        }

        const numStints = numParadas + 1;
        const pneusDaEstrategia = [];

        // --- LÓGICA DE ESTRATÉGIA ATUALIZADA ---
        if (numParadas === 3) {
            // REGRA PARA 3 PARADAS (4 STINTS): Estratégia super agressiva sem pneus duros.
            // Opções: 3 macios/1 médio ou 2 macios/2 médios.
            if (Math.random() < 0.5) {
                pneusDaEstrategia.push('macio', 'macio', 'macio', 'medio');
            } else {
                pneusDaEstrategia.push('macio', 'macio', 'medio', 'medio');
            }
            pneusDaEstrategia.sort(() => 0.5 - Math.random());

        } else if (numParadas === 2) {
            // REGRA PARA 2 PARADAS (3 STINTS): Estratégia agressiva sem pneus duros.
            // Opções: 2 macios/1 médio ou 1 macio/2 médios.
            if (Math.random() < 0.5) {
                pneusDaEstrategia.push('macio', 'macio', 'medio');
            } else {
                pneusDaEstrategia.push('macio', 'medio', 'medio');
            }
            pneusDaEstrategia.sort(() => 0.5 - Math.random());

        } else if (numParadas === 1) {
            // REGRA PARA 1 PARADA (2 STINTS): ÚNICO CASO ONDE PNEU DURO É USADO.
            // Opções: Macio/Duro ou Médio/Duro.
            if (Math.random() < 0.5) {
                pneusDaEstrategia.push('macio', 'duro');
            } else {
                pneusDaEstrategia.push('medio', 'duro');
            }
            pneusDaEstrategia.sort(() => 0.5 - Math.random());

        } else { // numParadas === 0
            // Corrida inteira com o mesmo pneu, obrigatoriamente duro.
            pneusDaEstrategia.push('duro');
        }
        // --- FIM DA LÓGICA ATUALIZADA ---

        const estrategiaFinal = { pneuInicial: pneusDaEstrategia[0], paradas: [] };
        const duracaoTotalIdeal = pneusDaEstrategia.reduce((soma, pneu) => soma + pneus[pneu].duracaoIdeal, 0);
        let voltasAcumuladas = 0;

        for (let i = 0; i < numParadas; i++) {
            const pneuDoStint = pneusDaEstrategia[i];
            const proporcaoDoStint = pneus[pneuDoStint].duracaoIdeal / duracaoTotalIdeal;
            const voltasNoStint = Math.floor(totalVoltas * proporcaoDoStint);
            voltasAcumuladas += voltasNoStint;
            const variacao = Math.floor(Math.random() * 3 - 1);
            const pneuParaColocar = pneusDaEstrategia[i + 1];
            estrategiaFinal.paradas.push({ pararNaVolta: Math.max(1, voltasAcumuladas + variacao), colocarPneu: pneuParaColocar });
        }

        return estrategiaFinal;
    }




    async function iniciarSequenciaDeLargada(velocidade) {
        // 1. Desabilita os controles
        document.querySelectorAll('.strategy-control').forEach(el => { el.disabled = true; });

        const pista = calendarioCorridas[gameState.campeonato.corridaAtualIndex];
        let participantesIniciais = [];

        // --- INÍCIO DA LÓGICA À PROVA DE FALHAS ---
        gameState.carros.forEach(carro => {
            // Pula iterações de carros que possam ser inválidos ou sem piloto
            if (!carro || !carro.pilotoId) return;

            const piloto = gameState.pilotos.find(p => p.id === carro.pilotoId);
            if (piloto) {
                // Verificação de segurança: Se estrategia ou ers não existirem, usa um padrão.
                // Isso impede o erro "JSON.parse('undefined')" de forma definitiva.
                const estrategiaDoCarro = carro.estrategia || { pneuInicial: 'macio', paradas: [{ pararNaVolta: 22, colocarPneu: 'duro' }] };
                const ersDoCarro = carro.ers || { bateria: 0, voltasParaCarregar: 4, cicloDeCarregamento: 0, ativo: false };

                participantesIniciais.push({
                    piloto,
                    equipe: gameState.escuderia.nome,
                    isPlayer: true,
                    atributos: calcularAtributosCarro(carro),
                    estrategia: JSON.parse(JSON.stringify(estrategiaDoCarro)),
                    pneuAtual: estrategiaDoCarro.pneuInicial,
                    ers: JSON.parse(JSON.stringify(ersDoCarro))
                });
            }
        });
        // --- FIM DA LÓGICA À PROVA DE FALHAS ---

        equipesIA.forEach(equipe => {
            const piloto1 = gameState.pilotos.find(p => p.id === equipe.piloto1Id);
            const piloto2 = gameState.pilotos.find(p => p.id === equipe.piloto2Id);

            if (piloto1) {
                const estrategiaPiloto1 = gerarEstrategiaIA(pista.voltas);
                participantesIniciais.push({
                    piloto: piloto1,
                    equipe: equipe.nome,
                    isPlayer: false,
                    atributos: equipe.carro,
                    estrategia: estrategiaPiloto1,
                    pneuAtual: estrategiaPiloto1.pneuInicial
                });
            }
            if (piloto2) {
                const estrategiaPiloto2 = gerarEstrategiaIA(pista.voltas);
                participantesIniciais.push({
                    piloto: piloto2,
                    equipe: equipe.nome,
                    isPlayer: false,
                    atributos: equipe.carro,
                    estrategia: estrategiaPiloto2,
                    pneuAtual: estrategiaPiloto2.pneuInicial
                });
            }
        });
        const gridDeLargada = participantesIniciais
            .map(p => ({
                ...p,
                // Simula 3 tentativas de quali e registra a melhor volta,
                // evitando que uma rolagem ruim de fatorSorte jogue o jogador
                // (ou qualquer piloto rápido) para o fundo do grid injustamente.
                tempoQualy: Math.min(
                    calcularTempoVolta(p, pista, pneus.macio.multiplicadorPerformance, 0, 0, 0),
                    calcularTempoVolta(p, pista, pneus.macio.multiplicadorPerformance, 0, 0, 0),
                    calcularTempoVolta(p, pista, pneus.macio.multiplicadorPerformance, 0, 0, 0)
                )
            }))
            .sort((a, b) => a.tempoQualy - b.tempoQualy);
        const dadosDaPole = { piloto: gridDeLargada[0].piloto.nome, tempo: gridDeLargada[0].tempoQualy };

        // 3. Inicia a sequência de animações
        const tituloEl = document.getElementById('corrida-titulo-pre-race');
        const gridContainer = document.getElementById('grid-formation-container');
        document.getElementById('race-options-container').classList.add('hidden');

        if (tituloEl) tituloEl.textContent = 'Formação de Grid (Qualify)';
        if (gridContainer) gridContainer.classList.remove('hidden');

        await animarGridDeLargada(gridDeLargada, gridContainer);
        await new Promise(resolve => setTimeout(resolve, 1000));
        await animarLuzesDeLargada();

        // 4. Transição da UI
        document.getElementById('info-pre-corrida-esquerda').classList.add('hidden');
        document.getElementById('info-pre-corrida-direita').classList.add('hidden');
        document.getElementById('pre-race-view').classList.add('hidden');
        document.getElementById('player-car-1-status').classList.remove('hidden');
        document.getElementById('player-car-2-status').classList.remove('hidden');
        document.getElementById('live-race-view').classList.remove('hidden');
        document.getElementById('info-pre-corrida-esquerda').classList.remove('hidden');
        document.getElementById('info-pre-corrida-direita').classList.remove('hidden');

        // Zera o piloto IA monitorado ao iniciar nova corrida
        pilotosMonitorados = [];
        watchlistRefPiloto = 1;

        // 5. Prepara os dados e inicia os loops da corrida
        const finalParticipants = gridDeLargada.map((p, index) => {
            const gridPenalty = index * 0.200;

            if (p.isPlayer) {
                p.ers.bateria = 0;
                p.ers.voltasParaCarregar = Math.floor(Math.random() * 3) + 6;
                p.ers.totalVoltasParaCarregar = p.ers.voltasParaCarregar;
                p.ers.cicloDeCarregamento = 0;
                p.ers.ativo = false;
            }

            return { ...p, tempoTotal: gridPenalty, tempoInicioVolta: gridPenalty, ultimaVolta: null, stintAtual: 0, durabilidadePneu: 100, penalidadeCombustivel: 2.8, paradas: 0, melhorVoltaPessoal: Infinity, voltasNoPneuAtual: 0, voltasPneuDestruido: 0, timestampInicioVolta: 0, duracaoVoltaEstimada: pista.tempoBaseVolta, modoAgressividade: 'padrão', gridPosition: index + 1 };
        });
        // Inicializa o card de monitor com os dados da corrida atual
        const watchlistCard = document.getElementById('watchlist-card');
        if (watchlistCard) {
            watchlistCard.classList.remove('hidden');
        }
        raceData = { participantes: finalParticipants, pista, voltaAtual: 1, totalVoltas: pista.voltas, intervalo: velocidade === 'real' ? 10000 : 2000, melhorVolta: Infinity, pilotoMelhorVolta: null, polePosition: dadosDaPole, safetyCarAtivo: false, pendingSafetyCar: false, safetyCarMotivo: '', historicoSC: [] };
        redimensionarCanvas();
        renderTabelaAoVivo();
        renderWatchlistCard(); // Renderiza com raceData já populado
        animacaoAtiva = true;
        document.querySelector('.tab-nav').classList.add('corrida-ativa');
        loopAnimacaoCanvas();
        timestampUltimaSimulacao = performance.now();
        raceData.intervaloReal = raceData.intervalo;
        raceTimerId = setInterval(() => {
            if (!animacaoAtiva) { // Mantém uma forma de parar a corrida
                finalizarCorrida();
                return;
            }
            if (raceData.voltaAtual <= raceData.totalVoltas) {
                // Chance base de SC por volta (~0.3% por volta)
                if (!raceData.pendingSafetyCar && Math.random() < 0.003) {
                    raceData.pendingSafetyCar = true;
                    raceData.safetyCarMotivo = 'Incidente na pista';
                }

                // A corrida ainda está em andamento normal
                simularUmaVolta();

                // Verifica se um SC foi acionado durante a volta
                if (raceData.pendingSafetyCar) {
                    raceData.pendingSafetyCar = false;
                    raceData.participantes.sort((a, b) => a.tempoTotal - b.tempoTotal);
                    renderTabelaAoVivo();
                    raceData.voltaAtual++;
                    ativarSafetyCar();
                    return; // pausa o loop — será retomado após o modal
                }

                raceData.participantes.sort((a, b) => a.tempoTotal - b.tempoTotal);
                renderTabelaAoVivo();
                gerarMensagensDeRadio();
                raceData.voltaAtual++; // Incrementa a volta normalmente

            } else {
                // O líder acabou de terminar (voltaAtual > totalVoltas).
                // Agora, simulamos UMA ÚLTIMA VOLTA para que todos cruzem a linha.
                console.log("Líder terminou. Simulando a volta final para todos os carros...");
                simularUmaVolta(); // Roda a simulação final

                // Atualiza a tabela com as posições FINAIS
                raceData.participantes.sort((a, b) => a.tempoTotal - b.tempoTotal);
                renderTabelaAoVivo();

                // AGORA, chama a função para finalizar a corrida
                finalizarCorrida();
            }
        }, raceData.intervalo);
    }

    function calcularReducaoPitStop() {
        const nivel = gameState.instalacoes.treinoDeBox;
        if (nivel <= 0) return 0;
        const ranges = [[0,0],[0.1,0.3],[0.3,0.5],[0.5,0.6],[0.6,0.8],[0.8,1.0]];
        const [min, max] = ranges[Math.min(nivel, 5)];
        return min + Math.random() * (max - min);
    }

    // Retorna quantas voltas o ERS fica ATIVO por ciclo, dependendo do nível.
    // Níveis baixos → mais voltas ativas (ajuda o iniciante).
    // Níveis altos  → 1 volta ativa (bônus por volta maior, mas ciclo curto = equilíbrio).
    function ersVoltasAtivas(nivel) {
        if (nivel <= 2) return 3; // Padrão / Otimizado: 3 voltas ativas
        if (nivel === 3) return 2; // Avançado: 2 voltas ativas
        return 1;                  // Elite / Estado da Arte: 1 volta ativa
    }

    function calcularBonusERS() {
        const nivel = gameState.instalacoes.ers;
        // Bônus por volta (s): cresce com o nível, mas o número de voltas ativas
        // DIMINUI nos níveis altos — impedindo acúmulo de vantagem excessivo.
        // Total/ciclo aprox.: niv1=0.6s | niv2=0.9s | niv3=0.7s | niv4=0.5s | niv5=0.55-0.60s
        if (nivel <= 1) return 0.200;
        if (nivel === 2) return 0.300;
        if (nivel === 3) return 0.350;
        if (nivel === 4) return 0.500;
        // nivel 5: entre 0.550 e 0.600
        return 0.550 + Math.random() * 0.050;
    }

    function calcularReducaoTunelTempo() {
        const nivel = gameState.instalacoes.tunelDeVento;
        if (nivel <= 2) return 0;
        if (nivel === 3) return 1;
        if (nivel === 4) return 1 + Math.floor(Math.random() * 2); // 1–2
        // nivel 5: roleta 10%→5, 40%→4, 50%→2
        const r = Math.random();
        if (r < 0.10) return 5;
        if (r < 0.50) return 4;
        return 2;
    }

    function calcularReducaoMotoresTempo() {
        const nivel = gameState.instalacoes.centroMotores;
        if (nivel <= 0) return 0;
        const ranges = [[0,0],[0,2],[1,2],[1,3],[2,3],[3,5]];
        const [min, max] = ranges[Math.min(nivel, 5)];
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    function calcularReducaoChassisTempo() {
        const nivel = gameState.instalacoes.centroChassis;
        if (nivel <= 0) return 0;
        const ranges = [[0,0],[0,1],[0,1],[1,2],[2,3],[3,4]];
        const [min, max] = ranges[Math.min(nivel, 5)];
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    function calcularDescontoChassis() {
        const nivel = gameState.instalacoes.centroChassis;
        const descontos = [0, 0.05, 0.08, 0.12, 0.15, 0.20];
        return descontos[Math.min(nivel, 5)];
    }

    function calcularBonusAtributosChassis() {
        const nivel = gameState.instalacoes.centroChassis;
        const bonus = [0, 0.03, 0.05, 0.07, 0.10, 0.13];
        return bonus[Math.min(nivel, 5)];
    }

    function calcularReducaoSuspensoesTempo() {
        const nivel = gameState.instalacoes.centroSuspensoes;
        if (nivel <= 0) return 0;
        const ranges = [[0,0],[0,1],[0,1],[1,2],[2,3],[3,4]];
        const [min, max] = ranges[Math.min(nivel, 5)];
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    function calcularDescontoSuspensoes() {
        const nivel = gameState.instalacoes.centroSuspensoes;
        const descontos = [0, 0.05, 0.10, 0.15, 0.20, 0.25];
        return descontos[Math.min(nivel, 5)];
    }

    function calcularDescontoTunel() {
        const nivel = gameState.instalacoes.tunelDeVento;
        const descontos = [0, 0.05, 0.10, 0.12, 0.15, 0.25];
        return descontos[Math.min(nivel, 5)];
    }

    function calcularTempoVolta(participante, pista, multiPneu, penDesgaste, penCombustivel, bonusERS = 0) {
        const carro = participante.atributos;
        const piloto = participante.piloto;
        const bonusHabilidade = piloto.habilidade / 50.0;
        const fatorConsistencia = (1 - (piloto.consistencia / 200));
        const pontuacaoCarro = ((carro.potencia * pista.demandaMotor) + (carro.aerodinamica * pista.demandaAero) + (carro.aderencia * pista.demandaAderencia)) * multiPneu;
        const fatorDesempenho = pontuacaoCarro / 100;
        const fatorSorte = (Math.random() - 0.5) * (0.6 * fatorConsistencia);
        return pista.tempoBaseVolta - fatorDesempenho - bonusHabilidade + penDesgaste + penCombustivel + fatorSorte - bonusERS;
    }


    function simularUmaVolta() {
        const agora = performance.now();
        raceData.intervaloReal = agora - timestampUltimaSimulacao;
        timestampUltimaSimulacao = agora;

        raceData.participantes.forEach(p => {
            p.tempoInicioVolta = p.tempoTotal; // GUARDA O TEMPO ANTES DE SIMULAR A VOLTA
            p.timestampInicioVolta = agora;    // GUARDA O TEMPO REAL DO INÍCIO DO TICK
            if (raceData.voltaAtual === 1 && p.isPlayer) {
                p.lapData = [];
            }
            if (p.tempoTotal === Infinity) return;

            p.ersBonusAtivoNestaVolta = false;
            let bonusERS = 0;
            if (p.isPlayer && p.ers) {
                if (p.ers.ativo) {
                    bonusERS = calcularBonusERS();
                    if (bonusERS > 0) p.ersBonusAtivoNestaVolta = true;
                    p.ers.cicloDeCarregamento--;
                    // Bateria usa o máximo do ciclo atual como denominador (dinâmico por nível)
                    const maxCiclo = p.ers.maxCicloDeCarregamento || 3;
                    p.ers.bateria = (p.ers.cicloDeCarregamento / maxCiclo) * 100;
                    if (p.ers.cicloDeCarregamento <= 0) {
                        p.ers.ativo = false;
                        p.ers.bateria = 0;
                        p.ers.voltasParaCarregar = Math.floor(Math.random() * 3) + 7;
                        p.ers.totalVoltasParaCarregar = p.ers.voltasParaCarregar;
                    }
                } else {
                    p.ers.voltasParaCarregar--;
                    const progressoCarga = 1 - (p.ers.voltasParaCarregar / p.ers.totalVoltasParaCarregar);
                    p.ers.bateria = Math.min(100, progressoCarga * 100);
                    if (p.ers.voltasParaCarregar <= 0) {
                        p.ers.ativo = true;
                        p.ers.bateria = 100;
                        // Número de voltas ativas depende do nível instalado
                        const voltasAtivas = ersVoltasAtivas(gameState.instalacoes.ers);
                        p.ers.cicloDeCarregamento = voltasAtivas;
                        p.ers.maxCicloDeCarregamento = voltasAtivas;
                    }
                }
            }

            let tempoDaVoltaFinal;
            let fezPitStop = false;
            const pneuAntesDaVolta = p.pneuAtual;

            // Calcula a penalidade de desgaste ANTES, para ser usada em ambos os casos (pit stop ou não)
            const pneuAtual = pneus[p.pneuAtual];
            const piloto = p.piloto;
            const fatorGerenciamento = (1 - (piloto.gerenciamentoPneus / 300));
            const desgasteFinal = pneuAtual.desgastePorVolta * fatorGerenciamento;

            let penalidadeDesgaste;
            const desgasteSofrido = 100 - p.durabilidadePneu;
            if (desgasteSofrido <= 65) {
                penalidadeDesgaste = desgasteSofrido * 0.01;
            } else {
                const desgasteExcedente = desgasteSofrido - 65;
                penalidadeDesgaste = (65 * 0.01) + (Math.pow(desgasteExcedente, 1.5) * 0.01);
            }

            const paradaInfo = p.estrategia.paradas[p.stintAtual];
            const voltaDaUltimaParada = p.paradas.length > 0 ? p.estrategia.paradas.at(-1).pararNaVolta : 0;
            const proximaParada = paradaInfo ? paradaInfo.pararNaVolta : raceData.totalVoltas;
            const tamanhoStint = proximaParada - voltaDaUltimaParada;
            const progressoStint = tamanhoStint > 0 ? (raceData.voltaAtual - voltaDaUltimaParada) / tamanhoStint : 1;
            const penalidadeCombustivelAtualizada = p.penalidadeCombustivel * (1 - progressoStint);
            // --- FIM DA CORREÇÃO ---

            if (paradaInfo && paradaInfo.pararNaVolta === raceData.voltaAtual) {
                fezPitStop = true;
                const reducaoPitStop = calcularReducaoPitStop();
                const tempoDePitFinal = Math.max(18, raceData.pista.pitstopTime - reducaoPitStop);

                // Usa as penalidades já calculadas
                let tempoDaVoltaBase = calcularTempoVolta(p, raceData.pista, pneuAtual.multiplicadorPerformance, penalidadeDesgaste, penalidadeCombustivelAtualizada, bonusERS);
                tempoDaVoltaFinal = tempoDaVoltaBase + tempoDePitFinal;

                p.duracaoVoltaEstimada = tempoDaVoltaFinal;
                p.tempoTotal += tempoDaVoltaFinal;
                p.ultimaVolta = `PIT STOP (${formatLapTime(tempoDaVoltaFinal)})`;
                p.pneuAtual = paradaInfo.colocarPneu;
                p.stintAtual++;
                p.durabilidadePneu = 100;
                p.penalidadeCombustivel = 2.8;
                p.paradas++;
                p.voltasNoPneuAtual = 1;
            } else {
                // ----------------------------------------------------------------
                // VERIFICAÇÃO DE PNEU DESTRUÍDO (durabilidade ≤ 0)
                // Se o piloto estourou o stint além do limite do pneu, o contador
                // voltasPneuDestruido acumula. A partir de 3 voltas no limite:
                //   → Pit de emergência automático (evita DNF, mas paga tempo extra).
                //   → Se o pit de emergência não for possível (sem stints restantes),
                //     o carro tem 60% de chance por volta de DNF.
                // ----------------------------------------------------------------
                if (p.durabilidadePneu <= 0) {
                    p.durabilidadePneu = 0; // garante que não fique negativo
                    p.voltasPneuDestruido++;

                    if (p.voltasPneuDestruido > 3) {
                        // Tenta realizar um pit de emergência antes de jogar o dado de DNF.
                        // Escolhe o pneu mais durável ainda não usado na estratégia original,
                        // ou 'duro' como último recurso.
                        const proximoStintNaEstrategia = p.estrategia.paradas[p.stintAtual];
                        const pneuEmergencia = proximoStintNaEstrategia
                            ? proximoStintNaEstrategia.colocarPneu
                            : 'duro';

                        // Verifica se ainda há voltas suficientes para valer um pit
                        const voltasRestantes = raceData.totalVoltas - raceData.voltaAtual;

                        if (voltasRestantes > 2) {
                            // PIT DE EMERGÊNCIA: custo normal de pit + 5s de penalidade
                            // (para simular a entrada não-planejada e o risco de unsafe release)
                            const reducaoPitStop = p.isPlayer ? calcularReducaoPitStop() : 0;
                            const tempoPitEmergencia = Math.max(18, raceData.pista.pitstopTime - reducaoPitStop) + 5;
                            const tempoDaVoltaBase = calcularTempoVolta(p, raceData.pista, pneuAtual.multiplicadorPerformance, penalidadeDesgaste, penalidadeCombustivelAtualizada, bonusERS);
                            tempoDaVoltaFinal = tempoDaVoltaBase + tempoPitEmergencia;

                            p.tempoTotal += tempoDaVoltaFinal;
                            p.ultimaVolta = `⚠️ PIT EMERG. (${formatLapTime(tempoDaVoltaFinal)})`;
                            p.duracaoVoltaEstimada = tempoDaVoltaFinal;

                            // Avança o stint para o próximo planejado (ou mantém no duro de emergência)
                            if (proximoStintNaEstrategia) {
                                p.stintAtual++;
                            }
                            p.pneuAtual = pneuEmergencia;
                            p.durabilidadePneu = 100;
                            p.penalidadeCombustivel = 2.8;
                            p.paradas++;
                            p.voltasNoPneuAtual = 1;
                            p.voltasPneuDestruido = 0; // reset ao trocar pneu

                            fezPitStop = true;

                            if (p.isPlayer) {
                                p.lapData.push({ lap: raceData.voltaAtual, lapTime: tempoDaVoltaFinal, tire: pneuAntesDaVolta, pitStop: true });
                            }
                            return; // pula o resto do bloco else
                        } else {
                            // Perto do fim: sem sentido fazer pit. Joga o dado de DNF.
                            if (Math.random() < 0.60) {
                                p.tempoTotal = Infinity;
                                p.ultimaVolta = "DNF (pneu)";
                                if (p.isPlayer) {
                                    p.lapData.push({ lap: raceData.voltaAtual, lapTime: Infinity, tire: pneuAntesDaVolta, pitStop: false });
                                }
                                // 40% de chance de acionar o Safety Car
                                if (!raceData.pendingSafetyCar && Math.random() < 0.40) {
                                    raceData.pendingSafetyCar = true;
                                    raceData.safetyCarMotivo = `${p.piloto.nome} abandonou com falha de pneu`;
                                }
                                return;
                            }
                        }
                    }
                } else {
                    p.voltasPneuDestruido = 0; // pneu ainda vivo — reset do contador
                }

                // Risco de DNF mecânico normal (confiabilidade)
                if (Math.random() < 0.002 * (1 - (p.atributos.confiabilidade / 100))) {
                    p.tempoTotal = Infinity;
                    p.ultimaVolta = "DNF";
                    if (p.isPlayer) {
                        p.lapData.push({ lap: raceData.voltaAtual, lapTime: Infinity, tire: pneuAntesDaVolta, pitStop: false });
                    }
                    // 60% de chance de acionar o Safety Car
                    if (!raceData.pendingSafetyCar && Math.random() < 0.60) {
                        raceData.pendingSafetyCar = true;
                        raceData.safetyCarMotivo = `${p.piloto.nome} abandonou com problema mecânico`;
                    }
                    return;
                }

                // Volta normal
                tempoDaVoltaFinal = calcularTempoVolta(p, raceData.pista, pneuAtual.multiplicadorPerformance, penalidadeDesgaste, penalidadeCombustivelAtualizada, bonusERS);

                p.duracaoVoltaEstimada = tempoDaVoltaFinal;
                if (tempoDaVoltaFinal < raceData.melhorVolta) { raceData.melhorVolta = tempoDaVoltaFinal; raceData.pilotoMelhorVolta = p.piloto.nome; }
                if (tempoDaVoltaFinal < p.melhorVoltaPessoal) { p.melhorVoltaPessoal = tempoDaVoltaFinal; }
                p.ultimaVolta = formatLapTime(tempoDaVoltaFinal);
                p.tempoTotal += tempoDaVoltaFinal;
                p.durabilidadePneu -= desgasteFinal;
                p.voltasNoPneuAtual++;
            }

            // Coleta lapData para TODOS os participantes (salva top 3 no final)
            if (!p.lapData) p.lapData = [];
            p.lapData.push({
                lap: raceData.voltaAtual,
                lapTime: tempoDaVoltaFinal,
                tire: pneuAntesDaVolta,
                pitStop: fezPitStop,
                posicao: null  // preenchido abaixo, após o forEach completo
            });
        });

        // Calcula posição DEPOIS que TODOS os participantes foram simulados nesta volta.
        // Só assim o sort por tempoTotal é confiável para todos.
        const ativosOrdenados = raceData.participantes
            .filter(x => x.tempoTotal !== Infinity)
            .sort((a, b) => a.tempoTotal - b.tempoTotal);

        raceData.participantes.forEach(p => {
            if (!p.isPlayer || p.tempoTotal === Infinity) return;
            const lapEntry = p.lapData[p.lapData.length - 1];
            if (lapEntry && lapEntry.lap === raceData.voltaAtual) {
                lapEntry.posicao = ativosOrdenados.findIndex(x => x.piloto.id === p.piloto.id) + 1;
            }
        });
    }

    function finalizarCorrida() {
        clearInterval(raceTimerId);
        raceTimerId = null;
        animacaoAtiva = false;
        document.querySelector('.tab-nav').classList.remove('corrida-ativa');
        pilotosMonitorados = []; // Zera o watchlist ao fim da corrida

        animarBandeirada().then(() => {
            document.getElementById('corrida').classList.remove('race-in-progress');
            processarResultados(raceData.participantes, raceData.pilotoMelhorVolta);
            processarCrescimentoTorcedores(raceData.participantes);

            // Verifica uma única vez por corrida se algum upgrade de instalação ficou acessível
            const podeUpgradeInstalacao = Object.entries(catalogoInstalacoes).some(([id, data]) => {
                const nivelAtual = gameState.instalacoes[id] ?? 0;
                const maxLevel = data.niveis.length - 1;
                if (nivelAtual >= maxLevel) return false;
                const proximoCusto = data.niveis[nivelAtual + 1]?.custo;
                return proximoCusto > 0 && gameState.escuderia.dinheiro >= proximoCusto;
            });
            if (podeUpgradeInstalacao) {
                if (!gameState.notificacoes) gameState.notificacoes = {};
                gameState.notificacoes.instalacoes = true;
            }
            processarPagamentoDeSalarios();
            processarDesgastePecas();
            gameState.campeonato.corridaAtualIndex++;
            atualizarPatrociniosAtivos();
            gerarOfertasDePatrocinio();
            processarProjetosConcluidos();
            processarVendasDeMercado();
            simularVendasMarketing();
            gerarMercado();

            if ((gameState.campeonato.corridaAtualIndex + 1) % 5 === 0) {
                processarEvolucaoPilotos();
            }

            const btnFechar = document.getElementById('btn-fechar-resultados');
            if(btnFechar) {
                btnFechar.classList.remove('hidden');
                btnFechar.disabled = false;
            }
            saveGame();
        });
    }

    // ================================================================
    //  SAFETY CAR — funções principais
    // ================================================================

    /**
     * Calcula quantas voltas um pneu NOVO de cada composto aguenta,
     * com uma margem de segurança de 85% para evitar DNF por pneu destruído.
     */
    function voltasPorComposto() {
        const MARGEM = 0.85;
        return {
            macio: Math.floor((100 / pneus.macio.desgastePorVolta) * MARGEM),
            medio: Math.floor((100 / pneus.medio.desgastePorVolta) * MARGEM),
            duro:  Math.floor((100 / pneus.duro.desgastePorVolta)  * MARGEM),
        };
    }

    /**
     * Gera a estratégia ideal para as voltas restantes após o SC.
     *
     * Lógica central:
     *   1. Verifica se algum pneu novo aguentaria ir até o final SEM parar.
     *      Se sim, escolhe o mais adequado ao modo de agressividade e retorna
     *      zero paradas adicionais.
     *   2. Se não houver pneu que cubra o restante, usa gerarEstrategiaIA com
     *      as voltasRestantes para calcular a melhor estratégia de múltiplas paradas.
     *
     * @param {number} voltaAtualCorrida  - volta em que o SC entrou
     * @param {number} voltasRestantes    - voltas até o fim da corrida
     * @param {string} modoAgressividade  - 'atacar' | 'padrão' | 'conservar'
     */
    function gerarEstrategiaPosSC(voltaAtualCorrida, voltasRestantes, modoAgressividade = 'padrão') {
        const duracao = voltasPorComposto();

        // ── Caso 1: pneu único cobre o restante ─────────────────────
        // Macio aguenta → todos os compostos servem: escolhe pelo ritmo/modo
        if (voltasRestantes <= duracao.macio) {
            const pneu = modoAgressividade === 'atacar'    ? 'macio'
                       : modoAgressividade === 'conservar' ? 'duro'
                       : 'medio';
            return { pneuInicial: pneu, paradas: [] };
        }

        // Médio aguenta → médio ou duro servem
        if (voltasRestantes <= duracao.medio) {
            const pneu = modoAgressividade === 'atacar' ? 'medio' : 'duro';
            return { pneuInicial: pneu, paradas: [] };
        }

        // Apenas o duro aguenta → coloca duro e vai até o final
        if (voltasRestantes <= duracao.duro) {
            return { pneuInicial: 'duro', paradas: [] };
        }

        // ── Caso 2: nenhum pneu cobre o restante → necessita paradas ─
        // Delega para gerarEstrategiaIA com as voltasRestantes como "total"
        const est = gerarEstrategiaIA(Math.max(1, voltasRestantes));
        return {
            pneuInicial: est.pneuInicial,
            paradas: est.paradas.map(p => ({
                ...p,
                pararNaVolta: Math.min(
                    p.pararNaVolta + voltaAtualCorrida,
                    voltaAtualCorrida + voltasRestantes - 1
                )
            }))
        };
    }

    /**
     * Ativa o Safety Car:
     * 1. Pausa o loop da corrida
     * 2. Comprime o campo (gap de 0.4s entre carros)
     * 3. Faz o pit de todos durante o SC (+22s, pneus novos)
     * 4. Recalcula estratégias IA automaticamente
     * 5. Abre o modal para o jogador revisar suas estratégias
     */
    function renderHistoricoSC() {
        const container = document.getElementById('sc-historico-container');
        if (!container || !raceData) return;
        const historico = raceData.historicoSC || [];
        if (historico.length === 0) { container.innerHTML = ''; return; }
        const rows = historico.map((entry, i) => {
            const iconeMotivo = entry.motivo.includes('pneu') ? '💥' : entry.motivo.includes('mecân') ? '🔧' : '⚠️';
            return `<tr>
                <td class="sc-hist-num">${i + 1}º SC</td>
                <td class="sc-hist-volta">Volta <strong>${entry.volta}</strong> / ${entry.totalVoltas}</td>
                <td class="sc-hist-barra"><div class="sc-hist-progress" style="width:${Math.round((entry.volta / entry.totalVoltas) * 100)}%"></div></td>
                <td class="sc-hist-motivo">${iconeMotivo} ${entry.motivo}</td>
            </tr>`;
        }).join('');
        container.innerHTML = `<div class="sc-historico-card">
            <div class="sc-historico-header">
                <span class="sc-hist-icon">🚗🟡</span>
                <span>Histórico de Safety Car</span>
                <span class="sc-hist-count">${historico.length}× acionado</span>
            </div>
            <table class="sc-historico-table"><tbody>${rows}</tbody></table>
        </div>`;
    }

    function ativarSafetyCar() {
        // Pausa o loop
        clearInterval(raceTimerId);
        raceTimerId = null;
        raceData.safetyCarAtivo = true;

        // Registra no histórico
        if (!raceData.historicoSC) raceData.historicoSC = [];
        raceData.historicoSC.push({ volta: raceData.voltaAtual, totalVoltas: raceData.totalVoltas, motivo: raceData.safetyCarMotivo || 'Incidente na pista' });
        renderHistoricoSC();

        const voltasRestantes = raceData.totalVoltas - raceData.voltaAtual + 1;

        // ── 1. Comprime o campo ──────────────────────────────────────
        const ativos = raceData.participantes.filter(p => p.tempoTotal !== Infinity);
        if (ativos.length > 0) {
            const tempoLider = ativos[0].tempoTotal;
            ativos.forEach((p, i) => {
                p.tempoTotal = tempoLider + (i * 0.4);
            });
        }

        // ── 2. IA: pit durante o SC + nova estratégia ────────────────
        raceData.participantes.forEach(p => {
            if (!p.isPlayer && p.tempoTotal !== Infinity) {
                // Detecta compostos reais usados via lapData (fonte mais confiável).
                // Fallback para estratégia original caso lapData não exista (IA sem registro).
                const compositosJaUsados = new Set();
                if (p.lapData && p.lapData.length > 0) {
                    p.lapData.forEach(d => { if (d.tire) compositosJaUsados.add(d.tire); });
                } else {
                    // Fallback: reconstrói pelo histórico de estratégia
                    compositosJaUsados.add(p.estrategia.pneuInicial);
                    for (let i = 0; i < p.stintAtual; i++) {
                        if (p.estrategia.paradas[i]) compositosJaUsados.add(p.estrategia.paradas[i].colocarPneu);
                    }
                }
                compositosJaUsados.add(p.pneuAtual); // pneu em uso agora
                const regulamentoJaCumprido = compositosJaUsados.size >= 2;

                // Calcula se o pneu atual dura até o final
                const voltasQueOPneuAtualAguenta = Math.floor(
                    p.durabilidadePneu / pneus[p.pneuAtual].desgastePorVolta
                );
                const pneuAtualChegaAoFinal = voltasQueOPneuAtualAguenta >= voltasRestantes;

                // Deve parar se:
                // a) O pneu atual não chega ao final, OU
                // b) O regulamento de 2 compostos ainda não foi cumprido
                //    (nesse caso a parada é obrigatória para trocar de composto)
                const devePararSC = !pneuAtualChegaAoFinal || !regulamentoJaCumprido;

                const novaEstrategia = gerarEstrategiaPosSC(
                    raceData.voltaAtual,
                    voltasRestantes,
                    p.modoAgressividade || 'padrão'
                );

                if (devePararSC) {
                    // Se a parada é apenas para cumprir o regulamento, escolhe um composto
                    // diferente do atual que cubra as voltas restantes
                    let pneuEscolhido = novaEstrategia.pneuInicial;
                    if (!regulamentoJaCumprido && pneuEscolhido === p.pneuAtual) {
                        const duracao = voltasPorComposto();
                        const alternativas = ['duro', 'medio', 'macio'].filter(c => c !== p.pneuAtual);
                        // Prefere o mais durável que cubra as voltas restantes
                        pneuEscolhido = alternativas.find(c => duracao[c] >= voltasRestantes)
                            || alternativas[0]; // fallback: qualquer diferente
                    }

                    p.tempoTotal += 12;
                    p.pneuAtual = pneuEscolhido;
                    p.durabilidadePneu = 100;
                    p.penalidadeCombustivel = 2.8;
                    p.paradas++;
                    p.voltasNoPneuAtual = 1;
                    p.voltasPneuDestruido = 0;
                }

                // Nova estratégia: pneu atual se não parou, novo pneu se parou
                const pneuFinal = devePararSC ? p.pneuAtual : p.pneuAtual;
                const voltasRestantesDoPneuFinal = devePararSC
                    ? Math.floor(100 / pneus[p.pneuAtual].desgastePorVolta) // pneu novo
                    : voltasQueOPneuAtualAguenta;

                p.estrategia = {
                    pneuInicial: p.pneuAtual,
                    paradas: voltasRestantesDoPneuFinal >= voltasRestantes ? [] : novaEstrategia.paradas
                };
                p.stintAtual = 0;
            }
        });

        // ── 3. Player: calcula contexto do SC para cada carro ───────────
        // Não aplica nada ainda — o jogador decide no modal.
        raceData.scContexto = {};
        gameState.carros.forEach((carro) => {
            if (!carro.pilotoId) return;
            const participante = raceData.participantes.find(p => p.piloto.id === carro.pilotoId);
            if (!participante || participante.tempoTotal === Infinity) return;

            // Compostos reais já usados até agora (via lapData)
            const compositosJaUsados = new Set((participante.lapData || []).map(d => d.tire));
            compositosJaUsados.add(participante.pneuAtual);
            const regulamentoCumprido = compositosJaUsados.size >= 2;

            // Durabilidade do pneu atual
            const voltasQueAguenta = Math.floor(
                participante.durabilidadePneu / pneus[participante.pneuAtual].desgastePorVolta
            );
            const pneuChegaAoFinal = voltasQueAguenta >= voltasRestantes;

            // Gera estratégia sugerida para cada cenário como ponto de partida
            const modo = participante.modoAgressividade || 'padrão';
            const estrategiaSugeridaComPit = gerarEstrategiaPosSC(raceData.voltaAtual, voltasRestantes, modo);

            // Estratégia "manter pneu + planejar" — mantém pneu atual, paradas futuras
            const estrategiaSugeridaSemPit = {
                pneuInicial: participante.pneuAtual,
                paradas: pneuChegaAoFinal ? [] : estrategiaSugeridaComPit.paradas
            };

            raceData.scContexto[carro.pilotoId] = {
                // Estado atual
                pneuAtual: participante.pneuAtual,
                durabilidadeAtual: participante.durabilidadePneu,
                voltasQueAguenta,
                pneuChegaAoFinal,
                regulamentoCumprido,
                compositosJaUsados: [...compositosJaUsados],
                // Estratégias sugeridas por opção
                estrategiaSugeridaComPit,
                estrategiaSugeridaSemPit,
            };

            // Inicializa decisão e estratégia do editor para opção 1 (manter + planejar)
            // Estratégia começa vazia — o jogador monta do zero
            carro._scDecisao = 'manter-planejar';
            carro.estrategia = { pneuInicial: participante.pneuAtual, paradas: [] };
        });

        // Reordena e atualiza a tabela com as novas posições
        raceData.participantes.sort((a, b) => a.tempoTotal - b.tempoTotal);
        renderTabelaAoVivo();

        // Habilita os controles de estratégia para edição no modal
        document.querySelectorAll('.strategy-control').forEach(el => { el.disabled = false; });

        // ── 4. Abre o modal ──────────────────────────────────────────
        abrirModalSafetyCar(voltasRestantes);
    }

    /**
     * Renderiza o editor de estratégia dentro do modal SC.
     * Usa as mesmas classes dos controles existentes para aproveitar
     * o event delegation já configurado.
     */
    function renderEstrategiaModalSC(voltasRestantes) {
        const container = document.getElementById('sc-strategy-container');
        if (!container) return;

        const pneuNome = { macio: '🔴 Macio', medio: '🟡 Médio', duro: '⚪ Duro' };

        // Gera o HTML de cada carro como coluna
        const colunasHtml = gameState.carros.map((carro, carroIndex) => {
            if (!carro.pilotoId) return '';
            const piloto = gameState.pilotos.find(p => p.id === carro.pilotoId);
            const pilotoNome = piloto ? piloto.nome : 'VAGO';
            const participante = raceData.participantes.find(p => p.piloto.id === carro.pilotoId);
            if (!participante || participante.tempoTotal === Infinity) return '';

            const ctx = raceData.scContexto?.[carro.pilotoId] || {};
            const decisao = carro._scDecisao || 'manter-planejar';
            const durAtual = Math.round(ctx.durabilidadeAtual || participante.durabilidadePneu);
            const pneuAtual = ctx.pneuAtual || participante.pneuAtual;
            const compositosUsados = new Set(ctx.compositosJaUsados || [pneuAtual]);

            // Disponibilidade opções
            const op3Disponivel = ctx.pneuChegaAoFinal && ctx.regulamentoCumprido;
            const pneuEscolhidoOp24 = carro.estrategia?.pneuInicial || 'medio';
            const voltasPneuNovo = Math.floor(100 / pneus[pneuEscolhidoOp24].desgastePorVolta);
            const novoPneuChegaAoFinal = voltasPneuNovo >= voltasRestantes;
            const novoPneuDiferente = pneuEscolhidoOp24 !== pneuAtual;
            const op4CumpreRegulamento = novoPneuDiferente || ctx.regulamentoCumprido;
            const op4Disponivel = novoPneuChegaAoFinal && op4CumpreRegulamento;

            const op3Motivo = !ctx.pneuChegaAoFinal
                ? `Pneu aguenta ${ctx.voltasQueAguenta}v / ${voltasRestantes}v`
                : `Faltam 2 compostos`;
            const op4Motivo = !novoPneuChegaAoFinal
                ? `${pneuNome[pneuEscolhidoOp24]} dura ${voltasPneuNovo}v`
                : `Precisa composto diferente`;

            function validarCompostos(estrategia, trocouAgora) {
                const todos = new Set(compositosUsados);
                if (trocouAgora) todos.add(estrategia.pneuInicial);
                (estrategia.paradas || []).forEach(p => todos.add(p.colocarPneu));
                if (todos.size < 2) return `⚠️ Use 2 compostos diferentes`;
                return null;
            }

            function editorParadas(mostrarPneuInicial, trocouAgora) {
                const selectorInicial = mostrarPneuInicial ? `
                    <div class="sc-pneu-agora">
                        <span class="sc-pneu-label">Pneu agora:</span>
                        <select class="pneu-select-inicial strategy-control sc-select-inline" data-car-index="${carroIndex}">
                            ${['macio','medio','duro'].map(c => `<option value="${c}" ${carro.estrategia.pneuInicial===c?'selected':''}>${pneuNome[c]}</option>`).join('')}
                        </select>
                        <span class="sc-custo-tempo">+6s</span>
                    </div>` : '';

                const paradaRows = carro.estrategia.paradas.map((parada, pi) => `
                    <div class="sc-parada-row">
                        <span class="sc-parada-label">P${pi + 1}</span>
                        <span>v</span>
                        <input type="number" class="volta-input strategy-control sc-volta-compact"
                               value="${parada.pararNaVolta}"
                               min="${raceData.voltaAtual + 1}"
                               max="${raceData.totalVoltas - 1}"
                               data-car-index="${carroIndex}"
                               data-parada-index="${pi}">
                        <select class="pneu-select-parada strategy-control sc-select-inline"
                                data-car-index="${carroIndex}"
                                data-parada-index="${pi}">
                            ${['macio','medio','duro'].map(c => `<option value="${c}" ${parada.colocarPneu===c?'selected':''}>${pneuNome[c]}</option>`).join('')}
                        </select>
                        <button class="btn-remover-stint strategy-control sc-btn-remover"
                                data-car-index="${carroIndex}"
                                data-parada-index="${pi}">✕</button>
                    </div>`).join('');

                const erroComp = validarCompostos(carro.estrategia, trocouAgora);
                const aviso = erroComp
                    ? `<p class="sc-aviso-erro">${erroComp}</p>`
                    : `<p class="sc-aviso-ok">✅ Compostos OK</p>`;

                return `${selectorInicial}
                    ${paradaRows}
                    <button class="btn-add-stint strategy-control sc-btn-add" data-car-index="${carroIndex}">+ Parada</button>
                    ${aviso}`;
            }

            // Conteúdo por decisão
            let conteudo = '';
            if (decisao === 'manter-planejar') {
                const pneuStatus = ctx.pneuChegaAoFinal
                    ? `<span class="sc-pneu-ok">✅ aguenta as ${voltasRestantes}v restantes</span>`
                    : `<span class="sc-pneu-warn">⚠️ aguenta ~${ctx.voltasQueAguenta}v de ${voltasRestantes}v restantes</span>`;
                conteudo = `<p class="sc-decisao-desc">Na pista · ${pneuNome[pneuAtual]} · ${durAtual}% dur. · ${pneuStatus}</p>
                    ${editorParadas(false, false)}`;
            } else if (decisao === 'trocar-planejar') {
                conteudo = editorParadas(true, true);
            } else if (decisao === 'manter-final') {
                conteudo = `<p class="sc-decisao-desc sc-desc-ok">✅ ${pneuNome[pneuAtual]} ${durAtual}% até o final<br>
                    <small>${[...compositosUsados].map(c=>pneuNome[c]).join(' + ')}</small></p>`;
            } else if (decisao === 'trocar-final') {
                const erroComp = (!novoPneuDiferente && !ctx.regulamentoCumprido)
                    ? `<p class="sc-aviso-erro">⚠️ Escolha composto diferente de ${pneuNome[pneuAtual]}</p>`
                    : !novoPneuChegaAoFinal
                        ? `<p class="sc-aviso-erro">⚠️ ${pneuNome[pneuEscolhidoOp24]} não chega (${voltasPneuNovo}v/${voltasRestantes}v)</p>`
                        : `<p class="sc-aviso-ok">✅ Pneu cobre ${voltasRestantes}v restantes</p>`;
                conteudo = `<div class="sc-pneu-agora">
                    <span class="sc-pneu-label">Pneu agora:</span>
                    <select class="pneu-select-inicial strategy-control sc-select-inline" data-car-index="${carroIndex}">
                        ${['macio','medio','duro'].map(c=>`<option value="${c}" ${carro.estrategia.pneuInicial===c?'selected':''}>${pneuNome[c]}</option>`).join('')}
                    </select>
                    <span class="sc-custo-tempo">+6s</span>
                </div>${erroComp}`;
            }

            // 4 botões compactos
            const opcoes = [
                { id:'manter-planejar', emoji:'🟡', label:'Manter + Planejar', ok:true,          sub: `${pneuNome[pneuAtual]} · ${durAtual}% dur.` },
                { id:'trocar-planejar', emoji:'🔧', label:'Trocar + Planejar', ok:true,          sub: `Pit +6s · planeja paradas` },
                { id:'manter-final',    emoji:'✅', label:'Manter até o final', ok:op3Disponivel, sub: op3Disponivel ? `Cobre as ${ctx.voltasQueAguenta}v restantes` : op3Motivo },
                { id:'trocar-final',    emoji:'🏁', label:'Trocar + Final',    ok:op4Disponivel, sub: op4Disponivel ? `Pit +6s · sem paradas` : op4Motivo },
            ];

            const botoesHtml = opcoes.map(op => `
                <button class="btn-sc-opcao ${decisao===op.id?'active':''} ${!op.ok?'bloqueado':''}"
                        data-action="sc-opcao"
                        data-car-index="${carroIndex}"
                        data-opcao="${op.id}"
                        ${!op.ok?'disabled':''}
                        title="${op.sub}">
                    <span>${op.emoji}</span>
                    <span class="sc-op-label">${op.label}</span>
                </button>`).join('');

            return `<div class="sc-coluna">
                <div class="sc-col-header">
                    <strong>${pilotoNome}</strong>
                    <span class="sc-col-compostos">${[...compositosUsados].map(c=>pneuNome[c]).join(' + ')}</span>
                </div>
                <div class="sc-opcoes-grid">${botoesHtml}</div>
                <div class="sc-col-conteudo">${conteudo}</div>
            </div>`;
        }).filter(Boolean);

        container.innerHTML = colunasHtml.join('');
    }


    /**
     * Abre o modal do Safety Car e inicia o timer de 60 segundos.
     */
    function abrirModalSafetyCar(voltasRestantes) {
        const modal = document.getElementById('safety-car-modal');
        if (!modal) return;

        // Preenche informações do header
        document.getElementById('sc-motivo-text').textContent = raceData.safetyCarMotivo || 'Incidente na pista';
        document.getElementById('sc-volta-info').textContent = `Volta ${raceData.voltaAtual - 1} de ${raceData.totalVoltas}`;
        document.getElementById('sc-voltas-restantes-info').textContent = `${voltasRestantes} voltas restantes`;

        // Renderiza editor de estratégia
        renderEstrategiaModalSC(voltasRestantes);

        // Exibe o modal
        modal.classList.remove('hidden');

        // Inicia o timer de 60 segundos
        let segundosRestantes = 60;
        const timerDisplay = document.getElementById('sc-timer-display');
        const timerBar = document.getElementById('sc-timer-bar');

        const atualizarTimer = () => {
            if (timerDisplay) {
                timerDisplay.textContent = segundosRestantes;
                timerDisplay.classList.toggle('urgente', segundosRestantes <= 10);
            }
            if (timerBar) {
                timerBar.style.width = `${(segundosRestantes / 60) * 100}%`;
            }
        };

        atualizarTimer();

        if (scTimerId) clearInterval(scTimerId);
        scTimerId = setInterval(() => {
            segundosRestantes--;
            atualizarTimer();

            if (segundosRestantes <= 0) {
                clearInterval(scTimerId);
                scTimerId = null;
                // Aplica estratégia automática e fecha
                aplicarEstrategiaAutoPosSC(voltasRestantes);
                fecharModalSafetyCar();
            }
        }, 1000);
    }

    /**
     * Aplica estratégia gerada automaticamente para os carros do jogador.
     */
    function aplicarEstrategiaAutoPosSC(voltasRestantes) {
        // Chamado quando o timer esgota sem decisão do jogador.
        // Comportamento: se o pneu aguenta e regulamento OK → fica na pista.
        // Caso contrário → troca de pneu agora.
        gameState.carros.forEach((carro) => {
            if (!carro.pilotoId) return;
            const participante = raceData.participantes.find(p => p.piloto.id === carro.pilotoId);
            if (!participante || participante.tempoTotal === Infinity) return;

            const ctx = raceData.scContexto?.[carro.pilotoId] || {};
            if (!carro._scDecisao) {
                // Auto-decide com base na situação
                if (ctx.pneuChegaAoFinal && ctx.regulamentoCumprido) {
                    carro._scDecisao = 'manter-final';
                    carro.estrategia = { pneuInicial: ctx.pneuAtual, paradas: [] };
                } else {
                    carro._scDecisao = 'trocar-planejar';
                    carro.estrategia = JSON.parse(JSON.stringify(ctx.estrategiaSugeridaComPit || { pneuInicial: 'medio', paradas: [] }));
                }
            }
        });
        renderEstrategiaUI();
    }

    /**
     * Fecha o modal e retoma a corrida.
     */
    function fecharModalSafetyCar() {
        if (scTimerId) {
            clearInterval(scTimerId);
            scTimerId = null;
        }

        const modal = document.getElementById('safety-car-modal');
        if (modal) modal.classList.add('hidden');

        // Aplica a decisão de cada carro
        gameState.carros.forEach((carro) => {
            if (!carro.pilotoId) return;
            const participante = raceData.participantes.find(p => p.piloto.id === carro.pilotoId);
            if (!participante || participante.tempoTotal === Infinity) return;

            const decisao = carro._scDecisao || 'manter-planejar';
            const ctx = raceData.scContexto?.[carro.pilotoId] || {};
            const fazPit = decisao === 'trocar-planejar' || decisao === 'trocar-final';

            if (fazPit) {
                // Pit no SC: custo reduzido (~6s) — só o delta da pit lane, não o tempo completo
                // Em SC o carro não perde uma volta inteira, apenas o tempo extra da pit lane
                const deltaSC = 6;
                participante.tempoTotal += deltaSC;
                participante.pneuAtual = carro.estrategia.pneuInicial;
                participante.durabilidadePneu = 100;
                participante.penalidadeCombustivel = 2.8;
                participante.paradas++;
                participante.voltasNoPneuAtual = 1;
                participante.voltasPneuDestruido = 0;
                participante.stintAtual = 0;
            } else {
                // Fica na pista: restaura pneu original intacto
                participante.pneuAtual = ctx.pneuAtual || participante.pneuAtual;
                participante.durabilidadePneu = ctx.durabilidadeAtual || participante.durabilidadePneu;
            }

            // Estratégia futura: sem paradas se escolheu "ir ao final"
            if (decisao === 'manter-final' || decisao === 'trocar-final') {
                participante.estrategia = { pneuInicial: participante.pneuAtual, paradas: [] };
                carro.estrategia     = { pneuInicial: participante.pneuAtual, paradas: [] };
            } else {
                participante.estrategia = JSON.parse(JSON.stringify(carro.estrategia));
                participante.stintAtual = fazPit ? 0 : participante.stintAtual;
            }

            carro._scDecisaoAplicada = decisao; // salva antes de deletar
            delete carro._scDecisao;
        });

        // Guarda resumo das decisões do SC para exibir no painel de estratégia
        raceData.ultimoSCResumo = gameState.carros
            .filter(c => c.pilotoId)
            .map((carro, i) => {
                const decisao = carro._scDecisaoAplicada || carro._scDecisao || 'manter-planejar';
                const ctx = raceData.scContexto?.[carro.pilotoId] || {};
                const piloto = gameState.pilotos.find(p => p.id === carro.pilotoId);
                const pneuNomeMap = { macio: '🔴 Macio', medio: '🟡 Médio', duro: '⚪ Duro' };
                const descDecisao = {
                    'manter-planejar': `Ficou na pista (${pneuNomeMap[ctx.pneuAtual] || ctx.pneuAtual}) — novas paradas planejadas`,
                    'trocar-planejar': `Trocou para ${pneuNomeMap[carro.estrategia?.pneuInicial]} (+6s) — novas paradas planejadas`,
                    'manter-final':    `Ficou na pista (${pneuNomeMap[ctx.pneuAtual] || ctx.pneuAtual}) — sem mais paradas`,
                    'trocar-final':    `Trocou para ${pneuNomeMap[carro.estrategia?.pneuInicial]} (+6s) — sem mais paradas`,
                }[decisao] || decisao;
                return {
                    pilotoNome: piloto?.nome || `Carro ${i + 1}`,
                    decisao,
                    descDecisao,
                    paradas: carro.estrategia?.paradas || [],
                    pneuInicial: carro.estrategia?.pneuInicial,
                };
            });
        raceData.voltaSCAtivado = raceData.voltaAtual;

        // Desabilita os controles de estratégia novamente
        document.querySelectorAll('.strategy-control').forEach(el => { el.disabled = true; });

        // Atualiza a tabela imediatamente com o pneu correto (fix visual)
        raceData.participantes.sort((a, b) => a.tempoTotal - b.tempoTotal);
        renderTabelaAoVivo();

        // Atualiza a UI de estratégia da sidebar
        renderEstrategiaUI();

        // Retoma o loop da corrida
        raceData.safetyCarAtivo = false;
        raceData.pendingSafetyCar = false;
        timestampUltimaSimulacao = performance.now();
        raceTimerId = setInterval(() => {
            if (!animacaoAtiva) {
                finalizarCorrida();
                return;
            }
            if (raceData.voltaAtual <= raceData.totalVoltas) {
                // Chance base de SC por volta
                if (!raceData.pendingSafetyCar && Math.random() < 0.003) {
                    raceData.pendingSafetyCar = true;
                    raceData.safetyCarMotivo = 'Incidente na pista';
                }

                simularUmaVolta();

                if (raceData.pendingSafetyCar) {
                    raceData.pendingSafetyCar = false;
                    raceData.participantes.sort((a, b) => a.tempoTotal - b.tempoTotal);
                    renderTabelaAoVivo();
                    raceData.voltaAtual++;
                    ativarSafetyCar();
                    return;
                }

                raceData.participantes.sort((a, b) => a.tempoTotal - b.tempoTotal);
                renderTabelaAoVivo();
                gerarMensagensDeRadio();
                raceData.voltaAtual++;
            } else {
                simularUmaVolta();
                raceData.participantes.sort((a, b) => a.tempoTotal - b.tempoTotal);
                renderTabelaAoVivo();
                finalizarCorrida();
            }
        }, raceData.intervalo);
    }

    // ================================================================
    //  FIM SAFETY CAR
    // ================================================================

    function processarResultados(resultados, pilotoMelhorVoltaNome) {
        const pistaAtual = calendarioCorridas[gameState.campeonato.corridaAtualIndex];
        const nomePista = pistaAtual.nome;
        if (!gameState.historicoAutodromos[nomePista]) {
            gameState.historicoAutodromos[nomePista] = {
                recordeVolta: { tempo: Infinity, piloto: null, ano: null },
                historicoAnual: []
            };
        }
        const historicoPista = gameState.historicoAutodromos[nomePista];
        const resultadoDoAno = {
            ano: gameState.campeonato.ano,
            podium: resultados.slice(0, 3).map(p => p.piloto.nome),
            voltaRapida: { piloto: pilotoMelhorVoltaNome, tempo: raceData.melhorVolta },
            pole: raceData.polePosition
        };
        historicoPista.historicoAnual.push(resultadoDoAno);
        if (raceData.melhorVolta < historicoPista.recordeVolta.tempo) {
            historicoPista.recordeVolta = {
                tempo: raceData.melhorVolta,
                piloto: pilotoMelhorVoltaNome,
                ano: gameState.campeonato.ano
            };
        }

        // --- INÍCIO DO CÓDIGO FALTANTE ---

        // 1. Salva o resultado da corrida para ser exibido na aba Campeonato
        // Salva lapData completo para top 3 e para pilotos do jogador.
        // Para os demais, descarta lapData para economizar espaço em localStorage.
        const top3Ids = new Set(resultados.slice(0, 3).map(p => p.piloto.id));
        const dadosParaSalvar = {
            ano: gameState.campeonato.ano,
            nomePista,
            resultadoFinal: resultados.map(p => ({
                ...p,
                lapData: (p.isPlayer || top3Ids.has(p.piloto.id)) ? (p.lapData || []) : []
            })),
            melhorVolta: { piloto: pilotoMelhorVoltaNome, tempo: raceData.melhorVolta }
        };
        gameState.campeonato.resultadosCorridas.push(dadosParaSalvar);

        // ── Atualiza sequência de vitórias consecutivas (cross-temporada) ────
        if (!gameState.sequenciaVitoriasAtual) {
            gameState.sequenciaVitoriasAtual = { piloto: null, equipe: null, contagem: 0 };
        }
        if (!gameState.melhorSequenciaVitorias) {
            gameState.melhorSequenciaVitorias = { piloto: null, equipe: null, contagem: 0 };
        }
        const vencedorCorrida = resultados[0];
        if (vencedorCorrida) {
            const nomeVenc   = vencedorCorrida.piloto?.nome || vencedorCorrida.piloto;
            const equipeVenc = vencedorCorrida.equipe;
            const seq = gameState.sequenciaVitoriasAtual;
            if (seq.piloto === nomeVenc) {
                seq.contagem++;
            } else {
                // Sequência quebrou — salva o melhor histórico antes de resetar
                if (seq.contagem > gameState.melhorSequenciaVitorias.contagem) {
                    gameState.melhorSequenciaVitorias = { ...seq };
                }
                seq.piloto   = nomeVenc;
                seq.equipe   = equipeVenc;
                seq.contagem = 1;
            }
            // Atualiza o melhor histórico mesmo com a sequência em andamento
            if (seq.contagem > gameState.melhorSequenciaVitorias.contagem) {
                gameState.melhorSequenciaVitorias = { ...seq };
            }
        }
        // ── Fim sequência ─────────────────────────────────────────────────────

        // 2. Cria as entradas para os pilotos/construtores na tabela de classificação, se ainda não existirem
        resultados.forEach(res => {
            if (!gameState.campeonato.classificacaoPilotos.find(p => p.piloto === res.piloto.nome)) {
                gameState.campeonato.classificacaoPilotos.push({ piloto: res.piloto.nome, equipe: res.equipe, pontos: 0 });
            }
            if (!gameState.campeonato.classificacaoConstrutores.find(e => e.equipe === res.equipe)) {
                gameState.campeonato.classificacaoConstrutores.push({ equipe: res.equipe, pontos: 0 });
            }
        });

        // 3. Distribui os pontos da corrida para a classificação
        resultados.forEach((res, index) => {
            const posicao = index + 1;
            if (pontosPorPosicao[posicao]) {
                const pontosGanhos = pontosPorPosicao[posicao];
                const pilotoNaClassificacao = gameState.campeonato.classificacaoPilotos.find(p => p.piloto === res.piloto.nome);
                if (pilotoNaClassificacao) {
                    pilotoNaClassificacao.pontos += pontosGanhos;
                }
                const construtorNaClassificacao = gameState.campeonato.classificacaoConstrutores.find(e => e.equipe === res.equipe);
                if (construtorNaClassificacao) {
                    construtorNaClassificacao.pontos += pontosGanhos;
                }
            }
        });

        // 4. Salva estatísticas para a aba Galeria
        if (!gameState.galeria.estatisticasTodosPilotos) gameState.galeria.estatisticasTodosPilotos = {};
        resultados.forEach((resultado, index) => {
            // Stats dos pilotos do jogador (seção exclusiva)
            if (resultado.isPlayer) {
                const nomePiloto = resultado.piloto.nome;
                if (!gameState.galeria.estatisticasPilotos[nomePiloto]) {
                    gameState.galeria.estatisticasPilotos[nomePiloto] = { corridas: 0, vitorias: 0, podios: 0, pontos: 0 };
                }
                const stats = gameState.galeria.estatisticasPilotos[nomePiloto];
                stats.corridas++;
                if (index === 0) stats.vitorias++;
                if (index < 3) stats.podios++;
                const posicao = index + 1;
                if (pontosPorPosicao[posicao]) stats.pontos += pontosPorPosicao[posicao];
            }
            // Stats de TODOS os pilotos (seção geral)
            const nomeGeral = resultado.piloto.nome;
            if (!gameState.galeria.estatisticasTodosPilotos[nomeGeral]) {
                gameState.galeria.estatisticasTodosPilotos[nomeGeral] = { corridas: 0, vitorias: 0, podios: 0, pontos: 0, equipe: resultado.equipe };
            }
            const statsGeral = gameState.galeria.estatisticasTodosPilotos[nomeGeral];
            statsGeral.corridas++;
            statsGeral.equipe = resultado.equipe; // atualiza para a equipe mais recente
            if (index === 0) statsGeral.vitorias++;
            if (index < 3) statsGeral.podios++;
            const posGeral = index + 1;
            if (pontosPorPosicao[posGeral]) statsGeral.pontos += pontosPorPosicao[posGeral];
        });

         // --- FIM DO CÓDIGO FALTANTE ---
    }

    // ================================================================
    //  FIM DE TEMPORADA — Modal de resultados + premiação
    // ================================================================

    /**
     * Fase 1: chamada ao fechar os resultados da última corrida.
     * Atribui prêmios, detecta campeões, conclui projetos em andamento
     * e exibe o modal visual. NÃO reseta o estado ainda.
     */
    function exibirModalFimDeTemporada() {
        const ano = gameState.campeonato.ano;

        // Corrige registros com nome desatualizado antes de renderizar o modal.
        // Cobre saves que trocaram de nome antes de esta correção existir.
        const nomeAtual = gameState.escuderia.nome;
        gameState.campeonato.classificacaoConstrutores.forEach(e => {
            const eIA = equipesIA.some(ia => ia.nome === e.equipe);
            if (!eIA && e.equipe !== nomeAtual) e.equipe = nomeAtual;
        });
        gameState.campeonato.classificacaoPilotos.forEach(p => {
            const eIA = equipesIA.some(ia => ia.nome === p.equipe);
            if (!eIA && p.equipe !== nomeAtual) p.equipe = nomeAtual;
        });

        const classificacaoConstrutores = [...gameState.campeonato.classificacaoConstrutores].sort((a, b) => b.pontos - a.pontos);
        const classificacaoPilotos     = [...gameState.campeonato.classificacaoPilotos].sort((a, b) => b.pontos - a.pontos);
        const equipeCampe   = classificacaoConstrutores[0];
        const pilotoCampeao = classificacaoPilotos[0];

        // ── Snapshot do histórico de temporadas (antes de qualquer reset) ─────
        if (!gameState.historicoTemporadas) gameState.historicoTemporadas = [];
        const jaArquivado = gameState.historicoTemporadas.some(t => t.ano === ano);
        if (!jaArquivado) {
            // Conta vitórias por piloto na temporada usando resultadosCorridas
            const vitoriasPorPiloto = {};
            (gameState.campeonato.resultadosCorridas || []).forEach(corrida => {
                const vencedor = (corrida.resultadoFinal || [])[0];
                if (vencedor) {
                    const nome = vencedor.piloto?.nome || vencedor.piloto;
                    if (nome) vitoriasPorPiloto[nome] = (vitoriasPorPiloto[nome] || 0) + 1;
                }
            });
            const vitoriasPorEquipe = {};
            (gameState.campeonato.resultadosCorridas || []).forEach(corrida => {
                const vencedor = (corrida.resultadoFinal || [])[0];
                if (vencedor) {
                    const eq = vencedor.equipe;
                    if (eq) vitoriasPorEquipe[eq] = (vitoriasPorEquipe[eq] || 0) + 1;
                }
            });
            // Dados extras para o livro de recordes
            const segundoConstr  = classificacaoConstrutores[1];
            const segundoPiloto  = classificacaoPilotos[1];
            const difPontosConstr = equipeCampe && segundoConstr
                ? equipeCampe.pontos - segundoConstr.pontos : null;
            const difPontosPiloto = pilotoCampeao && segundoPiloto
                ? pilotoCampeao.pontos - segundoPiloto.pontos : null;
            // Busca a idade do campeão piloto no momento do título
            const pilotoCampeaoObj = pilotoCampeao
                ? gameState.pilotos.find(p => p.nome === pilotoCampeao.piloto)
                  || gameState.galeria.hallDaFama.find(h => h.piloto.nome === pilotoCampeao.piloto)?.piloto
                : null;
            const idadeCampeao = pilotoCampeaoObj?.idade ?? null;

            gameState.historicoTemporadas.push({
                ano,
                campeaoConstrutores: equipeCampe
                    ? { nome: equipeCampe.equipe, pontos: equipeCampe.pontos, vitorias: vitoriasPorEquipe[equipeCampe.equipe] || 0, difPontos: difPontosConstr }
                    : null,
                campeaoPilotos: pilotoCampeao
                    ? { nome: pilotoCampeao.piloto, equipe: pilotoCampeao.equipe, pontos: pilotoCampeao.pontos, vitorias: vitoriasPorPiloto[pilotoCampeao.piloto] || 0, difPontos: difPontosPiloto, idade: idadeCampeao }
                    : null,
            });
        }

        // ── Títulos ──────────────────────────────────────────────────
        const ganheiConstrutores = equipeCampe && equipeCampe.equipe === gameState.escuderia.nome;
        if (ganheiConstrutores && !gameState.galeria.titulosConstrutores.some(t => (typeof t === 'object' ? t.ano : t) === ano)) {
            const _pilotosDaCasa = gameState.pilotos.filter(p => p.status === 'Jogador').map(p => p.nome);
            gameState.galeria.titulosConstrutores.push({ ano, pilotos: _pilotosDaCasa });
        }
        let ganheiPilotos = false;
        if (pilotoCampeao) {
            const pilotoDaCasa = gameState.pilotos.find(p => p.nome === pilotoCampeao.piloto && p.status === 'Jogador');
            if (pilotoDaCasa) {
                ganheiPilotos = true;
                const jaRegistrado = gameState.galeria.titulosPilotos.some(t =>
                    (typeof t === 'object' ? t.ano : t) === ano
                );
                if (!jaRegistrado) {
                    gameState.galeria.titulosPilotos.push({ ano, piloto: pilotoDaCasa.nome, equipe: gameState.escuderia.nome });
                    pilotoDaCasa.campeonatosGanhos.push(ano);
                }
            } else {
                // Piloto campeão foi aposentado manualmente antes do modal de fim de temporada:
                // ele já não existe em gameState.pilotos, mas pode estar no Hall da Fama.
                // Atualiza o registro retroativamente para que o título apareça corretamente.
                const entradaHall = gameState.galeria.hallDaFama.find(h => h.piloto.nome === pilotoCampeao.piloto);
                if (entradaHall) {
                    ganheiPilotos = true;
                    const jaRegistrado = gameState.galeria.titulosPilotos.some(t =>
                        (typeof t === 'object' ? t.ano : t) === ano
                    );
                    if (!jaRegistrado) {
                        gameState.galeria.titulosPilotos.push({ ano, piloto: entradaHall.piloto.nome });
                        if (!entradaHall.piloto.campeonatosGanhos.includes(ano)) {
                            entradaHall.piloto.campeonatosGanhos.push(ano);
                        }
                        // Recalcula o contador de títulos no statsCarreira para refletir o novo título
                        entradaHall.statsCarreira.titulos = entradaHall.piloto.campeonatosGanhos.length;
                    }
                }
            }
        }

        // ── Premiação ────────────────────────────────────────────────
        const nossaPosicao = classificacaoConstrutores.findIndex(e => e.equipe === gameState.escuderia.nome) + 1;
        const tabelaBonus  = { 1: 20000000, 2: 17000000, 3: 14000000, 4: 12000000, 5: 10500000, 6: 9500000, 7: 8500000, 8: 8000000, 9: 7500000, 10: 6500000, 11: 5500000, 12: 5000000 };
        const premioRecebido = tabelaBonus[nossaPosicao] || 0;
        if (premioRecebido > 0) gameState.escuderia.dinheiro += premioRecebido;

        // ── Projetos em andamento — só prévia no modal ───────────────
        // A conclusão real ocorre ao clicar "Iniciar Nova Temporada"
        const projetosEmAndamento = gameState.projetosEmAndamento
            .filter(p => p.status === 'em_andamento')
            .map(p => p.tipoPeca || p.nomeEspecialista || 'Projeto');

        saveGame();

        // ── Preenche o modal ──────────────────────────────────────────
        document.getElementById('se-ano').textContent = ano;

        // Banners de campeão
        const bannersDiv = document.getElementById('se-champion-banners');
        const banners = [];
        if (ganheiConstrutores) banners.push(`<div class="se-champion-badge badge-construtores">🏆 CAMPEÃO DE CONSTRUTORES ${ano} — ${gameState.escuderia.nome}</div>`);
        if (ganheiPilotos)      banners.push(`<div class="se-champion-badge badge-pilotos">🌟 CAMPEÃO MUNDIAL DE PILOTOS ${ano} — ${pilotoCampeao.piloto}</div>`);
        if (banners.length > 0) {
            bannersDiv.innerHTML = banners.join('');
            bannersDiv.classList.remove('hidden');
        } else {
            bannersDiv.classList.add('hidden');
        }

        // Tabela Construtores
        document.getElementById('se-tbody-construtores').innerHTML = classificacaoConstrutores.map((e, i) => {
            const cor = getCorDaEquipe(e.equipe);
            const isPlayer = e.equipe === gameState.escuderia.nome;
            return `<tr class="${isPlayer ? 'se-player-row' : ''}" style="border-left: 4px solid ${cor}">
                <td>${i + 1}${i === 0 ? ' 🏆' : ''}</td>
                <td>${e.equipe}</td>
                <td>${e.pontos}</td>
            </tr>`;
        }).join('');

        // Tabela Pilotos
        document.getElementById('se-tbody-pilotos').innerHTML = classificacaoPilotos.map((p, i) => {
            const cor = getCorDaEquipe(p.equipe);
            const isPlayer = p.equipe === gameState.escuderia.nome;
            return `<tr class="${isPlayer ? 'se-player-row' : ''}" style="border-left: 4px solid ${cor}">
                <td>${i + 1}${i === 0 ? ' 🌟' : ''}</td>
                <td>${p.piloto}</td>
                <td>${p.equipe}</td>
                <td>${p.pontos}</td>
            </tr>`;
        }).join('');

        // Caixa de prêmio
        const posMedal = ['🥇','🥈','🥉'];
        const medalha = posMedal[nossaPosicao - 1] || '';
        const posLabel = medalha
            ? `${medalha} ${nossaPosicao}º lugar`
            : `${nossaPosicao}º lugar`;
        document.getElementById('se-prize-box').innerHTML = nossaPosicao > 0 && premioRecebido > 0
            ? `<div class="se-prize-pos">${posLabel} no Campeonato de Construtores</div>
               <div class="se-prize-valor">+ R$ ${premioRecebido.toLocaleString('pt-BR')}</div>
               <div class="se-prize-saldo">Saldo atual: R$ ${gameState.escuderia.dinheiro.toLocaleString('pt-BR')}</div>`
            : `<div class="se-prize-pos">Sem posição classificada este ano.</div>`;

        // Projetos — prévia do que será concluído no off-season
        const projetosSection = document.getElementById('se-projetos-section');
        if (projetosEmAndamento.length > 0) {
            document.getElementById('se-projetos-list').innerHTML = projetosEmAndamento.map(nome => `<span class="se-projeto-tag">🔧 ${nome} — concluirá no off-season</span>`).join('');
            projetosSection.classList.remove('hidden');
        } else {
            projetosSection.classList.add('hidden');
        }

        // ── Comunicado regulatório (teto de produção) ─────────────────────────
        // Exibe quando o teto vai ativar pela primeira vez ou as cotas mudam.
        const comunicadoDiv = document.getElementById('se-comunicado-regulatorio');
        if (comunicadoDiv) {
            const proximaTemporada = gameState.campeonato.ano + 1;
            const proximoNumero   = proximaTemporada - 2025;
            const mostraComunicado = gameState.novasMecanicasPendentes
                || (proximoNumero === 3)
                || (proximoNumero > 3 && (proximoNumero - 3) % 2 === 0);

            if (mostraComunicado) {
                const cotas = gameState.quotaAnual || { 'Motor': 4, 'Suspensão': 4, 'Chassi': 4, 'Asa Dianteira': 5, 'Asa Traseira': 5 };
                const linhasCotas = Object.entries(cotas).map(([tipo, qtd]) =>
                    `<li><strong>${tipo}:</strong> ${qtd} peças por temporada</li>`
                ).join('');
                comunicadoDiv.innerHTML = `
                    <div class="se-regulatorio-box">
                        <h4>📋 Comunicado Regulatório — Temporada ${proximaTemporada}</h4>
                        <p>A partir da próxima temporada, a produção de peças estará sujeita a <strong>cotas anuais</strong>:</p>
                        <ul>${linhasCotas}</ul>
                        <p>Para ganhar slots extras, aceite <strong>encomendas externas</strong> de equipes menores na aba Escuderia.</p>
                    </div>`;
                comunicadoDiv.classList.remove('hidden');
            } else {
                comunicadoDiv.classList.add('hidden');
            }
        }
        // ── Fim comunicado regulatório ────────────────────────────────────────

        document.getElementById('season-end-modal').classList.remove('hidden');
    }

    /**
     * Fase 2: chamada ao clicar "Iniciar Nova Temporada".
     * Conclui projetos em andamento (off-season), reseta o estado, evolui IA, avança o ano.
     */
    // ═══════════════════════════════════════════════════════════════════════════
    // TETO DE PRODUÇÃO + SISTEMA DE FORNECEDOR
    // ═══════════════════════════════════════════════════════════════════════════

    // Retorna true se ainda há slot disponível para construir aquele tipo de peça.
    function podeConstruirPeca(tipoPeca) {
        if (!gameState.tetoAtivo) return true;
        const construidas = gameState.producaoAnual[tipoPeca] || 0;
        const cota        = (gameState.quotaAnual[tipoPeca]  || 99)
                          + (gameState.quotaBonus[tipoPeca]  || 0);
        return construidas < cota;
    }

    // Retorna uma string resumindo o uso da cota daquele tipo, ex: "2/4"
    function resumoCota(tipoPeca) {
        if (!gameState.tetoAtivo) return 'livre';
        const construidas = gameState.producaoAnual[tipoPeca] || 0;
        const cota        = (gameState.quotaAnual[tipoPeca]  || 99)
                          + (gameState.quotaBonus[tipoPeca]  || 0);
        return `${construidas}/${cota}`;
    }

    // Estima o nível equivalente de componente de uma equipe IA
    // com base nos atributos agregados dela.
    function estimarNivelComponentes(equipe) {
        const vel  = equipe.carro?.potencia      ?? 70;
        const ade  = equipe.carro?.aderencia     ?? 70;
        const aer  = equipe.carro?.aerodinamica  ?? 70;
        const conf = equipe.carro?.confiabilidade ?? 75;
        // Mapeia 60-100 → níveis 1-10 linearmente
        const paraNivel = v => Math.max(1, Math.min(10, Math.round((v - 60) / 4)));
        return {
            'Motor':        paraNivel(vel  * 0.7 + conf * 0.3),
            'Suspensão':    paraNivel(ade),
            'Chassi':       paraNivel(aer  * 0.5 + ade  * 0.5),
            'Asa Dianteira': paraNivel(aer),
            'Asa Traseira':  paraNivel(aer)
        };
    }

    // Gera novas cotas regulatórias a cada ciclo de 2 temporadas.
    // Pequenas variações para dar sensação de regulamentos reais.
    function gerarNovasCotas(temporadaNumero) {
        const base = { 'Motor': 4, 'Suspensão': 4, 'Chassi': 4, 'Asa Dianteira': 5, 'Asa Traseira': 5 };
        // A cada ciclo, sorteia ±1 em alguns tipos para variar
        const tipos = Object.keys(base);
        const novas = { ...base };
        // Dois tipos aleatórios ganham +1, um tipo perde -1 (nunca abaixo de 2)
        const shuffle = tipos.sort(() => Math.random() - 0.5);
        novas[shuffle[0]] = Math.min(base[shuffle[0]] + 1, 6);
        novas[shuffle[1]] = Math.min(base[shuffle[1]] + 1, 6);
        novas[shuffle[2]] = Math.max(base[shuffle[2]] - 1, 2);
        return novas;
    }

    // Aplica os atributos de uma peça ao carro da equipe IA,
    // atualizando seu componenteNivel e os atributos de corrida.
    function aplicarPecaNaIA(equipe, tipoPeca, pecaNivel) {
        if (!equipe.componenteNivel) equipe.componenteNivel = estimarNivelComponentes(equipe);
        const nivelAtual = equipe.componenteNivel[tipoPeca] || 1;

        // Só melhora se a peça for de nível superior ao que a IA já tem
        if (pecaNivel <= nivelAtual) return null;

        const melhoria = pecaNivel - nivelAtual;

        // Mapeamento de tipo de peça → atributo do carro IA + peso
        const mapa = {
            'Motor':         { attr: 'potencia',      peso: 0.6 },
            'Suspensão':     { attr: 'aderencia',     peso: 0.7 },
            'Chassi':        { attr: 'aerodinamica',  peso: 0.4, extra: { attr: 'aderencia', peso: 0.3 } },
            'Asa Dianteira': { attr: 'aerodinamica',  peso: 0.5 },
            'Asa Traseira':  { attr: 'aerodinamica',  peso: 0.5 }
        };

        const cfg = mapa[tipoPeca];
        if (!cfg) return null;

        // Captura valores antes da alteração
        const antes = { ...equipe.carro };

        const teto = 92;
        equipe.carro[cfg.attr] = Math.min(teto,
            Math.round((equipe.carro[cfg.attr] || 70) + melhoria * cfg.peso)
        );
        if (cfg.extra) {
            equipe.carro[cfg.extra.attr] = Math.min(teto,
                Math.round((equipe.carro[cfg.extra.attr] || 70) + melhoria * cfg.extra.peso)
            );
        }

        equipe.componenteNivel[tipoPeca] = pecaNivel;

        // Retorna o delta para exibição
        const delta = {};
        for (const attr of Object.keys(equipe.carro)) {
            const diff = Math.round((equipe.carro[attr] - (antes[attr] || 0)) * 10) / 10;
            if (diff !== 0) delta[attr] = { antes: antes[attr], depois: equipe.carro[attr], diff };
        }
        return delta;
    }

    // Gera 2 a 3 encomendas externas para o início da temporada.
    // Apenas equipes na metade de baixo do grid pedem peças.
    function gerarEncomendasExternas() {
        const tiposPeca   = ['Motor', 'Suspensão', 'Chassi', 'Asa Dianteira', 'Asa Traseira'];
        const equipesAptas = equipesIA.filter(e => {
            // Considera "pequena" se a média dos atributos do carro for < 89
            const vals = Object.values(e.carro);
            const media = vals.reduce((s, v) => s + v, 0) / vals.length;
            return media < 89;
        });

        if (equipesAptas.length === 0) return [];

        const qtd = Math.min(equipesAptas.length, 2 + Math.floor(Math.random() * 2)); // 2 ou 3
        const escolhidas = [...equipesAptas].sort(() => Math.random() - 0.5).slice(0, qtd);

        return escolhidas.map((equipe, i) => {
            const tipo     = tiposPeca[Math.floor(Math.random() * tiposPeca.length)];
            const nivelPedido = (equipe.componenteNivel?.[tipo] || 3) + 1 + Math.floor(Math.random() * 2);
            const nivel    = Math.min(nivelPedido, 9); // pede nível superior ao que tem, máx 9
            // Custo mais caro que o normal (bônus de 40% sobre o preço base)
            const custoBase = nivel * 3 * 80000;
            const custoPago = Math.round(custoBase * 1.4);
            return {
                id:        Date.now() + i + Math.random(),
                equipeNome: equipe.nome,
                tipoPeca:  tipo,
                nivelPedido: nivel,
                custoPago,          // quanto o jogador recebe ao entregar
                status:    'pendente' // 'pendente' | 'aceita' | 'recusada' | 'concluida'
            };
        });
    }

    // Aceita uma encomenda externa: inicia o projeto e libera 1 slot bônus daquele tipo.
    function aceitarEncomendaExterna(encomendaId) {
        const encomenda = (gameState.encomendasExternas || []).find(e => e.id === encomendaId);
        if (!encomenda || encomenda.status !== 'pendente') return;

        if (!podeConstruirPeca(encomenda.tipoPeca) && (gameState.quotaBonus[encomenda.tipoPeca] || 0) === 0) {
            // Mesmo sem slot próprio, aceitar encomenda cria o slot bônus imediatamente
        }

        // Encontra qualquer especialista compatível para o projeto
        const mapaEsp = {
            'Motor':         'Engenheiro de Motor',
            'Suspensão':     'Projetista',
            'Chassi':        'Projetista',
            'Asa Dianteira': 'Aerodinamicista',
            'Asa Traseira':  'Aerodinamicista'
        };
        const tipoEsp   = mapaEsp[encomenda.tipoPeca];
        const especialista = gameState.escuderia.especialistas.find(e => e.tipo === tipoEsp)
                          || gameState.escuderia.especialistas[0];

        if (!especialista) {
            alert('Você precisa de pelo menos um especialista contratado para aceitar encomendas externas.');
            return;
        }

        // Duração baseada no nível pedido: peças mais avançadas demoram mais
        const duracao = encomenda.nivelPedido >= 8 ? 5 : encomenda.nivelPedido >= 6 ? 3 : 2;

        // Inicia o projeto marcado como encomenda externa
        gameState.projetosEmAndamento.push({
            id:              encomenda.id,
            tipoPeca:        encomenda.tipoPeca,
            nomeEspecialista: especialista.nome,
            nivelEspecialista: especialista.nivel,
            duracaoOriginal: duracao,
            duracaoRestante: duracao,
            status:          'em_andamento',
            encomendaExterna: true,
            encomendaEquipe:  encomenda.equipeNome,
            encomendaCustoPago: encomenda.custoPago,
            encomendaNivelPedido: encomenda.nivelPedido
        });

        // Libera 1 slot bônus para aquele tipo de peça
        gameState.quotaBonus[encomenda.tipoPeca] = (gameState.quotaBonus[encomenda.tipoPeca] || 0) + 1;

        // Marca como aceita
        encomenda.status = 'aceita';

        const cotaTotal = (gameState.quotaAnual[encomenda.tipoPeca] || 4) + (gameState.quotaBonus[encomenda.tipoPeca] || 0);
        alert(`Encomenda aceita!\n\nVocê irá desenvolver uma peça de ${encomenda.tipoPeca} para a ${encomenda.equipeNome}.\n\n✅ +1 slot de ${encomenda.tipoPeca} liberado (cota agora: ${cotaTotal})\n💰 Receberá R$ ${encomenda.custoPago.toLocaleString('pt-BR')} na entrega.\n⏱️ Duração: ${duracao} corrida(s).`);
        updateUI();
        saveGame();
    }

    // Recusa uma encomenda externa sem nenhum efeito colateral.
    function recusarEncomendaExterna(encomendaId) {
        const encomenda = (gameState.encomendasExternas || []).find(e => e.id === encomendaId);
        if (encomenda) encomenda.status = 'recusada';
        updateUI();
        saveGame();
    }

    // Chamada em processarProjetosConcluidos quando o projeto é uma encomenda externa.
    // Aplica a peça na IA, paga o jogador e registra a conclusão.
    function concluirEncomendaExterna(projeto) {
        const equipe = equipesIA.find(e => e.nome === projeto.encomendaEquipe);
        let deltaMsg = '';

        if (equipe) {
            const delta = aplicarPecaNaIA(equipe, projeto.tipoPeca, projeto.encomendaNivelPedido || 7);
            equipe.relacaoComJogador = 'parceira';

            if (delta && Object.keys(delta).length > 0) {
                const nomesAttr = {
                    potencia: 'Potência', aerodinamica: 'Aerodinâmica',
                    aderencia: 'Aderência', confiabilidade: 'Confiabilidade'
                };
                const linhas = Object.entries(delta).map(([attr, v]) =>
                    `  📈 ${nomesAttr[attr] || attr}: ${v.antes} → ${v.depois} (+${v.diff})`
                ).join('\n');
                deltaMsg = `\n\n🔧 Novos atributos da ${projeto.encomendaEquipe}:\n${linhas}`;
            } else {
                deltaMsg = `\n\n⚠️ A ${projeto.encomendaEquipe} já possuía componente de nível igual ou superior — sem melhoria de atributos.`;
            }
        }

        gameState.escuderia.dinheiro += projeto.encomendaCustoPago || 0;
        const encomenda = (gameState.encomendasExternas || []).find(e => e.id === projeto.id);
        if (encomenda) encomenda.status = 'concluida';
        projeto.status = 'entregue';

        setTimeout(() => alert(
            `Encomenda entregue!\n\n` +
            `A ${projeto.encomendaEquipe} recebeu a peça de ${projeto.tipoPeca}.\n` +
            `💰 R$ ${(projeto.encomendaCustoPago || 0).toLocaleString('pt-BR')} creditados.\n` +
            `🤝 ${projeto.encomendaEquipe} agora é sua equipe parceira por esta temporada.` +
            deltaMsg
        ), 500);
    }

    // Renderiza o painel de encomendas externas na aba Escuderia.
    function renderEncomendasExternas() {
        const container = document.getElementById('encomendas-externas-container');
        if (!container) return;

        const pendentes = (gameState.encomendasExternas || []).filter(e => e.status === 'pendente');
        const aceitas   = (gameState.encomendasExternas || []).filter(e => e.status === 'aceita');

        if (!gameState.fornecedorAtivo || (pendentes.length === 0 && aceitas.length === 0)) {
            container.innerHTML = '<p style="color:var(--cor-texto-secundario);font-size:0.9em;">Nenhuma encomenda disponível no momento.</p>';
            return;
        }

        let html = '';

        pendentes.forEach(enc => {
            const quotaAtual = resumoCota(enc.tipoPeca);
            html += `
            <div class="encomenda-card">
                <div class="encomenda-header">
                    <strong>${enc.equipeNome}</strong>
                    <span class="badge-encomenda">Pendente</span>
                </div>
                <p>Peça solicitada: <strong>${enc.tipoPeca} nível ${enc.nivelPedido}</strong></p>
                <p>Pagamento na entrega: <strong>R$ ${enc.custoPago.toLocaleString('pt-BR')}</strong></p>
                <p>Bônus: <strong>+1 slot de ${enc.tipoPeca}</strong> (cota atual: ${quotaAtual})</p>
                <div class="encomenda-acoes">
                    <button class="btn-corrida btn-real" data-action="aceitar-encomenda" data-encomenda-id="${enc.id}">Aceitar</button>
                    <button class="btn-corrida" data-action="recusar-encomenda" data-encomenda-id="${enc.id}">Recusar</button>
                </div>
            </div>`;
        });

        aceitas.forEach(enc => {
            const projeto = gameState.projetosEmAndamento.find(p => p.id === enc.id);
            const restante = projeto ? projeto.duracaoRestante : '?';
            html += `
            <div class="encomenda-card encomenda-aceita">
                <div class="encomenda-header">
                    <strong>${enc.equipeNome}</strong>
                    <span class="badge-encomenda badge-aceita">Em desenvolvimento</span>
                </div>
                <p>Peça: <strong>${enc.tipoPeca} nível ${enc.nivelPedido}</strong></p>
                <p>Restam <strong>${restante} corrida(s)</strong> para conclusão.</p>
                <p>💰 R$ ${enc.custoPago.toLocaleString('pt-BR')} na entrega</p>
            </div>`;
        });

        container.innerHTML = html || '<p>Sem encomendas pendentes.</p>';
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // FIM — TETO DE PRODUÇÃO + SISTEMA DE FORNECEDOR
    // ═══════════════════════════════════════════════════════════════════════════

    function processarFimDeTemporada() {
        // ── Conclui todos os projetos em andamento (passa o off-season) ──
        gameState.projetosEmAndamento.forEach(projeto => {
            if (projeto.status === 'em_andamento') {
                projeto.duracaoRestante = 0;
                projeto.status = 'concluido';
                projeto.pecaConcluida = criarPecaDeProjeto(projeto);
            }
        });

        processarReajusteSalarialEspecialistas();
        processarEnvelhecimentoPilotos();
        processarEvolucaoAcademia();
        atualizarMercadoDePilotos(gameState.pilotos);
        evoluirCarrosIA();

        gameState.campeonato.ano++;
        gameState.campeonato.corridaAtualIndex = 0;
        gameState.campeonato.classificacaoPilotos = [];
        gameState.campeonato.classificacaoConstrutores = [];
        gameState.campeonato.resultadosCorridas = [];
        gameState.campeonato.feriaVeraoFeita = false;

        // ── Teto de produção e fornecedor ─────────────────────────────────────
        const temporadaNumero = gameState.campeonato.ano - 2025; // T1=2026, T3=2028...

        // Ativa mecânicas que estavam pendentes (jogo que foi atualizado no meio da temporada)
        if (gameState.novasMecanicasPendentes) {
            gameState.novasMecanicasPendentes = false;
            gameState.tetoAtivo       = true;
            gameState.fornecedorAtivo = true;
            gameState.comunicadoRegulatorio = true; // flag para o modal exibir o aviso
        }

        // Ativa naturalmente ao chegar na T3 (jogos novos que chegaram aqui)
        if (temporadaNumero >= 3 && !gameState.tetoAtivo) {
            gameState.tetoAtivo       = true;
            gameState.fornecedorAtivo = true;
            gameState.comunicadoRegulatorio = true;
        }

        // Atualiza as cotas a cada 2 temporadas (T3-T4, T5-T6, T7-T8...)
        if (gameState.tetoAtivo && temporadaNumero >= 3 && (temporadaNumero - 3) % 2 === 0) {
            gameState.quotaAnual = gerarNovasCotas(temporadaNumero);
            if ((temporadaNumero - 3) % 2 === 0 && temporadaNumero > 3) {
                gameState.comunicadoRegulatorio = true; // novas regras também anunciam
            }
        }

        // Reseta contadores e bônus de produção para a nova temporada
        if (gameState.tetoAtivo) {
            gameState.producaoAnual = { 'Motor': 0, 'Suspensão': 0, 'Chassi': 0, 'Asa Dianteira': 0, 'Asa Traseira': 0 };
            gameState.quotaBonus    = { 'Motor': 0, 'Suspensão': 0, 'Chassi': 0, 'Asa Dianteira': 0, 'Asa Traseira': 0 };
        }

        // Reseta relações de parceria (duram 1 temporada)
        equipesIA.forEach(e => { e.relacaoComJogador = 'neutra'; });

        // Gera novas encomendas externas para a temporada que começa
        if (gameState.fornecedorAtivo) {
            gameState.encomendasExternas = gerarEncomendasExternas();
        }
        // ── Fim teto / fornecedor ─────────────────────────────────────────────

        // Arquiva o extrato do ano encerrado e reseta o histórico da temporada atual
        if (!gameState.historicoAnualMarketing) gameState.historicoAnualMarketing = [];
        const anoEncerrado = gameState.campeonato.ano - 1;
        const snapItens = JSON.parse(JSON.stringify(gameState.historicoMarketing || {}));
        const totalAno = Object.values(snapItens).reduce((s, v) => s + (v.totalReceita || 0), 0);
        if (totalAno > 0) {
            gameState.historicoAnualMarketing.push({ ano: anoEncerrado, itens: snapItens });
        }
        gameState.historicoMarketing = {};
        gameState.historicoVendasPorCorrida = [];
    }

    function processarPagamentoDeSalarios() {
        let totalSalariosPilotos = 0;
        let totalSalariosEquipe = 0;
        const meusPilotos = gameState.pilotos.filter(p => p.status === 'Jogador' || p.status === 'Reserva');
        meusPilotos.forEach(piloto => {
            totalSalariosPilotos += piloto.salario || 0;
        });
        gameState.escuderia.especialistas.forEach(especialista => {
            totalSalariosEquipe += especialista.salario || 0;
        });
        const despesaTotal = totalSalariosPilotos + totalSalariosEquipe;
        gameState.escuderia.dinheiro -= despesaTotal;
        if (despesaTotal > 0) {
            setTimeout(() => {
                alert(`Pagamentos processados após a corrida:\n\nSalário dos Pilotos: R$ ${totalSalariosPilotos.toLocaleString('pt-BR')}\nSalário da Equipe Técnica: R$ ${totalSalariosEquipe.toLocaleString('pt-BR')}\n\nDespesa Total: R$ ${despesaTotal.toLocaleString('pt-BR')}`);
            }, 2000);
        }
    }

    function processarReajusteSalarialEspecialistas() {
        if (gameState.escuderia.especialistas.length === 0) return;
        const classificacaoConstrutores = [...gameState.campeonato.classificacaoConstrutores].sort((a, b) => b.pontos - a.pontos);
        const nossaPosicao = classificacaoConstrutores.findIndex(e => e.equipe === gameState.escuderia.nome) + 1;
        let percentualDeAumento = 0;
        const ano = gameState.campeonato.ano;
        if (ano < 2028) {
            if (nossaPosicao === 1) percentualDeAumento = 0.40;
            else if (nossaPosicao <= 5) percentualDeAumento = 0.30;
            else if (nossaPosicao <= 8) percentualDeAumento = 0.15;
            else percentualDeAumento = 0.05;
        } else {
            if (nossaPosicao === 1) percentualDeAumento = 0.80;
            else if (nossaPosicao <= 5) percentualDeAumento = 0.60;
            else if (nossaPosicao <= 8) percentualDeAumento = 0.30;
            else percentualDeAumento = 0.10;
        }
        const detalhesReajuste = [];
        gameState.escuderia.especialistas.forEach(especialista => {
            const salarioAntigo = especialista.salario;
            especialista.salario = Math.round(salarioAntigo * (1 + percentualDeAumento));
            detalhesReajuste.push(`${especialista.nome}: R$ ${salarioAntigo.toLocaleString('pt-BR')} -> R$ ${especialista.salario.toLocaleString('pt-BR')}`);
        });
        setTimeout(() => {
            // Reajuste silencioso — informado via modal de fim de temporada
        }, 1000);
    }

    function desbloquearItemMarketing(nomeItem) {
    const itemJogo = gameState.marketing[nomeItem];
    const itemCatalogo = catalogoMarketing[nomeItem];

    if (!itemJogo || !itemCatalogo) {
        alert("Erro: Item de marketing não encontrado!");
        return;
    }

    const custoDesbloqueio = itemCatalogo.custo_desbloqueio;
    if (gameState.escuderia.dinheiro < custoDesbloqueio) {
        alert(`Dinheiro insuficiente! Custo para desbloquear: R$ ${custoDesbloqueio.toLocaleString('pt-BR')}`);
        return;
    }

    if (confirm(`Deseja desbloquear "${nomeItem}" por R$ ${custoDesbloqueio.toLocaleString('pt-BR')}?`)) {
        gameState.escuderia.dinheiro -= custoDesbloqueio;
        itemJogo.desbloqueado = true;
        alert(`"${nomeItem}" desbloqueado com sucesso!`);
        updateUI();
        saveGame();
    }
}

    /**
     * Produz uma quantidade de um item de marketing, cobrando o custo de produção.
     */
    function produzirItemMarketing(nomeItem, quantidadeStr) {
        const quantidade = parseInt(quantidadeStr);
        if (isNaN(quantidade) || quantidade <= 0) {
            alert("Quantidade inválida.");
            return;
        }

        const itemJogo = gameState.marketing[nomeItem];
        const itemCatalogo = catalogoMarketing[nomeItem];

        if (!itemJogo || !itemCatalogo) {
            alert("Erro: Item de marketing não encontrado!");
            return;
        }

        const custoTotal = quantidade * itemCatalogo.custo_producao;
        if (gameState.escuderia.dinheiro < custoTotal) {
            alert(`Dinheiro insuficiente! Custo total da produção: R$ ${custoTotal.toLocaleString('pt-BR')}`);
            return;
        }

        if (!confirm(`Produzir ${quantidade.toLocaleString('pt-BR')} unidade(s) de "${nomeItem}"?\n\nCusto total: R$ ${custoTotal.toLocaleString('pt-BR')}`)) return;

        gameState.escuderia.dinheiro -= custoTotal;
        itemJogo.inventario += quantidade;
        // Atualiza o lote de referência — usado como âncora no cálculo de vendas
        itemJogo.lote_referencia = Math.max(itemJogo.lote_referencia || 0, quantidade);

        alert(`${quantidade.toLocaleString('pt-BR')} unidade(s) de "${nomeItem}" produzida(s) com sucesso!`);
        updateUI();
        saveGame();
    }


    function melhorarInstalacao(instalacaoId) {
        const data = catalogoInstalacoes[instalacaoId];
        if (!data) { alert("Erro: Instalação não encontrada!"); return; }

        const nivelAtual = gameState.instalacoes[instalacaoId];
        const maxLevel = data.niveis.length - 1;

        if (nivelAtual >= maxLevel) { alert("Esta instalação já está no nível máximo!"); return; }

        // ERS começa em 1 (incluso), primeiro upgrade real é nível 2
        const proximoNivel = nivelAtual + 1;
        const custoProximoNivel = data.niveis[proximoNivel].custo;
        const tituloProximo = data.niveis[proximoNivel].titulo;

        if (gameState.escuderia.dinheiro < custoProximoNivel) {
            alert(`Dinheiro insuficiente! Custo para melhorar: R$ ${custoProximoNivel.toLocaleString('pt-BR')}`);
            return;
        }

        if (confirm(`Deseja melhorar "${data.nome}" para o Nível ${proximoNivel} — "${tituloProximo}" por R$ ${custoProximoNivel.toLocaleString('pt-BR')}?`)) {
            gameState.escuderia.dinheiro -= custoProximoNivel;
            gameState.instalacoes[instalacaoId]++;
            alert(`"${data.nome}" melhorada para Nível ${proximoNivel}: ${tituloProximo}!`);
            updateUI();
            saveGame();
        }
    }

    /**
     * Define o preço de venda de um item de marketing no estado do jogo.
     */
    function definirPrecoVendaMarketing(nomeItem, precoStr) {
        const novoPreco = parseFloat(precoStr);
        const itemJogo = gameState.marketing[nomeItem];
        const itemCatalogo = catalogoMarketing[nomeItem];

        if (!itemJogo || !itemCatalogo || isNaN(novoPreco)) return;

        // Apenas atualiza se o preço for maior ou igual ao mínimo para evitar erros
        if (novoPreco >= itemCatalogo.preco_venda_minimo) {
            itemJogo.preco_venda_definido = novoPreco;
            saveGame();
        }
    }
    function liquidarEstoqueMarketing(nomeItem) {
        const itemJogo = gameState.marketing[nomeItem];
        const itemCatalogo = catalogoMarketing[nomeItem];
        if (!itemJogo || itemJogo.inventario <= 0) {
            alert("Não há estoque para liquidar.");
            return;
        }
        const precoLiquidacaoUnitario = itemCatalogo.preco_venda_minimo * 0.5;
        const receitaTotal = itemJogo.inventario * precoLiquidacaoUnitario;
        if (confirm(`Tem certeza que deseja liquidar ${itemJogo.inventario} unidades de "${nomeItem}"?\n\nVocê receberá R$ ${precoLiquidacaoUnitario.toLocaleString('pt-BR')} por unidade (50% do preço mínimo), totalizando R$ ${receitaTotal.toLocaleString('pt-BR')}.`)) {
            gameState.escuderia.dinheiro += receitaTotal;
            itemJogo.inventario = 0;
            alert(`Estoque de "${nomeItem}" liquidado com sucesso!`);
            updateUI();
            saveGame();
        }
    }

    function promoverPilotoReserva(pilotoId) {
        const pilotoParaPromover = gameState.pilotos.find(p => p.id === pilotoId);
        if (!pilotoParaPromover || pilotoParaPromover.status !== 'Reserva') {
            alert("Este piloto não é um reserva válido.");
            return;
        }
        const vagasPrincipaisOcupadas = gameState.pilotos.filter(p => p.status === 'Jogador').length;
        if (vagasPrincipaisOcupadas >= 2) {
            alert("Não há vagas na equipe principal. Dispense um piloto antes de promover o reserva.");
            return;
        }
        const carroVago = gameState.carros.find(c => c.pilotoId === null);
        if (!carroVago) {
            alert("Erro interno: Nenhuma vaga de carro encontrada para o piloto promovido.");
            return;
        }
        pilotoParaPromover.status = 'Jogador';
        carroVago.pilotoId = pilotoParaPromover.id;
        alert(`${pilotoParaPromover.nome} foi promovido para a equipe principal!`);
        updateUI();
        saveGame();
    }

    function processarCrescimentoTorcedores(resultados) {
        if (!gameState.torcedores) gameState.torcedores = 4000;
        const ano = gameState.campeonato.ano;
        const isAno1 = ano <= 2026;
        const baseGrowth = isAno1 ? 80 : 20;
        const bonusPorPosicao = isAno1 ? 5 : 3;

        let bonus = 0;
        const playerResults = resultados.filter(r => r.isPlayer && r.tempoTotal !== Infinity);

        playerResults.forEach(res => {
            const finishPos = [...resultados].sort((a,b) => a.tempoTotal - b.tempoTotal).findIndex(r => r.piloto.id === res.piloto.id) + 1;
            const gridPos = res.gridPosition || 12;
            const posicoesGanhas = Math.max(0, gridPos - finishPos);
            bonus += posicoesGanhas * bonusPorPosicao;
            if (finishPos === 1) bonus += 250;
            else if (finishPos === 2) bonus += 120;
            else if (finishPos === 3) bonus += 70;
            else if (finishPos <= 6) bonus += 35;
            else if (finishPos <= 10) bonus += 15;
        });

        const classificacao = [...gameState.campeonato.classificacaoConstrutores].sort((a,b) => b.pontos - a.pontos);
        const nossaPosicao = classificacao.findIndex(e => e.equipe === gameState.escuderia.nome) + 1;
        let modCamp = 1.0;
        if (nossaPosicao === 1) modCamp = 1.5;
        else if (nossaPosicao <= 3) modCamp = 1.3;
        else if (nossaPosicao <= 6) modCamp = 1.1;

        const mktBonusPorNivel = [0, 0.05, 0.08, 0.15, 0.20, 0.25];
        const modMkt = 1.0 + (mktBonusPorNivel[gameState.instalacoes.marketing] || 0);

        const crescimento = Math.max(isAno1 ? 30 : 5, Math.round((baseGrowth + bonus) * modCamp * modMkt));
        gameState.torcedores += crescimento;
    }

    function calcularRostoPreco(nomeItem) {
        const itemJogo = gameState.marketing[nomeItem];
        const itemCatalogo = catalogoMarketing[nomeItem];
        if (!itemJogo || !itemCatalogo) return { mod: 1.0, rosto: '🙂', label: 'Neutro' };
        const markup = itemJogo.preco_venda_definido / itemCatalogo.preco_venda_minimo;
        if (markup <= 1.5) return { mod: 1.20, rosto: '😍', label: 'Torcedores adoram!', cor: '#27ae60' };
        if (markup <= 3.0) return { mod: 1.00, rosto: '🙂', label: 'Preço justo', cor: '#2980b9' };
        if (markup <= 5.0) return { mod: 0.70, rosto: '😐', label: 'Um pouco caro...', cor: '#f39c12' };
        if (markup <= 8.0) return { mod: 0.40, rosto: '😟', label: 'Muito caro!', cor: '#e67e22' };
        return { mod: 0.15, rosto: '😡', label: 'Absurdo! Ninguém compra.', cor: '#e10600' };
    }

    function simularVendasMarketing() {
        if (!gameState.torcedores) gameState.torcedores = 4000;

        const TAXAS_DEMANDA = {
            'Chaveiro':          0.025,
            'Bonés':             0.010,
            'Camisa':            0.006,
            'Carro em miniatura':0.004,
            'Anel com joia':     0.0008,
            'Combo Presentes':   0.0015,
        };

        let receitaTotal = 0;
        let relatorioVendas = "Relatório de Vendas de Marketing:\n\n";
        let algumaVendaOcorreu = false;

        // Modificador de desempenho na corrida
        const ultimaCorrida = gameState.campeonato.resultadosCorridas.at(-1);
        let modDesempenho = 1.0;
        if (ultimaCorrida) {
            const meusPilotosIds = gameState.carros.map(c => c.pilotoId);
            const melhorPos = ultimaCorrida.resultadoFinal
                .map((r, i) => ({ ...r, pos: i + 1 }))
                .filter(r => meusPilotosIds.includes(r.piloto.id))
                .reduce((best, r) => Math.min(best, r.pos), 999);
            if (melhorPos === 1) modDesempenho = 1.5;
            else if (melhorPos <= 3) modDesempenho = 1.3;
            else if (melhorPos <= 6) modDesempenho = 1.15;
            else if (melhorPos <= 10) modDesempenho = 1.05;
        }

        // Modificador de campeonato
        const classificacao = [...gameState.campeonato.classificacaoConstrutores].sort((a,b) => b.pontos - a.pontos);
        const nossaPos = classificacao.findIndex(e => e.equipe === gameState.escuderia.nome) + 1;
        let modCamp = 1.0;
        if (nossaPos === 1) modCamp = 1.4;
        else if (nossaPos <= 3) modCamp = 1.2;
        else if (nossaPos <= 6) modCamp = 1.05;

        // Modificador de marketing
        const mktBonusPorNivel = [0, 0.05, 0.08, 0.15, 0.20, 0.25];
        const modMkt = 1.0 + (mktBonusPorNivel[gameState.instalacoes.marketing] || 0);

        const LIMIAR_LIQUIDACAO = 5;

        for (const nomeItem in gameState.marketing) {
            const itemJogo = gameState.marketing[nomeItem];
            const itemCatalogo = catalogoMarketing[nomeItem];
            if (!itemJogo || !itemJogo.desbloqueado || itemJogo.inventario <= 0) continue;

            const taxa = TAXAS_DEMANDA[nomeItem] || 0.005;
            const { mod: modPreco } = calcularRostoPreco(nomeItem);

            let unidadesVendidas = 0;
            if (itemJogo.inventario <= LIMIAR_LIQUIDACAO) {
                unidadesVendidas = itemJogo.inventario;
            } else {
                const demandaBase = gameState.torcedores * taxa * modPreco * modDesempenho * modCamp * modMkt;
                const variancia = 0.80 + Math.random() * 0.40;
                const calculado = Math.round(demandaBase * variancia);
                unidadesVendidas = Math.min(Math.max(0, calculado), itemJogo.inventario);
            }

            if (unidadesVendidas > 0) {
                const receitaItem = unidadesVendidas * itemJogo.preco_venda_definido;
                receitaTotal += receitaItem;
                itemJogo.inventario -= unidadesVendidas;
                const tagLiquidacao = (itemJogo.inventario === 0 && unidadesVendidas <= LIMIAR_LIQUIDACAO) ? ' 🏁 (últimas!)' : '';
                relatorioVendas += `- ${nomeItem}: ${unidadesVendidas} un. × R$ ${itemJogo.preco_venda_definido.toLocaleString('pt-BR')} = R$ ${receitaItem.toLocaleString('pt-BR')}${tagLiquidacao}\n`;

                if (!gameState.historicoMarketing) gameState.historicoMarketing = {};
                if (!gameState.historicoMarketing[nomeItem]) gameState.historicoMarketing[nomeItem] = { totalUnidades: 0, totalReceita: 0, corridasAtivas: 0 };
                gameState.historicoMarketing[nomeItem].totalUnidades += unidadesVendidas;
                gameState.historicoMarketing[nomeItem].totalReceita += receitaItem;
                gameState.historicoMarketing[nomeItem].corridasAtivas += 1;

                if (itemJogo.inventario === 0) {
                    itemJogo.lote_referencia = 0;
                    if (!gameState.notificacoes) gameState.notificacoes = {};
                    gameState.notificacoes.marketing = true;
                }
                algumaVendaOcorreu = true;
            }
        }

        if (algumaVendaOcorreu) {
            gameState.escuderia.dinheiro += receitaTotal;
            relatorioVendas += `\nTorcedores da equipe: ${gameState.torcedores.toLocaleString('pt-BR')}\nReceita Total: R$ ${receitaTotal.toLocaleString('pt-BR')}`;
            setTimeout(() => alert(relatorioVendas), 2500);
        }

        // Registra receita desta corrida no histórico por corrida (mesmo que seja 0)
        if (!gameState.historicoVendasPorCorrida) gameState.historicoVendasPorCorrida = [];
        gameState.historicoVendasPorCorrida.push({
            corrida: gameState.campeonato.corridaAtualIndex,
            receita: receitaTotal
        });
    }

    function processarEvolucaoPilotos() {
        const melhoriasJogador = [];
        const treinadorContratado = gameState.escuderia.especialistas.find(e => e.tipo === 'Treinador de Pilotos');
        gameState.pilotos.forEach(piloto => {
            const isPilotoTreinavel = piloto.status === 'Jogador' || piloto.status === 'Reserva';
            if (piloto.idade < 16 || piloto.idade > 30 || !isPilotoTreinavel) return;
            const crescimentoBase = Math.random() * 0.30;
            let bonusDesempenho = 0;
            const ultimaCorrida = gameState.campeonato.resultadosCorridas.at(-1);
            if (ultimaCorrida && piloto.status === 'Jogador') {
                const posicao = ultimaCorrida.resultadoFinal.findIndex(res => res.piloto.id === piloto.id) + 1;
                if (posicao > 0) {
                    if (posicao === 1) bonusDesempenho = Math.random() * 0.3 + 0.2;
                    else if (posicao <= 3) bonusDesempenho = Math.random() * 0.2;
                    else if (posicao <= 10) bonusDesempenho = Math.random() * 0.15;
                    else if (posicao <= 15) bonusDesempenho = Math.random() * 0.1;
                    else if (posicao <= 22) bonusDesempenho = Math.random() * 0.075;
                }
            }
            let crescimentoTotal = crescimentoBase + bonusDesempenho;
            const _simBonusPorNivel = [0, 0.05, 0.08, 0.10, 0.12, 0.15];
            const bonusSimulador = 1.0 + (_simBonusPorNivel[gameState.instalacoes.simulador] || 0);
            crescimentoTotal *= bonusSimulador;
            if (treinadorContratado) {
                if (piloto.status === 'Jogador') crescimentoTotal *= 2.75;
                else if (piloto.status === 'Reserva') crescimentoTotal *= 4.10;
            }
            if (crescimentoTotal > 0) {
                const atributosAntigos = { hab: piloto.habilidade, con: piloto.consistencia, ger: piloto.gerenciamentoPneus };
                // Pilotos titulares podem chegar a 98; reservas ficam limitados a 95
                const teto = piloto.status === 'Jogador' ? 98 : 95;
                piloto.habilidade         = Math.min(teto, piloto.habilidade         + crescimentoTotal * (Math.random() * 0.5 + 0.75));
                piloto.consistencia       = Math.min(teto, piloto.consistencia       + crescimentoTotal * (Math.random() * 0.4 + 0.4));
                piloto.gerenciamentoPneus = Math.min(teto, piloto.gerenciamentoPneus + crescimentoTotal * (Math.random() * 0.4 + 0.6));
                const detalhesMelhoria = [];
                if (Math.floor(piloto.habilidade) > Math.floor(atributosAntigos.hab)) detalhesMelhoria.push(`  Hab: ${Math.floor(atributosAntigos.hab)} -> ${Math.floor(piloto.habilidade)}`);
                if (Math.floor(piloto.consistencia) > Math.floor(atributosAntigos.con)) detalhesMelhoria.push(`  Con: ${Math.floor(atributosAntigos.con)} -> ${Math.floor(piloto.consistencia)}`);
                if (Math.floor(piloto.gerenciamentoPneus) > Math.floor(atributosAntigos.ger)) detalhesMelhoria.push(`  Ger: ${Math.floor(atributosAntigos.ger)} -> ${Math.floor(piloto.gerenciamentoPneus)}`);
                if (detalhesMelhoria.length > 0) {
                    const tipoPiloto = piloto.status === 'Reserva' ? 'Reserva' : 'Piloto';
                    melhoriasJogador.push(`${piloto.nome} (${tipoPiloto}):\n` + detalhesMelhoria.join('\n'));
                }
            }
        });
        if (melhoriasJogador.length > 0) {
            if (!gameState.notificacoes) gameState.notificacoes = {};
            gameState.notificacoes.pilotos = true;
            setTimeout(() => {
                alert("Relatório de Desenvolvimento de Pilotos:\n\nSeus pilotos evoluíram com o treinamento:\n\n" + melhoriasJogador.join('\n\n'));
            }, 3000);
        }
    }

    function exibirMensagemRadio(carroIndex, remetente, texto) {
        const container = document.getElementById('radio-display-box');
        if (!container) return;
        let nomeRemetenteFinal = '';
        if (remetente === 'Engenheiro') {
            nomeRemetenteFinal = `Engenheiro ${carroIndex + 1}`;
            container.style.borderLeftColor = '#e10600';
        } else {
            const pilotoId = gameState.carros[carroIndex].pilotoId;
            const piloto = gameState.pilotos.find(p => p.id === pilotoId);
            nomeRemetenteFinal = piloto ? piloto.nome.split(' ').pop() : 'Piloto';
            container.style.borderLeftColor = '#008cba';
        }
        container.innerHTML = `<strong>${nomeRemetenteFinal}:</strong> ${texto}`;
        container.classList.add('visible');
        setTimeout(() => {
            container.classList.remove('visible');
        }, 8000);
    }

    function gerarMensagensDeRadio() {
        for (let i = 0; i < gameState.carros.length; i++) {
            if (Math.random() > 0.25) continue;
            const pilotoId = gameState.carros[i].pilotoId;
            const participante = raceData.participantes.find(p => p.piloto.id === pilotoId);
            if (!participante) continue;
            const durabilidade = participante.durabilidadePneu;
            const modo = participante.modoAgressividade;
            let categoria = null;
            if (participante.posicao === 1) {
                const segundoLugar = raceData.participantes.find(p => p.posicao === 2);
                if (segundoLugar && segundoLugar.gapParaFrente < 1.0) {
                    categoria = catalogoMensagens.lidercorrida_perigo;
                } else {
                    categoria = catalogoMensagens.lidercorrida;
                }
            }
            else if (participante.posicao > 1 && participante.gapParaFrente > 0 && participante.gapParaFrente < 1.0) {
                categoria = catalogoMensagens.gap_pequeno;
            }
            else if (modo === 'atacar') {
                categoria = durabilidade > 50 ? catalogoMensagens.ataque_pneu_bom : catalogoMensagens.ataque_pneu_ruim;
            }
            else if (modo === 'conservar') {
                categoria = durabilidade > 40 ? catalogoMensagens.conservar_pneu_bom : catalogoMensagens.conservar_pneu_ruim;
            }
            const paradaInfo = participante.estrategia.paradas[participante.stintAtual];
            if (paradaInfo && paradaInfo.pararNaVolta === raceData.voltaAtual + 1) {
                categoria = catalogoMensagens.pit_stop_proximo;
            }
            if (categoria) {
                const mensagem = categoria[Math.floor(Math.random() * categoria.length)];
                exibirMensagemRadio(i, mensagem.remetente, mensagem.texto);
                return;
            }
        }
    }

    function atualizarSumarioProjeto() {
        const especialista = especialistasDisponiveis.find(e => e.id === projetoAtual.especialistaId);
        const duracaoEl = document.getElementById('project-duration');
        const tipoPeca = document.getElementById('project-part-type').value;
        if (!especialista || !duracaoEl) return;
        const duracao = parseInt(duracaoEl.value);
        let custoEstimado = (especialista.nivel * duracao * CUSTO_BASE_PROJETO) * 0.45;
        if (duracao === 10) custoEstimado *= 0.90;

        const infoDescontoEl = document.getElementById('project-discount-info');
        const linhasDesconto = [];
        const pecasAero = ["Asa Dianteira", "Asa Traseira", "Chassi"];

        // Túnel de Vento (peças aero)
        const nivelTunel = gameState.instalacoes.tunelDeVento;
        if (pecasAero.includes(tipoPeca) && nivelTunel > 0) {
            const desconto = calcularDescontoTunel();
            custoEstimado *= (1.0 - desconto);
            linhasDesconto.push(`💨 Túnel de Vento (Nvl ${nivelTunel}): -${Math.round(desconto * 100)}%`);
        }

        // Centro de Chassi
        const nivelChassis = gameState.instalacoes.centroChassis || 0;
        if (tipoPeca === 'Chassi' && nivelChassis > 0) {
            const desconto = calcularDescontoChassis();
            custoEstimado *= (1.0 - desconto);
            const bonusAtrib = Math.round(calcularBonusAtributosChassis() * 100);
            const reducaoTempo = nivelChassis >= 3 ? `${nivelChassis >= 5 ? '3–4' : nivelChassis >= 4 ? '2–3' : '1–2'} corridas a menos` : '0–1 corrida a menos';
            linhasDesconto.push(`🏗️ Centro de Chassi (Nvl ${nivelChassis}): -${Math.round(desconto * 100)}% custo | ${reducaoTempo} | +${bonusAtrib}% atributos`);
        }

        // Centro de Suspensões
        const nivelSuspensoes = gameState.instalacoes.centroSuspensoes || 0;
        if (tipoPeca === 'Suspensão' && nivelSuspensoes > 0) {
            const desconto = calcularDescontoSuspensoes();
            custoEstimado *= (1.0 - desconto);
            const reducaoTempo = nivelSuspensoes >= 3 ? `${nivelSuspensoes >= 5 ? '3–4' : nivelSuspensoes >= 4 ? '2–3' : '1–2'} corridas a menos` : '0–1 corrida a menos';
            linhasDesconto.push(`⚙️ Centro de Suspensões (Nvl ${nivelSuspensoes}): -${Math.round(desconto * 100)}% custo | ${reducaoTempo}`);
        }

        infoDescontoEl.innerHTML = linhasDesconto.length > 0
            ? linhasDesconto.map(l => `<p style="color:#28a745;font-size:0.9em;font-weight:bold;">${l}</p>`).join('')
            : '';

        document.getElementById('project-cost').textContent = custoEstimado.toLocaleString('pt-BR');
        document.getElementById('project-quality').textContent = duracao >= 10 ? 'Excepcional' : duracao >= 5 ? 'Excelente' : duracao >= 3 ? 'Boa' : 'Regular';
    }

    function processarDesgastePecas() {
        const pecasEquipadasIds = new Set(
            gameState.carros.flatMap(c => Object.values(c.pecas).filter(id => id !== null))
        );
        const nomesPecasDegradadas = [];
        gameState.todasAsPecas.forEach(peca => {
            if (pecasEquipadasIds.has(peca.instanceId)) {
                if (peca.corridasUsadas === undefined) peca.corridasUsadas = 0;
                if (!peca.atributosOriginais) peca.atributosOriginais = JSON.parse(JSON.stringify(peca.atributos));
                peca.corridasUsadas++;
                let intervaloDesgaste;
                const nivelPeca = peca.nivel;
                if (nivelPeca <= 3) intervaloDesgaste = 12;
                else if (nivelPeca <= 6) intervaloDesgaste = 10;
                else if (nivelPeca <= 8) intervaloDesgaste = 6;
                else intervaloDesgaste = 5;
                if (peca.corridasUsadas > 0 && peca.corridasUsadas % intervaloDesgaste === 0) {
                    let foiDegradada = false;
                    for (const attr in peca.atributos) {
                        if (attr === 'confiabilidade') continue;
                        const percentualDesgaste = (Math.random() * 4 + 1) / 100;
                        const reducao = Math.ceil(peca.atributosOriginais[attr] * percentualDesgaste);
                        if (reducao > 0) {
                            peca.atributos[attr] = Math.max(1, peca.atributos[attr] - reducao);
                            foiDegradada = true;
                        }
                    }
                    if (foiDegradada) {
                        nomesPecasDegradadas.push(`${peca.nome} (Nvl ${peca.nivel})`);
                    }
                }
            }
        });
        if (nomesPecasDegradadas.length > 0) {
            setTimeout(() => {
                alert(`Atenção: O uso contínuo causou desgaste nas seguintes peças:\n\n- ${nomesPecasDegradadas.join('\n- ')}`);
            }, 1500);
        }
    }


    // ******************** 3: Funções de Animação e Renderização da UI ****************

    function loopAnimacaoCanvas() {
        if (!animacaoAtiva) return;

        const canvas = document.getElementById('track-canvas');
        if (!canvas || !raceData || !raceData.pista) {
             requestAnimationFrame(loopAnimacaoCanvas);
             return;
        }

        const ctx = canvas.getContext('2d');
        const pistaCoords = coordenadasPistas[raceData.pista.nome];

        if (!pistaCoords) {
            requestAnimationFrame(loopAnimacaoCanvas);
            return;
        }

        // Calcula os fatores de escala
        const scaleX = ctx.canvas.width / DESIGN_WIDTH;
        const scaleY = ctx.canvas.height / DESIGN_HEIGHT;

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        desenharPista(ctx, pistaCoords, scaleX, scaleY);
        desenharCarros(ctx, raceData.participantes, pistaCoords, scaleX, scaleY);

        requestAnimationFrame(loopAnimacaoCanvas);
    }

    function desenharPista(ctx, coords, scaleX, scaleY) {
        if (!coords || coords.length < 2) return;

        // Desenha a borda externa da pista
        ctx.strokeStyle = '#555';
        ctx.lineWidth = 22 * scaleY; // Escala a espessura da linha
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(coords[0].x * scaleX, coords[0].y * scaleY); // Escala a coordenada
        for (let i = 1; i < coords.length; i++) {
            ctx.lineTo(coords[i].x * scaleX, coords[i].y * scaleY); // Escala a coordenada
        }
        ctx.stroke();

        // Desenha a parte interna cinza da pista
        ctx.strokeStyle = '#888';
        ctx.lineWidth = 18 * scaleY; // Escala a espessura da linha
        ctx.beginPath();
        ctx.moveTo(coords[0].x * scaleX, coords[0].y * scaleY); // Escala a coordenada
        for (let i = 1; i < coords.length; i++) {
            ctx.lineTo(coords[i].x * scaleX, coords[i].y * scaleY); // Escala a coordenada
        }
        ctx.stroke();

        // Desenha a linha de chegada
        const p0 = { x: coords[0].x * scaleX, y: coords[0].y * scaleY };
        const p1 = { x: coords[1].x * scaleX, y: coords[1].y * scaleY };

        const dx = p1.x - p0.x;
        const dy = p1.y - p0.y;
        const nx = -dy;
        const ny = dx;
        const length = Math.hypot(nx, ny);
        if (length === 0) return;
        const unx = nx / length;
        const uny = ny / length;

        const finishLineWidth = 25 * scaleY; // Escala a largura da linha
        const startLineX1 = p0.x - unx * (finishLineWidth / 2);
        const startLineY1 = p0.y - uny * (finishLineWidth / 2);
        const startLineX2 = p0.x + unx * (finishLineWidth / 2);
        const startLineY2 = p0.y + uny * (finishLineWidth / 2);

        ctx.beginPath();
        ctx.moveTo(startLineX1, startLineY1);
        ctx.lineTo(startLineX2, startLineY2);
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 7 * scaleY; // Escala a espessura da linha
        ctx.lineCap = 'butt';
        ctx.stroke();
    }



    function desenharCarros(ctx, participantes, pistaCoords, scaleX, scaleY) {
        // Validações iniciais para garantir que temos tudo para desenhar.
        if (!pistaCoords || pistaCoords.length === 0 || !participantes || participantes.length === 0) return;
        const FATOR_DE_ESPALHAMENTO_VISUAL = 15;

        // A cada quadro, garante que a lista de participantes está ordenada do líder (menor tempo) para o último.
        participantes.sort((a, b) => {
            if (a.tempoTotal === Infinity) return 1;
            if (b.tempoTotal === Infinity) return -1;
            return a.tempoTotal - b.tempoTotal;
        });

        // Calcula o comprimento total em pixels do traçado da pista.
        let totalLength = 0;
        for (let i = 0; i < pistaCoords.length - 1; i++) {
            const p1 = pistaCoords[i];
            const p2 = pistaCoords[i + 1];
            totalLength += Math.hypot(p2.x - p1.x, p2.y - p1.y);
        }
        if (totalLength === 0) return;

        desenharPista(ctx, pistaCoords, scaleX, scaleY); // Desenha o fundo da pista

        const lider = participantes[0];
        if (lider.tempoTotal === Infinity || !lider.timestampInicioVolta) return;

        // --- LÓGICA CENTRAL DA ANIMAÇÃO PROPORCIONAL ---

        // 1. Calcula o progresso da animação DENTRO do tick atual da simulação (um valor de 0.0 a 1.0).
        // Isso garante a suavidade do movimento entre as atualizações de 2 segundos.
        const tempoRealAtual = performance.now();
        const progressoNaAnimacao = Math.max(0, Math.min((tempoRealAtual - lider.timestampInicioVolta) / (raceData.intervaloReal || raceData.intervalo), 1));

        // 2. Calcula o progresso do LÍDER na corrida inteira, de forma interpolada.
        // Ex: Na volta 30 de 60, o líder estará em 50% de progresso.
        const voltasCompletasLider = raceData.voltaAtual > 1 ? raceData.voltaAtual - 1 : 0;
        const progressoLiderNaCorrida = (voltasCompletasLider + progressoNaAnimacao) / raceData.totalVoltas;

        // 3. Calcula o tempo total estimado para o líder completar a corrida inteira.
        const tempoTotalEstimadoDaCorrida = raceData.pista.tempoBaseVolta * raceData.totalVoltas;

        // 4. Itera sobre todos os carros para posicioná-los.
        participantes.forEach(p => {
            if (p.tempoTotal === Infinity) return;

            // Interpola o tempo total de CADA carro para o quadro atual, garantindo suavidade.
            const tempoTotalParticipanteInterpolado = p.tempoInicioVolta + ((p.tempoTotal - p.tempoInicioVolta) * progressoNaAnimacao);
            const tempoTotalLiderInterpolado = lider.tempoInicioVolta + ((lider.tempoTotal - lider.tempoInicioVolta) * progressoNaAnimacao);

            // Calcula a diferença de tempo (GAP) deste carro para o líder.
            const gapDeTempo = tempoTotalParticipanteInterpolado - tempoTotalLiderInterpolado;

            // Converte o GAP de tempo para um GAP de progresso na pista.
            // Um carro 80s atrás do líder em uma corrida de 8000s estará 1% para trás na pista.
            const gapDeProgresso = (gapDeTempo / tempoTotalEstimadoDaCorrida) * FATOR_DE_ESPALHAMENTO_VISUAL;

            // A posição final do carro no canvas é a posição do líder MENOS o seu gap.
            const progressoFinal = progressoLiderNaCorrida - gapDeProgresso;

            // Converte o progresso (0.0 a 1.0) em uma distância em pixels no traçado.
            const distanciaPercorrida = totalLength * progressoFinal;

            // O resto da lógica encontra o ponto (x,y) exato na pista e desenha o carro.
            let distanciaAcumulada = 0;
            let pontoAtual = { x: 0, y: 0 };
            for (let i = 0; i < pistaCoords.length - 1; i++) {
                const pontoInicio = pistaCoords[i];
                const pontoFim = pistaCoords[i + 1];
                const segmentoLength = Math.hypot(pontoFim.x - pontoInicio.x, pontoFim.y - pontoInicio.y);
                if (distanciaAcumulada + segmentoLength >= distanciaPercorrida) {
                    const fracaoSegmento = (distanciaPercorrida - distanciaAcumulada) / segmentoLength;
                    pontoAtual.x = pontoInicio.x + (pontoFim.x - pontoInicio.x) * fracaoSegmento;
                    pontoAtual.y = pontoInicio.y + (pontoFim.y - pontoInicio.y) * fracaoSegmento;
                    break;
                }
                distanciaAcumulada += segmentoLength;
            }

            const finalX = pontoAtual.x * scaleX;
            const finalY = pontoAtual.y * scaleY;
            const carImageWidth = 20 * scaleX;
            const carImageHeight = 12 * scaleY;
            const backgroundWidth = carImageWidth - (6 * scaleX);
            const backgroundHeight = carImageHeight - (4 * scaleY);
            const carImageX = finalX - carImageWidth / 2;
            const carImageY = finalY - carImageHeight / 2;
            const backgroundX = finalX - backgroundWidth / 2;
            const backgroundY = finalY - backgroundHeight / 2;

            ctx.fillStyle = getCorDaEquipe(p.equipe);
            ctx.fillRect(backgroundX, backgroundY, backgroundWidth, backgroundHeight);
            ctx.drawImage(carIcon, carImageX, carImageY, carImageWidth, carImageHeight);
        });
    }

    async function animarGridDeLargada(grid, container) {
        if (!container) return;
        container.innerHTML = '<ol></ol>';
        const listElement = container.querySelector('ol');
        for (let i = grid.length - 1; i >= 0; i--) {
            const piloto = grid[i];
            const posicao = i + 1;
            const li = document.createElement('li');
            li.style.borderLeftColor = getCorDaEquipe(piloto.equipe);
            li.innerHTML = `<div><span class="pos">${posicao}.</span> <span class="piloto">${piloto.piloto.nome}</span> <span class="equipe">(${piloto.equipe})</span></div><span class="qualy-time">${formatLapTime(piloto.tempoQualy)}</span>`;
            listElement.appendChild(li);
            await new Promise(resolve => setTimeout(resolve, 900));
        }
    }

    async function animarLuzesDeLargada() {
        const modal = document.getElementById('lights-out-modal');
        const container = document.getElementById('lights-container');
        if (!modal || !container) return;
        const targetColumn = document.querySelector('.corrida-start-container');
        if (!targetColumn) return;
        const rect = targetColumn.getBoundingClientRect();
        const centroHorizontal = rect.left + (rect.width / 2);
        container.style.left = `${centroHorizontal}px`;
        container.innerHTML = '';
        modal.classList.add('visible');
        modal.classList.remove('hidden');
        let luzes = [];
        for (let i = 0; i < 5; i++) {
            const luz = document.createElement('div');
            luz.className = 'light-circle';
            container.appendChild(luz);
            luzes.push(luz);
        }
        for (const luz of luzes) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            luz.classList.add('on');
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
        container.innerHTML = '';
        modal.classList.remove('visible');
        modal.classList.add('hidden');
    }

    async function animarBandeirada() {
        return new Promise(resolve => {
            const modal = document.getElementById('chequered-flag-modal');
            if (!modal) {
                resolve();
                return;
            }
            modal.classList.remove('hidden');
            modal.classList.add('visible');
            setTimeout(() => {
                modal.classList.remove('visible');
                setTimeout(() => {
                    modal.classList.add('hidden');
                    resolve();
                }, 500);
            }, 4000);
        });
    }

    function redimensionarCanvas() {
        const canvas = document.getElementById('track-canvas');
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        if (animacaoAtiva && raceData.pista) {
            const ctx = canvas.getContext('2d');
            const pistaCoords = coordenadasPistas[raceData.pista.nome];

            // Calcula e passa os fatores de escala também aqui
            const scaleX = canvas.width / DESIGN_WIDTH;
            const scaleY = canvas.height / DESIGN_HEIGHT;

            desenharPista(ctx, pistaCoords, scaleX, scaleY);
            desenharCarros(ctx, raceData.participantes, pistaCoords, scaleX, scaleY);
        }
    }

    function formatLapTime(timeInSeconds) {
        if (typeof timeInSeconds !== 'number' || !isFinite(timeInSeconds)) return '---';
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        const milliseconds = Math.round((timeInSeconds * 1000) % 1000);
        return `${minutes}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
    }

    function getTyreWearColor(durabilidade) {
        if (durabilidade > 70) return '#3c9a3c';
        if (durabilidade > 40) return '#fca311';
        return '#e63946';
    }

    function gerarHtmlAtributosPeca(peca) {
        if (!peca || !peca.atributos) return '';
        if (!peca.atributosOriginais) {
            peca.atributosOriginais = JSON.parse(JSON.stringify(peca.atributos));
        }
        const atributosHtml = Object.entries(peca.atributos).map(([attr, val]) => {
            const nomeAtributo = attr.charAt(0).toUpperCase() + attr.slice(1);
            let desgasteHtml = '';
            const originalVal = peca.atributosOriginais[attr];
            if (originalVal && val < originalVal) {
                const diferenca = val - originalVal;
                desgasteHtml = ` <span class="desgaste-negativo">(${diferenca})</span>`;
            }
            return `<p><strong>${nomeAtributo}:</strong> ${val}${desgasteHtml}</p>`;
        }).join('');
        const corridasUsadasHtml = `<p class="desgaste-info"><strong>Corridas Usadas:</strong> ${peca.corridasUsadas || 0}</p>`;
        return `<div class="atributos-card">${atributosHtml}${corridasUsadasHtml}</div>`;
    }


    function gerarCardAposentadoHtml(entradaHall) {
        const piloto = entradaHall.piloto;
        if (!piloto) {
            return '<div class="piloto-card aposentado"><p>Erro ao carregar dados do piloto aposentado.</p></div>';
        }
        const gerarHtmlAtributo = (label, valor) => `<p><span>${label}:</span> <strong>${Math.round(valor)}</strong></p>`;
        return `
            <div class="piloto-card aposentado">
                <div class="piloto-rosto-container">
                    <img src="${piloto.rosto || 'img/Pilotos/default.png'}" alt="${piloto.nome}" class="piloto-rosto">
                </div>
                <div class="piloto-info-container">
                    <h4>${piloto.nome} (${piloto.idade} anos)</h4>
                    <div class="atributos">
                        ${gerarHtmlAtributo('Hab. Final', piloto.habilidade)}
                        ${gerarHtmlAtributo('Con. Final', piloto.consistencia)}
                        ${gerarHtmlAtributo('Ger. Final', piloto.gerenciamentoPneus)}
                    </div>
                    <div class="piloto-aposentado-info">
                        Aposentado em: ${entradaHall.anoAposentadoria}
                    </div>
                </div>
            </div>`;
    }


    function gerarCardPilotoHtml(piloto, cargo, vagaAberta) {
        const gerarHtmlAtributo = (label, valorAtual, valorBase) => {
            const valorAtualInt = Math.round(valorAtual);
            const valorBaseInt = Math.round(valorBase);
            let classe = '';
            if (valorAtualInt < valorBaseInt) classe = 'decline';
            if (valorAtualInt > valorBaseInt) classe = 'growth';
            return `<p><span>${label}:</span> <strong class="atributo-valor ${classe}">${valorAtualInt}</strong></p>`;
        };
        let cargoHtml = cargo ? `<div class="piloto-cargo-tag">${cargo}</div>` : '';
        let actionButtonHtml = '';
        const classeExtra = piloto.status === 'Reserva' ? 'reserva' : '';
        const corEquipe = getCorDaEquipe(piloto.status);

        if (piloto.status === 'Jogador' || piloto.status === 'Reserva') {
            if (piloto.idade >= 35 && piloto.status === 'Jogador') {
                actionButtonHtml += `<button class="btn-dispensar-piloto" data-action="dispensar-piloto" data-piloto-id="${piloto.id}" style="background-color: #ffc107; color: #333;">Aposentar</button>`;
            } else {
                actionButtonHtml += `<button class="btn-dispensar-piloto" data-action="dispensar-piloto" data-piloto-id="${piloto.id}">Dispensar</button>`;
            }
            if (piloto.status === 'Reserva' && vagaAberta) {
                actionButtonHtml += `<button class="btn-contratar-piloto" data-action="promover-piloto" data-piloto-id="${piloto.id}">Promover</button>`;
            }
        } else if (piloto.status === 'Disponível') {
            actionButtonHtml = `<button class="btn-contratar-piloto" data-action="contratar-piloto" data-piloto-id="${piloto.id}">Contratar</button>`;
        } else if (piloto.status !== 'Indisponível') {
            actionButtonHtml = `<div class="piloto-equipe-tag" style="background-color: ${corEquipe};">Equipe: ${piloto.status}</div>`;
        }

        let infoFinanceiraHtml = '';
        if (piloto.status === 'Disponível') {
            infoFinanceiraHtml = `<p><span>Contrato:</span> <strong>R$ ${(piloto.precoContrato || 0).toLocaleString('pt-BR')}</strong></p>`;
        } else if (piloto.status === 'Jogador' || piloto.status === 'Reserva') {
            infoFinanceiraHtml = `<p><span>Salário/Corrida:</span> <strong>R$ ${(piloto.salario || 0).toLocaleString('pt-BR')}</strong></p>`;
        }

        return `
            <div class="piloto-card ${classeExtra}" style="border-left-color: ${corEquipe};">
                ${cargoHtml}
                <div class="piloto-rosto-container">
                    <img src="${piloto.rosto || 'img/Pilotos/default.png'}" alt="${piloto.nome}" class="piloto-rosto">
                </div>
                <div class="piloto-info-container">
                    <h4>${piloto.nome} (${piloto.idade} anos)</h4>
                    <div class="atributos">
                        ${gerarHtmlAtributo('Habilidade', piloto.habilidade, piloto.atributosBase.habilidade)}
                        ${gerarHtmlAtributo('Consistência', piloto.consistencia, piloto.atributosBase.consistencia)}
                        ${gerarHtmlAtributo('Gerenc. Pneus', piloto.gerenciamentoPneus, piloto.atributosBase.gerenciamentoPneus)}
                        ${infoFinanceiraHtml}
                    </div>
                    <div class="card-actions">
                        ${actionButtonHtml}
                    </div>
                </div>
            </div>`;
    }

    async function fetchSvgText(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`SVG não encontrado: ${url}`);
            return await response.text();
        } catch (error) {
            console.error(error);
            return '';
        }
    }

    async function renderizarEmblema(containerElement, emblemaConfig) {
        if (!containerElement || !emblemaConfig) {
            if (containerElement) containerElement.innerHTML = '';
            return;
        }
        containerElement.innerHTML = '';
        containerElement.style.backgroundColor = emblemaConfig.corFundo;
        const [formaSvgText, iconeSvgText] = await Promise.all([
            fetchSvgText(`img/emblemas/formas/${emblemaConfig.forma}`),
            fetchSvgText(`img/emblemas/icones/${emblemaConfig.icone}`)
        ]);
        const sanitizarSvg = (svgText) => {
            if (!svgText) return '';
            let sanitized = svgText.replace(/ width="[^"]*"/g, '').replace(/ height="[^"]*"/g, '');
            sanitized = sanitized.replace('<svg', '<svg width="100%" height="100%"');
            return sanitized;
        };
        const formaDiv = document.createElement('div');
        const iconeDiv = document.createElement('div');
        formaDiv.innerHTML = sanitizarSvg(formaSvgText);
        iconeDiv.innerHTML = sanitizarSvg(iconeSvgText);
        const iconeNaFrente = emblemaConfig.iconeNaFrente !== false;
        const escalaIcone = emblemaConfig.escalaIcone || 0.7;
        Object.assign(formaDiv.style, { position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', pointerEvents: 'none', zIndex: iconeNaFrente ? 1 : 2 });
        Object.assign(iconeDiv.style, { position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', pointerEvents: 'none', zIndex: iconeNaFrente ? 2 : 1, transform: `scale(${escalaIcone})` });
        containerElement.appendChild(formaDiv);
        containerElement.appendChild(iconeDiv);
        formaDiv.querySelectorAll('svg path, svg rect, svg circle, svg polygon').forEach(shape => shape.setAttribute('fill', emblemaConfig.corForma));
        iconeDiv.querySelectorAll('svg path, svg rect, svg circle, svg polygon').forEach(shape => shape.setAttribute('fill', emblemaConfig.corIcone));
    }

    function atualizarPreviewEmblema() {
        const previewContainer = document.getElementById('preview-emblema');
        if (!previewContainer) return;
        const emblemaAtual = gameState.escuderia.emblema;
        if (!emblemaAtual) return;
        const escala = emblemaAtual.escalaIcone || 0.7;
        const iconeEstaNaFrente = emblemaAtual.iconeNaFrente !== false;
        const corFundoInput = document.getElementById('cor-fundo');
        if (emblemaAtual.corFundo === 'transparent') {
            corFundoInput.value = '#f0f2f5';
        } else {
            corFundoInput.value = emblemaAtual.corFundo;
        }
        document.getElementById('cor-forma').value = emblemaAtual.corForma;
        document.getElementById('cor-icone').value = emblemaAtual.corIcone;
        document.getElementById('escala-icone').value = escala * 100;
        document.getElementById('escala-icone-valor').textContent = Math.round(escala * 100);
        document.getElementById('btn-trocar-camada').textContent = iconeEstaNaFrente ? 'Mover Ícone para Trás' : 'Trazer Ícone para Frente';
        document.querySelectorAll('.seletor-item').forEach(item => {
            const isFormaAtiva = item.dataset.tipo === 'forma' && item.dataset.valor === emblemaAtual.forma;
            const isIconeAtivo = item.dataset.tipo === 'icone' && item.dataset.valor === emblemaAtual.icone;
            item.classList.toggle('active', isFormaAtiva || isIconeAtivo);
        });
        renderizarEmblema(previewContainer, emblemaAtual);
    }



    function renderAbaInstalacoes() {
        const container = document.getElementById('instalacoes-container');
        if (!container) return;

        const corBadge = ['#9e9e9e','#4caf50','#2196f3','#ff9800','#9c27b0','#e91e63'];

        container.innerHTML = Object.entries(catalogoInstalacoes).map(([id, data]) => {
            const nivelAtual = gameState.instalacoes[id] ?? 0;
            const maxLevel = data.niveis.length - 1;
            const nivelInfo = data.niveis[nivelAtual];
            const isMax = nivelAtual >= maxLevel;
            const proximoNivel = nivelAtual + 1;
            const proximoInfo = !isMax ? data.niveis[proximoNivel] : null;

            // Barra de progresso com steps
            const stepsHtml = Array.from({ length: maxLevel }, (_, i) => {
                const stepNivel = i + 1;
                let cls = 'inst-step';
                if (stepNivel < proximoNivel) cls += ' adquirido';
                else if (stepNivel === proximoNivel - 1 || (isMax && stepNivel === maxLevel)) cls += ' nivel-atual';
                else if (!isMax && stepNivel === proximoNivel) cls += ' proximo';
                else cls += ' bloqueado';
                const label = stepNivel <= nivelAtual ? '✓' : stepNivel.toString();
                return `<div class="${cls}" title="Nível ${stepNivel}">${label}</div>${stepNivel < maxLevel ? '<div class="inst-step-linha"></div>' : ''}`;
            }).join('');

            // Lista de todos os níveis em accordion
            const niveisListaHtml = data.niveis.slice(1).map((n, i) => {
                const nv = i + 1;
                let tagCls = 'inst-nivel-tag bloqueado';
                let lockIcon = '🔒';
                if (nv < proximoNivel) { tagCls = 'inst-nivel-tag adquirido'; lockIcon = '✅'; }
                else if (nv === nivelAtual) { tagCls = 'inst-nivel-tag atual'; lockIcon = '⭐'; }
                const custoStr = n.custo > 0 ? `R$ ${n.custo.toLocaleString('pt-BR')}` : '(incluído)';
                return `<div class="${tagCls}">
                    <span class="inst-nivel-num">${lockIcon} Nível ${nv} — ${n.titulo}</span>
                    <span class="inst-nivel-custo">${custoStr}</span>
                    <p class="inst-nivel-desc">${n.descricao}</p>
                </div>`;
            }).join('');

            // Ações
            let acoesHtml;
            if (isMax) {
                acoesHtml = `<div class="inst-maximo-info">🏆 Nível máximo atingido!</div>`;
            } else {
                const temDinheiro = gameState.escuderia.dinheiro >= proximoInfo.custo;
                const custoStr = proximoInfo.custo > 0 ? `R$ ${proximoInfo.custo.toLocaleString('pt-BR')}` : '(incluído)';
                acoesHtml = `
                    <div class="inst-proximo-info">
                        <strong>Próximo: Nível ${proximoNivel} — ${proximoInfo.titulo}</strong><br>
                        <small>${proximoInfo.descricao}</small>
                    </div>
                    <button class="btn-melhorar-inst ${temDinheiro ? '' : 'disabled'}"
                        data-action="melhorar-instalacao" data-instalacao-id="${id}"
                        ${temDinheiro ? '' : 'disabled'}>
                        ⬆️ Melhorar — ${custoStr}
                    </button>`;
            }

            const badgeColor = corBadge[Math.min(nivelAtual, corBadge.length - 1)];
            const cardCls = nivelAtual > 0 ? 'inst-card inst-card-ativa' : 'inst-card inst-card-inativa';

            return `<div class="${cardCls}">
                <div class="inst-card-header">
                    <span class="inst-icone">${data.icone}</span>
                    <div class="inst-card-titulo">
                        <h4>${data.nome}</h4>
                        <p>${data.descricao}</p>
                    </div>
                    <span class="inst-nivel-badge" style="background:${badgeColor}">Nv ${nivelAtual}</span>
                </div>
                <div class="inst-progress-bar">${stepsHtml}</div>
                <div class="inst-status-atual">
                    <strong>${nivelInfo.titulo}</strong> — ${nivelInfo.descricao}
                </div>
                <details class="inst-detalhes">
                    <summary>Ver todos os níveis</summary>
                    <div class="inst-niveis-lista">${niveisListaHtml}</div>
                </details>
                <div class="inst-acoes">${acoesHtml}</div>
            </div>`;
        }).join('');
    }

    function renderPainelCotas() {
        const container = document.getElementById('painel-cotas-container');
        if (!container) return;

        if (!gameState.tetoAtivo) {
            container.innerHTML = '';
            container.style.display = 'none';
            return;
        }

        container.style.display = 'block';
        const tipos = ['Motor', 'Suspensão', 'Chassi', 'Asa Dianteira', 'Asa Traseira'];

        const barras = tipos.map(tipo => {
            const usado  = gameState.producaoAnual[tipo] || 0;
            const cota   = (gameState.quotaAnual[tipo] || 99) + (gameState.quotaBonus[tipo] || 0);
            const bonus  = gameState.quotaBonus[tipo] || 0;
            const pct    = Math.min(100, Math.round((usado / cota) * 100));
            const cheio  = usado >= cota;
            const corBarra = cheio ? '#dc3545' : usado >= cota - 1 ? '#f0ad4e' : '#28a745';
            const labelBonus = bonus > 0 ? ` <span class="cota-bonus">+${bonus} extra</span>` : '';
            return `
            <div class="cota-row">
                <div class="cota-label">
                    <span class="cota-tipo">${tipo}</span>
                    <span class="cota-num ${cheio ? 'cota-cheia' : ''}">${usado}/${cota}${labelBonus}</span>
                </div>
                <div class="cota-barra-bg">
                    <div class="cota-barra-fill" style="width:${pct}%;background:${corBarra}"></div>
                </div>
            </div>`;
        }).join('');

        container.innerHTML = `
            <div class="cota-titulo">Regulamento técnico — cotas de produção ${gameState.campeonato.ano}</div>
            ${barras}
            <p class="cota-dica">Cada peça <strong>construída ou comprada</strong> consome 1 slot. Aceite encomendas externas para ganhar slots bônus.</p>
        `;
    }

    function renderEscuderia() {
        const elVersao = document.getElementById('versao-jogo');
        if (elVersao) elVersao.textContent = `v${VERSAO_JOGO}`;

        document.getElementById('escuderia-nome').textContent = gameState.escuderia.nome;
        document.querySelectorAll('.escuderia-dinheiro-display').forEach(el => { el.textContent = gameState.escuderia.dinheiro.toLocaleString('pt-BR'); });
        document.querySelectorAll('.campeonato-ano-display').forEach(el => el.textContent = gameState.campeonato.ano);
        const proximaPista = calendarioCorridas[gameState.campeonato.corridaAtualIndex];
        if (proximaPista) {
            document.getElementById('pista-nome-escuderia').textContent = `${proximaPista.nome} (${gameState.campeonato.corridaAtualIndex + 1}/${calendarioCorridas.length})`;
        }
        renderEspecialistas();
        renderProjetos();
        renderPatrocinadores();
        renderCentroPD();
        renderEncomendasExternas();
        renderPainelCotas();
        const emblemaEscuderiaContainer = document.getElementById('emblema-display-escuderia');
        renderizarEmblema(emblemaEscuderiaContainer, gameState.escuderia.emblema);
    }

    function renderPatrocinadores() {
        for (let i = 1; i <= 4; i++) {
            const slot = document.getElementById(`patrocinador-slot-${i}`);
            const patrocinador = gameState.patrocinio.ativos[i - 1];
            slot.classList.toggle('ocupado', !!patrocinador);
            slot.innerHTML = patrocinador ? `<h5>${patrocinador.marca}</h5><p>Restam: ${patrocinador.duracaoRestante} corridas</p>` : `<span>Patrocínio Disponível</span>`;
        }
        const containerOfertas = document.getElementById('ofertas-patrocinio-container');
        containerOfertas.innerHTML = gameState.patrocinio.ofertas.length === 0 ? '<p>Nenhuma nova oferta de patrocínio no momento.</p>' : gameState.patrocinio.ofertas.map(oferta => `<div class="oferta-patrocinio-card"><h4>${oferta.marca}</h4><p><strong>Valor do Contrato:</strong> R$ ${oferta.valor.toLocaleString('pt-BR')}</p><p><strong>Duração:</strong> ${oferta.duracao} corridas</p><button class="btn-aceitar-patrocinio" data-oferta-id="${oferta.id}">Aceitar Oferta</button></div>`).join('');
    }

    function renderEspecialistas() {
        const containerContratados = document.getElementById('lista-especialistas-contratados');
        const containerDisponiveis = document.getElementById('lista-especialistas-disponiveis');
        if (!containerContratados || !containerDisponiveis) return;
        const idsContratados = new Set(gameState.escuderia.especialistas.map(e => e.id));
        containerContratados.innerHTML = gameState.escuderia.especialistas.map(e => {
            let bonusText = '';
            if (e.tipo === 'Olheiro') {
                bonusText = `<p style="color: #008cba; font-weight: bold; font-size: 0.9em;">Bônus: Aumenta a quantidade e a qualidade das peças no mercado.</p>`;
            } else if (e.tipo === 'Treinador de Pilotos') {
                bonusText = `<p style="color: #008cba; font-weight: bold; font-size: 0.9em;">Bônus: Melhora os Skills dos pilotos principais e reserva.</p>`;
            }
            const acoes = especialistaHabilidades[e.tipo] ? `<button class="btn-projeto" data-especialista-id="${e.id}">Iniciar Projeto</button>` : '';
            return `<div class="especialista-card"><h4>${e.nome}</h4><p><strong>Tipo:</strong> ${e.tipo}</p><p><strong>Salário:</strong> R$ ${e.salario.toLocaleString('pt-BR')}</p>${bonusText}<div class="card-actions">${acoes}<button class="btn-demitir" data-id="${e.id}">Demitir</button></div></div>`;
        }).join('');
        containerDisponiveis.innerHTML = especialistasDisponiveis.filter(e => !idsContratados.has(e.id)).map(e => {
            return `<div class="especialista-card"><h4>${e.nome}</h4><p><strong>Tipo:</strong> ${e.tipo}</p><p><strong>Custo:</strong> R$ ${e.salario.toLocaleString('pt-BR')}</p><button class="btn-contratar" data-id="${e.id}">Contratar</button></div>`;
        }).join('');
    }

    function renderCentroPD() {
        const container = document.getElementById('centro-pd-container');
        const titulo = document.getElementById('centro-pd-titulo');
        if (!container || !titulo) return;

        if (!gameState.escuderia.centroPDDesbloqueado) {
            container.innerHTML = `
                <div class="centro-pd-card">
                    <div class="pd-card-conteudo">
                        <div>
                            <h4>Centro de P&D (Bloqueado)</h4>
                            <p>Desbloqueie esta instalação para permitir o desenvolvimento simultâneo de um conjunto completo de peças (Motor, Chassi, Suspensão, Asas), economizando tempo de gerenciamento.</p>
                        </div>
                        <button class="btn-desbloquear-pd" data-action="desbloquear-pd">
                            Desbloquear (R$ ${CENTRO_PD_UNLOCK_COST.toLocaleString('pt-BR')})
                        </button>
                    </div>
                </div>
            `;
        } else {
            const especialistasNecessarios = ["Engenheiro de Motor", "Aerodinamicista", "Projetista"];
            const especialistasContratados = new Set(gameState.escuderia.especialistas.map(e => e.tipo));
            const todosContratados = especialistasNecessarios.every(tipo => especialistasContratados.has(tipo));

            let aviso = '';
            if (!todosContratados) {
                aviso = `<p style="color: #dc3545; font-size: 0.9em; text-align: center;">Requer um Engenheiro de Motor, Aerodinamicista e Projetista contratados.</p>`;
            }

            container.innerHTML = `
                <div class="centro-pd-card">
                    <div class="pd-card-conteudo">
                         <div>
                            <h4>Projeto de Conjunto Completo</h4>
                            <p>Inicie simultaneamente o desenvolvimento de 1 Motor, 1 Chassi, 1 Suspensão, 1 Asa Dianteira e 1 Asa Traseira. O custo total tem um acréscimo de 50% pela conveniência.</p>
                        </div>
                        <div class="pd-controles">
                             <select id="pd-project-duration" class="form-group" data-action="calcular-custo-pd">
                                <option value="1">1 Corrida (Rápido)</option>
                                <option value="3" selected>3 Corridas (Padrão)</option>
                                <option value="5">5 Corridas (Ambicioso)</option>
                                <option value="10">10 Corridas (Vitorioso)</option>
                            </select>
                            <div id="pd-custo-total" class="pd-custo-display">Calculando custo...</div>
                            <button class="btn-iniciar-projeto-completo" data-action="iniciar-projeto-completo" ${!todosContratados ? 'disabled' : ''}>
                                Iniciar Projeto Completo
                            </button>
                        </div>
                    </div>
                    ${aviso}
                </div>
            `;
            // Dispara o cálculo inicial após o DOM renderizar
            setTimeout(() => {
                const sel = document.getElementById('pd-project-duration');
                if (sel) sel.dispatchEvent(new Event('change'));
            }, 0);
        }
    }

    function renderProjetos() {
        const containerProjetos = document.getElementById('projetos-em-andamento-container');
        if (!containerProjetos) return;

        // Remove projetos já entregues a equipes externas
        gameState.projetosEmAndamento = gameState.projetosEmAndamento.filter(p => p.status !== 'entregue');

        if (gameState.projetosEmAndamento.length === 0) { containerProjetos.innerHTML = "<p>Nenhum projeto em desenvolvimento.</p>"; return; }
        containerProjetos.innerHTML = gameState.projetosEmAndamento.map(projeto => {
            if (projeto.status === 'em_andamento') {
                return `<div class="projeto-card"><h4>${projeto.tipoPeca}</h4><p><strong>Desenvolvido por:</strong> ${projeto.nomeEspecialista}</p><p><strong>Conclusão em:</strong> ${projeto.duracaoRestante} corrida(s)</p></div>`;
            }
            if (projeto.status === 'concluido') {
                const pecaVirtual = projeto.pecaConcluida;
                if (!pecaVirtual) {
                    return `<div class="projeto-card-concluido" style="border-color: #dc3545;"><h4>Erro no Projeto: ${projeto.tipoPeca}</h4><p><strong>Modelo base não encontrado!</strong></p></div>`;
                }
                const iconesTipo = { 'Motor': '⚙️', 'Chassi': '🏎️', 'Asa Dianteira': '🔺', 'Asa Traseira': '🔻', 'Suspensão': '🔧' };
                const icone = iconesTipo[pecaVirtual.tipo] || '🔩';
                return `<div class="projeto-card-concluido">
                            <div class="projeto-card-header">
                                <span class="projeto-tipo-badge">${icone} ${pecaVirtual.tipo}</span>
                                <span class="projeto-nivel-badge">Nível ${pecaVirtual.nivel}</span>
                            </div>
                            <div class="projeto-card-body">
                                <h4 class="projeto-peca-nome">${pecaVirtual.nome}</h4>
                                <p class="projeto-desenvolvido">Desenvolvido por: <strong>${projeto.nomeEspecialista}</strong></p>
                                ${gerarHtmlAtributosPeca(pecaVirtual)}
                                <div class="projeto-acoes">
                                    <p class="projeto-decisao-label">Decida o que fazer com a peça:</p>
                                    <button class="btn-ficar-com-peca" data-project-id="${projeto.id}">✅ Ficar com a Peça</button>
                                    <button class="btn-vender-peca" data-project-id="${projeto.id}">💰 Vender a Peça</button>
                                </div>
                            </div>
                        </div>`;
            }
            if (projeto.status === 'a_venda') {
                return `<div class="projeto-card" style="border-color: #008cba;"><h4>À Venda: ${projeto.tipoPeca}</h4><p>Aguardando um comprador...</p></div>`;
            }
            return '';
        }).join('');
    }

    function renderAbaPersonalizacao() {
        const listaDeFormas = ['circle.svg','circleheart.svg','circlesmall.svg','circlethreequarters.svg','cube.svg','cubes.svg','frame.svg','infinity.svg','modelcube.svg','modelcubespace.svg','oval.svg','pyramid.svg','rectanglehorizontal.svg','rectanglehorizontal1.svg','rhombus.svg','seal.svg','settings.svg','sphere.svg','square.svg','square1.svg','squaredashed.svg','squarestar.svg','star-christmas.svg','starchristmas1.svg','starchristmas2.svg','windowframe.svg','windowframe1.svg'];
        const listaDeIcones = ['asterik.svg',	'asterik1.svg',	'auto-pilot.svg',	'badge-leaf.svg',	'badge-percent.svg',	'badge-sheriff.svg',	'badge-sheriff1.svg',	'badge-sheriff2.svg',	'bat.svg',	'bat1.svg',	'block.svg',	'bolt.svg',	'bowarrow.svg',	'campfire.svg',	'cat.svg',	'chessking.svg',	'chevrondoubleup.svg',	'clawmarks.svg',	'clawmarks1.svg',	'cow.svg',	'cow1.svg',	'crown.svg',	'crown1.svg',	'dove.svg',	'dragon.svg',	'dragon1.svg',	'eagle.svg',	'equestrianstatue.svg',	'featherpointed.svg',	'firstaward.svg',	'flagcheckered.svg',	'flowerbutterfly.svg',	'fox.svg',	'heartupsidedown.svg',	'heartupsidedown1.svg',	'horseshoe.svg',	'lightbulbsetting.svg',	'lion.svg',	'lionhead.svg',	'luchador.svg',	'medicalstar.svg',	'membership.svg',	'om.svg',	'pawclaws.svg',	'pawheart.svg',	'peace.svg',	'peace1.svg',	'percent80.svg',	'rabbit.svg',	'raccoon.svg',	'resources.svg',	'shield.svg',	'shield1.svg',	'shieldalt1.svg',	'shieldcross.svg',	'shieldcross1.svg',	'shielddividedfour.svg',	'sleepingcat.svg',	'snake.svg',	'snake1.svg',	'squirrel.svg',	'starandcrescent.svg',	'starexclamation.svg',	'staroctogram.svg',	'stars.svg',	'steeringwheel.svg',	'suitcase-alt.svg',	'suitcasealt1.svg',	'sword.svg',	't.svg',	'tablelist.svg',	'tablelist1.svg',	'tablelist2.svg',	'tire.svg',	'tire1.svg',	'tire2.svg',	'torch.svg',	'trademark.svg',	'transformationdesign.svg',	'transformationshapes.svg',	'turtle.svg',	'user-crown.svg',	'usercrown1.svg',	'venus.svg',	'wavetriangle.svg',	'whale.svg',	'wingsbox.svg',	'worm.svg'];
        const seletorFormasContainer = document.getElementById('seletor-formas');
        const seletorIconesContainer = document.getElementById('seletor-icones');
        seletorFormasContainer.innerHTML = listaDeFormas.map(nomeArquivo => `<div class="seletor-item" data-tipo="forma" data-valor="${nomeArquivo}"><img src="img/emblemas/formas/${nomeArquivo}" alt="${nomeArquivo}"></div>`).join('');
        seletorIconesContainer.innerHTML = listaDeIcones.map(nomeArquivo => `<div class="seletor-item" data-tipo="icone" data-valor="${nomeArquivo}"><img src="img/emblemas/icones/${nomeArquivo}" alt="${nomeArquivo}"></div>`).join('');
        atualizarPreviewEmblema();
        const inputNome = document.getElementById('input-nome-escuderia');
        if (inputNome) inputNome.value = gameState.escuderia.nome;
        const btnSalvarNome = document.getElementById('btn-salvar-nome');
        if (btnSalvarNome) {
            if (gameState.escuderia.emblema.primeiroNomeSalvo) {
                btnSalvarNome.textContent = `Salvar Nome (R$ ${CUSTO_MUDAR_NOME.toLocaleString('pt-BR')})`;
                btnSalvarNome.disabled = gameState.escuderia.dinheiro < CUSTO_MUDAR_NOME;
            } else {
                btnSalvarNome.textContent = 'Salvar Nome (Grátis)';
                btnSalvarNome.disabled = false;
            }
        }
        const btnSalvarIdentidade = document.getElementById('btn-salvar-identidade');
        if (btnSalvarIdentidade) {
            if (gameState.escuderia.emblema.primeiroEmblemaSalvo) {
                btnSalvarIdentidade.textContent = `Salvar Identidade (R$ ${CUSTO_MUDAR_EMBLEMA.toLocaleString('pt-BR')})`;
                btnSalvarIdentidade.disabled = gameState.escuderia.dinheiro < CUSTO_MUDAR_EMBLEMA;
            } else {
                btnSalvarIdentidade.textContent = 'Salvar Identidade (Grátis)';
                btnSalvarIdentidade.disabled = false;
            }
        }
    }

    // Instâncias dos charts do dashboard de marketing (destruídas ao re-renderizar)
    let _mktChartPizza = null;
    let _mktChartBarras = null;
    let _mktChartHistorico = null;
    let _mktChartVendasCorrida = null;

    function renderMarketingExtrato() {
        const container = document.getElementById('mkt-dashboard-container');
        if (!container) return;

        const hist = gameState.historicoMarketing || {};
        const itens = Object.keys(catalogoMarketing);
        const corridasJogadas = gameState.campeonato.corridaAtualIndex || 0;
        const ano = gameState.campeonato.ano;

        // Cores por produto
        const COR_PRODUTO = {
            'Chaveiro':           '#3498db',
            'Bonés':              '#2ecc71',
            'Camisa':             '#f39c12',
            'Carro em miniatura': '#9b59b6',
            'Anel com joia':      '#e74c3c',
            'Combo Presentes':    '#1abc9c',
        };
        const LABELS_CURTOS = {
            'Chaveiro': 'Chaveiro', 'Bonés': 'Bonés', 'Camisa': 'Camisa',
            'Carro em miniatura': 'Miniatura', 'Anel com joia': 'Anel', 'Combo Presentes': 'Combo',
        };

        // Coleta dados da temporada atual
        let totalUnidades = 0, totalReceita = 0;
        const dados = itens.map(nome => {
            const h = hist[nome] || { totalUnidades: 0, totalReceita: 0, corridasAtivas: 0 };
            totalUnidades += h.totalUnidades;
            totalReceita += h.totalReceita;
            return {
                nome, label: LABELS_CURTOS[nome],
                cor: COR_PRODUTO[nome] || '#888',
                unidades: h.totalUnidades,
                receita: h.totalReceita,
                corridasAtivas: h.corridasAtivas,
                ticketMedio: h.corridasAtivas > 0 ? Math.floor(h.totalReceita / h.corridasAtivas) : 0,
                desbloqueado: !!gameState.marketing[nome]?.desbloqueado,
            };
        });

        const itensComVenda   = dados.filter(d => d.receita > 0);
        const rankReceita     = [...itensComVenda].sort((a, b) => b.receita - a.receita);
        const rankVolume      = [...itensComVenda].sort((a, b) => b.unidades - a.unidades);
        const ticketMedioGeral = corridasJogadas > 0 ? Math.floor(totalReceita / corridasJogadas) : 0;

        // Insights estratégicos automáticos
        const insights = [];
        if (itensComVenda.length === 0) {
            insights.push({ ico: '💡', txt: 'Produza itens e defina preços competitivos para começar a gerar receita por corrida.' });
        } else {
            const campeaoReceita = rankReceita[0];
            const campeaoVolume  = rankVolume[0];
            if (campeaoReceita && campeaoVolume && campeaoReceita.nome === campeaoVolume.nome) {
                insights.push({ ico: '💰', txt: `<strong>${campeaoReceita.nome}</strong> lidera em receita E em volume de vendas — ${(campeaoReceita.receita / totalReceita * 100).toFixed(0)}% do faturamento total.` });
            } else {
                if (campeaoReceita) insights.push({ ico: '💰', txt: `<strong>${campeaoReceita.nome}</strong> lidera em receita — ${(campeaoReceita.receita / totalReceita * 100).toFixed(0)}% do faturamento total.` });
                if (campeaoVolume) insights.push({ ico: '📦', txt: `<strong>${campeaoVolume.nome}</strong> é o mais popular em volume (${campeaoVolume.unidades.toLocaleString('pt-BR')} un.), mas representa apenas ${(campeaoVolume.receita / totalReceita * 100).toFixed(0)}% da receita.` });
            }
            const semVenda = dados.filter(d => d.desbloqueado && d.receita === 0);
            if (semVenda.length > 0) insights.push({ ico: '⚠️', txt: `<strong>${semVenda.map(d => d.nome).join(', ')}</strong> não gerou vendas — considere revisar o preço ou produzir mais estoque.` });
            const altaMargemItem = dados.find(d => d.receita > 0 && (d.receita / totalReceita) > 0.4 && d.unidades < 100);
            if (altaMargemItem) insights.push({ ico: '💎', txt: `<strong>${altaMargemItem.nome}</strong> é um item premium com alto impacto financeiro. Mantenha estoque sempre abastecido!` });
            if (corridasJogadas > 5 && ticketMedioGeral > 0) insights.push({ ico: '📈', txt: `Ticket médio por corrida: <strong>R$ ${ticketMedioGeral.toLocaleString('pt-BR')}</strong>. Em ${24 - corridasJogadas} corridas restantes, projeção da temporada: <strong>R$ ${(ticketMedioGeral * 24).toLocaleString('pt-BR')}</strong>.` });
        }

        // Histórico anual (para o gráfico de linha)
        const histAnual = gameState.historicoAnualMarketing || [];

        // Histórico de receita por corrida da temporada atual
        const histVendasCorrida = gameState.historicoVendasPorCorrida || [];

        // ── Monta o HTML do dashboard ──────────────────────────────
        container.innerHTML = `
        <!-- CABEÇALHO DA TEMPORADA -->
        <div class="mkt-dash-header">
            <div class="mkt-dash-title">📊 Dashboard de Marketing — Temporada ${ano}</div>
            <div class="mkt-dash-kpis">
                <div class="mkt-kpi">
                    <span class="mkt-kpi-valor">R$ ${totalReceita.toLocaleString('pt-BR')}</span>
                    <span class="mkt-kpi-label">Receita Total</span>
                </div>
                <div class="mkt-kpi">
                    <span class="mkt-kpi-valor">${totalUnidades.toLocaleString('pt-BR')}</span>
                    <span class="mkt-kpi-label">Unidades Vendidas</span>
                </div>
                <div class="mkt-kpi">
                    <span class="mkt-kpi-valor">${corridasJogadas}</span>
                    <span class="mkt-kpi-label">Corridas Disputadas</span>
                </div>
                <div class="mkt-kpi">
                    <span class="mkt-kpi-valor">${ticketMedioGeral > 0 ? 'R$ ' + ticketMedioGeral.toLocaleString('pt-BR') : '—'}</span>
                    <span class="mkt-kpi-label">Ticket Médio / Corrida</span>
                </div>
                <div class="mkt-kpi">
                    <span class="mkt-kpi-valor">${(gameState.torcedores || 0).toLocaleString('pt-BR')}</span>
                    <span class="mkt-kpi-label">Torcedores</span>
                </div>
            </div>
        </div>

        ${totalReceita === 0 ? `
        <div class="mkt-dash-empty">
            <span>🛒</span>
            <p>Nenhuma venda registrada nesta temporada ainda.<br>Produza itens e complete corridas para ver os dados aqui.</p>
        </div>` : `
        <!-- GRÁFICOS -->
        <div class="mkt-dash-charts">
            <div class="mkt-chart-card">
                <div class="mkt-chart-titulo">🥧 Receita por Produto</div>
                <div class="mkt-chart-wrap"><canvas id="mkt-chart-pizza"></canvas></div>
            </div>
            <div class="mkt-chart-card">
                <div class="mkt-chart-titulo">📦 Volume de Vendas</div>
                <div class="mkt-chart-wrap"><canvas id="mkt-chart-barras"></canvas></div>
            </div>
        </div>

        <!-- GRÁFICO RECEITA POR CORRIDA -->
        ${histVendasCorrida.length > 1 ? `
        <div class="mkt-chart-card mkt-chart-corrida-wrap">
            <div class="mkt-chart-titulo">📈 Receita por Corrida — Temporada ${ano}</div>
            <div class="mkt-chart-wrap"><canvas id="mkt-chart-vendas-corrida"></canvas></div>
        </div>` : ''}

        <!-- RANKINGS DUPLOS -->
        <div class="mkt-dash-rankings">
            <div class="mkt-ranking-card">
                <div class="mkt-ranking-titulo">💰 Ranking por Receita</div>
                ${dados.filter(d => d.receita > 0).sort((a,b) => b.receita - a.receita).map((d, i) => `
                <div class="mkt-ranking-row">
                    <span class="mkt-rank-pos rank-${i+1}">${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i+1)+'º'}</span>
                    <span class="mkt-rank-dot" style="background:${d.cor}"></span>
                    <span class="mkt-rank-nome">${d.nome}</span>
                    <div class="mkt-rank-bar-wrap">
                        <div class="mkt-rank-bar" style="width:${(d.receita/totalReceita*100).toFixed(1)}%;background:${d.cor}"></div>
                    </div>
                    <span class="mkt-rank-val">R$ ${d.receita.toLocaleString('pt-BR')}</span>
                    <span class="mkt-rank-pct">${(d.receita/totalReceita*100).toFixed(0)}%</span>
                </div>`).join('')}
            </div>
            <div class="mkt-ranking-card">
                <div class="mkt-ranking-titulo">📦 Ranking por Volume</div>
                ${dados.filter(d => d.unidades > 0).sort((a,b) => b.unidades - a.unidades).map((d, i) => `
                <div class="mkt-ranking-row">
                    <span class="mkt-rank-pos rank-${i+1}">${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i+1)+'º'}</span>
                    <span class="mkt-rank-dot" style="background:${d.cor}"></span>
                    <span class="mkt-rank-nome">${d.nome}</span>
                    <div class="mkt-rank-bar-wrap">
                        <div class="mkt-rank-bar" style="width:${(d.unidades/totalUnidades*100).toFixed(1)}%;background:${d.cor}"></div>
                    </div>
                    <span class="mkt-rank-val">${d.unidades.toLocaleString('pt-BR')} un.</span>
                    <span class="mkt-rank-pct">${(d.unidades/totalUnidades*100).toFixed(0)}%</span>
                </div>`).join('')}
            </div>
        </div>

        <!-- TABELA DETALHADA -->
        <div class="mkt-dash-tabela-wrap">
            <div class="mkt-chart-titulo">📋 Detalhamento Completo</div>
            <table class="mkt-dash-tabela">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Unid. Vendidas</th>
                        <th>Receita Total</th>
                        <th>% Receita</th>
                        <th>Corridas c/ Venda</th>
                        <th>Ticket Médio</th>
                    </tr>
                </thead>
                <tbody>
                    ${dados.map(d => `
                    <tr class="${!d.desbloqueado ? 'mkt-row-bloqueado' : d.receita === 0 ? 'mkt-row-zero' : ''}">
                        <td>
                            <span class="mkt-rank-dot" style="background:${d.cor};display:inline-block;vertical-align:middle;margin-right:6px;"></span>
                            ${d.nome}${!d.desbloqueado ? ' <span class="mkt-lock">🔒</span>' : ''}
                        </td>
                        <td>${d.unidades.toLocaleString('pt-BR')}</td>
                        <td>${d.receita > 0 ? 'R$ ' + d.receita.toLocaleString('pt-BR') : '—'}</td>
                        <td>${totalReceita > 0 ? (d.receita/totalReceita*100).toFixed(1) + '%' : '—'}</td>
                        <td>${d.corridasAtivas || '—'}</td>
                        <td>${d.ticketMedio > 0 ? 'R$ ' + d.ticketMedio.toLocaleString('pt-BR') : '—'}</td>
                    </tr>`).join('')}
                </tbody>
                <tfoot>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>${totalUnidades.toLocaleString('pt-BR')}</strong></td>
                        <td><strong>R$ ${totalReceita.toLocaleString('pt-BR')}</strong></td>
                        <td><strong>100%</strong></td>
                        <td><strong>${corridasJogadas}</strong></td>
                        <td><strong>${ticketMedioGeral > 0 ? 'R$ ' + ticketMedioGeral.toLocaleString('pt-BR') : '—'}</strong></td>
                    </tr>
                </tfoot>
            </table>
        </div>`}

        <!-- INSIGHTS ESTRATÉGICOS -->
        ${insights.length > 0 ? `
        <div class="mkt-dash-insights">
            <div class="mkt-chart-titulo">🧠 Análise Estratégica</div>
            ${insights.map(ins => `
            <div class="mkt-insight-row">
                <span class="mkt-insight-ico">${ins.ico}</span>
                <span class="mkt-insight-txt">${ins.txt}</span>
            </div>`).join('')}
        </div>` : ''}

        <!-- HISTÓRICO POR TEMPORADA -->
        <div class="mkt-dash-historico">
            <div class="mkt-chart-titulo">🏆 Histórico por Temporada</div>
            ${histAnual.length === 0 ? `<p class="mkt-vazio" style="padding:1rem;text-align:center;">Nenhuma temporada concluída ainda.</p>` : `
            ${histAnual.length > 1 ? `<div class="mkt-chart-card mkt-chart-historico-wrap"><canvas id="mkt-chart-historico"></canvas></div>` : ''}
            <div class="mkt-tabela-wrapper" style="margin-top:${histAnual.length > 1 ? '1rem' : '0'}">
                <table class="mkt-tabela">
                    <thead><tr><th>Ano</th>${itens.map(n => `<th>${LABELS_CURTOS[n]}</th>`).join('')}<th>Total</th></tr></thead>
                    <tbody>
                        ${histAnual.map(entrada => {
                            const total = itens.reduce((s, n) => s + (entrada.itens[n]?.totalReceita || 0), 0);
                            return `<tr>
                                <td><strong>${entrada.ano}</strong></td>
                                ${itens.map(n => `<td>${entrada.itens[n]?.totalReceita > 0 ? 'R$ ' + entrada.itens[n].totalReceita.toLocaleString('pt-BR') : '—'}</td>`).join('')}
                                <td class="mkt-total-cell"><strong>R$ ${total.toLocaleString('pt-BR')}</strong></td>
                            </tr>`;
                        }).join('')}
                    </tbody>
                </table>
            </div>`}
        </div>
        `;

        // ── Destrói instâncias anteriores dos charts (sempre, antes do return) ──
        if (_mktChartPizza)         { _mktChartPizza.destroy();         _mktChartPizza         = null; }
        if (_mktChartBarras)        { _mktChartBarras.destroy();        _mktChartBarras        = null; }
        if (_mktChartHistorico)     { _mktChartHistorico.destroy();     _mktChartHistorico     = null; }
        if (_mktChartVendasCorrida) { _mktChartVendasCorrida.destroy(); _mktChartVendasCorrida = null; }

        // ── Renderiza os charts após o DOM estar pronto ──────────────
        if (totalReceita === 0) return;

        setTimeout(() => {

            // Pizza — receita por produto
            const ctxP = document.getElementById('mkt-chart-pizza');
            if (ctxP) {
                const dadosComReceita = dados.filter(d => d.receita > 0);
                _mktChartPizza = new Chart(ctxP.getContext('2d'), {
                    type: 'doughnut',
                    data: {
                        labels: dadosComReceita.map(d => d.nome),
                        datasets: [{ data: dadosComReceita.map(d => d.receita), backgroundColor: dadosComReceita.map(d => d.cor), borderWidth: 2, borderColor: '#0d0d1a' }]
                    },
                    options: {
                        responsive: true, maintainAspectRatio: true,
                        plugins: {
                            legend: { position: 'bottom', labels: { color: '#ccc', font: { size: 11 }, padding: 12, boxWidth: 12 } },
                            tooltip: { callbacks: { label: c => ` ${c.label}: R$ ${c.parsed.toLocaleString('pt-BR')} (${(c.parsed / totalReceita * 100).toFixed(1)}%)` } }
                        },
                        cutout: '60%',
                    }
                });
            }

            // Barras horizontais — volume
            const ctxB = document.getElementById('mkt-chart-barras');
            if (ctxB) {
                const dadosVol = [...dados].filter(d => d.desbloqueado).sort((a,b) => b.unidades - a.unidades);
                _mktChartBarras = new Chart(ctxB.getContext('2d'), {
                    type: 'bar',
                    data: {
                        labels: dadosVol.map(d => d.label),
                        datasets: [{ label: 'Unidades', data: dadosVol.map(d => d.unidades), backgroundColor: dadosVol.map(d => d.cor + 'cc'), borderColor: dadosVol.map(d => d.cor), borderWidth: 1, borderRadius: 4 }]
                    },
                    options: {
                        indexAxis: 'y',
                        responsive: true, maintainAspectRatio: true,
                        plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.parsed.x.toLocaleString('pt-BR')} unidades` } } },
                        scales: {
                            x: { ticks: { color: '#555' }, grid: { color: '#1a1a2e' } },
                            y: { ticks: { color: '#aaa' }, grid: { color: '#1a1a2e' } }
                        }
                    }
                });
            }

            // Linha — histórico anual (só se tiver 2+ temporadas)
            const ctxH = document.getElementById('mkt-chart-historico');
            if (ctxH && histAnual.length > 1) {
                const totaisPorAno = histAnual.map(e => ({
                    ano: e.ano,
                    total: itens.reduce((s,n) => s + (e.itens[n]?.totalReceita || 0), 0)
                }));
                _mktChartHistorico = new Chart(ctxH.getContext('2d'), {
                    type: 'line',
                    data: {
                        labels: totaisPorAno.map(d => d.ano),
                        datasets: [{ label: 'Receita Total', data: totaisPorAno.map(d => d.total), borderColor: '#e10600', backgroundColor: 'rgba(225,6,0,0.1)', tension: 0.3, pointRadius: 5, fill: true }]
                    },
                    options: {
                        responsive: true, maintainAspectRatio: true,
                        plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` R$ ${c.parsed.y.toLocaleString('pt-BR')}` } } },
                        scales: {
                            x: { ticks: { color: '#aaa' }, grid: { color: '#1a1a2e' } },
                            y: { ticks: { color: '#aaa', callback: v => 'R$ ' + v.toLocaleString('pt-BR') }, grid: { color: '#1a1a2e' } }
                        }
                    }
                });
            }

            // Linha — receita por corrida da temporada atual (só se tiver 2+ corridas)
            const ctxVC = document.getElementById('mkt-chart-vendas-corrida');
            if (ctxVC && histVendasCorrida.length > 1) {
                _mktChartVendasCorrida = new Chart(ctxVC.getContext('2d'), {
                    type: 'line',
                    data: {
                        labels: histVendasCorrida.map(d => `Corrida ${d.corrida}`),
                        datasets: [{
                            label: 'Receita',
                            data: histVendasCorrida.map(d => d.receita),
                            borderColor: '#3498db',
                            backgroundColor: 'rgba(52,152,219,0.12)',
                            tension: 0.35,
                            pointRadius: 4,
                            pointBackgroundColor: '#3498db',
                            fill: true
                        }]
                    },
                    options: {
                        responsive: true, maintainAspectRatio: true,
                        plugins: {
                            legend: { display: false },
                            tooltip: { callbacks: { label: c => ` R$ ${c.parsed.y.toLocaleString('pt-BR')}` } }
                        },
                        scales: {
                            x: { ticks: { color: '#aaa', maxTicksLimit: 12 }, grid: { color: '#1a1a2e' } },
                            y: {
                                ticks: { color: '#aaa', callback: v => 'R$ ' + v.toLocaleString('pt-BR') },
                                grid: { color: '#1a1a2e' },
                                beginAtZero: true
                            }
                        }
                    }
                });
            }
        }, 50);
    }


    function renderAbaMarketing() {
        const container = document.getElementById('marketing-items-container');
        if (!container) return;

        const emblemaMarketingContainer = document.getElementById('emblema-display-marketing');
        if(emblemaMarketingContainer) renderizarEmblema(emblemaMarketingContainer, gameState.escuderia.emblema);

        // Cabeçalho de torcedores
        const torcedores = gameState.torcedores || 0;
        let faixaTorcedores = '';
        if (torcedores < 2000) faixaTorcedores = '🌱 Base inicial — equipe em construção';
        else if (torcedores < 10000) faixaTorcedores = '📈 Crescendo! Boa base de fãs';
        else if (torcedores < 30000) faixaTorcedores = '🔥 Equipe popular no grid';
        else if (torcedores < 60000) faixaTorcedores = '⭐ Grande torcida formada!';
        else faixaTorcedores = '🏆 Escuderia de elite — torcida massiva!';

        // Insere/atualiza o painel de torcedores acima dos cards
        let fansPanel = document.getElementById('mkt-fans-panel');
        const mktH3 = container.previousElementSibling;
        if (!fansPanel) {
            fansPanel = document.createElement('div');
            fansPanel.id = 'mkt-fans-panel';
            fansPanel.className = 'mkt-fans-panel';
            container.parentNode.insertBefore(fansPanel, container);
        }
        fansPanel.innerHTML = `
            <div class="mkt-fans-inner">
                <span class="mkt-fans-icon">👥</span>
                <div class="mkt-fans-info">
                    <span class="mkt-fans-numero">${torcedores.toLocaleString('pt-BR')} torcedores</span>
                    <span class="mkt-fans-faixa">${faixaTorcedores}</span>
                </div>
                <div class="mkt-fans-dica">
                    <small>Torcedores determinam o volume máximo de vendas.<br>Cresça no campeonato para atrair mais fãs!</small>
                </div>
            </div>`;

        container.innerHTML = Object.entries(catalogoMarketing).map(([nome, itemCatalogo]) => {
            const itemJogo = gameState.marketing[nome];

            if (itemJogo && itemJogo.desbloqueado) {
                const temEstoque = itemJogo.inventario > 0;
                const tamanho = itemJogo.tamanhoIcone || { width: 50, height: 50 };
                const posicao = itemJogo.posicaoIcone || { top: 25, left: 25 };
                const { rosto, label: labelPreco, cor: corPreco } = calcularRostoPreco(nome);

                // Demanda estimada por corrida
                const TAXAS_DEMANDA = { 'Chaveiro': 0.025, 'Bonés': 0.010, 'Camisa': 0.006, 'Carro em miniatura': 0.004, 'Anel com joia': 0.0008, 'Combo Presentes': 0.0015 };
                const taxa = TAXAS_DEMANDA[nome] || 0.005;
                const { mod: modPreco } = calcularRostoPreco(nome);
                const demandaEstimada = Math.round(torcedores * taxa * modPreco);

                let controlesHtml = '';
                if (temEstoque) {
                    controlesHtml = `
                        <p style="text-align: center; color: #8a6d3b; background-color: #fffde7; padding: 0.8rem; border-radius: 4px; font-size: 0.9em; margin-top: 0;">
                            <strong>Produção pausada.</strong><br>Venda ou liquide o estoque para produzir mais.
                        </p>
                        <button class="btn-marketing btn-liquidar-item" data-action="liquidar-estoque" data-item-nome="${nome}">
                            Liquidar Estoque (${itemJogo.inventario} un.)
                        </button>
                    `;
                } else {
                    controlesHtml = `
                        <div class="input-group">
                            <input type="number" id="qtd-${nome}" placeholder="Qtd. para produzir" min="1" data-action="calcular-custo" data-item-nome="${nome}">
                            <button class="btn-marketing btn-produzir-item" data-action="produzir-marketing" data-item-nome="${nome}">Produzir</button>
                        </div>
                        <div class="custo-total-display" id="custo-total-${nome}">Custo Total: R$ 0</div>
                    `;
                }

                return `
                    <div class="marketing-item-card" data-item-nome="${nome}">
                        <div class="item-imagem" style="background-image: url('${itemCatalogo.img}'); position: relative;">
                            <div id="emblema-container-${nome}" class="item-imagem-emblema draggable"
                                 style="position: absolute; width: ${tamanho.width}%; height: ${tamanho.height}%; top: ${posicao.top}%; left: ${posicao.left}%; cursor: grab;">
                            </div>
                            <div style="position: absolute; bottom: 5px; right: 5px; display: flex; gap: 5px; background-color: rgba(0,0,0,0.4); padding: 5px; border-radius: 5px; z-index: 5;">
                                <button class="btn-icone-control" data-action="aumentar-icone" data-item-nome="${nome}">+</button>
                                <button class="btn-icone-control" data-action="diminuir-icone" data-item-nome="${nome}">-</button>
                            </div>
                        </div>
                        <h4>${nome}</h4>
                        <div class="item-info">
                            <p><span>Em Estoque:</span> <strong>${itemJogo.inventario}</strong></p>
                            <p><span>Custo p/ Produzir:</span> <strong>R$ ${itemCatalogo.custo_producao.toLocaleString('pt-BR')}</strong></p>
                            <p><span>Demanda estimada/corrida:</span> <strong>~${demandaEstimada.toLocaleString('pt-BR')} un.</strong></p>
                        </div>
                        <div class="item-controles">
                            <div class="mkt-preco-row" style="margin-bottom: 1rem;">
                                <label for="preco-${nome}">Preço Venda (mín. ${itemCatalogo.preco_venda_minimo}):</label>
                                <div class="mkt-preco-input-wrap">
                                    <input type="number" id="preco-${nome}" value="${itemJogo.preco_venda_definido}" min="${itemCatalogo.preco_venda_minimo}" data-action="definir-preco" data-item-nome="${nome}" ${temEstoque ? 'disabled' : ''}>
                                    <span class="mkt-rosto" title="${labelPreco}">${rosto}</span>
                                </div>
                                <span class="mkt-label-preco" style="color:${corPreco || '#888'};font-size:0.78em;font-weight:600;">${labelPreco}</span>
                            </div>
                            ${controlesHtml}
                        </div>
                    </div>
                `;
            }
            else {
                return `
                     <div class="marketing-item-card locked" data-item-nome="${nome}">
                        <div class="item-imagem" style="background-image: url('${itemCatalogo.img}');">
                             <div class="item-imagem-emblema" style="width: 50%; height: 50%; position: relative; left: 25%; top: 25%;"></div>
                        </div>
                        <h4>${nome} (Bloqueado)</h4>
                        <p style="font-size: 0.9em; text-align: center; flex-grow: 1;">Desbloqueie para começar a vender e aumentar a receita.</p>
                        <div class="item-controles">
                             <button class="btn-marketing btn-desbloquear-item" data-action="desbloquear-marketing" data-item-nome="${nome}">
                                Desbloquear (R$ ${itemCatalogo.custo_desbloqueio.toLocaleString('pt-BR')})
                             </button>
                        </div>
                    </div>
                `;
            }
        }).join('');

        Object.keys(catalogoMarketing).forEach(nome => {
            const cardElement = container.querySelector(`.marketing-item-card[data-item-nome="${nome}"]`);
            if (cardElement) {
                const emblemaContainer = cardElement.querySelector('.item-imagem-emblema');
                if (emblemaContainer) {
                    renderizarEmblema(emblemaContainer, gameState.escuderia.emblema);
                }
            }
        });

        renderMarketingExtrato();
    }

    function renderGaragem() {
        const emblemaCarroContainer = document.getElementById('emblema-display-carro');
        renderizarEmblema(emblemaCarroContainer, gameState.escuderia.emblema);
        const selectorNav = document.querySelector('.car-selector-nav');
        if (!selectorNav) return;
        document.querySelectorAll('.car-selector-btn').forEach(btn => btn.classList.toggle('active', parseInt(btn.dataset.carIndex) === garagemState.carroSelecionadoIndex));
        const slotsContainer = document.getElementById('car-slots-container');
        const carro = gameState.carros[garagemState.carroSelecionadoIndex];
        const slotTypes = { motor: 'Motor', chassi: 'Chassi', asaDianteira: 'Asa Dianteira', asaTraseira: 'Asa Traseira', suspensao: 'Suspensão' };
        slotsContainer.innerHTML = Object.entries(slotTypes).map(([key, nome]) => {
            const peca = gameState.todasAsPecas.find(p => p.instanceId === carro.pecas[key]);
            const partInfoHtml = peca ? `<div class="part-info"><p class="part-name">${peca.nome} (Nvl ${peca.nivel})</p>${gerarHtmlAtributosPeca(peca)}</div>` : `<div class="empty-slot">Slot Vazio</div>`;
            return `<div class="slot-card ${peca ? 'equipado' : 'vazio'}"><h4>${nome}</h4>${partInfoHtml}<button class="btn-trocar-peca" data-slot-key="${key}">Equipar / Trocar</button></div>`;
        }).join('');
        const inventoryContainer = document.getElementById('inventory-columns-container');
        const pecasEquipadasIds = new Set(gameState.carros.flatMap(c => Object.values(c.pecas)));
        const pecasAgrupadas = gameState.todasAsPecas
            .filter(p => !pecasEquipadasIds.has(p.instanceId))
            .reduce((acc, peca) => {
                (acc[peca.tipo] = acc[peca.tipo] || []).push(peca);
                return acc;
            }, {});
        const sortPecasPorTipo = (pecas, tipo) => {
            const atributoOrdem = {
                'Motor': 'potencia',
                'Chassi': 'aerodinamica',
                'Asa Dianteira': 'aerodinamica',
                'Asa Traseira': 'aerodinamica',
                'Suspensão': 'aderencia'
            };
            const attr = atributoOrdem[tipo];
            return [...pecas].sort((a, b) => {
                const valA = attr ? (a.atributos[attr] || 0) : 0;
                const valB = attr ? (b.atributos[attr] || 0) : 0;
                if (valB !== valA) return valB - valA;
                return b.nivel - a.nivel;
            });
        };
        inventoryContainer.innerHTML = Object.values(slotTypes).map(tipo => {
            const pecasDaColuna = sortPecasPorTipo(pecasAgrupadas[tipo] || [], tipo);
            const pecasHtml = pecasDaColuna.length > 0
                ? pecasDaColuna.map(peca => `<div class="peca-card"><h5>${peca.nome} (Nvl ${peca.nivel})</h5>${gerarHtmlAtributosPeca(peca)}<div class="card-actions"><button class="btn-vender-peca" data-instance-id="${peca.instanceId}">Vender (R$ ${Math.floor(calcularPrecoPeca(peca) * 0.7).toLocaleString('pt-BR')})</button></div></div>`).join('')
                : `<p style="text-align: center; font-size: 0.9em; color: #888;">Nenhuma peça</p>`;
            return `<div class="inventory-column"><h4>${tipo}</h4>${pecasHtml}</div>`;
        }).join('');
    }

    function renderAbaPilotos() {
        const meusPilotosContainer = document.getElementById('meus-pilotos-container');
        const mercadoPilotosContainer = document.getElementById('mercado-pilotos-container');
        const gridAtivoContainer = document.getElementById('grid-ativo-container');
        const aposentadosContainer = document.getElementById('aposentados-container');
        if (!meusPilotosContainer || !mercadoPilotosContainer || !gridAtivoContainer || !aposentadosContainer) return;

        meusPilotosContainer.innerHTML = '';
        mercadoPilotosContainer.innerHTML = '';
        gridAtivoContainer.innerHTML = '';
        aposentadosContainer.innerHTML = '';

        const nivelSimulador = gameState.instalacoes.simulador;
        const treinadorContratado = gameState.escuderia.especialistas.find(e => e.tipo === 'Treinador de Pilotos');
        const vagaReservaDesbloqueada = treinadorContratado || nivelSimulador >= 4;
        const maxReservas = nivelSimulador >= 4 ? 2 : 1;
        const reservas = gameState.pilotos.filter(p => p.status === 'Reserva');

        // Piloto 1
        const carro1 = gameState.carros[0];
        const pilotoCarro1 = carro1.pilotoId ? gameState.pilotos.find(p => p.id === carro1.pilotoId) : null;
        meusPilotosContainer.innerHTML += pilotoCarro1
            ? gerarCardPilotoHtml(pilotoCarro1, 'Piloto 1')
            : '<div class="piloto-card" style="display:flex;align-items:center;justify-content:center;color:#888;border-style:dashed;"><h4>Vaga para Piloto 1</h4></div>';

        // Piloto 2
        const carro2 = gameState.carros[1];
        const pilotoCarro2 = carro2.pilotoId ? gameState.pilotos.find(p => p.id === carro2.pilotoId) : null;
        meusPilotosContainer.innerHTML += pilotoCarro2
            ? gerarCardPilotoHtml(pilotoCarro2, 'Piloto 2')
            : '<div class="piloto-card" style="display:flex;align-items:center;justify-content:center;color:#888;border-style:dashed;"><h4>Vaga para Piloto 2</h4></div>';

        // Emblema (posição central, 3ª coluna)
        meusPilotosContainer.innerHTML += `<div class="equipe-emblema-card"><div id="emblema-display-pilotos-aba"></div></div>`;

        // Slots de reserva
        const vagaNaEquipePrincipal = !pilotoCarro1 || !pilotoCarro2;
        for (let i = 0; i < maxReservas; i++) {
            const reserva = reservas[i];
            const labelSlot = maxReservas > 1 ? `Vaga de Reserva ${i + 1}` : 'Vaga de Piloto Reserva';
            if (reserva) {
                meusPilotosContainer.innerHTML += gerarCardPilotoHtml(reserva, `Reserva${maxReservas > 1 ? ' ' + (i+1) : ''}`, vagaNaEquipePrincipal);
            } else if (vagaReservaDesbloqueada) {
                const infoLimiteIdade = nivelSimulador >= 5 ? 'Sem limite de idade.' : 'Piloto com menos de 23 anos.';
                meusPilotosContainer.innerHTML += `<div class="piloto-card vaga-reserva"><div><h4>${labelSlot}</h4><p style="font-size:0.9em;">${infoLimiteIdade}</p></div></div>`;
            } else {
                meusPilotosContainer.innerHTML += `<div class="piloto-card vaga-reserva"><div><h4>Vaga Bloqueada</h4><p style="font-size:0.9em;">Contrate um Treinador de Pilotos ou evolua o Simulador ao Nível 4.</p></div></div>`;
                break; // só mostra 1 bloqueado
            }
        }

        // Mercado de pilotos
        const pilotosDeMercado = gameState.pilotos.filter(p => p.status === 'Disponível');
        pilotosDeMercado.forEach(piloto => { mercadoPilotosContainer.innerHTML += gerarCardPilotoHtml(piloto); });

        // Grid ativo IA
        const pilotosAtivosIA = gameState.pilotos.filter(p => p.status !== 'Jogador' && p.status !== 'Reserva' && p.status !== 'Disponível' && p.status !== 'Indisponível');
        const equipesOrdenadas = [...equipesIA].sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
        const pilotosOrdenados = [];
        equipesOrdenadas.forEach(equipe => {
            const p1 = pilotosAtivosIA.find(p => p.id === equipe.piloto1Id);
            const p2 = pilotosAtivosIA.find(p => p.id === equipe.piloto2Id);
            if (p1) pilotosOrdenados.push(p1);
            if (p2) pilotosOrdenados.push(p2);
        });
        pilotosAtivosIA.forEach(p => { if (!pilotosOrdenados.includes(p)) pilotosOrdenados.push(p); });
        pilotosOrdenados.forEach(piloto => { gridAtivoContainer.innerHTML += gerarCardPilotoHtml(piloto); });

        // Aposentados
        const pilotosAposentados = gameState.galeria.hallDaFama;
        if (pilotosAposentados.length > 0) {
            pilotosAposentados.forEach(entrada => { aposentadosContainer.innerHTML += gerarCardAposentadoHtml(entrada); });
        } else {
            aposentadosContainer.innerHTML = '<p style="text-align: center;">Nenhum piloto da sua equipe se aposentou ainda.</p>';
        }

        const emblemaContainerPrincipal = document.getElementById('emblema-display-pilotos-aba');
        if (emblemaContainerPrincipal) renderizarEmblema(emblemaContainerPrincipal, gameState.escuderia.emblema);
    }

    function renderPlayerCarStatus() {
        const meusPilotosIds = gameState.carros.map(c => c.pilotoId).filter(id => id !== null);

        for (let i = 0; i < 2; i++) {
            const cardContainer = document.getElementById(`player-car-${i + 1}-status`);
            if (!cardContainer) continue;

            const pilotoId = meusPilotosIds[i];
            if (!pilotoId) { cardContainer.innerHTML = ''; cardContainer.classList.add('hidden'); continue; }

            const participante = raceData.participantes.find(p => p.piloto.id === pilotoId);
            if (!participante) continue;

            if (!cardContainer.querySelector('.ers-bar-container')) {
                cardContainer.innerHTML = `
                    <img src="img/carf1.png" alt="Carro" class="car-image-compact">
                    <div class="car-info-compact">
                        <h4>${participante.piloto.nome}</h4>
                        <p class="pneu-info-line">
                            <span>Pneu:</span>
                            <span class="tyre-compound-display"></span>
                            <span class="tire-lap-count"></span>
                        </p>
                        <div class="tire-wear-bar-single">
                            <div class="tire-wear-bar-fill-single"></div>
                        </div>
                        <div class="ers-bar-container">
                            <span class="ers-label">ERS</span>
                            <div class="ers-bar-fill"></div>
                        </div>
                    </div>
                `;
            }

            const durabilidade = Math.max(0, participante.durabilidadePneu);
            const fillBar = cardContainer.querySelector('.tire-wear-bar-fill-single');
            if(fillBar) {
                fillBar.style.width = `${durabilidade}%`;
                fillBar.style.backgroundColor = getTyreWearColor(durabilidade);
            }

            const tireCompoundSpan = cardContainer.querySelector('.tyre-compound-display');
            if (tireCompoundSpan) {
                tireCompoundSpan.textContent = participante.pneuAtual.charAt(0).toUpperCase();
                tireCompoundSpan.className = `tyre-indicator tyre-${participante.pneuAtual} tyre-compound-display`;
            }

            const tireLapCountSpan = cardContainer.querySelector('.tire-lap-count');
            if (tireLapCountSpan) {
                tireLapCountSpan.textContent = `(${participante.voltasNoPneuAtual}v) - ${durabilidade.toFixed(0)}%`;
            }

            if (participante.ers) {
                const ersFillBar = cardContainer.querySelector('.ers-bar-fill');
                if (ersFillBar) {
                    ersFillBar.style.width = `${participante.ers.bateria}%`;
                    ersFillBar.classList.toggle('full', participante.ers.ativo || participante.ers.bateria >= 100);
                }
            }
        }
    }

    function renderAbaCorrida() {
        const corridaDiv = document.getElementById('corrida');
        if (!corridaDiv) return;

        const isSeasonOver = gameState.campeonato.corridaAtualIndex >= calendarioCorridas.length;
        if (isSeasonOver) {
            corridaDiv.innerHTML = `<div class="corrida-start-container" style="text-align:center;"><h2>Temporada de ${gameState.campeonato.ano} Concluída!</h2><p>Visite a Aba Campeonato para ver a classificação final.</p><button id="btn-iniciar-nova-temporada" class="btn-corrida btn-real">Iniciar Temporada de ${gameState.campeonato.ano + 1}</button></div>`;
            return;
        }

        // ── FÉRIAS DE VERÃO ─────────────────────────────────────────────
        // Ocorrem entre a Hungria (índice 12) e a Holanda (índice 13).
        // Mostradas uma única vez por temporada (flag feriaVeraoFeita).
        const INDICE_FERIAS = 13; // índice da corrida que começa depois das férias
        const isFeriasDeVerao = gameState.campeonato.corridaAtualIndex === INDICE_FERIAS
                                && !gameState.campeonato.feriaVeraoFeita;
        if (isFeriasDeVerao) {
            // Calcula projetos em andamento e quantos serão concluídos
            const projetosAtivos = gameState.projetosEmAndamento.filter(p => p.status === 'em_andamento');
            const projetosRows = projetosAtivos.length > 0
                ? projetosAtivos.map(p => {
                    const restante = Math.max(0, p.duracaoRestante - 5);
                    const conclui  = p.duracaoRestante <= 5;
                    return `<div class="ferias-projeto-row">
                        <span class="ferias-proj-nome">${p.tipoPeca}</span>
                        <span class="ferias-proj-status ${conclui ? 'conclui' : 'continua'}">
                            ${conclui ? '✅ Concluirá nas férias' : `⏳ Restam ${restante} corridas após`}
                        </span>
                    </div>`;
                }).join('')
                : `<p class="ferias-sem-projetos">Nenhum projeto em andamento no momento.</p>`;

            corridaDiv.innerHTML = `
                <div class="ferias-container">
                    <div class="ferias-header">
                        <span class="ferias-icon">🏖️</span>
                        <div>
                            <h2 class="ferias-title">FÉRIAS DE VERÃO DA F1</h2>
                            <p class="ferias-subtitle">Pausa obrigatória entre o GP da Hungria e o GP da Holanda</p>
                        </div>
                    </div>

                    <div class="ferias-info-grid">
                        <div class="ferias-info-card">
                            <div class="ferias-info-icon">📅</div>
                            <div class="ferias-info-label">Duração</div>
                            <div class="ferias-info-valor">~4 semanas</div>
                        </div>
                        <div class="ferias-info-card">
                            <div class="ferias-info-icon">⚙️</div>
                            <div class="ferias-info-label">Progresso de P&D</div>
                            <div class="ferias-info-valor">+5 corridas equivalentes</div>
                        </div>
                        <div class="ferias-info-card">
                            <div class="ferias-info-icon">💰</div>
                            <div class="ferias-info-label">Salários</div>
                            <div class="ferias-info-valor">Descontados normalmente</div>
                        </div>
                    </div>

                    <div class="ferias-projetos-section">
                        <h3 class="ferias-projetos-title">📦 Projetos em andamento</h3>
                        <div class="ferias-projetos-list">${projetosRows}</div>
                    </div>

                    <div class="ferias-footer">
                        <p class="ferias-aviso">Durante as férias, sua equipe de P&D continua trabalhando. Use esse tempo para contratar especialistas e iniciar novos projetos antes de retomar o campeonato.</p>
                        <button id="btn-encerrar-ferias" class="btn-ferias-encerrar">🏁 Encerrar Férias e Ir para a Holanda</button>
                    </div>
                </div>`;
            return;
        }

        // ── Gera as bolinhas do progresso da temporada ──────────────────
        const totalCorridas = calendarioCorridas.length;
        const corridaAtual  = gameState.campeonato.corridaAtualIndex; // 0-based
        // Férias ficam entre o índice 12 (Hungria, corrida 13) e 13 (Holanda, corrida 14)
        const FERIAS_APOS_INDICE = 12;

        let bolinhsHtml = '';
        for (let i = 0; i < totalCorridas; i++) {
            // Insere bolinha de Férias entre corrida 13 e 14
            if (i === FERIAS_APOS_INDICE + 1) {
                bolinhsHtml += `<div class="rp-item rp-ferias" title="🏖️ Férias de Verão">
                    <div class="rp-dot rp-dot-ferias">F</div>
                    <div class="rp-num">—</div>
                </div>`;
            }
            const numCorrida  = i + 1;
            const nomePista   = calendarioCorridas[i].nome;
            const isConcluida = i < corridaAtual;
            const isAtual     = i === corridaAtual;
            const cls = isConcluida ? 'rp-dot-feita' : isAtual ? 'rp-dot-atual' : 'rp-dot-futura';
            const icone = isConcluida ? '✓' : numCorrida;
            bolinhsHtml += `<div class="rp-item ${isAtual ? 'rp-item-atual' : ''}" title="${numCorrida}. ${nomePista}">
                <div class="rp-dot ${cls}">${icone}</div>
                <div class="rp-num">${numCorrida}</div>
            </div>`;
        }

        corridaDiv.innerHTML = `
            <div class="rp-wrapper">
                <h2 class="rp-titulo-corrida">Próxima Corrida: <span id="pista-nome-corrida"></span></h2>
                <div class="rp-track">
                    <div class="rp-linha"></div>
                    ${bolinhsHtml}
                </div>
            </div>
            <div class="corrida-layout-3col">
                <div class="setup-coluna" id="coluna-esquerda-corrida">
                    <div id="info-pre-corrida-esquerda">
                        <h3>Informações da Pista</h3>
                        <div id="info-pista" class="info-box"></div>
                        <h3>Nossos Carros</h3>
                        <div id="nossos-carros-corrida"></div>
                    </div>
                </div>
                <div class="corrida-start-container">
                    <div id="pre-race-view">
                        <h3 id="corrida-titulo-pre-race">Pronto para Correr</h3>
                        <div id="race-options-container">
                            <button id="btn-corrida-real" class="btn-corrida btn-real">Tempo Real (10s/volta)</button>
                            <button id="btn-corrida-rapida" class="btn-corrida btn-rapida">Rápido (2s/volta)</button>
                        </div>
                        <div id="grid-formation-container" class="hidden"></div>
                    </div>
                    <div id="live-race-view" class="hidden">
                        <div class="estilo-carros">
                            <div id="player-car-1-status" class="player-car-status-card compact hidden"></div>
                            <div id="track-canvas-container"><canvas id="track-canvas"></canvas></div>
                            <div id="player-car-2-status" class="player-car-status-card compact hidden"></div>
                        </div>
                        <div id="radio-messages-container">
                            <div id="radio-display-box" class="radio-message"></div>
                        </div>
                        <button id="btn-fechar-resultados" class="btn-corrida btn-fechar hidden">Ver Próxima Corrida</button>
                        <div id="sc-race-banner" class="sc-race-banner hidden"></div>
                        <h3 id="display-volta"></h3>
                        <table id="tabela-resultados">
                            <thead>
                                <tr><th>Pos</th><th>Piloto</th><th>Equipe</th><th>Paradas</th><th>Pneu</th><th>Últ. Volta</th><th>Volta Rápida</th><th>Gap</th></tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                        <div id="sc-historico-container"></div>
                    </div>
                </div>
                <div class="setup-coluna" id="coluna-direita-corrida">
                    <div id="info-pre-corrida-direita">
                        <h3>Estratégia de Corrida</h3>
                        <div id="strategy-container"></div>
                    </div>
                    <div id="watchlist-card" class="watchlist-card hidden">
                        <div class="watchlist-header">
                            <span class="watchlist-title">👁️ Monitor de Corrida</span>
                        </div>
                        <div id="watchlist-pilotos"></div>
                    </div>
                </div>
            </div>
        `;

        const pista = calendarioCorridas[gameState.campeonato.corridaAtualIndex];
        document.getElementById('pista-nome-corrida').textContent = `${pista.nome} (${gameState.campeonato.corridaAtualIndex + 1}/${calendarioCorridas.length})`;
        document.getElementById('info-pista').innerHTML = `<img src="${pista.imagem}" alt="Circuito" class="info-pista-imagem"><p>Voltas: ${pista.voltas}</p><p>Foco em Motor: ${pista.demandaMotor * 100}%</p><p>Foco em Aerodinâmica: ${pista.demandaAero * 100}%</p><p>Foco em Aderência: ${pista.demandaAderencia * 100}%</p><p>⏱️ Pit Stop Aproximado: <strong>${pista.pitstopTime}s</strong></p>`;

        // --- INÍCIO DA LÓGICA ATUALIZADA ---
        document.getElementById('nossos-carros-corrida').innerHTML = gameState.carros.map((carro, index) => {
        const piloto = gameState.pilotos.find(p => p.id === carro.pilotoId);
        const pilotoNome = piloto ? piloto.nome : "VAGO";
        const atributosCarro = calcularAtributosCarro(carro);

        // Define os valores máximos para calcular o percentual. 100 é um bom teto.
        const MAX_VALOR_ATRIBUTO = 100;

        let forcaEquipeHtml = '<strong>Força da Equipe:</strong> N/A';
        if (piloto) {
            const mediaPiloto = (piloto.habilidade + piloto.consistencia + piloto.gerenciamentoPneus) / 3;
            const forcaEquipe = (atributosCarro.potencia + atributosCarro.aerodinamica + atributosCarro.aderencia + mediaPiloto) / 4;
            forcaEquipeHtml = `<strong>Força da Equipe:</strong> <span style="color: ${getCorAtributo(forcaEquipe, 100)}; font-weight: bold;">${forcaEquipe.toFixed(0)}</span>`;
        }

        // Gera o HTML para os atributos com as cores dinâmicas
        const atributosHtml = `
            <p>
                Pot: <strong style="color: ${getCorAtributo(atributosCarro.potencia, MAX_VALOR_ATRIBUTO)};">${atributosCarro.potencia}</strong> |
                Aero: <strong style="color: ${getCorAtributo(atributosCarro.aerodinamica, MAX_VALOR_ATRIBUTO)};">${atributosCarro.aerodinamica}</strong> |
                Adr: <strong style="color: ${getCorAtributo(atributosCarro.aderencia, MAX_VALOR_ATRIBUTO)};">${atributosCarro.aderencia}</strong> |
                Conf: <strong style="color: ${getCorAtributo(atributosCarro.confiabilidade, 100)};">${atributosCarro.confiabilidade}%</strong>
            </p>
            <p style="margin-top: 8px; border-top: 1px solid #eee; padding-top: 8px;">
                ${forcaEquipeHtml}
            </p>
        `;

        let separador = '';
        if (index === 0 && gameState.carros.length > 1) {
            separador = '<hr style="border-top: 1px solid #ccc; margin: 10px 0;">';
        }

        return `<div class="carro-resumo"><h4>${pilotoNome}</h4>${atributosHtml}</div>${separador}`;
    }).join('');
        // --- FIM DA LÓGICA ATUALIZADA ---

        renderEstrategiaUI();
    }

    // ─────────────────────────────────────────────────────────────────────────
    // WATCHLIST — Monitoramento de pilotos IA durante a corrida
    // ─────────────────────────────────────────────────────────────────────────

    // ── Helpers internos do monitor ───────────────────────────────────────────

    function _wlPosGap(p) {
        if (!p || !raceData.participantes) return { pos: null, isDNF: true, gapLider: null };
        const sorted = raceData.participantes
            .filter(x => x.tempoTotal !== Infinity)
            .sort((a, b) => a.tempoTotal - b.tempoTotal);
        const isDNF = p.tempoTotal === Infinity;
        const pos   = isDNF ? null : sorted.findIndex(x => x.piloto.id === p.piloto.id) + 1;
        const lider = sorted[0];
        const gapLider = (!isDNF && lider && pos !== 1) ? p.tempoTotal - lider.tempoTotal : null;
        return { pos, isDNF, gapLider };
    }

    function _wlMiniCard(p, label) {
        if (!p) return '<div class="wl-mini-vazio">—</div>';
        const cor  = getCorDaEquipe(p.equipe);
        const { pos, isDNF, gapLider } = _wlPosGap(p);
        const pneuCores = { macio: '#e8002d', medio: '#f5c518', duro: '#ccc' };
        const pneuLetra = { macio: 'M', medio: 'Me', duro: 'D' };
        const pCor = pneuCores[p.pneuAtual] || '#888';
        const pLet = pneuLetra[p.pneuAtual] || '?';
        const posStr = isDNF ? 'DNF' : (pos ? `P${pos}` : '—');
        let gapStr;
        if (isDNF)          gapStr = 'DNF';
        else if (pos === 1) gapStr = '🏆 Líder';
        else                gapStr = `+${gapLider.toFixed(3)}s`;
        return `<div class="wl-mini-card" style="border-top:3px solid ${cor}">
            <div class="wl-mini-label">${label}</div>
            <div class="wl-mini-nome">${p.piloto.nome}</div>
            <div class="wl-mini-pos" style="color:${cor}">${posStr}</div>
            <div class="wl-mini-pneu">
                <span class="wl-pneu-badge" style="background:${pCor}">${pLet}</span>
                <span class="wl-pneu-voltas">${p.voltasNoPneuAtual}v</span>
            </div>
            <div class="wl-mini-gap">${gapStr}</div>
        </div>`;
    }

    function _wlDiffBadge(pA, pB) {
        if (!pA || !pB) return '<div class="wl-diff-badge">—</div>';
        const { pos: posA, isDNF: dnfA } = _wlPosGap(pA);
        const { pos: posB, isDNF: dnfB } = _wlPosGap(pB);
        if (dnfA || dnfB || !posA || !posB) return '<div class="wl-diff-badge">—</div>';
        const diffPos = posB - posA;   // positivo = A está à frente
        const diffSeg = pA.tempoTotal - pB.tempoTotal; // negativo = A mais rápido
        const posLabel = diffPos === 0 ? '= pos'
            : diffPos > 0 ? `▲${diffPos} pos` : `▼${Math.abs(diffPos)} pos`;
        const segStr   = diffSeg === 0 ? '='
            : diffSeg < 0 ? `−${Math.abs(diffSeg).toFixed(3)}s` : `+${diffSeg.toFixed(3)}s`;
        const corSeg   = diffSeg < 0 ? '#4caf50' : diffSeg > 0 ? '#ff5252' : '#aaa';
        const corPos   = diffPos > 0 ? '#4caf50' : diffPos < 0 ? '#ff5252' : '#aaa';
        return `<div class="wl-diff-badge">
            <span class="wl-diff-pos" style="color:${corPos}">${posLabel}</span>
            <span class="wl-diff-seg" style="color:${corSeg}">${segStr}</span>
        </div>`;
    }

    function renderWatchlistCard() {
        const container = document.getElementById('watchlist-pilotos');
        if (!container || !raceData.participantes) return;

        // Busca os pilotos pela ordem definida em gameState.carros (Carro 1 = P1, Carro 2 = P2),
        // ignorando a posição no grid de largada (que depende da quali e pode inverter a exibição).
        const _idCarro1 = gameState.carros[0]?.pilotoId;
        const _idCarro2 = gameState.carros[1]?.pilotoId;
        const p1 = raceData.participantes.find(x => x.piloto.id === _idCarro1) || null;
        const p2 = raceData.participantes.find(x => x.piloto.id === _idCarro2) || null;

        // ── Seção 1: Duelo Interno (sempre visível) ────────────────────────
        let html = '<div class="wl-secao-titulo">🏎️ Duelo Interno</div>';
        html += `<div class="wl-duelo-row">
            ${_wlMiniCard(p1, 'Piloto 1')}
            ${_wlDiffBadge(p1, p2)}
            ${_wlMiniCard(p2, 'Piloto 2')}
        </div>`;

        // ── Seção 2: Comparar com IA (aparece quando um piloto é monitorado) ─
        html += '<div class="wl-separador"></div>';
        if (pilotosMonitorados.length > 0) {
            const iaId  = pilotosMonitorados[0];
            const pIA   = raceData.participantes.find(x => x.piloto.id === iaId);
            const pRef  = watchlistRefPiloto === 2 ? p2 : p1;
            const refLbl= watchlistRefPiloto === 2 ? 'Piloto 2' : 'Piloto 1';
            html += `<div class="wl-secao-titulo">
                👁️ Comparar com IA
                <span class="wl-ref-toggle">
                    <button class="wl-ref-btn${watchlistRefPiloto===1?' ativo':''}" data-action="wl-ref" data-ref="1">P1</button>
                    <button class="wl-ref-btn${watchlistRefPiloto===2?' ativo':''}" data-action="wl-ref" data-ref="2">P2</button>
                </span>
            </div>`;
            html += `<div class="wl-duelo-row">
                ${_wlMiniCard(pRef, refLbl)}
                ${_wlDiffBadge(pRef, pIA)}
                ${_wlMiniCard(pIA, pIA ? pIA.equipe : 'IA')}
            </div>`;
            html += `<div class="wl-ia-remove">
                <button class="watchlist-remove-btn" data-piloto-id="${iaId}">✕ Remover rival</button>
            </div>`;
        } else {
            html += '<p class="watchlist-vazio">Clique em 👁️ na tabela para comparar com um rival.</p>';
        }

        container.innerHTML = html;
    }

    function hexToRgba(cor, alpha) {
        // Suporta rgb(...) e #hex
        const rgbMatch = cor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (rgbMatch) return `rgba(${rgbMatch[1]},${rgbMatch[2]},${rgbMatch[3]},${alpha})`;
        const hexMatch = cor.replace('#', '').match(/.{2}/g);
        if (hexMatch) return `rgba(${hexMatch.map(h => parseInt(h, 16)).join(',')},${alpha})`;
        return `rgba(108,117,125,${alpha})`;
    }

    function toggleMonitorarPiloto(pilotoId) {
        const id = parseInt(pilotoId);
        const p = raceData.participantes?.find(x => x.piloto.id === id);
        if (!p || p.isPlayer) return;
        if (pilotosMonitorados[0] === id) {
            pilotosMonitorados = [];   // remove se clicar no mesmo
        } else {
            pilotosMonitorados = [id]; // substitui qualquer IA anterior
        }
        renderWatchlistCard();
        renderTabelaAoVivo();
    }

    function renderTabelaAoVivo() {
        const voltaParaExibir = Math.min(raceData.voltaAtual, raceData.totalVoltas);
        document.getElementById('display-volta').textContent = `VOLTA ${voltaParaExibir} / ${raceData.totalVoltas}`;

        // SC banner abaixo do display de volta
        const scBanner = document.getElementById('sc-race-banner');
        if (scBanner) {
            if (raceData.safetyCarAtivo) {
                scBanner.classList.remove('hidden');
                scBanner.innerHTML = `
                    <span class="sc-banner-icon">🚨</span>
                    <span class="sc-banner-text">SAFETY CAR ATIVO</span>
                    <span class="sc-banner-motivo">${raceData.safetyCarMotivo || 'Incidente na pista'}</span>
                    <span class="sc-banner-volta">Volta ${raceData.voltaAtual}</span>`;
            } else {
                scBanner.classList.add('hidden');
            }
        }

        const tabelaBody = document.querySelector("#tabela-resultados tbody");
        if (!tabelaBody) return;

        const lider = raceData.participantes.find(p => p.tempoTotal !== Infinity) || raceData.participantes[0];
        renderPlayerCarStatus();
        tabelaBody.innerHTML = raceData.participantes.map((res, index) => {
            const pos = index + 1;
            const cor = getCorDaEquipe(res.equipe);
            let gapLider = res.tempoTotal - lider.tempoTotal;
            let gapAnterior = index > 0 ? res.tempoTotal - raceData.participantes[index - 1].tempoTotal : 0;
            res.posicao = pos;
            res.gapParaFrente = gapAnterior;
            const idPiloto = res.piloto.id || res.piloto.nome;
            let corGap = '';
            if (pos > 1 && res.tempoTotal !== Infinity) {
                const gapAnteriorAnterior = gapsAnteriores[idPiloto];
                if (gapAnteriorAnterior !== undefined) {
                    if (gapAnterior < gapAnteriorAnterior) corGap = 'green';
                    else if (gapAnterior > gapAnteriorAnterior) corGap = 'red';
                }
                gapsAnteriores[idPiloto] = gapAnterior;
            }
            let gapDisplay;
            if (res.tempoTotal === Infinity) gapDisplay = "DNF";
            else if (pos === 1) gapDisplay = "Líder";
            else if (pos === 2) gapDisplay = `(<span style="color:${corGap}">${gapAnterior.toFixed(3)}</span>)`;
            else gapDisplay = `${gapLider.toFixed(3)}s (<span style="color:${corGap}">${gapAnterior.toFixed(3)}</span>)`;
            const celulaPneuHtml = `<div class="pneu-cell-container"><span class="tyre-indicator tyre-${res.pneuAtual}">${res.pneuAtual.charAt(0).toUpperCase()}</span> <span class="pneu-lap-counter">(${res.voltasNoPneuAtual}v)</span></div>`;
            const isFastestLap = res.piloto.nome === raceData.pilotoMelhorVolta && raceData.melhorVolta !== Infinity;
            const ultimaVoltaClasse = res.ersBonusAtivoNestaVolta ? 'ers-active-lap' : '';

            // Watchlist: classe e estilo de fundo para pilotos monitorados
            const isMonitorado = pilotosMonitorados.includes(res.piloto.id);
            const watchClass = isMonitorado ? 'watched-row' : '';
            const watchBg = isMonitorado ? `background-color: ${hexToRgba(cor, 0.15)};` : '';
            const watchIcon = !res.isPlayer
                ? `<span class="watch-eye-btn ${isMonitorado ? 'watched' : ''}" data-action="toggle-watch" data-piloto-id="${res.piloto.id}" title="${isMonitorado ? 'Remover monitoramento' : 'Monitorar piloto'}">👁️</span>`
                : '';

            return `<tr class="${res.isPlayer ? 'player-row' : ''} ${watchClass}" style="border-left-color: ${cor}; ${watchBg}">
                <td>${pos}</td>
                <td>${watchIcon}${res.piloto.nome}${isFastestLap ? '<span class="fastest-lap-icon">⏱️</span>' : ''}</td>
                <td>${res.equipe}</td>
                <td>${res.paradas}</td>
                <td>${celulaPneuHtml}</td>
                <td><span class="lap-time ${ultimaVoltaClasse}">${res.ultimaVolta || '---'}</span></td>
                <td class="${isFastestLap ? 'fastest-lap-cell' : ''}"><span class="lap-time">${res.melhorVoltaPessoal === Infinity ? '---' : formatLapTime(res.melhorVoltaPessoal)}</span></td>
                <td><span class="lap-time">${gapDisplay}</span></td>
            </tr>`;
        }).join('');
        if (raceData.voltaAtual === 2) {
            const modeButtons = document.querySelectorAll('.btn-mode');
            if (modeButtons.length > 0 && modeButtons[0].disabled) {
                modeButtons.forEach(btn => { btn.disabled = false; });
            }
        }
        // Atualiza o watchlist a cada volta — o "Duelo Interno" precisa
        // ser refrescado independentemente de haver piloto IA monitorado.
        const wlCard = document.getElementById('watchlist-card');
        if (wlCard && !wlCard.classList.contains('hidden')) renderWatchlistCard();
    }

    function renderAbaCampeonato() {
        const anoDisplay = document.querySelectorAll('.campeonato-ano-display');
        if (anoDisplay) anoDisplay.forEach(el => el.textContent = gameState.campeonato.ano);
        renderTabelaClassificacaoPilotos();
        renderTabelaClassificacaoConstrutores();
        renderResultadosCorridas();
    }


    function renderTabelaClassificacaoPilotos() {
        const tabelaBody = document.querySelector("#tabela-classificacao-pilotos tbody");
        if (!tabelaBody) return;
        const classificacaoOrdenada = [...gameState.campeonato.classificacaoPilotos].sort((a, b) => b.pontos - a.pontos);
        tabelaBody.innerHTML = classificacaoOrdenada.map((piloto, index) => {
            let logoOuEmblemaHtml = '';
            if (piloto.equipe === gameState.escuderia.nome) {
                // Se for a equipe do jogador, prepara o container do emblema
                logoOuEmblemaHtml = `<div id="emblema-pilotos-${index}" class="emblema-na-tabela"></div>`;
            } else {
                // Se for uma equipe de IA, encontra os dados e pega a imagem
                const equipeData = equipesIA.find(e => e.nome === piloto.equipe);
                if (equipeData && equipeData.ftequipe) {
                    logoOuEmblemaHtml = `<img src="${equipeData.ftequipe}" alt="${piloto.equipe}" class="equipe-foto-tabela">`;
                }
            }

            return `<tr class="${piloto.equipe === gameState.escuderia.nome ? 'player-row' : ''}" style="border-left: 5px solid ${getCorDaEquipe(piloto.equipe)};">
                        <td>${index + 1}</td>
                        <td>${piloto.piloto}</td>
                        <td>${logoOuEmblemaHtml}<span>${piloto.equipe}</span></td>
                        <td>${piloto.pontos}</td>
                    </tr>`;
        }).join('');

        // Renderiza o emblema do jogador após o HTML ser inserido
        classificacaoOrdenada.forEach((piloto, index) => {
            if (piloto.equipe === gameState.escuderia.nome) {
                const container = document.getElementById(`emblema-pilotos-${index}`);
                if (container) {
                    renderizarEmblema(container, gameState.escuderia.emblema);
                }
            }
        });
    }


    function renderTabelaClassificacaoConstrutores() {
        const tabelaBody = document.querySelector("#tabela-classificacao-construtores tbody");
        if (!tabelaBody) return;
        const classificacaoOrdenada = [...gameState.campeonato.classificacaoConstrutores].sort((a, b) => b.pontos - a.pontos);
        tabelaBody.innerHTML = classificacaoOrdenada.map((equipe, index) => {
            let logoOuEmblemaHtml = '';
            if (equipe.equipe === gameState.escuderia.nome) {
                // Se for a equipe do jogador, prepara o container do emblema
                logoOuEmblemaHtml = `<div id="emblema-construtores-${index}" class="emblema-na-tabela"></div>`;
            } else {
                // Se for uma equipe de IA, encontra os dados e pega a imagem
                const equipeData = equipesIA.find(e => e.nome === equipe.equipe);
                if (equipeData && equipeData.ftequipe) {
                    logoOuEmblemaHtml = `<img src="${equipeData.ftequipe}" alt="${equipe.equipe}" class="equipe-foto-tabela">`;
                }
            }

            return `<tr class="${equipe.equipe === gameState.escuderia.nome ? 'player-row' : ''}" style="border-left: 5px solid ${getCorDaEquipe(equipe.equipe)};">
                        <td>${index + 1}</td>
                        <td>${logoOuEmblemaHtml}<span>${equipe.equipe}</span></td>
                        <td>${equipe.pontos}</td>
                    </tr>`;
        }).join('');

        // Renderiza o emblema do jogador após o HTML ser inserido
        classificacaoOrdenada.forEach((equipe, index) => {
            if (equipe.equipe === gameState.escuderia.nome) {
                const container = document.getElementById(`emblema-construtores-${index}`);
                if (container) {
                    renderizarEmblema(container, gameState.escuderia.emblema);
                }
            }
        });
    }

    function renderResultadosCorridas() {
        const container = document.getElementById('resultados-corridas-container');
        if (!container) return;

        container.innerHTML = gameState.campeonato.resultadosCorridas.map((corrida) => {
            const podioHtml = `<ol>${corrida.resultadoFinal.map(p => `<li>${p.piloto.nome} (${p.equipe})</li>`).join('')}</ol>`;
            const melhorVoltaHtml = (corrida.melhorVolta && corrida.melhorVolta.piloto)
                ? `<p class="volta-rapida-info">⏱️ <strong>Volta Rápida:</strong> ${corrida.melhorVolta.piloto} (${formatLapTime(corrida.melhorVolta.tempo)})</p>`
                : '';

            return `<div class="resultado-corrida-box">
                        <h4>${corrida.nomePista}</h4>
                        ${podioHtml}
                        ${melhorVoltaHtml}
                    </div>`;
        }).join('');
    }

    function renderAbaAutodromo() {
        const container = document.getElementById('autodromo-container');
        if (!container) return;
        container.innerHTML = calendarioCorridas.map(pista => {
            const historicoPista = gameState.historicoAutodromos[pista.nome];
            let recordeHtml = '<p>Nenhum recorde estabelecido.</p>';
            if (historicoPista && historicoPista.recordeVolta.piloto) {
                recordeHtml = `<p class="recorde-volta">${formatLapTime(historicoPista.recordeVolta.tempo)} - ${historicoPista.recordeVolta.piloto} (${historicoPista.recordeVolta.ano})</p>`;
            }
            let tabelaHistoricoHtml = '<h4>Histórico de Corridas</h4><p>Nenhuma corrida realizada neste circuito.</p>';
            if (historicoPista && historicoPista.historicoAnual.length > 0) {
                tabelaHistoricoHtml = `
                    <h4>Histórico de Corridas</h4>
                    <table class="historico-tabela">
                        <thead><tr><th>Ano</th><th>Pódio (1º, 2º, 3º)</th><th>Pole Position</th><th>Volta Mais Rápida</th></tr></thead>
                        <tbody>
                            ${[...historicoPista.historicoAnual].reverse().map(ano => `
                                <tr>
                                    <td>${ano.ano}</td>
                                    <td>${ano.podium ? ano.podium.join(', ') : 'N/A'}</td>
                                    <td>${ano.pole ? `${ano.pole.piloto} (${formatLapTime(ano.pole.tempo)})` : 'N/A'}</td>
                                    <td>${ano.voltaRapida ? `${ano.voltaRapida.piloto} (${formatLapTime(ano.voltaRapida.tempo)})` : 'N/A'}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>`;
            }
            return `
                <div class="autodromo-card">
                    <img class="autodromo-imagem" src="${pista.imagem || 'https://via.placeholder.com/800x250'}" alt="Foto do circuito ${pista.nome}">
                    <div class="autodromo-header"><h3>${pista.nome}</h3></div>
                    <div class="autodromo-detalhes">
                        <div class="info-bloco">
                            <h4>Configuração da Pista</h4>
                            <p><strong>Voltas:</strong> ${pista.voltas}</p>
                            <p><strong>Ênfase em Motor:</strong> ${pista.demandaMotor * 100}%</p>
                            <p><strong>Ênfase em Aerodinâmica:</strong> ${pista.demandaAero * 100}%</p>
                            <p><strong>Ênfase em Aderência:</strong> ${pista.demandaAderencia * 100}%</p>
                        </div>
                        <div class="info-bloco">
                            <h4>Recorde do Circuito</h4>
                            ${recordeHtml}
                        </div>
                    </div>
                    <div class="historico-corrida">${tabelaHistoricoHtml}</div>
                </div>`;
        }).join('');
    }


    // Estado de ordenação das tabelas de estatísticas
    const _sortState = {
        jogador: { col: 'corridas', dir: 'desc' },
        todos:   { col: 'pontos',   dir: 'desc' }
    };

    // Critérios de desempate da tabela "Todos os Pilotos":
    // pontos ↓ → vitórias ↓ → pódios ↓ → corridas ↑
    const _tiebreakersTodos = [
        { col: 'vitorias', dir: 'desc'  },
        { col: 'podios',   dir: 'desc'  },
        { col: 'corridas', dir: 'asc'   }
    ];

    function _renderTabelaStats(tabela, dados, colunas, sortState, tiebreakers = []) {
        if (!tabela) return;
        const tbody = tabela.querySelector('tbody');
        const theadThs = tabela.querySelectorAll('thead th');

        // Atualiza ícones de ordenação
        theadThs.forEach(th => {
            const icon = th.querySelector('.sort-icon');
            if (!icon) return;
            if (th.dataset.col === sortState.col) {
                icon.textContent = sortState.dir === 'asc' ? '▲' : '▼';
                th.classList.add('col-ativa');
            } else {
                icon.textContent = '↕';
                th.classList.remove('col-ativa');
            }
        });

        // Ordena com suporte a critérios de desempate (tiebreakers)
        const sorted = [...dados].sort((a, b) => {
            let va = a[sortState.col] ?? '';
            let vb = b[sortState.col] ?? '';
            if (typeof va === 'string') va = va.toLowerCase();
            if (typeof vb === 'string') vb = vb.toLowerCase();
            if (va < vb) return sortState.dir === 'asc' ? -1 : 1;
            if (va > vb) return sortState.dir === 'asc' ? 1 : -1;
            // Aplica tiebreakers sequencialmente quando há empate no critério principal
            for (const tb of tiebreakers) {
                if (tb.col === sortState.col) continue;
                let ta = a[tb.col] ?? '';
                let tc = b[tb.col] ?? '';
                if (typeof ta === 'string') ta = ta.toLowerCase();
                if (typeof tc === 'string') tc = tc.toLowerCase();
                if (ta < tc) return tb.dir === 'asc' ? -1 : 1;
                if (ta > tc) return tb.dir === 'asc' ? 1 : -1;
            }
            return 0;
        });

        if (sorted.length === 0) {
            tbody.innerHTML = '<tr><td colspan="' + colunas.length + '" style="text-align:center;color:#999;">Nenhum dado disponível ainda.</td></tr>';
            return;
        }

        tbody.innerHTML = sorted.map(row => {
            return '<tr>' + colunas.map(col => {
                const val = row[col] ?? '-';
                if (col === 'pontos') return '<td>' + (typeof val === 'number' ? val.toLocaleString('pt-BR') : val) + '</td>';
                return '<td>' + val + '</td>';
            }).join('') + '</tr>';
        }).join('');
    }

    function _ativarOrdenacao(tabela, tabelaKey, colunas, tiebreakers = []) {
        if (!tabela) return;
        tabela.querySelectorAll('thead th').forEach(th => {
            th.style.cursor = 'pointer';
            th.addEventListener('click', () => {
                const col = th.dataset.col;
                if (!col) return;
                if (_sortState[tabelaKey].col === col) {
                    _sortState[tabelaKey].dir = _sortState[tabelaKey].dir === 'asc' ? 'desc' : 'asc';
                } else {
                    _sortState[tabelaKey].col = col;
                    _sortState[tabelaKey].dir = 'desc';
                }
                const dados = _getDadosStats(tabelaKey);
                _renderTabelaStats(tabela, dados, colunas, _sortState[tabelaKey], tiebreakers);
            });
        });
    }

    function _getDadosStats(tabelaKey) {
        if (tabelaKey === 'jogador') {
            return Object.entries(gameState.galeria.estatisticasPilotos || {}).map(([nome, s]) => ({
                nome, corridas: s.corridas, vitorias: s.vitorias, podios: s.podios, pontos: s.pontos
            }));
        } else {
            return Object.entries(gameState.galeria.estatisticasTodosPilotos || {}).map(([nome, s]) => ({
                nome, equipe: s.equipe || '-', corridas: s.corridas, vitorias: s.vitorias, podios: s.podios, pontos: s.pontos
            }));
        }
    }

    let _statsOrdenacaoIniciada = false;

    // ═══════════════════════════════════════════════════════════════════
    // LIVRO DE RECORDES
    // ═══════════════════════════════════════════════════════════════════

    // ═══════════════════════════════════════════════════════════════════
    // ACADEMIA JÚNIOR
    // ═══════════════════════════════════════════════════════════════════

    const NOMES_ACADEMIA = [
        'A. Souza','B. Lima','C. Mendes','D. Ferreira','E. Costa',
        'F. Oliveira','G. Santos','H. Rocha','I. Alves','J. Nunes',
        'K. Pinto','L. Gomes','M. Carvalho','N. Ribeiro','O. Teixeira',
        'P. Azevedo','Q. Moreira','R. Cardoso','S. Lopes','T. Dias',
        'U. Faria','V. Ramos','W. Barros','X. Melo','Y. Cunha',
        'Z. Borges','A. Vieira','B. Monteiro','C. Cavalcanti','D. Correia',
        'E. Aragão','F. Braga','G. Vasconcelos','H. Macedo','I. Freitas'
    ];

    function gerarNomeJunior() {
        const usados = (gameState.academia?.pupilos || []).map(p => p.nome);
        const disponiveis = NOMES_ACADEMIA.filter(n => !usados.includes(n));
        return disponiveis.length > 0
            ? disponiveis[Math.floor(Math.random() * disponiveis.length)]
            : `Rookie ${Math.floor(Math.random() * 99) + 1}`;
    }

    function recrutarJunior() {
        if (!gameState.academia.desbloqueada) return;
        if (gameState.academia.pupilos.length >= 3) {
            alert('A academia já está com 3 pupilos. Dispense um antes de recrutar.');
            return;
        }
        const custoRecrutamento = 1500000 + Math.floor(Math.random() * 1000000);
        if (gameState.escuderia.dinheiro < custoRecrutamento) {
            alert(`Dinheiro insuficiente! Custo de recrutamento: R$ ${custoRecrutamento.toLocaleString('pt-BR')}`);
            return;
        }
        if (!confirm(`Recrutar um novo piloto júnior por R$ ${custoRecrutamento.toLocaleString('pt-BR')}?`)) return;

        gameState.escuderia.dinheiro -= custoRecrutamento;

        const atribBase = () => 40 + Math.floor(Math.random() * 16); // 40–55
        const novoPupilo = {
            id:                  Date.now() + Math.random(),
            nome:                gerarNomeJunior(),
            idade:               15 + Math.floor(Math.random() * 2), // 15 ou 16
            habilidade:          atribBase(),
            consistencia:        atribBase(),
            gerenciamentoPneus:  atribBase(),
            anoEntrada:          gameState.campeonato.ano,
            temporadasNaAcademia: 0,
            status:              'Junior'
        };

        gameState.academia.pupilos.push(novoPupilo);
        alert(`${novoPupilo.nome} (${novoPupilo.idade} anos) foi recrutado para a academia!`);
        renderAbaAcademia();
        saveGame();
    }

    function dispensarJunior(idPupilo) {
        const idx = gameState.academia.pupilos.findIndex(p => p.id === idPupilo);
        if (idx === -1) return;
        const pupilo = gameState.academia.pupilos[idx];
        if (!confirm(`Dispensar ${pupilo.nome} da academia?`)) return;
        gameState.academia.pupilos.splice(idx, 1);
        renderAbaAcademia();
        saveGame();
    }

    function promoverJuniorParaElenco(idPupilo) {
        const idx = gameState.academia.pupilos.findIndex(p => p.id === idPupilo);
        if (idx === -1) return;
        const pupilo = gameState.academia.pupilos[idx];

        const meusPilotos = gameState.pilotos.filter(p =>
            p.status === 'Jogador' || p.status === 'Reserva'
        );
        if (meusPilotos.length >= 4) {
            alert('Elenco cheio! Dispense um piloto antes de promover.');
            return;
        }

        // Custo de contrato com desconto por ser formado na casa
        const custoContrato = 300000 + Math.floor(Math.random() * 200000);
        if (!confirm(`Promover ${pupilo.nome} para o elenco principal por R$ ${custoContrato.toLocaleString('pt-BR')}?`)) return;

        gameState.escuderia.dinheiro -= custoContrato;

        // Cria o piloto no elenco principal
        const novoPiloto = {
            id:                   pupilo.id,
            nome:                 pupilo.nome,
            idade:                pupilo.idade,
            habilidade:           pupilo.habilidade,
            consistencia:         pupilo.consistencia,
            gerenciamentoPneus:   pupilo.gerenciamentoPneus,
            salario:              40000 + Math.floor(Math.random() * 30000),
            precoContrato:        custoContrato,
            status:               'Reserva',
            campeonatosGanhos:    [],
            rosto:                'img/Pilotos/default.png'
        };
        novoPiloto.atributosBase = {
            habilidade:           novoPiloto.habilidade,
            consistencia:         novoPiloto.consistencia,
            gerenciamentoPneus:   novoPiloto.gerenciamentoPneus
        };

        gameState.pilotos.push(novoPiloto);
        gameState.academia.pupilos.splice(idx, 1);
        alert(`${novoPiloto.nome} foi promovido para o elenco principal como Reserva!`);
        renderAbaAcademia();
        saveGame();
    }

    // Chamado em processarFimDeTemporada — evolui pupilos e avisa quando prontos
    function processarEvolucaoAcademia() {
        if (!gameState.academia) gameState.academia = { desbloqueada: false, pupilos: [] };
        if (!gameState.academia?.desbloqueada) return;
        if (!gameState.academia.pupilos || gameState.academia.pupilos.length === 0) return;

        const msgs = [];

        gameState.academia.pupilos.forEach(pupilo => {
            pupilo.idade++;
            pupilo.temporadasNaAcademia = (pupilo.temporadasNaAcademia || 0) + 1;

            // Evolução por temporada: cresce mais rápido nas primeiras e desacelera
            const fator = pupilo.temporadasNaAcademia <= 2 ? 1.2 : 0.9;
            const ganho = () => Math.round((6 + Math.floor(Math.random() * 7)) * fator); // 7–15 × fator

            pupilo.habilidade         = Math.min(85, pupilo.habilidade         + ganho());
            pupilo.consistencia       = Math.min(85, pupilo.consistencia       + ganho());
            pupilo.gerenciamentoPneus = Math.min(85, pupilo.gerenciamentoPneus + ganho());

            // Custo de manutenção por pupilo cobrado aqui
            const custoAnual = 2000000;
            gameState.escuderia.dinheiro -= custoAnual;

            const pronto = pupilo.habilidade >= 80
                && pupilo.consistencia >= 80
                && pupilo.gerenciamentoPneus >= 80;

            if (pronto) {
                msgs.push(`🌟 ${pupilo.nome} atingiu atributos de 80+! Ele está pronto para o grid principal. Acesse a aba Academia para promovê-lo.`);
            }
        });

        if (msgs.length > 0) {
            setTimeout(() => alert(msgs.join('\n\n')), 1500);
        }
    }

    function desbloquearAcademia() {
        if (gameState.academia.desbloqueada) return;
        if (gameState.escuderia.dinheiro < CUSTO_ACADEMIA) {
            alert(`Dinheiro insuficiente! Custo para fundar a Academia Júnior: R$ ${CUSTO_ACADEMIA.toLocaleString('pt-BR')}`);
            return;
        }
        if (!confirm(`Fundar a Academia Júnior por R$ ${CUSTO_ACADEMIA.toLocaleString('pt-BR')}?\n\nCusto de manutenção: R$ 2.000.000 por pupilo por temporada.\nRecrutamento: R$ 1,5–2,5 milhões por atleta.`)) return;
        gameState.escuderia.dinheiro -= CUSTO_ACADEMIA;
        gameState.academia.desbloqueada = true;
        alert('Academia Júnior fundada! Agora você pode recrutar até 3 jovens talentos.');
        renderAbaAcademia();
        saveGame();
    }

    function renderAbaAcademia() {
        const container = document.getElementById('academia-container');
        if (!container) return;

        if (!gameState.academia) gameState.academia = { desbloqueada: false, pupilos: [] };

        // ── Bloqueada ─────────────────────────────────────────────────────
        if (!gameState.academia.desbloqueada) {
            container.innerHTML = `
                <div class="academia-lock-card">
                    <div class="academia-lock-icon">🏫</div>
                    <h3>Academia Júnior</h3>
                    <p>Invista no futuro da equipe formando seus próprios talentos. Recrute jovens de 15–16 anos e desenvolva-os por até 3 temporadas até atingirem atributos de 80+ para o grid principal.</p>
                    <ul class="academia-features">
                        <li>Até 3 pupilos simultâneos</li>
                        <li>Custo de R$ 2.000.000 por pupilo por temporada</li>
                        <li>Recrutamento: R$ 1,5–2,5 milhões por talento</li>
                        <li>Promoção com desconto para o elenco principal</li>
                    </ul>
                    <div class="academia-lock-price">R$ ${CUSTO_ACADEMIA.toLocaleString('pt-BR')}</div>
                    <button class="btn-corrida btn-real" onclick="desbloquearAcademiaGlobal()">Fundar Academia Júnior</button>
                    <p class="academia-saldo">Saldo atual: R$ ${gameState.escuderia.dinheiro.toLocaleString('pt-BR')}</p>
                </div>`;
            return;
        }

        // ── Desbloqueada ─────────────────────────────────────────────────
        const pupilos = gameState.academia.pupilos;
        const custoTotal = pupilos.length * 2000000;

        let cardsHtml = '';
        for (let i = 0; i < 3; i++) {
            const p = pupilos[i];
            if (p) {
                const prog = (p.temporadasNaAcademia || 0);
                const prontoGrid = p.habilidade >= 80 && p.consistencia >= 80 && p.gerenciamentoPneus >= 80;
                const pct = h => Math.round((h / 85) * 100);

                cardsHtml += `
                <div class="academia-card ${prontoGrid ? 'academia-card-pronto' : ''}">
                    <div class="academia-card-header">
                        <span class="academia-nome">${p.nome}</span>
                        <span class="academia-idade">${p.idade} anos</span>
                    </div>
                    ${prontoGrid ? '<div class="academia-badge-pronto">🌟 Pronto para o grid!</div>' : ''}
                    <div class="academia-temporadas">Temporada ${prog} na academia · Entrou em ${p.anoEntrada}</div>
                    <div class="academia-atributos">
                        <div class="academia-attr">
                            <span>Habilidade</span>
                            <div class="academia-barra-bg"><div class="academia-barra-fill" style="width:${pct(p.habilidade)}%;background:${p.habilidade>=80?'#28a745':'#008cba'}"></div></div>
                            <span class="academia-val">${p.habilidade}</span>
                        </div>
                        <div class="academia-attr">
                            <span>Consistência</span>
                            <div class="academia-barra-bg"><div class="academia-barra-fill" style="width:${pct(p.consistencia)}%;background:${p.consistencia>=80?'#28a745':'#008cba'}"></div></div>
                            <span class="academia-val">${p.consistencia}</span>
                        </div>
                        <div class="academia-attr">
                            <span>Ger. Pneus</span>
                            <div class="academia-barra-bg"><div class="academia-barra-fill" style="width:${pct(p.gerenciamentoPneus)}%;background:${p.gerenciamentoPneus>=80?'#28a745':'#008cba'}"></div></div>
                            <span class="academia-val">${p.gerenciamentoPneus}</span>
                        </div>
                    </div>
                    <div class="academia-acoes">
                        ${prontoGrid
                            ? `<button class="btn-corrida btn-real" onclick="promoverJuniorGlobal(${p.id})">⬆️ Promover ao Elenco</button>`
                            : ''}
                        <button class="btn-corrida" style="background:#6c757d" onclick="dispensarJuniorGlobal(${p.id})">Dispensar</button>
                    </div>
                </div>`;
            } else {
                cardsHtml += `
                <div class="academia-card academia-slot-vazio">
                    <div class="academia-slot-texto">Slot vazio</div>
                    <button class="btn-corrida btn-real" onclick="recrutarJuniorGlobal()">+ Recrutar Talento</button>
                    <p style="font-size:0.8rem;color:#888;margin-top:0.5rem;">R$ 1,5–2,5 mi por atleta</p>
                </div>`;
            }
        }

        container.innerHTML = `
            <div class="info-box" style="margin-bottom:1rem;">
                <p><strong>Custo de manutenção desta temporada:</strong>
                   R$ ${custoTotal.toLocaleString('pt-BR')}
                   (R$ 2.000.000 × ${pupilos.length} pupilo${pupilos.length !== 1 ? 's' : ''})</p>
                <p><strong>Dinheiro em Caixa:</strong> R$ ${gameState.escuderia.dinheiro.toLocaleString('pt-BR')}</p>
            </div>
            <div class="academia-grid">${cardsHtml}</div>
            <div class="academia-dica">
                <p>💡 Os pupilos evoluem automaticamente a cada temporada. Quando atingirem 80+ em todos os atributos, você poderá promovê-los ao elenco principal com desconto no contrato.</p>
            </div>`;
    }

    // ═══════════════════════════════════════════════════════════════════
    // FIM — ACADEMIA JÚNIOR
    // ═══════════════════════════════════════════════════════════════════

    function computarRecordes() {
        const hist  = gameState.historicoTemporadas || [];
        const nomeEsc = gameState.escuderia.nome;
        const todosStats = gameState.galeria.estatisticasTodosPilotos || {};

        // helpers
        const meuRec = (detentor) => detentor === nomeEsc;
        const meuPil = (nome) => gameState.pilotos.some(p => p.nome === nome && (p.status === 'Jogador' || p.status === 'Reserva'))
            || gameState.galeria.hallDaFama.some(h => h.piloto.nome === nome);

        // ── Construtores ──────────────────────────────────────────────

        // 1. Maior nº de títulos de construtores
        const contConstr = {};
        hist.forEach(t => {
            if (t.campeaoConstrutores) {
                const n = t.campeaoConstrutores.nome;
                if (!contConstr[n]) contConstr[n] = { count: 0, equipe: n };
                contConstr[n].count++;
            }
        });
        const recTitulosConstr = Object.values(contConstr).sort((a, b) => b.count - a.count)[0] || null;

        // 2. Maior sequência consecutiva de construtores
        let melhorSeqConstr = { count: 0, equipe: null, de: null, ate: null };
        let seqAtual = { nome: null, count: 0, de: null };
        [...hist].sort((a,b) => a.ano - b.ano).forEach(t => {
            const n = t.campeaoConstrutores?.nome;
            if (!n) { seqAtual = { nome: null, count: 0, de: null }; return; }
            if (n === seqAtual.nome) {
                seqAtual.count++;
            } else {
                seqAtual = { nome: n, count: 1, de: t.ano };
            }
            if (seqAtual.count > melhorSeqConstr.count) {
                melhorSeqConstr = { count: seqAtual.count, equipe: n, de: seqAtual.de, ate: t.ano };
            }
        });

        // 3. Maior pontuação numa temporada (construtores)
        const recPontuacaoConstr = hist.reduce((best, t) => {
            if (!t.campeaoConstrutores) return best;
            return (!best || t.campeaoConstrutores.pontos > best.pontos)
                ? { pontos: t.campeaoConstrutores.pontos, equipe: t.campeaoConstrutores.nome, ano: t.ano }
                : best;
        }, null);

        // 4. Maior diferença de pontos para o 2º (construtores)
        const recDifConstr = hist.reduce((best, t) => {
            if (!t.campeaoConstrutores || t.campeaoConstrutores.difPontos == null) return best;
            return (!best || t.campeaoConstrutores.difPontos > best.dif)
                ? { dif: t.campeaoConstrutores.difPontos, equipe: t.campeaoConstrutores.nome, ano: t.ano }
                : best;
        }, null);

        // ── Pilotos ───────────────────────────────────────────────────

        // 5. Maior nº de títulos individuais
        const contPiloto = {};
        hist.forEach(t => {
            if (t.campeaoPilotos) {
                const n = t.campeaoPilotos.nome;
                if (!contPiloto[n]) contPiloto[n] = { count: 0, equipe: t.campeaoPilotos.equipe };
                contPiloto[n].count++;
                contPiloto[n].equipe = t.campeaoPilotos.equipe; // última equipe
            }
        });
        const recTitulosPiloto = Object.entries(contPiloto)
            .map(([nome, d]) => ({ nome, count: d.count, equipe: d.equipe }))
            .sort((a, b) => b.count - a.count)[0] || null;

        // 6. Mais vitórias em uma única temporada (piloto)
        const recVitoriasTemporada = hist.reduce((best, t) => {
            if (!t.campeaoPilotos) return best;
            return (!best || t.campeaoPilotos.vitorias > best.vitorias)
                ? { vitorias: t.campeaoPilotos.vitorias, piloto: t.campeaoPilotos.nome, equipe: t.campeaoPilotos.equipe, ano: t.ano }
                : best;
        }, null);
        // Verifica entre todos os pilotos da temporada (não só o campeão)
        const recVitSingleFull = hist.reduce((best, t) => {
            const contV = {};
            (gameState.campeonato.resultadosCorridas || [])
                .filter(c => c.ano === t.ano)
                .forEach(c => {
                    const v = c.resultadoFinal?.[0];
                    if (v) { const n = v.piloto?.nome || v.piloto; contV[n] = (contV[n] || { count: 0, equipe: v.equipe }); contV[n].count++; }
                });
            const melhor = Object.entries(contV).sort((a,b) => b[1].count - a[1].count)[0];
            if (!melhor) return best;
            return (!best || melhor[1].count > best.vitorias)
                ? { vitorias: melhor[1].count, piloto: melhor[0], equipe: melhor[1].equipe, ano: t.ano }
                : best;
        }, recVitoriasTemporada);

        // 7. Mais vitórias na carreira
        const recVitoriasCarreira = Object.entries(todosStats)
            .map(([nome, s]) => ({ nome, vitorias: s.vitorias || 0, equipe: s.equipe || '—' }))
            .sort((a,b) => b.vitorias - a.vitorias)[0] || null;

        // 8. Mais pódios na carreira
        const recPodiosCarreira = Object.entries(todosStats)
            .map(([nome, s]) => ({ nome, podios: s.podios || 0, equipe: s.equipe || '—' }))
            .sort((a,b) => b.podios - a.podios)[0] || null;

        // 9. Mais corridas na carreira
        const recCorridasCarreira = Object.entries(todosStats)
            .map(([nome, s]) => ({ nome, corridas: s.corridas || 0, equipe: s.equipe || '—' }))
            .sort((a,b) => b.corridas - a.corridas)[0] || null;

        // ── Sequências ────────────────────────────────────────────────

        // 10. Maior sequência de vitórias consecutivas (cross-temporada)
        const seqAtiva     = gameState.sequenciaVitoriasAtual  || { piloto: null, equipe: null, contagem: 0 };
        const seqHistorica = gameState.melhorSequenciaVitorias || { piloto: null, equipe: null, contagem: 0 };
        const seq = seqAtiva.contagem >= seqHistorica.contagem ? seqAtiva : seqHistorica;

        // 11. Maior sequência de títulos consecutivos de piloto
        let melhorSeqPiloto = { count: 0, piloto: null, equipe: null, de: null, ate: null };
        let seqPil = { nome: null, count: 0, de: null };
        [...hist].sort((a,b) => a.ano - b.ano).forEach(t => {
            const n = t.campeaoPilotos?.nome;
            const eq = t.campeaoPilotos?.equipe;
            if (!n) { seqPil = { nome: null, count: 0, de: null }; return; }
            if (n === seqPil.nome) {
                seqPil.count++;
            } else {
                seqPil = { nome: n, count: 1, de: t.ano };
            }
            if (seqPil.count > melhorSeqPiloto.count) {
                melhorSeqPiloto = { count: seqPil.count, piloto: n, equipe: eq, de: seqPil.de, ate: t.ano };
            }
        });

        // ── Especiais ─────────────────────────────────────────────────

        // 12. Mais jovem a ganhar o título
        const recMaisJovem = hist.reduce((best, t) => {
            if (!t.campeaoPilotos || t.campeaoPilotos.idade == null) return best;
            return (!best || t.campeaoPilotos.idade < best.idade)
                ? { idade: t.campeaoPilotos.idade, piloto: t.campeaoPilotos.nome, equipe: t.campeaoPilotos.equipe, ano: t.ano }
                : best;
        }, null);

        // 13. Mais velho a ganhar o título
        const recMaisVelho = hist.reduce((best, t) => {
            if (!t.campeaoPilotos || t.campeaoPilotos.idade == null) return best;
            return (!best || t.campeaoPilotos.idade > best.idade)
                ? { idade: t.campeaoPilotos.idade, piloto: t.campeaoPilotos.nome, equipe: t.campeaoPilotos.equipe, ano: t.ano }
                : best;
        }, null);

        return {
            construtores: {
                titulosConstr:    recTitulosConstr,
                seqConstr:        melhorSeqConstr.count > 0 ? melhorSeqConstr : null,
                pontuacaoConstr:  recPontuacaoConstr,
                difConstr:        recDifConstr,
            },
            pilotos: {
                titulosPiloto:      recTitulosPiloto,
                vitoriasTemporada:  recVitSingleFull,
                vitoriasCarreira:   recVitoriasCarreira,
                podiosCarreira:     recPodiosCarreira,
                corridasCarreira:   recCorridasCarreira,
            },
            sequencias: {
                vitoriasConsec:  seq.contagem > 0 ? seq : null,
                titulosConsecPiloto: melhorSeqPiloto.count > 0 ? melhorSeqPiloto : null,
            },
            especiais: {
                maisJovem: recMaisJovem,
                maisVelho: recMaisVelho,
            }
        };
    }

    function renderLivroRecordes() {
        const container = document.getElementById('livro-recordes-container');
        if (!container) return;

        const hist = gameState.historicoTemporadas || [];
        if (hist.length === 0) {
            container.innerHTML = '<p class="galeria-sem-dados">Nenhuma temporada concluída ainda. Complete o primeiro campeonato para ver os recordes.</p>';
            return;
        }

        const R = computarRecordes();
        const nomeEsc = gameState.escuderia.nome;

        const isMeuConstr = (nome) => nome === nomeEsc;
        const isMeuPiloto = (nome) => {
            if (!nome) return false;
            const ativo = gameState.pilotos.some(p =>
                p.nome === nome && (p.status === 'Jogador' || p.status === 'Reserva')
            );
            if (ativo) return true;
            return gameState.galeria.hallDaFama.some(h =>
                h.piloto.nome === nome && h.statsCarreira?.equipe === nomeEsc
            );
        };

        function card(titulo, valor, unidade, detentor, equipe, periodo, isMeu) {
            const estrela = isMeu ? '<span class="rec-estrela">★ Seu recorde</span>' : '';
            const classMeu = isMeu ? ' meu-recorde' : '';
            const badgeEquipe = equipe ? `<span class="rec-badge">${equipe}</span>` : '';
            const badgePeriodo = periodo ? `<span class="rec-badge">${periodo}</span>` : '';
            const valDisplay = valor != null ? `${valor} <span>${unidade}</span>` : `<span style="color:#ccc">—</span>`;
            const detentorHtml = detentor
                ? `<div class="rec-detentor"><strong>${detentor}</strong>${badgeEquipe}${badgePeriodo}</div>`
                : `<div class="rec-detentor" style="color:#bbb">Aguardando...</div>`;
            return `<div class="rec-card${classMeu}">${estrela}
                <div class="rec-titulo">${titulo}</div>
                <div class="rec-valor">${valDisplay}</div>
                ${detentorHtml}
            </div>`;
        }

        function painel(cor, emoji, titulo, cardsHtml) {
            return `<div class="rec-painel rec-painel-${cor}">
                <div class="rec-painel-header">
                    <span>${emoji} ${titulo}</span>
                </div>
                <div class="rec-painel-body">
                    <div class="rec-grade">${cardsHtml}</div>
                </div>
            </div>`;
        }

        // ── Construtores ──────────────────────────────────────────────
        const C = R.construtores;
        const cCards = [
            card('Maior nº de títulos de construtores',
                C.titulosConstr?.count, 'títulos',
                C.titulosConstr?.equipe, null, null,
                isMeuConstr(C.titulosConstr?.equipe)),
            card('Maior sequência consecutiva de títulos',
                C.seqConstr?.count, 'anos',
                C.seqConstr?.equipe, null,
                C.seqConstr ? `${C.seqConstr.de}–${C.seqConstr.ate}` : null,
                isMeuConstr(C.seqConstr?.equipe)),
            card('Maior pontuação numa temporada',
                C.pontuacaoConstr?.pontos, 'pts',
                C.pontuacaoConstr?.equipe, null,
                C.pontuacaoConstr?.ano?.toString(),
                isMeuConstr(C.pontuacaoConstr?.equipe)),
            card('Maior diferença de pontos para o 2º',
                C.difConstr?.dif != null ? `+${C.difConstr.dif}` : null, 'pts',
                C.difConstr?.equipe, null,
                C.difConstr?.ano?.toString(),
                isMeuConstr(C.difConstr?.equipe)),
        ].join('');

        // ── Pilotos ───────────────────────────────────────────────────
        const P = R.pilotos;
        const pCards = [
            card('Maior nº de títulos individuais',
                P.titulosPiloto?.count, 'títulos',
                P.titulosPiloto?.nome, P.titulosPiloto?.equipe, null,
                isMeuPiloto(P.titulosPiloto?.nome)),
            card('Mais vitórias em uma única temporada',
                P.vitoriasTemporada?.vitorias, 'vitórias',
                P.vitoriasTemporada?.piloto, P.vitoriasTemporada?.equipe,
                P.vitoriasTemporada?.ano?.toString(),
                isMeuPiloto(P.vitoriasTemporada?.piloto)),
            card('Mais vitórias na carreira',
                P.vitoriasCarreira?.vitorias, 'vitórias',
                P.vitoriasCarreira?.nome, P.vitoriasCarreira?.equipe, null,
                isMeuPiloto(P.vitoriasCarreira?.nome)),
            card('Mais pódios na carreira',
                P.podiosCarreira?.podios, 'pódios',
                P.podiosCarreira?.nome, P.podiosCarreira?.equipe, null,
                isMeuPiloto(P.podiosCarreira?.nome)),
            card('Mais corridas na carreira',
                P.corridasCarreira?.corridas, 'corridas',
                P.corridasCarreira?.nome, P.corridasCarreira?.equipe, null,
                isMeuPiloto(P.corridasCarreira?.nome)),
        ].join('');

        // ── Sequências ────────────────────────────────────────────────
        const S = R.sequencias;
        const sCards = [
            card('Maior sequência de vitórias consecutivas',
                S.vitoriasConsec?.contagem, 'vitórias',
                S.vitoriasConsec?.piloto, S.vitoriasConsec?.equipe, 'cross-temporada',
                isMeuPiloto(S.vitoriasConsec?.piloto) || isMeuConstr(S.vitoriasConsec?.equipe)),
            card('Maior sequência de títulos consecutivos',
                S.titulosConsecPiloto?.count, 'anos',
                S.titulosConsecPiloto?.piloto, S.titulosConsecPiloto?.equipe,
                S.titulosConsecPiloto ? `${S.titulosConsecPiloto.de}–${S.titulosConsecPiloto.ate}` : null,
                isMeuPiloto(S.titulosConsecPiloto?.piloto)),
        ].join('');

        // ── Especiais ─────────────────────────────────────────────────
        const E = R.especiais;
        const eCards = [
            card('Piloto mais jovem a ganhar o título',
                E.maisJovem?.idade, 'anos',
                E.maisJovem?.piloto, E.maisJovem?.equipe,
                E.maisJovem?.ano?.toString(),
                isMeuPiloto(E.maisJovem?.piloto)),
            card('Piloto mais velho a ganhar o título',
                E.maisVelho?.idade, 'anos',
                E.maisVelho?.piloto, E.maisVelho?.equipe,
                E.maisVelho?.ano?.toString(),
                isMeuPiloto(E.maisVelho?.piloto)),
        ].join('');

        container.innerHTML =
            painel('construtores', '🏗️', 'Construtores', cCards) +
            painel('pilotos',      '🧑‍✈️', 'Pilotos',      pCards) +
            painel('sequencias',   '🔥', 'Sequências',   sCards) +
            painel('especiais',    '⭐', 'Especiais',    eCards);
    }

    // ═══════════════════════════════════════════════════════════════════
    // FIM — LIVRO DE RECORDES
    // ═══════════════════════════════════════════════════════════════════

    function renderAbaGaleria() {
        const nomeEscuderiaEl = document.getElementById('escuderia-nome-galeria');
        const trofeusContainer = document.getElementById('gabinete-trofeus');
        const hallDaFamaContainer = document.getElementById('hall-da-fama');
        const tabelaJogador = document.getElementById('tabela-estatisticas-pilotos');
        const tabelaTodos   = document.getElementById('tabela-estatisticas-todos');
        if (!nomeEscuderiaEl || !trofeusContainer || !hallDaFamaContainer) return;

        const emblemaGaleriaContainer = document.getElementById('emblema-display-galeria');
        if (emblemaGaleriaContainer) {
            renderizarEmblema(emblemaGaleriaContainer, gameState.escuderia.emblema);
        }

        if (!gameState.galeria.hallDaFama || gameState.galeria.hallDaFama.length === 0) {
            hallDaFamaContainer.innerHTML = '<h3>Hall da Fama</h3><p>Nenhum piloto foi adicionado ao Hall da Fama ainda.</p>';
        } else {
            hallDaFamaContainer.innerHTML = '<h3>Hall da Fama</h3><div class="fama-grid">' +
                gameState.galeria.hallDaFama.map((p) => {
                    const titulosCount = (p.statsCarreira && p.statsCarreira.titulos) || (p.piloto.campeonatosGanhos && p.piloto.campeonatosGanhos.length) || 0;
                    const trofeusPiloto = p.piloto.campeonatosGanhos && p.piloto.campeonatosGanhos.length > 0
                        ? p.piloto.campeonatosGanhos.map(ano => '\uD83C\uDFC6 ' + ano).join(' ') : '';
                    const stats = p.statsCarreira || { corridas: 0, vitorias: 0, podios: 0, pontos: 0, titulos: titulosCount };
                    return '<div class="piloto-fama-card">' +
                        '<img src="' + (p.piloto.rosto || 'img/Pilotos/default.png') + '" alt="' + p.piloto.nome + '" class="piloto-rosto-fama">' +
                        '<div class="piloto-fama-nome">' + p.piloto.nome + '</div>' +
                        '<div class="fama-aposentadoria">Apos. ' + p.anoAposentadoria + (trofeusPiloto ? '<br>' + trofeusPiloto : '') + '</div>' +
                        '<div class="fama-stats-grid">' +
                            '<div class="fama-stat"><span class="fama-stat-valor">' + stats.corridas + '</span><span class="fama-stat-label">Corridas</span></div>' +
                            '<div class="fama-stat"><span class="fama-stat-valor">' + stats.pontos.toLocaleString('pt-BR') + '</span><span class="fama-stat-label">Pontos</span></div>' +
                            '<div class="fama-stat"><span class="fama-stat-valor">' + stats.podios + '</span><span class="fama-stat-label">Pódios</span></div>' +
                            '<div class="fama-stat"><span class="fama-stat-valor">' + stats.vitorias + '</span><span class="fama-stat-label">Vitórias</span></div>' +
                            '<div class="fama-stat fama-stat-titulos' + (titulosCount > 0 ? ' tem-titulo' : '') + '"><span class="fama-stat-valor">' + (titulosCount > 0 ? '\uD83C\uDFC6 ' : '') + titulosCount + '</span><span class="fama-stat-label">Títulos</span></div>' +
                        '</div>' +
                    '</div>';
                }).join('') +
            '</div>';
        }

        nomeEscuderiaEl.textContent = gameState.escuderia.nome;

        const _titulosConstrutores = gameState.galeria.titulosConstrutores || [];
        const _anoConstrHtml = _titulosConstrutores.length > 0
            ? _titulosConstrutores.map(t => typeof t === 'object'
                ? `<span class="trofeu-linha-piloto"><strong>${t.ano}</strong> <span class="trofeu-piloto-nome">${(t.pilotos || []).join(' & ') || '—'}</span></span>`
                : `<span class="trofeu-linha-piloto"><strong>${t}</strong></span>`
            ).join('')
            : '<span style="color:#999">Nenhum título</span>';
        const _titulosPilotos = gameState.galeria.titulosPilotos || [];
        const _anosPiloto = _titulosPilotos.length > 0
            ? _titulosPilotos.map(t => typeof t === 'object'
                ? `<span class="trofeu-linha-piloto"><strong>${t.ano}</strong> <span class="trofeu-piloto-nome">${t.piloto}</span></span>`
                : `<span class="trofeu-linha-piloto"><strong>${t}</strong></span>`
            ).join('')
            : '<span style="color:#999">Nenhum título</span>';

        trofeusContainer.innerHTML = `
            <h3>Gabinete de Troféus</h3>
            <div class="trofeu-container">
                <div class="trofeu-bloco">
                    <div class="trofeu">🏆</div>
                    <div class="trofeu-label">Construtores</div>
                    <div class="trofeu-contador">${_titulosConstrutores.length || 0}</div>
                    <div class="trofeu-lista-pilotos">${_anoConstrHtml}</div>
                </div>
                <div class="trofeu-bloco">
                    <div class="trofeu">🏆</div>
                    <div class="trofeu-label">Pilotos</div>
                    <div class="trofeu-contador">${_titulosPilotos.length || 0}</div>
                    <div class="trofeu-lista-pilotos">${_anosPiloto}</div>
                </div>
            </div>
        `;

        // Ativa listeners de ordenação apenas uma vez
        if (!_statsOrdenacaoIniciada) {
            _ativarOrdenacao(tabelaJogador, 'jogador', ['nome', 'corridas', 'vitorias', 'podios', 'pontos']);
            _ativarOrdenacao(tabelaTodos,   'todos',   ['nome', 'equipe', 'corridas', 'vitorias', 'podios', 'pontos'], _tiebreakersTodos);
            _statsOrdenacaoIniciada = true;
        }

        // Renderiza as tabelas com o estado de ordenação atual
        _renderTabelaStats(tabelaJogador, _getDadosStats('jogador'), ['nome', 'corridas', 'vitorias', 'podios', 'pontos'], _sortState.jogador);
        _renderTabelaStats(tabelaTodos,   _getDadosStats('todos'),   ['nome', 'equipe', 'corridas', 'vitorias', 'podios', 'pontos'], _sortState.todos, _tiebreakersTodos);

        // ── Livro de Recordes ─────────────────────────────────────────
        renderLivroRecordes();
        const historicoContainer = document.getElementById('historico-campeonatos-container');
        if (historicoContainer) {
            const historico = [...(gameState.historicoTemporadas || [])].sort((a, b) => b.ano - a.ano);
            if (historico.length === 0) {
                historicoContainer.innerHTML = `<p class="galeria-sem-dados">Nenhuma temporada concluída ainda. Complete o campeonato para ver o histórico aqui.</p>`;
            } else {
                const nomeEscuderia = gameState.escuderia.nome;
                const rows = historico.map(t => {
                    const isPlayerConstr = t.campeaoConstrutores?.nome === nomeEscuderia;
                    const isPlayerPiloto = gameState.pilotos.some(p => p.nome === t.campeaoPilotos?.nome && p.status === 'Jogador');
                    return `<tr>
                        <td class="hc-ano">${t.ano}</td>
                        <td class="${isPlayerConstr ? 'hc-destaque' : ''}">${isPlayerConstr ? '🏆 ' : ''}${t.campeaoConstrutores?.nome || '—'}</td>
                        <td class="${isPlayerPiloto ? 'hc-destaque' : ''}">${isPlayerPiloto ? '🌟 ' : ''}${t.campeaoPilotos?.nome || '—'}</td>
                        <td>${t.campeaoPilotos?.equipe || '—'}</td>
                        <td class="hc-num">${t.campeaoPilotos?.pontos ?? '—'}</td>
                        <td class="hc-num">${t.campeaoPilotos?.vitorias ?? '—'}</td>
                    </tr>`;
                }).join('');
                historicoContainer.innerHTML = `
                    <table class="tabela-historico-camp">
                        <thead>
                            <tr>
                                <th>Ano</th>
                                <th>Construtores</th>
                                <th>Campeão Piloto</th>
                                <th>Equipe</th>
                                <th>Pontos</th>
                                <th>Vitórias</th>
                            </tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>`;
            }
        }
    }

    // ---------------------------------------------------------------------------
    // GUIA DE PNEUS PIRELLI
    // Calcula a janela de stint recomendada para cada composto na pista atual.
    // Usa o piloto médio (gerenciamentoPneus=87) como referência e aplica ±30%
    // de margem no cliff (65% de desgaste) para deixar a janela propositalmente
    // vaga — o jogador ainda precisa usar o próprio julgamento.
    // ---------------------------------------------------------------------------
    function gerarGuiaPirelli() {
        const pista = calendarioCorridas[gameState.campeonato.corridaAtualIndex];
        if (!pista) return null;

        const gerMedia = 87;
        const fatorGer = 1 - (gerMedia / 300);
        const fatorPista = 0.7 + pista.demandaAderencia * 0.6;
        const MARGEM = 0.30;

        const compostos = [
            { id: 'macio', nome: 'Macio', cor: '#e8002d', corTexto: '#fff' },
            { id: 'medio', nome: 'Médio', cor: '#ffd700', corTexto: '#222' },
            { id: 'duro',  nome: 'Duro',  cor: '#f5f5f5', corTexto: '#222', borda: '#aaa' },
        ];

        return compostos.map(c => {
            const degReal = pneus[c.id].desgastePorVolta * fatorGer * fatorPista;
            const cliffReal = 65 / degReal;
            const baixo  = Math.max(1, Math.floor(cliffReal * (1 - MARGEM)));
            const alto   = Math.min(pista.voltas - 1, Math.ceil(cliffReal * (1 + MARGEM)));
            return { ...c, baixo, alto };
        });
    }

    function renderGuiaPirelliHTML() {
        const pista = calendarioCorridas[gameState.campeonato.corridaAtualIndex];
        if (!pista) return '';
        const dados = gerarGuiaPirelli();
        if (!dados) return '';

        const totalVoltas = pista.voltas;
        const demandaLabel = pista.demandaAderencia >= 0.8
            ? '🔴 Alta demanda de pneus'
            : pista.demandaAderencia >= 0.5
            ? '🟡 Demanda moderada'
            : '🟢 Baixa demanda de pneus';

        const barrasHtml = dados.map(c => {
            const largBaixo = ((c.baixo / totalVoltas) * 100).toFixed(1);
            const largFaixa = (((c.alto - c.baixo) / totalVoltas) * 100).toFixed(1);
            const bordaExtra = c.borda ? `border:1px solid ${c.borda};` : '';
            return `
            <div class="pirelli-compound-row">
                <div class="pirelli-badge" style="background:${c.cor};color:${c.corTexto};${bordaExtra}">${c.nome[0]}</div>
                <div class="pirelli-compound-nome">${c.nome}</div>
                <div class="pirelli-bar-container" title="${c.nome}: ~${c.baixo} a ~${c.alto} voltas">
                    <div class="pirelli-bar-offset" style="width:${largBaixo}%"></div>
                    <div class="pirelli-bar-fill"   style="width:${largFaixa}%;background:${c.cor};${bordaExtra}"></div>
                </div>
                <div class="pirelli-janela-label">~${c.baixo}–${c.alto}v</div>
            </div>`;
        }).join('');

        const ticks = [0, 25, 50, 75, 100];
        const marcacaoHtml = `<div class="pirelli-ruler">${
            ticks.map(p => `<span style="left:${p}%">${Math.round(p * totalVoltas / 100)}</span>`).join('')
        }</div>`;

        return `
        <div class="pirelli-guide-panel">
            <div class="pirelli-header">
                <span class="pirelli-logo">🏎️ Pirelli</span>
                <span class="pirelli-pista">${pista.nome}</span>
                <span class="pirelli-demanda">${demandaLabel}</span>
            </div>
            <p class="pirelli-subtitulo">Janela de stint estimada por composto</p>
            ${barrasHtml}
            ${marcacaoHtml}
            <p class="pirelli-aviso">⚠️ Estimativas baseadas em condições médias. Gerenciamento do piloto e estratégia da equipe podem alterar a durabilidade real.</p>
        </div>`;
    }

    function renderEstrategiaUI() {
        const container = document.getElementById('strategy-container');
        if (!container) return;

        // Se o modal do Safety Car estiver aberto, re-renderiza o editor do modal também
        const scModal = document.getElementById('safety-car-modal');
        if (scModal && !scModal.classList.contains('hidden') && raceData && raceData.safetyCarAtivo) {
            const voltasRestantes = raceData.totalVoltas - raceData.voltaAtual;
            renderEstrategiaModalSC(voltasRestantes);
        }

        // ── Resumo do Safety Car (se houve um nesta corrida) ────────────
        let scResumoHtml = '';
        if (raceData?.ultimoSCResumo?.length > 0) {
            const pneuNomeMap = { macio: '🔴 Macio', medio: '🟡 Médio', duro: '⚪ Duro' };
            const cardsResumo = raceData.ultimoSCResumo.map(r => {
                const proximasParadas = r.paradas.length > 0
                    ? r.paradas.map(p => `v${p.pararNaVolta} → ${pneuNomeMap[p.colocarPneu] || p.colocarPneu}`).join(' · ')
                    : 'Sem mais paradas';
                return `<div class="sc-resumo-card">
                    <div class="sc-resumo-piloto">${r.pilotoNome}</div>
                    <div class="sc-resumo-decisao">${r.descDecisao}</div>
                    <div class="sc-resumo-paradas">📅 ${proximasParadas}</div>
                </div>`;
            }).join('');
            scResumoHtml = `
                <div class="sc-resumo-banner">
                    <div class="sc-resumo-header">
                        <span class="sc-resumo-icon">🚨</span>
                        <span>Novas Estratégias — Safety Car v${raceData.voltaSCAtivado || '?'}</span>
                        <button class="sc-resumo-fechar" data-action="fechar-sc-resumo" title="Fechar">✕</button>
                    </div>
                    ${cardsResumo}
                </div>`;
        }

        // Preserva o estado aberto/fechado do guia Pirelli entre re-renders
        const guiaAberto = container.dataset.guiaPirelliAberto === 'true';

        const guiaBotaoHtml = `
            <div class="pirelli-guide-toggle-wrapper">
                <button class="btn-pirelli-guide" id="btn-toggle-pirelli">
                    🏎️ Guia de Pneus Pirelli
                </button>
            </div>
            <div id="pirelli-guide-container" style="display:${guiaAberto ? 'block' : 'none'}">
                ${guiaAberto ? renderGuiaPirelliHTML() : ''}
            </div>
        `;

        container.innerHTML = scResumoHtml + guiaBotaoHtml + gameState.carros.map((carro, carroIndex) => {
            const piloto = gameState.pilotos.find(p => p.id === carro.pilotoId);
            const pilotoNome = piloto ? piloto.nome : "VAGO";

            let modoAtual = 'padrão';
            if (animacaoAtiva && raceData.participantes) {
                const participante = raceData.participantes.find(p => p.piloto.id === carro.pilotoId);
                if (participante) {
                    modoAtual = participante.modoAgressividade;
                }
            }

            const isRaceInactive = !animacaoAtiva;

            const comandosHtml = `
                <div class="radio-commands-container">
                    <h5>Comandos de Rádio</h5>
                    <div class="radio-commands-buttons">
                        <button class="btn-mode ${modoAtual === 'atacar' ? 'active-mode-atacar' : ''}" data-car-index="${carroIndex}" data-mode="atacar" ${isRaceInactive ? 'disabled' : ''}>Atacar</button>
                        <button class="btn-mode ${modoAtual === 'padrão' ? 'active-mode-padrao' : ''}" data-car-index="${carroIndex}" data-mode="padrão" ${isRaceInactive ? 'disabled' : ''}>Padrão</button>
                        <button class="btn-mode ${modoAtual === 'conservar' ? 'active-mode-conservar' : ''}" data-car-index="${carroIndex}" data-mode="conservar" ${isRaceInactive ? 'disabled' : ''}>Conservar</button>
                    </div>
                </div>
            `;

            const paradaInputs = carro.estrategia.paradas.map((parada, paradaIndex) => `
                <div class="stint-definition">
                    <label>Parada ${paradaIndex + 1}</label>
                    <div class="stint-inputs"><span>Na volta:</span>
                        <input type="number" class="volta-input strategy-control" value="${parada.pararNaVolta}" min="1" data-car-index="${carroIndex}" data-parada-index="${paradaIndex}">
                        <span>Colocar Pneu:</span>
                        <select class="pneu-select-parada strategy-control" data-car-index="${carroIndex}" data-parada-index="${paradaIndex}">
                            <option value="macio" ${parada.colocarPneu === 'macio' ? 'selected' : ''}>Macio</option>
                            <option value="medio" ${parada.colocarPneu === 'medio' ? 'selected' : ''}>Médio</option>
                            <option value="duro" ${parada.colocarPneu === 'duro' ? 'selected' : ''}>Duro</option>
                        </select>
                    </div>
                    <button class="btn-remover-stint strategy-control" data-car-index="${carroIndex}" data-parada-index="${paradaIndex}">X</button>
                </div>`).join('');
            const errosEstrategia = getErrosEstrategia(carro.estrategia);
            const aviso = errosEstrategia.length > 0
                ? `<div class="strategy-warning">${errosEstrategia.map(e => `<p>⚠️ ${e}</p>`).join('')}</div>`
                : `<p class="strategy-ok">✅ Estratégia válida.</p>`;

            return `<div class="strategy-box">
                        <h4>Carro ${carroIndex + 1} (${pilotoNome})</h4>
                        <div class="stint-definition initial-stint">
                            <label>Pneu Inicial</label>
                            <div class="stint-inputs">
                                <select class="pneu-select-inicial strategy-control" data-car-index="${carroIndex}">
                                    <option value="macio" ${carro.estrategia.pneuInicial === 'macio' ? 'selected' : ''}>Macio</option>
                                    <option value="medio" ${carro.estrategia.pneuInicial === 'medio' ? 'selected' : ''}>Médio</option>
                                    <option value="duro" ${carro.estrategia.pneuInicial === 'duro' ? 'selected' : ''}>Duro</option>
                                </select>
                            </div>
                        </div>
                        ${paradaInputs}
                        <div class="strategy-actions"><button class="btn-add-stint strategy-control" data-car-index="${carroIndex}">+ Adicionar Parada</button></div>
                        ${aviso}
                        ${comandosHtml}
                    </div>`;
        }).join('');
    }

    function renderAbaNegociacoes() {
        const tabelaBody = document.querySelector("#tabela-mercado-pecas tbody");
        if (!tabelaBody) return;
        const tipoFiltro = document.getElementById('filtro-tipo-peca').value;
        const nivelMinFiltro = parseInt(document.getElementById('filtro-nivel-min').value);
        document.getElementById('nivel-min-value').textContent = nivelMinFiltro;
        const pecasFiltradas = gameState.mercadoDePecas.filter(p => (tipoFiltro === 'todos' || p.tipo === tipoFiltro) && p.nivel >= nivelMinFiltro);
        const sortedMarket = [...pecasFiltradas].sort((a, b) => {
            const valA = a[sortState.column];
            const valB = b[sortState.column];
            if (typeof valA === 'string') {
                return valA.localeCompare(valB) * (sortState.direction === 'asc' ? 1 : -1);
            }
            return (valA - valB) * (sortState.direction === 'asc' ? 1 : -1);
        });
        tabelaBody.innerHTML = sortedMarket.map(peca => `<tr><td>${peca.nome}</td><td>${peca.tipo}</td><td>${peca.nivel}</td><td class="atributos-cell">${gerarHtmlAtributosPeca(peca)}</td><td>${peca.vendedor}</td><td>R$ ${peca.preco.toLocaleString('pt-BR')}</td><td><button class="btn-comprar" data-instance-id="${peca.instanceId}">Comprar</button></td></tr>`).join('');
        document.querySelectorAll('#tabela-mercado-pecas .sortable-header').forEach(header => {
            header.classList.remove('sort-asc', 'sort-desc');
            if (header.dataset.sort === sortState.column) header.classList.add(`sort-${sortState.direction}`);
        });
    }

    // ================================================================
    //  TELEMETRIA — funções principais
    // ================================================================

    // Instâncias dos charts de telemetria (para destruir ao reabrir)
    let telemChartEquipe = null;
    let telemChartVencedor = null;
    let telemChartPosicao = null;
    let telemRaceIndex = null; // índice da corrida aberta no modal

    /** Renderiza os cards da aba Telemetria */
    function renderAbaTelemetria() {
        const container = document.getElementById('telemetria-container');
        if (!container) return;

        const corridas = gameState.campeonato.resultadosCorridas;
        if (!corridas || corridas.length === 0) {
            container.innerHTML = '<p class="telem-empty">Nenhuma corrida disputada ainda. Complete ao menos uma corrida para ver a telemetria.</p>';
            return;
        }

        container.innerHTML = [...corridas].reverse().map((corrida, revIdx) => {
            const index = corridas.length - 1 - revIdx;
            const top3 = corrida.resultadoFinal.slice(0, 3);
            const podioHtml = top3.map((p, i) => {
                const isPlayer = p.isPlayer;
                return `<li>
                    <span class="telem-pos-badge telem-pos-${i+1}">${i+1}</span>
                    <span style="${isPlayer ? 'color:#e10600;font-weight:700' : ''}">${p.piloto.nome}</span>
                    <span style="color:#888;font-size:0.78em;margin-left:4px">${p.equipe}</span>
                </li>`;
            }).join('');

            const vrHtml = corrida.melhorVolta?.piloto
                ? `<div class="telem-volta-rapida">⚡ ${corrida.melhorVolta.piloto} — ${formatLapTime(corrida.melhorVolta.tempo)}</div>`
                : '';

            return `<div class="telem-card">
                <div class="telem-card-header">
                    <div>
                        <div class="telem-card-title">🏁 ${corrida.nomePista}</div>
                    </div>
                    <span class="telem-card-ano">${corrida.ano || ''}</span>
                </div>
                <div class="telem-card-body">
                    <ol class="telem-podio">${podioHtml}</ol>
                    ${vrHtml}
                </div>
                <div class="telem-card-footer">
                    <button class="btn-telem-abrir" data-action="abrir-telemetria" data-race-index="${index}">
                        📊 Analisar
                    </button>
                </div>
            </div>`;
        }).join('');
    }

    /** Abre o modal de telemetria para uma corrida */
    function openTelemetryModal(raceIndex) {
        const corrida = gameState.campeonato.resultadosCorridas[raceIndex];
        if (!corrida) return;

        telemRaceIndex = raceIndex;

        // Preenche o header
        document.getElementById('telemetry-modal-title').textContent = corrida.nomePista;
        const top3 = corrida.resultadoFinal.slice(0,3).map(p => p.piloto.nome).join(' · ');
        document.getElementById('telem-meta').textContent = `${corrida.ano || ''} · Pódio: ${top3}`;

        // Saldo
        const saldoEl = document.getElementById('telem-saldo-info');
        if (saldoEl) saldoEl.textContent = `Saldo disponível: R$ ${gameState.escuderia.dinheiro.toLocaleString('pt-BR')}`;

        // Reseta tab para "equipe"
        document.querySelectorAll('.telem-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.telem-panel').forEach(p => p.classList.remove('active'));
        document.querySelector('[data-telem-tab="equipe"]').classList.add('active');
        document.getElementById('telem-panel-equipe').classList.add('active');

        // Renderiza painel gratuito
        renderTelemEquipe(corrida);

        // Estado do painel premium (verificar se já foi comprado)
        const jaPago = corrida.premiumDesbloqueado === true;
        document.getElementById('telem-premium-lock').classList.toggle('hidden', jaPago);
        document.getElementById('telem-premium-content').classList.toggle('hidden', !jaPago);
        if (jaPago) renderTelemPremium(corrida);

        // Atualiza botão de compra
        const btnComprar = document.getElementById('btn-comprar-telemetria-premium');
        if (btnComprar) btnComprar.disabled = gameState.escuderia.dinheiro < 25000;

        document.getElementById('telemetry-modal').classList.remove('hidden');
    }

    function closeTelemetryModal() {
        document.getElementById('telemetry-modal').classList.add('hidden');
        [telemChartEquipe, telemChartVencedor, telemChartPosicao].forEach(c => { if (c) { c.destroy(); } });
        telemChartEquipe = telemChartVencedor = telemChartPosicao = null;
    }

    // ── PAINEL GRATUITO ──────────────────────────────────────────────

    function renderTelemEquipe(corrida) {
        const pilotosJogador = corrida.resultadoFinal.filter(p => p.isPlayer && p.lapData?.length > 0);
        if (pilotosJogador.length === 0) {
            document.getElementById('telem-panel-equipe').innerHTML = '<p style="color:#666;padding:2rem;text-align:center">Dados de telemetria da equipe não disponíveis para esta corrida.</p>';
            return;
        }
        const p1 = pilotosJogador[0];
        const p2 = pilotosJogador[1] || null;

        // Destroi chart anterior
        if (telemChartEquipe) { telemChartEquipe.destroy(); telemChartEquipe = null; }

        // Gráfico de tempo de volta
        const labels = p1.lapData.map(d => d.lap);
        const datasets = [];
        const colors = ['#e10600', '#00bcd4'];

        [p1, p2].filter(Boolean).forEach((p, i) => {
            datasets.push({
                label: p.piloto.nome,
                data: p.lapData.map(d => d.lapTime === Infinity ? null : d.lapTime),
                borderColor: colors[i],
                backgroundColor: colors[i] + '22',
                tension: 0.2,
                pointRadius: p.lapData.map(d => d.pitStop ? 7 : 3),
                pointStyle: p.lapData.map(d => d.pitStop ? 'triangle' : 'circle'),
                pointBackgroundColor: p.lapData.map(d => d.pitStop ? '#f0c040' : colors[i]),
                spanGaps: true
            });
        });

        const ctx = document.getElementById('telemetry-chart').getContext('2d');
        telemChartEquipe = new Chart(ctx, {
            type: 'line',
            data: { labels, datasets },
            options: {
                responsive: true, maintainAspectRatio: true,
                plugins: {
                    legend: { labels: { color: '#ccc', font: { size: 11 } } },
                    tooltip: {
                        callbacks: {
                            label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y ? formatLapTime(ctx.parsed.y) : 'DNF'}` +
                                (p1.lapData[ctx.dataIndex]?.pitStop ? ' 🔧 PIT' : '')
                        }
                    }
                },
                scales: {
                    x: { ticks: { color: '#555' }, grid: { color: '#111125' }, title: { display: true, text: 'Volta', color: '#666' } },
                    y: { ticks: { color: '#555', callback: v => formatLapTime(v) }, grid: { color: '#111125' },
                         title: { display: true, text: 'Tempo (s)', color: '#666' } }
                }
            }
        });

        // Tabela
        const container = document.getElementById('telemetry-table-container');
        const totalLaps = Math.max(p1.lapData.length, p2 ? p2.lapData.length : 0);
        const melhor1 = Math.min(...p1.lapData.map(d => d.lapTime === Infinity ? 999 : d.lapTime));
        const melhor2 = p2 ? Math.min(...p2.lapData.map(d => d.lapTime === Infinity ? 999 : d.lapTime)) : 999;

        let rows = '';
        for (let i = 0; i < totalLaps; i++) {
            const d1 = p1.lapData[i];
            const d2 = p2 ? p2.lapData[i] : null;
            const t1Fmt = d1 ? (d1.lapTime === Infinity ? 'DNF' : formatLapTime(d1.lapTime)) : '—';
            const t2Fmt = d2 ? (d2.lapTime === Infinity ? 'DNF' : formatLapTime(d2.lapTime)) : '—';
            const isMelhor1 = d1 && d1.lapTime === melhor1;
            const isMelhor2 = d2 && d2.lapTime === melhor2;
            const pneu1 = d1 ? `<span class="tyre-indicator tyre-${d1.tire}" style="font-size:0.75rem">${d1.tire.charAt(0).toUpperCase()}</span>` : '—';
            const pneu2 = d2 ? `<span class="tyre-indicator tyre-${d2.tire}" style="font-size:0.75rem">${d2.tire.charAt(0).toUpperCase()}</span>` : '—';
            const pit1 = d1?.pitStop ? '<span class="telem-pit-marker">PIT</span>' : '';
            const pit2 = d2?.pitStop ? '<span class="telem-pit-marker">PIT</span>' : '';
            rows += `<tr>
                <td class="lap-num">${i+1}</td>
                <td class="${isMelhor1 ? 'telem-fastest' : ''} ${d1?.pitStop ? 'is-pit' : ''}">${t1Fmt}${pit1}</td>
                <td>${pneu1}</td>
                <td class="${isMelhor2 ? 'telem-fastest' : ''} ${d2?.pitStop ? 'is-pit' : ''}">${t2Fmt}${pit2}</td>
                <td>${pneu2}</td>
            </tr>`;
        }

        container.innerHTML = `
            <h4 class="telem-section-title">Volta a Volta</h4>
            <div class="telem-table-wrap">
                <table class="telem-table">
                    <thead>
                        <tr>
                            <th>V</th>
                            <th class="driver-col-1" colspan="2">${p1.piloto.nome}</th>
                            <th class="driver-col-2" colspan="2">${p2 ? p2.piloto.nome : '—'}</th>
                        </tr>
                        <tr>
                            <th></th><th>Tempo</th><th>Pneu</th><th>Tempo</th><th>Pneu</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>`;
    }

    // ── PAINEL PREMIUM ───────────────────────────────────────────────

    function renderTelemPremium(corrida) {
        renderTelemVencedor(corrida);
        renderTelemStrategyMap(corrida);
        renderTelemStints(corrida);
        renderTelemPosicao(corrida);
        renderTelemPitStops(corrida);
        renderTelemDegradacao(corrida);
        renderTelemLicoes(corrida);
        renderTelemBenchmark(corrida);
    }

    /** ── Benchmark de Atributos — Relatório dos Especialistas ──────── */
    function renderTelemBenchmark(corrida) {
        const container = document.getElementById('telem-benchmark-atributos');
        if (!container) return;

        // ── 1. Atributos do carro do jogador via peças reais ─────────────
        // Filtra apenas carros com piloto E com motor equipado (potencia > 0)
        const carrosValidos = gameState.carros.filter(c => {
            if (!c.pilotoId) return false;
            const a = calcularAtributosCarro(c);
            return a.potencia > 0;
        });

        if (!carrosValidos.length) {
            container.innerHTML = '<p class="bench-sem-dados">Equipe o carro com ao menos um motor para ativar esta análise.</p>';
            return;
        }

        const somaJogador = { potencia: 0, aerodinamica: 0, aderencia: 0, confiabilidade: 0 };
        carrosValidos.forEach(c => {
            const a = calcularAtributosCarro(c);
            somaJogador.potencia      += a.potencia;
            somaJogador.aerodinamica  += a.aerodinamica;
            somaJogador.aderencia     += a.aderencia;
            somaJogador.confiabilidade += a.confiabilidade;
        });
        const nCarros = carrosValidos.length;
        const minhaEquipe = {
            potencia:       +(somaJogador.potencia / nCarros).toFixed(1),
            aerodinamica:   +(somaJogador.aerodinamica / nCarros).toFixed(1),
            aderencia:      +(somaJogador.aderencia / nCarros).toFixed(1),
            confiabilidade: +(somaJogador.confiabilidade / nCarros).toFixed(1)
        };

        // ── 2. Ranking das equipes IA pela CLASSIFICAÇÃO ATUAL do campeonato ──
        // Usa a classificação de construtores real da temporada corrente para
        // determinar quais equipes são "Top 3" e quais são "Campo".
        // Se ainda não houver corridas (classificação vazia), cai de volta para
        // a ordenação por atributos do carro.
        function carroAtual(equipe) {
            // Usa os atributos do carro como estão agora (com evolução de temporadas)
            return { ...equipe.carro };
        }

        const classificacaoCorr = [...(gameState.campeonato.classificacaoConstrutores || [])]
            .sort((a, b) => b.pontos - a.pontos);

        let IAordenada;
        if (classificacaoCorr.length >= 4) {
            // Ordena equipes IA na mesma sequência da classificação da corrida
            const mapped = [];
            classificacaoCorr.forEach(e => {
                const ia = equipesIA.find(x => x.nome === e.equipe);
                if (ia) mapped.push(ia);
            });
            // Adiciona equipes IA que ainda não pontuaram (fim da lista)
            equipesIA.forEach(e => {
                if (!mapped.find(x => x.nome === e.nome)) mapped.push(e);
            });
            IAordenada = mapped;
        } else {
            // Fallback: ordena por média de atributos atuais
            IAordenada = [...equipesIA].sort((a, b) => {
                const avg = t => (t.carro.potencia + t.carro.aerodinamica + t.carro.aderencia + t.carro.confiabilidade) / 4;
                return avg(b) - avg(a);
            });
        }

        // Top 3 = líderes da classificação | Campo = lanterna
        const top3Times  = IAordenada.slice(0, 3);
        const campoTimes = IAordenada.slice(-3);

        // Calcula média dos atributos atuais de cada grupo
        function mediaIA(times) {
            const soma = { potencia: 0, aerodinamica: 0, aderencia: 0, confiabilidade: 0 };
            times.forEach(t => {
                const c = carroAtual(t);
                soma.potencia      += c.potencia;
                soma.aerodinamica  += c.aerodinamica;
                soma.aderencia     += c.aderencia;
                soma.confiabilidade += c.confiabilidade;
            });
            const n = times.length;
            return {
                potencia:       +(soma.potencia / n).toFixed(1),
                aerodinamica:   +(soma.aerodinamica / n).toFixed(1),
                aderencia:      +(soma.aderencia / n).toFixed(1),
                confiabilidade: +(soma.confiabilidade / n).toFixed(1)
            };
        }

        const mediaTop3  = mediaIA(top3Times);
        const mediaCampo = mediaIA(campoTimes);

        // ── 3. Identifica o maior gap para a recomendação ─────────────────
        const attrDefs = [
            { key: 'potencia',       label: '⚡ Potência',         peca: 'motor de maior nível',                    tipoEsp: 'Engenheiro de Motor' },
            { key: 'aerodinamica',   label: '💨 Aerodinâmica',     peca: 'asas e chassi de nível superior',         tipoEsp: 'Aerodinamicista'     },
            { key: 'aderencia',      label: '🔄 Aderência',        peca: 'suspensão e chassi',                      tipoEsp: 'Projetista'           },
            { key: 'confiabilidade', label: '🛡️ Confiabilidade',  peca: 'peças de alta confiabilidade (nível 8+)', tipoEsp: 'Engenheiro de Motor' },
        ];

        let maiorGap = -Infinity;
        let attrFracoObj = attrDefs[0];
        attrDefs.forEach(def => {
            const gap = mediaTop3[def.key] - minhaEquipe[def.key];
            if (gap > maiorGap) { maiorGap = gap; attrFracoObj = def; }
        });

        // ── 4. Narrador — especialista da área com maior deficit ──────────
        // Quando o carro está dentro do nível competitivo, usa o Treinador de Pilotos.
        const teamStr  = top3Times.map(t => t.nome).join(', ');
        const fundoStr = campoTimes.map(t => t.nome).join(', ');

        const avatarPorTipo = {
            'Engenheiro de Motor': '🔧',
            'Aerodinamicista':     '💨',
            'Projetista':          '📐',
            'Olheiro':             '🔭',
            'Treinador de Pilotos':'🏁',
        };
        const textoNarradorPorAttr = {
            potencia:       (gap, peca) => `Nossa potência está ${gap.toFixed(1)} pts abaixo do Top 3. Priorize a produção de <strong>${peca}</strong> para fechar esse gap.`,
            aerodinamica:   (gap, peca) => `O pacote aerodinâmico está ${gap.toFixed(1)} pts aquém dos líderes. Upgrade de <strong>${peca}</strong> é a próxima ação recomendada.`,
            aderencia:      (gap, peca) => `A aderência limita nosso ritmo em curva — deficit de ${gap.toFixed(1)} pts. Foco em <strong>${peca}</strong> para recuperar tempo de volta.`,
            confiabilidade: (gap, peca) => `A confiabilidade está ${gap.toFixed(1)} pts abaixo do Top 3. Risco de falha mecânica elevado — invista em <strong>${peca}</strong>.`,
        };

        let nomeEsp, cargoEsp, avatarEsp, textoEsp;
        if (maiorGap <= 0) {
            // Sem deficit — Treinador de Pilotos assume o microfone
            const treinador = (gameState.escuderia.especialistas || []).find(e => e.tipo === 'Treinador de Pilotos');
            nomeEsp  = treinador ? treinador.nome : 'Equipe Técnica';
            cargoEsp = 'Treinador de Pilotos';
            avatarEsp = '🏁';
            textoEsp = `Análise comparativa com as equipes de topo: <strong style="color:#f0c040">${teamStr}</strong>.<br>
                        <strong style="color:#44d88e">Nosso carro está dentro do nível competitivo em todos os atributos.</strong>
                        O diferencial agora está no desenvolvimento dos pilotos e na estratégia de corrida.`;
        } else {
            // Especialista da área mais fraca
            const espContratado = (gameState.escuderia.especialistas || []).find(e => e.tipo === attrFracoObj.tipoEsp);
            nomeEsp   = espContratado ? espContratado.nome : attrFracoObj.tipoEsp;
            cargoEsp  = attrFracoObj.tipoEsp;
            avatarEsp = avatarPorTipo[attrFracoObj.tipoEsp] || '🧑‍🔬';
            textoEsp  = `Análise comparativa com as equipes de topo: <strong style="color:#f0c040">${teamStr}</strong>.<br>
                         ${(textoNarradorPorAttr[attrFracoObj.key] ?? (() => ''))(maiorGap, attrFracoObj.peca)}`;
        }

        // ── 5. Render de cada linha de atributo ───────────────────────────
        // A escala das barras é ABSOLUTA (0–100), igual ao sistema de atributos
        // do jogo. Nunca normaliza de forma relativa — evita mostrar "100"
        // quando o valor real é 94.
        function renderRow(def) {
            const minha   = minhaEquipe[def.key];
            const top3Val = mediaTop3[def.key];
            const botVal  = mediaCampo[def.key];
            const gap     = +(top3Val - minha).toFixed(1);

            const gapCor   = gap > 10 ? '#ff5555' : gap > 3 ? '#ffaa33' : '#44d88e';
            const gapSinal = gap > 0 ? `−${gap}` : `+${Math.abs(gap)}`;

            // Barra proporcional em escala absoluta 0–100
            const pct = v => `${Math.min(100, Math.max(0, v)).toFixed(1)}%`;

            return `
            <div class="bench-row">
                <div class="bench-attr-label">${def.label}</div>
                <div class="bench-bars-col">
                    <div class="bench-bar-line">
                        <span class="bench-bar-tag bench-tag-top3">Top 3</span>
                        <div class="bench-track">
                            <div class="bench-fill bench-fill-top3" style="width:${pct(top3Val)}"></div>
                        </div>
                        <span class="bench-num">${top3Val}</span>
                    </div>
                    <div class="bench-bar-line">
                        <span class="bench-bar-tag bench-tag-minha">Minha</span>
                        <div class="bench-track">
                            <div class="bench-fill bench-fill-minha" style="width:${pct(minha)}"></div>
                        </div>
                        <span class="bench-num" style="color:${gapCor}">${minha}</span>
                    </div>
                    <div class="bench-bar-line">
                        <span class="bench-bar-tag bench-tag-bot">Fundo</span>
                        <div class="bench-track">
                            <div class="bench-fill bench-fill-bot" style="width:${pct(botVal)}"></div>
                        </div>
                        <span class="bench-num bench-num-bot">${botVal}</span>
                    </div>
                </div>
                <div class="bench-delta" style="color:${gapCor}" title="Gap vs. Top 3">${gapSinal}</div>
            </div>`;
        }

        container.innerHTML = `
        <div class="bench-specialist-card">
            <div class="bench-esp-avatar">${avatarEsp}</div>
            <div class="bench-esp-corpo">
                <div class="bench-esp-nome">${nomeEsp}
                    <span class="bench-esp-cargo">— ${cargoEsp}</span>
                </div>
                <p class="bench-esp-texto">${textoEsp}</p>
            </div>
        </div>

        <div class="bench-legend-row">
            <span class="bench-pill bench-pill-top3">🏆 Top 3 por classificação: ${teamStr}</span>
            <span class="bench-pill bench-pill-minha">🏎️ Minha Equipe</span>
            <span class="bench-pill bench-pill-bot">🐌 Fundo de Pelotão: ${fundoStr}</span>
        </div>

        <div class="bench-grid">
            ${attrDefs.map(renderRow).join('')}
        </div>

        <p class="bench-rodape">
            * Top 3 e Fundo de Pelotão definidos pela classificação de construtores <strong>desta temporada</strong>.
            Os atributos refletem os valores atuais de fábrica + evolução de cada equipe.
            Escala absoluta 0–100.
        </p>`;
    }

    /** ── Análise de Degradação de Pneus ───────────────────────────── */
    function renderTelemDegradacao(corrida) {
        const container = document.getElementById('telem-degradacao');
        const pilotosJogador = corrida.resultadoFinal.filter(p => p.isPlayer && p.lapData?.length > 0);

        if (pilotosJogador.length === 0) {
            container.innerHTML = '<p style="color:#555;text-align:center;padding:1rem">Dados não disponíveis.</p>';
            return;
        }

        /**
         * Calcula a curva teórica de degradação para um composto.
         * Retorna array de { volta, durabilidade, penalidade, zona }
         * usando a mesma fórmula do motor de simulação.
         */
        function curvaTeórica(composto, fatorGer, maxVoltas) {
            const desgastePorVolta = pneus[composto].desgastePorVolta * fatorGer;
            let dur = 100;
            const pontos = [];
            for (let v = 1; v <= maxVoltas && dur > 0; v++) {
                const desgasteSofrido = 100 - dur;
                let pen;
                if (desgasteSofrido <= 65) {
                    pen = desgasteSofrido * 0.01;
                } else {
                    const exc = desgasteSofrido - 65;
                    pen = 0.65 + Math.pow(exc, 1.5) * 0.01;
                }
                const zona = desgasteSofrido <= 40 ? 'otima' : desgasteSofrido <= 65 ? 'degradacao' : 'cliff';
                pontos.push({ volta: v, durabilidade: Math.max(0, dur), penalidade: pen, zona });
                dur -= desgastePorVolta;
            }
            return pontos;
        }

        /**
         * Detecta o "cliff" real no lapData:
         * primeiro lap onde a média móvel de 3 voltas supera
         * melhorTempoStint * 1.012 por ≥2 voltas consecutivas.
         */
        function detectarCliffReal(voltas) {
            const tempos = voltas.map(d => d.lapTime).filter(t => t !== Infinity && t > 0);
            if (tempos.length < 4) return null;
            const melhor = Math.min(...tempos);
            const limiar = melhor * 1.012;
            let consecutivos = 0;
            for (let i = 2; i < voltas.length; i++) {
                if (voltas[i].lapTime > limiar) {
                    consecutivos++;
                    if (consecutivos >= 2) return i - 1; // índice no stint
                } else {
                    consecutivos = 0;
                }
            }
            return null;
        }

        // Gera um card + mini-gráfico por stint, por piloto
        const cards = [];
        const pneuNome = { macio: 'Macio 🔴', medio: 'Médio 🟡', duro: 'Duro ⚪' };
        const pneuCor = { macio: '#e8002d', medio: '#ffd700', duro: '#e0e0e0' };

        pilotosJogador.forEach((p, pi) => {
            const corPiloto = pi === 0 ? '#e10600' : '#00bcd4';
            const gerPneus = p.piloto.gerenciamentoPneus || 80;
            const fatorGer = 1 - gerPneus / 300;
            const stints = stintsDoLapData(p.lapData);

            stints.forEach((s, si) => {
                const voltasStint = p.lapData.filter(d => d.lap >= s.inicio && d.lap <= s.fim);
                // Exclui a volta do pit stop: o lapTime inclui o tempo nos boxes (~22s+)
                // e não representa o ritmo do pneu — distorceria o gráfico
                const temposValidos = voltasStint.filter(d => d.lapTime !== Infinity && d.lapTime > 0 && !d.pitStop);
                if (temposValidos.length < 2) return;

                const duracao = voltasStint.length;
                const melhor = Math.min(...temposValidos.map(d => d.lapTime));
                const pior   = Math.max(...temposValidos.map(d => d.lapTime));
                const media  = temposValidos.reduce((a, d) => a + d.lapTime, 0) / temposValidos.length;

                // Curva teórica para este composto e gerenciamento
                const teoria = curvaTeórica(s.pneu, fatorGer, duracao + 5);
                const teóriaMaxVoltas = teoria.length;
                const cliffIdx = teoria.findIndex(pt => pt.zona === 'cliff');
                const voltaCliffTeórico = cliffIdx >= 0 ? cliffIdx + 1 : teoria.length + 1;
                const otimaIdx = teoria.findIndex(pt => pt.zona !== 'otima');
                const voltaOtimaTeo = otimaIdx >= 0 ? otimaIdx : teoria.length;

                // Cliff real detectado
                const cliffReal = detectarCliffReal(temposValidos);
                const voltaCliffReal = cliffReal !== null ? cliffReal + 1 : null;

                // Degradação total observada (último tempo - melhor tempo)
                const degradacaoObservada = pior - melhor;

                // Projeção teórica: penalidade na última volta real
                const penUltimaVolta = teoria[duracao - 1]?.penalidade ?? teoria.at(-1)?.penalidade ?? 0;

                cards.push({
                    id: `deg-chart-${pi}-${si}`,
                    piloto: p.piloto.nome,
                    corPiloto,
                    stintNum: si + 1,
                    composto: s.pneu,
                    duracao,
                    melhor, pior, media,
                    degradacaoObservada,
                    voltaCliffTeórico,
                    voltaOtimaTeo: voltaOtimaTeo > 0 ? voltaOtimaTeo : teóriaMaxVoltas,
                    voltaCliffReal,
                    teóriaMaxVoltas,
                    penUltimaVolta,
                    lapTimes: temposValidos.map(d => d.lapTime),
                    teoriaPens: teoria.map(pt => pt.penalidade),
                    teoriaZonas: teoria.map(pt => pt.zona),
                });
            });
        });

        if (cards.length === 0) {
            container.innerHTML = '<p style="color:#555;text-align:center;padding:1rem">Nenhum stint com dados suficientes.</p>';
            return;
        }

        // Renderiza o HTML dos cards
        container.innerHTML = `<div class="deg-grid">${cards.map(c => `
            <div class="deg-card">
                <div class="deg-card-header">
                    <span class="deg-piloto" style="color:${c.corPiloto}">${c.piloto}</span>
                    <span class="deg-stint-label">Stint ${c.stintNum}</span>
                    <span class="tyre-indicator tyre-${c.composto}" style="font-size:0.72rem">${c.composto.charAt(0).toUpperCase()}</span>
                </div>
                <canvas id="${c.id}" class="deg-chart-canvas"></canvas>
                <div class="deg-stats-row">
                    <div class="deg-stat">
                        <span class="deg-stat-label">Duração</span>
                        <span class="deg-stat-value">${c.duracao}v</span>
                    </div>
                    <div class="deg-stat">
                        <span class="deg-stat-label">Proj. ótima</span>
                        <span class="deg-stat-value ${c.duracao > c.voltaOtimaTeo ? 'warn' : 'ok'}">&lt;${c.voltaOtimaTeo}v</span>
                    </div>
                    <div class="deg-stat">
                        <span class="deg-stat-label">Proj. cliff</span>
                        <span class="deg-stat-value ${c.duracao >= c.voltaCliffTeórico ? 'bad' : 'ok'}">${c.voltaCliffTeórico}v</span>
                    </div>
                    <div class="deg-stat">
                        <span class="deg-stat-label">Cliff real</span>
                        <span class="deg-stat-value ${c.voltaCliffReal ? 'warn' : 'ok'}">${c.voltaCliffReal ? `v${c.voltaCliffReal}` : '—'}</span>
                    </div>
                    <div class="deg-stat">
                        <span class="deg-stat-label">Degradação</span>
                        <span class="deg-stat-value ${c.degradacaoObservada > 2 ? 'bad' : 'ok'}">+${c.degradacaoObservada.toFixed(2)}s</span>
                    </div>
                </div>
                <div class="deg-barra-zonas" title="Verde: ótima · Amarelo: degradação · Vermelho: cliff">
                    <div class="deg-zona-seg zona-otima"  style="width:${(c.voltaOtimaTeo/c.teóriaMaxVoltas*100).toFixed(1)}%"  title="Ótima: v1–${c.voltaOtimaTeo}"></div>
                    <div class="deg-zona-seg zona-deg"    style="width:${((c.voltaCliffTeórico - c.voltaOtimaTeo)/c.teóriaMaxVoltas*100).toFixed(1)}%" title="Degradação: v${c.voltaOtimaTeo}–${c.voltaCliffTeórico}"></div>
                    <div class="deg-zona-seg zona-cliff"  style="width:${((c.teóriaMaxVoltas - c.voltaCliffTeórico)/c.teóriaMaxVoltas*100).toFixed(1)}%" title="Cliff: v${c.voltaCliffTeórico}+"></div>
                    ${c.duracao <= c.teóriaMaxVoltas ? `<div class="deg-marker-duracao" style="left:${(c.duracao/c.teóriaMaxVoltas*100).toFixed(1)}%" title="Saiu na v${c.duracao}"></div>` : ''}
                </div>
                <div class="deg-barra-labels">
                    <span>v1</span>
                    <span>v${c.voltaOtimaTeo} <span class="deg-zone-tag otima">ótima</span></span>
                    <span>v${c.voltaCliffTeórico} <span class="deg-zone-tag cliff">cliff</span></span>
                </div>
            </div>`).join('')}
        </div>`;

        // Monta os mini-gráficos após inserir o HTML
        setTimeout(() => {
            cards.forEach(c => {
                const ctx = document.getElementById(c.id)?.getContext('2d');
                if (!ctx) return;

                const labels = c.lapTimes.map((_, i) => i + 1);

                // Linha teórica: melhorTempoReal + penalidade teórica
                const baseTeórico = c.melhor; // aproximação: melhor tempo = sem desgaste
                const linhaTeórica = c.teoriaPens.slice(0, c.duracao).map(p => parseFloat((baseTeórico + p).toFixed(3)));

                // Zonas de background por volta
                const zonaCores = c.teoriaZonas.slice(0, c.duracao).map(z =>
                    z === 'otima' ? 'rgba(56,142,60,0.08)' : z === 'degradacao' ? 'rgba(245,127,23,0.08)' : 'rgba(183,28,28,0.08)'
                );

                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels,
                        datasets: [
                            {
                                label: 'Real',
                                data: c.lapTimes.map(t => parseFloat(t.toFixed(3))),
                                borderColor: c.corPiloto,
                                backgroundColor: 'transparent',
                                tension: 0.2,
                                pointRadius: c.lapTimes.map((_, i) => (c.voltaCliffReal && i === c.voltaCliffReal - 1) ? 6 : 2),
                                pointBackgroundColor: c.lapTimes.map((_, i) => (c.voltaCliffReal && i === c.voltaCliffReal - 1) ? '#ff5252' : c.corPiloto),
                            },
                            {
                                label: 'Projeção',
                                data: linhaTeórica,
                                borderColor: '#555',
                                backgroundColor: 'transparent',
                                borderDash: [4, 3],
                                tension: 0.2,
                                pointRadius: 0,
                            }
                        ]
                    },
                    options: {
                        responsive: false,
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                callbacks: {
                                    label: ctx2 => `${ctx2.dataset.label}: ${formatLapTime(ctx2.parsed.y)}`
                                }
                            }
                        },
                        scales: {
                            x: {
                                ticks: { color: '#444', font: { size: 9 }, maxTicksLimit: 8 },
                                grid: { color: '#0e0e1e' }
                            },
                            y: {
                                ticks: { color: '#444', font: { size: 9 }, callback: v => formatLapTime(v) },
                                grid: { color: '#0e0e1e' }
                            }
                        }
                    }
                });
            });
        }, 50);
    }

    /** ── Gráfico de tempo total nos boxes ─────────────────────────── */
    function renderTelemPitStops(corrida) {
        if (window._telemChartPit) { window._telemChartPit.destroy(); window._telemChartPit = null; }

        const pista = calendarioCorridas.find(c => c.nome === corrida.nomePista);
        const pitstopBase = pista ? pista.pitstopTime : 22;

        // Coleta dados de pit para top 10 com lapData + estimativa para os demais
        const top10 = corrida.resultadoFinal.slice(0, 10);
        const dados = top10.map(p => {
            let totalPit = 0;
            if (p.lapData && p.lapData.length > 0) {
                // Calcula tempo real: somamos lapTime das voltas de pit e subtraímos a média das voltas normais
                const voltasNormais = p.lapData.filter(d => !d.pitStop && d.lapTime !== Infinity);
                const mediaVoltaNormal = voltasNormais.length > 0
                    ? voltasNormais.reduce((s, d) => s + d.lapTime, 0) / voltasNormais.length
                    : pitstopBase + 75;
                const voltasPit = p.lapData.filter(d => d.pitStop);
                totalPit = voltasPit.reduce((s, d) => s + Math.max(0, d.lapTime - mediaVoltaNormal), 0);
            } else {
                // Estimativa para IA sem lapData
                totalPit = p.paradas * pitstopBase;
            }
            return {
                nome: p.piloto.nome.split(' ').pop(), // sobrenome
                nomeCompleto: p.piloto.nome,
                isPlayer: p.isPlayer,
                paradas: p.paradas,
                totalPit: Math.max(0, totalPit)
            };
        });

        // Média top 5 como referência
        const mediaTop5 = dados.slice(0, 5).reduce((s, d) => s + d.totalPit, 0) / Math.min(5, dados.length);

        const cores = dados.map(d => d.isPlayer ? '#e10600' : 'rgba(100,120,160,0.7)');
        const ctx = document.getElementById('telem-chart-pitstops').getContext('2d');

        window._telemChartPit = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: dados.map(d => d.nome),
                datasets: [{
                    label: 'Tempo total nos boxes (s)',
                    data: dados.map(d => parseFloat(d.totalPit.toFixed(1))),
                    backgroundColor: cores,
                    borderColor: cores,
                    borderRadius: 4,
                    borderWidth: 1,
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            title: ctx => dados[ctx[0].dataIndex].nomeCompleto,
                            label: ctx => {
                                const d = dados[ctx.dataIndex];
                                const s = ctx.parsed.x.toFixed(1);
                                return [`⏱ Total: ${s}s`, `🔧 Paradas: ${d.paradas}x`, `⌀ por parada: ${(ctx.parsed.x / Math.max(1, d.paradas)).toFixed(1)}s`];
                            }
                        }
                    },
                    annotation: {
                        annotations: {
                            mediaLine: {
                                type: 'line',
                                scaleID: 'x',
                                value: parseFloat(mediaTop5.toFixed(1)),
                                borderColor: '#f0c040',
                                borderWidth: 2,
                                borderDash: [6, 3],
                                label: {
                                    display: true,
                                    content: `Média top5: ${mediaTop5.toFixed(1)}s`,
                                    color: '#f0c040',
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    font: { size: 10 },
                                    position: 'start',
                                }
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: { color: '#555', callback: v => `${v}s` },
                        grid: { color: '#111125' },
                        title: { display: true, text: 'Segundos perdidos nos boxes', color: '#666' }
                    },
                    y: { ticks: { color: '#aaa' }, grid: { color: '#111125' } }
                }
            }
        });
    }

    /** ── Lições da Corrida ────────────────────────────────────────── */
    function renderTelemLicoes(corrida) {
        const container = document.getElementById('telem-licoes');
        const pilotosJogador = corrida.resultadoFinal.filter(p => p.isPlayer && p.lapData?.length > 0);
        const vencedor = corrida.resultadoFinal[0];
        const pista = calendarioCorridas.find(c => c.nome === corrida.nomePista);
        const pitstopBase = pista ? pista.pitstopTime : 22;

        // ── Bloco 1: Pneu mais rápido da corrida ──
        const ritmoPorComposto = { macio: [], medio: [], duro: [] };
        corrida.resultadoFinal.forEach(p => {
            if (!p.lapData?.length) return;
            const stints = stintsDoLapData(p.lapData);
            stints.forEach(s => {
                const voltas = p.lapData.filter(d => d.lap >= s.inicio && d.lap <= s.fim && !d.pitStop && d.lapTime !== Infinity);
                if (voltas.length < 3) return; // ignora stints muito curtos
                const media = voltas.reduce((acc, d) => acc + d.lapTime, 0) / voltas.length;
                if (ritmoPorComposto[s.pneu]) ritmoPorComposto[s.pneu].push(media);
            });
        });
        const mediaComposto = {};
        Object.entries(ritmoPorComposto).forEach(([pneu, tempos]) => {
            if (tempos.length > 0)
                mediaComposto[pneu] = tempos.reduce((s, t) => s + t, 0) / tempos.length;
        });
        const compostoOrdenado = Object.entries(mediaComposto).sort((a,b) => a[1] - b[1]);
        const pneuNome = { macio: '🔴 Macio', medio: '🟡 Médio', duro: '⚪ Duro' };
        const bloco1Html = compostoOrdenado.length > 0 ? `
            <div class="licao-bloco">
                <div class="licao-titulo">🏎️ Ritmo por Composto — nesta pista</div>
                <div class="licao-composto-lista">
                    ${compostoOrdenado.map(([pneu, media], i) => `
                        <div class="licao-composto-item ${i === 0 ? 'melhor' : ''}">
                            <span class="licao-comp-label">${pneuNome[pneu]}</span>
                            <span class="licao-comp-valor">${formatLapTime(media)}</span>
                            ${i === 0 ? '<span class="licao-badge">Mais rápido</span>' : ''}
                            ${i > 0 ? `<span class="licao-delta">+${(media - compostoOrdenado[0][1]).toFixed(3)}s/v</span>` : ''}
                        </div>`).join('')}
                </div>
                <p class="licao-insight">Baseado na média de todos os stints com ≥3 voltas limpas nesta corrida.</p>
            </div>` : '';

        // ── Bloco 2: Custo dos boxes vs vencedor ──
        let bloco2Html = '';
        if (pilotosJogador.length > 0) {
            const calcPitTotal = (p) => {
                const voltasNormais = p.lapData.filter(d => !d.pitStop && d.lapTime !== Infinity);
                const media = voltasNormais.length > 0
                    ? voltasNormais.reduce((s, d) => s + d.lapTime, 0) / voltasNormais.length : pitstopBase + 75;
                return p.lapData.filter(d => d.pitStop)
                    .reduce((s, d) => s + Math.max(0, d.lapTime - media), 0);
            };

            const linhas = pilotosJogador.map(p => {
                const pitJogador = calcPitTotal(p);
                const posicao = corrida.resultadoFinal.findIndex(r => r.piloto.id === p.piloto.id) + 1;
                const delta = corrida.resultadoFinal[posicao - 1]?.tempoTotal - vencedor.tempoTotal || 0;
                return { nome: p.piloto.nome, pit: pitJogador, posicao, delta };
            });

            let pitVencedor = 0;
            if (vencedor.lapData?.length > 0) {
                const voltasN = vencedor.lapData.filter(d => !d.pitStop && d.lapTime !== Infinity);
                const med = voltasN.length > 0 ? voltasN.reduce((s, d) => s + d.lapTime, 0) / voltasN.length : pitstopBase + 75;
                pitVencedor = vencedor.lapData.filter(d => d.pitStop).reduce((s, d) => s + Math.max(0, d.lapTime - med), 0);
            } else {
                pitVencedor = vencedor.paradas * pitstopBase;
            }

            bloco2Html = `
            <div class="licao-bloco">
                <div class="licao-titulo">⏱️ Boxes: você vs vencedor (${vencedor.piloto.nome})</div>
                <div class="licao-pit-comparativo">
                    <div class="licao-pit-ref">
                        <span class="licao-pit-nome">🏆 ${vencedor.piloto.nome}</span>
                        <span class="licao-pit-tempo">${pitVencedor.toFixed(1)}s</span>
                        <span class="licao-pit-paradas">${vencedor.paradas} parada${vencedor.paradas !== 1 ? 's' : ''}</span>
                    </div>
                    ${linhas.map(l => {
                        const diff = l.pit - pitVencedor;
                        const cor = diff <= 0 ? '#81c784' : diff < 5 ? '#f0c040' : '#e57373';
                        return `<div class="licao-pit-ref player">
                            <span class="licao-pit-nome">P${l.posicao} ${l.nome}</span>
                            <span class="licao-pit-tempo" style="color:${cor}">${l.pit.toFixed(1)}s ${diff > 0 ? '+' : ''}${diff.toFixed(1)}s</span>
                            <span class="licao-pit-paradas">${corrida.resultadoFinal.find(r=>r.piloto.nome===l.nome)?.paradas || '?'} paradas · ${l.delta > 0 ? '+' + l.delta.toFixed(1) + 's do líder' : 'Vencedor'}</span>
                        </div>`;
                    }).join('')}
                </div>
                <p class="licao-insight">Diferença de tempo nos boxes pode explicar posições perdidas mesmo com ritmo de pista similar.</p>
            </div>`;
        }

        // ── Bloco 3: "E se...?" → Estratégia Ótima ──
        let bloco3Html = '';
        if (compostoOrdenado.length >= 2 && pilotosJogador.length > 0) {
            const p = pilotosJogador[0];
            const totalVoltas = (corrida.resultadoFinal[0].lapData?.length) || pista?.voltas || 60;

            // ── Vida útil por composto ─────────────────────────────────────
            // Fator de gestão médio de referência (~gerenciamentoPneus 84)
            // + 15% de margem de segurança para não chegar com pneu destruído.
            const FATOR_GER_REF = 0.72;
            function vidaComp(k) {
                if (!pneus[k]) return totalVoltas; // fallback seguro
                return Math.floor((100 / (pneus[k].desgastePorVolta * FATOR_GER_REF)) * 0.85);
            }

            // ── Estimativa de tempo total para uma sequência de stints ──────
            function estimarTempoEstrategia(stints, pitstopCusto) {
                let tempo = 0;
                stints.forEach((s, i) => {
                    const voltas = s.fim - s.inicio + 1;
                    const ritmo = mediaComposto[s.pneu] ?? compostoOrdenado[0][1];
                    tempo += voltas * ritmo;
                    if (i > 0) tempo += pitstopCusto;
                });
                return tempo;
            }

            const [c1k] = compostoOrdenado[0];
            const [c2k] = compostoOrdenado[1];
            const [c3k] = compostoOrdenado[2] ?? compostoOrdenado[1];

            // ── Estratégia 1 parada — respeita vida útil ──────────────────
            // Pit o mais tarde possível com c1, garantindo que c2 cubra o restante.
            // Se c2 não cobrir, recorre ao composto mais durável disponível.
            const vidaC1 = vidaComp(c1k);
            let c2k1s = c2k; // composto do 2° stint
            let pitLap1Valido;
            {
                const pitMax = Math.min(vidaC1, totalVoltas - 1);
                const pitMin = Math.max(1, totalVoltas - vidaComp(c2k1s));
                if (pitMin <= pitMax) {
                    // Janela válida: usa o ponto médio da janela
                    pitLap1Valido = Math.round((pitMin + pitMax) / 2);
                } else {
                    // c2 não aguenta — tenta o mais durável entre os compostos conhecidos
                    const ordenadoPorVida = ['duro', 'medio', 'macio']
                        .filter(k => k !== c1k)
                        .sort((a, b) => vidaComp(b) - vidaComp(a));
                    for (const alt of ordenadoPorVida) {
                        const pitMinAlt = Math.max(1, totalVoltas - vidaComp(alt));
                        if (pitMinAlt <= pitMax) {
                            c2k1s = alt;
                            pitLap1Valido = Math.round((pitMinAlt + pitMax) / 2);
                            break;
                        }
                    }
                    // Último recurso: pit no limite do 1° pneu, usa o 2° composto
                    if (pitLap1Valido == null) pitLap1Valido = pitMax;
                }
            }
            const stints1Para = [
                { pneu: c1k,   inicio: 1,                fim: pitLap1Valido },
                { pneu: c2k1s, inicio: pitLap1Valido + 1, fim: totalVoltas  }
            ];
            const tempo1Para = estimarTempoEstrategia(stints1Para, pitstopBase);

            // ── Estratégia 2 paradas — respeita vida útil ─────────────────
            // Stint 1: c1 até sua vida útil (capped em 1/3 da corrida para equilibrar)
            // Stint 2: c2 até sua vida útil (ou até o espaço restante)
            // Stint 3: c3 até o fim
            const fim1_2s = Math.min(vidaComp(c1k), Math.ceil(totalVoltas / 3));
            const fim2_2s = Math.min(fim1_2s + vidaComp(c2k), totalVoltas - 1);
            const viavel2s = (totalVoltas - fim2_2s) <= vidaComp(c3k);
            const stints2Para = [
                { pneu: c1k, inicio: 1,          fim: fim1_2s },
                { pneu: c2k, inicio: fim1_2s + 1, fim: fim2_2s },
                { pneu: c3k, inicio: fim2_2s + 1, fim: totalVoltas }
            ];
            const tempo2Para = estimarTempoEstrategia(stints2Para, pitstopBase);

            // ── Comparação ─────────────────────────────────────────────────
            const melhorEst   = tempo1Para <= tempo2Para ? '1 parada' : '2 paradas';
            const melhorTempo = Math.min(tempo1Para, tempo2Para);
            const diffEntre   = Math.abs(tempo1Para - tempo2Para);

            // ── Estratégia real do jogador ─────────────────────────────────
            const stintsJogador = stintsDoLapData(p.lapData);
            const tempoJogador  = estimarTempoEstrategia(
                stintsJogador.map(s => ({ pneu: s.pneu, inicio: s.inicio, fim: s.fim })),
                pitstopBase
            );
            const ganhoVsMelhor = tempoJogador - melhorTempo;
            const corGanho = ganhoVsMelhor <= 2 ? '#44d88e' : ganhoVsMelhor <= 10 ? '#f0c040' : '#e57373';

            const pneuEmoji = { macio: '🔴 Macio', medio: '🟡 Médio', duro: '⚪ Duro' };
            const avisoC2   = c2k1s !== c2k
                ? `<small style="color:#f0c040"> (${pneuEmoji[c2k]} não cobre — usa ${pneuEmoji[c2k1s]})</small>`
                : '';
            const avisoFim2 = !viavel2s
                ? `<small style="color:#e57373"> ⚠️ ${pneuEmoji[c3k]} pode não aguentar</small>` : '';

            bloco3Html = `
            <div class="licao-bloco licao-eSe">
                <div class="licao-titulo">📋 Estratégia Ótima — análise desta pista</div>
                <p class="licao-insight" style="margin-bottom:.75rem">
                    Baseado no ritmo real nesta corrida (${totalVoltas} v · pit: ~${pitstopBase}s · vida útil estimada com gestão média):
                </p>

                <div class="licao-ese-estrategias">
                    <!-- 1 parada -->
                    <div class="licao-est-card ${melhorEst === '1 parada' ? 'licao-est-melhor' : ''}">
                        <div class="licao-est-titulo">1 parada ${melhorEst === '1 parada' ? '⭐ Melhor' : ''}</div>
                        <div class="licao-est-composto">
                            ${pneuEmoji[c1k]} V1–${pitLap1Valido}
                            <span class="licao-est-arr">→</span>
                            ${pneuEmoji[c2k1s]} V${pitLap1Valido + 1}–${totalVoltas}${avisoC2}
                        </div>
                        <div class="licao-est-vida">
                            Vida: ${pneuEmoji[c1k]} ~${vidaComp(c1k)}v · ${pneuEmoji[c2k1s]} ~${vidaComp(c2k1s)}v
                        </div>
                        <div class="licao-est-tempo">${formatLapTime(tempo1Para / totalVoltas)}<span>/v</span>
                            <small style="color:#888">≈ ${(tempo1Para / 60).toFixed(0)}min</small>
                        </div>
                        <div class="licao-est-delta" style="color:${tempo1Para <= tempo2Para ? '#44d88e' : '#f0c040'}">
                            ${tempo1Para <= tempo2Para ? '✓ mais rápido' : `+${diffEntre.toFixed(1)}s vs 2 paradas`}
                        </div>
                    </div>

                    <!-- 2 paradas -->
                    <div class="licao-est-card ${melhorEst === '2 paradas' ? 'licao-est-melhor' : ''}">
                        <div class="licao-est-titulo">2 paradas ${melhorEst === '2 paradas' ? '⭐ Melhor' : ''}</div>
                        <div class="licao-est-composto">
                            ${pneuEmoji[c1k]} V1–${fim1_2s}
                            <span class="licao-est-arr">→</span>
                            ${pneuEmoji[c2k]} V${fim1_2s + 1}–${fim2_2s}
                            <span class="licao-est-arr">→</span>
                            ${pneuEmoji[c3k]} V${fim2_2s + 1}–${totalVoltas}${avisoFim2}
                        </div>
                        <div class="licao-est-vida">
                            Vida: ${pneuEmoji[c1k]} ~${vidaComp(c1k)}v · ${pneuEmoji[c2k]} ~${vidaComp(c2k)}v · ${pneuEmoji[c3k]} ~${vidaComp(c3k)}v
                        </div>
                        <div class="licao-est-tempo">${formatLapTime(tempo2Para / totalVoltas)}<span>/v</span>
                            <small style="color:#888">≈ ${(tempo2Para / 60).toFixed(0)}min</small>
                        </div>
                        <div class="licao-est-delta" style="color:${tempo2Para <= tempo1Para ? '#44d88e' : '#f0c040'}">
                            ${tempo2Para <= tempo1Para ? '✓ mais rápido' : `+${diffEntre.toFixed(1)}s vs 1 parada`}
                        </div>
                    </div>

                    <!-- Sua estratégia -->
                    <div class="licao-est-card licao-est-jogador">
                        <div class="licao-est-titulo">Sua estratégia (${stintsJogador.length} stint${stintsJogador.length !== 1 ? 's' : ''})</div>
                        <div class="licao-est-composto">
                            ${stintsJogador.map((s, i) =>
                                `${i > 0 ? '<span class="licao-est-arr">→</span>' : ''} ${pneuEmoji[s.pneu] ?? s.pneu} V${s.inicio}–${s.fim}`
                            ).join('')}
                        </div>
                        <div class="licao-est-tempo">${formatLapTime(tempoJogador / totalVoltas)}<span>/v</span>
                            <small style="color:#888">≈ ${(tempoJogador / 60).toFixed(0)}min</small>
                        </div>
                        <div class="licao-est-delta" style="color:${corGanho}">
                            ${ganhoVsMelhor <= 1
                                ? '✅ Estratégia quase ótima!'
                                : `+${ganhoVsMelhor.toFixed(1)}s vs estratégia ideal`}
                        </div>
                    </div>
                </div>

                <p class="licao-insight" style="margin-top:.75rem">
                    ${ganhoVsMelhor > 15
                        ? `⚠️ Mudar para <strong>${melhorEst}</strong> poderia economizar ~${ganhoVsMelhor.toFixed(0)}s nesta pista.`
                        : ganhoVsMelhor > 5
                            ? `💡 <strong>${melhorEst === '1 parada' ? 'Uma parada' : 'Duas paradas'}</strong> seria ~${ganhoVsMelhor.toFixed(0)}s mais rápido. Considere na próxima visita.`
                            : `✅ Sua estratégia foi competitiva — diferença de apenas ${ganhoVsMelhor.toFixed(1)}s vs o ótimo calculado.`}
                </p>
            </div>`;
        }

        container.innerHTML = bloco1Html + bloco2Html + bloco3Html ||
            '<p style="color:#555;text-align:center;padding:1rem">Dados insuficientes para análise.</p>';
    }

    /** Gráfico: jogadores vs vencedor */
    function renderTelemVencedor(corrida) {
        if (telemChartVencedor) { telemChartVencedor.destroy(); telemChartVencedor = null; }

        const pilotosJogador = corrida.resultadoFinal.filter(p => p.isPlayer && p.lapData?.length > 0);
        const vencedor = corrida.resultadoFinal[0];
        const vencedorTemLapData = vencedor && !vencedor.isPlayer && vencedor.lapData?.length > 0;

        const todos = [...pilotosJogador];
        if (vencedorTemLapData) todos.unshift(vencedor);

        if (todos.length === 0) return;

        const maxLaps = Math.max(...todos.map(p => p.lapData.length));
        const labels = Array.from({length: maxLaps}, (_, i) => i + 1);
        const coresVencedor = ['#f0c040', '#e10600', '#00bcd4'];

        const pneuLabel = { macio: '🔴 Macio', medio: '🟡 Médio', duro: '⚪ Duro' };

        const datasets = todos.map((p, i) => {
            const cor = coresVencedor[i] || '#888';
            const isVencedor = i === 0 && vencedorTemLapData;
            return {
                label: p.piloto.nome + (isVencedor ? ' 🏆' : ''),
                data: p.lapData.map(d => d.lapTime === Infinity ? null : d.lapTime),
                borderColor: cor,
                backgroundColor: cor + '22',
                tension: 0.2,
                pointRadius: p.lapData.map(d => d.pitStop ? 8 : 2),
                pointStyle: p.lapData.map(d => d.pitStop ? 'triangle' : 'circle'),
                pointBackgroundColor: p.lapData.map(d => d.pitStop ? '#f0c040' : cor),
                spanGaps: true,
                borderDash: isVencedor ? [5, 3] : []
            };
        });

        const ctx = document.getElementById('telem-chart-vencedor').getContext('2d');
        telemChartVencedor = new Chart(ctx, {
            type: 'line',
            data: { labels, datasets },
            options: {
                responsive: true, maintainAspectRatio: true,
                plugins: {
                    legend: { labels: { color: '#ccc', font: { size: 11 } } },
                    tooltip: {
                        callbacks: {
                            label: function(c) {
                                const p = todos[c.datasetIndex];
                                const lap = p?.lapData?.[c.dataIndex];
                                let txt = `${c.dataset.label}: ${c.parsed.y ? formatLapTime(c.parsed.y) : 'DNF'}`;
                                if (lap) {
                                    txt += `  ${pneuLabel[lap.tire] || lap.tire}`;
                                    if (lap.pitStop) txt += '  🔧 PIT';
                                }
                                return txt;
                            }
                        }
                    }
                },
                scales: {
                    x: { ticks: { color: '#555' }, grid: { color: '#111125' } },
                    y: { ticks: { color: '#555', callback: v => formatLapTime(v) }, grid: { color: '#111125' } }
                }
            }
        });
    }

    /** Barras de stint horizontal estilo F1 */
    /**
     * Reconstrói os stints reais de um piloto a partir do lapData.
     * Retorna array de { inicio, fim, pneu } com voltas absolutas.
     * Fonte de verdade mais confiável que p.estrategia (que reflete apenas
     * os stops planejados restantes, não o histórico completo).
     */
    function stintsDoLapData(lapData) {
        if (!lapData || lapData.length === 0) return [];
        const stints = [];
        let inicioStint = lapData[0].lap;
        let pneuStint   = lapData[0].tire;

        lapData.forEach((d, i) => {
            const proximo = lapData[i + 1];
            // Cria fronteira de stint quando:
            // (1) pitStop:true — pit normal registrado no loop de simulação, OU
            // (2) tire muda na próxima volta sem pitStop — pit de Safety Car,
            //     que não gera entrada pitStop:true no lapData mas altera p.pneuAtual
            const scTireChange = !d.pitStop && proximo && proximo.tire !== pneuStint;
            if (d.pitStop || scTireChange) {
                stints.push({ inicio: inicioStint, fim: d.lap, pneu: pneuStint });
                inicioStint = proximo ? proximo.lap : d.lap + 1;
                pneuStint   = proximo ? proximo.tire : pneuStint;
            }
        });
        // Último stint (sem pit ao final)
        const ultimo = lapData[lapData.length - 1];
        stints.push({ inicio: inicioStint, fim: ultimo.lap, pneu: pneuStint });
        return stints;
    }

    function renderTelemStrategyMap(corrida) {
        const container = document.getElementById('telem-strategy-map');

        // Fonte primária: voltas reais do circuito (independe de quem tem lapData).
        // Fallback: máximo do lapData dos pilotos com dados (ex: player + top 3).
        // O default anterior de 60 causava barras erradas em corridas com < 60 voltas,
        // pois a IA sem lapData usava fim:60 mesmo numa corrida de 44 voltas.
        const pistaDaCorrida = calendarioCorridas.find(c => c.nome === corrida.nomePista);
        const totalVoltas = pistaDaCorrida?.voltas
            || corrida.resultadoFinal.reduce((max, p) => {
                const last = p.lapData?.at(-1)?.lap || 0;
                return Math.max(max, last);
            }, 0)
            || 60; // último recurso: corrida sem pista no calendário atual

        // Pega top 10 + pilotos do jogador
        const top10Ids = new Set(corrida.resultadoFinal.slice(0, 10).map(p => p.piloto.id));
        const pilotos = corrida.resultadoFinal.filter(p => top10Ids.has(p.piloto.id));

        const rows = pilotos.map(p => {
            const isPlayer = p.isPlayer;

            // Preferência: reconstrói do lapData (registro real da corrida).
            // Fallback: usa p.estrategia apenas para pilotos sem lapData (IA fora do top 3).
            let stints;
            if (p.lapData && p.lapData.length > 0) {
                stints = stintsDoLapData(p.lapData);
            } else {
                // Fallback — estratégia planejada (pode estar incompleta se paradas foram consumidas)
                stints = [];
                const est = p.estrategia || { pneuInicial: 'duro', paradas: [] };
                let voltaInicio = 1;
                let pneuCorrente = est.pneuInicial;
                const paradas = [...(est.paradas || [])].sort((a,b) => a.pararNaVolta - b.pararNaVolta);
                paradas.forEach(parada => {
                    stints.push({ inicio: voltaInicio, fim: parada.pararNaVolta - 1, pneu: pneuCorrente });
                    voltaInicio = parada.pararNaVolta;
                    pneuCorrente = parada.colocarPneu;
                });
                stints.push({ inicio: voltaInicio, fim: totalVoltas, pneu: pneuCorrente });
            }

            const segmentos = stints.map(s => {
                const largura = ((s.fim - s.inicio + 1) / totalVoltas * 100).toFixed(2);
                const voltas = s.fim - s.inicio + 1;
                return `<div class="telem-stint-seg tire-${s.pneu}" style="width:${largura}%"
                    title="${s.pneu} · ${voltas}v (${s.inicio}-${s.fim})">
                    ${voltas > 5 ? s.pneu.charAt(0).toUpperCase() : ''}
                </div>`;
            }).join('');

            return `<div class="telem-strat-row">
                <span class="telem-strat-name ${isPlayer ? 'player-driver' : ''}" title="${p.piloto.nome}">${p.piloto.nome}</span>
                <div class="telem-strat-bar-wrap">${segmentos}</div>
                <span class="telem-strat-paradas" title="Paradas">${p.paradas}x</span>
            </div>`;
        }).join('');

        container.innerHTML = `<div class="telem-strategy-map">${rows}</div>`;
    }

    /** Cards de análise de stints */
    function renderTelemStints(corrida) {
        const container = document.getElementById('telem-stints-analysis');
        const pilotos = corrida.resultadoFinal.filter(p => p.isPlayer && p.lapData?.length > 0);
        if (pilotos.length === 0) { container.innerHTML = '<p style="color:#555">Dados de stints não disponíveis.</p>'; return; }

        let melhorMediaGlobal = Infinity;
        const cards = [];

        pilotos.forEach((p, pilotoIdx) => {
            const corClasse = pilotoIdx === 0 ? 'p1' : 'p2';

            // Usa stintsDoLapData para obter {inicio, fim, pneu}
            // e mapeia para os laps correspondentes no lapData
            const stintRanges = stintsDoLapData(p.lapData);
            const stints = stintRanges.map(s => {
                const voltas = p.lapData.filter(d => d.lap >= s.inicio && d.lap <= s.fim);
                return { voltas, pneu: s.pneu };
            });

            stints.forEach((stint, i) => {
                const temposValidos = stint.voltas.map(d => d.lapTime).filter(t => t !== Infinity && t > 0);
                if (temposValidos.length === 0) return;
                const media = temposValidos.reduce((s, t) => s + t, 0) / temposValidos.length;
                const melhor = Math.min(...temposValidos);
                if (media < melhorMediaGlobal) melhorMediaGlobal = media;

                cards.push({ piloto: p.piloto.nome, corClasse, stintNum: i + 1, pneu: stint.pneu,
                    voltas: stint.voltas.length, media, melhor, isBest: false });
            });
        });

        // Marca o melhor stint
        cards.forEach(c => { c.isBest = Math.abs(c.media - melhorMediaGlobal) < 0.001; });

        container.innerHTML = `<div class="telem-stints-grid">${cards.map(c => `
            <div class="telem-stint-card ${c.isBest ? 'best-stint' : ''}">
                <div class="telem-stint-card-header">
                    <span class="telem-stint-driver ${c.corClasse}">${c.piloto}</span>
                    <span class="telem-stint-badge ${c.isBest ? 'gold' : ''}">Stint ${c.stintNum} ${c.isBest ? '⚡' : ''}</span>
                </div>
                <span class="tyre-indicator tyre-${c.pneu}" style="font-size:0.75rem">${c.pneu.charAt(0).toUpperCase()}</span>
                <div style="margin-top:0.4rem">
                    <div class="telem-stint-avg">${formatLapTime(c.media)}</div>
                    <div class="telem-stint-meta">⌀ por volta · ${c.voltas}v · melhor ${formatLapTime(c.melhor)}</div>
                </div>
            </div>`).join('')}
        </div>`;
    }

    /** Gráfico de evolução de posição */
    function renderTelemPosicao(corrida) {
        if (telemChartPosicao) { telemChartPosicao.destroy(); telemChartPosicao = null; }
        const pilotos = corrida.resultadoFinal.filter(p => p.isPlayer && p.lapData?.length > 0);
        const container = document.getElementById('telem-chart-posicao').parentElement;

        if (pilotos.length === 0) {
            container.innerHTML = '<p style="color:#555;text-align:center;padding:1.5rem">Dados de posição não disponíveis para esta corrida.</p>';
            return;
        }

        // Verifica se há dados de posição (só existe em corridas após a atualização)
        const temPosicao = pilotos.some(p => p.lapData.some(d => d.posicao != null));
        if (!temPosicao) {
            container.innerHTML = '<p style="color:#555;text-align:center;padding:1.5rem">Dados de evolução de posição não disponíveis para corridas anteriores à atualização do sistema.</p>';
            return;
        }

        const cores = ['#e10600', '#00bcd4'];
        const datasets = pilotos.map((p, i) => {
            const posData = p.lapData.map(d => d.posicao ?? null);
            return {
                label: p.piloto.nome,
                data: posData,
                borderColor: cores[i],
                backgroundColor: cores[i] + '22',
                tension: 0.2, pointRadius: 2, spanGaps: true
            };
        });

        const maxLaps = Math.max(...pilotos.map(p => p.lapData.length));
        const ctx = document.getElementById('telem-chart-posicao').getContext('2d');
        telemChartPosicao = new Chart(ctx, {
            type: 'line',
            data: { labels: Array.from({length: maxLaps}, (_, i) => i+1), datasets },
            options: {
                responsive: true, maintainAspectRatio: true,
                plugins: { legend: { labels: { color: '#ccc' } } },
                scales: {
                    x: { ticks: { color: '#555' }, grid: { color: '#111125' } },
                    y: {
                        reverse: true,
                        min: 1,
                        ticks: { color: '#555', stepSize: 1, callback: v => `P${v}` },
                        grid: { color: '#111125' },
                        title: { display: true, text: 'Posição', color: '#666' }
                    }
                }
            }
        });
    }


    // ---- 4. RENDERIZADORES DA UI ---------------
    function atualizarNotificacoes() {
        if (!gameState.notificacoes) gameState.notificacoes = { pilotos: false, marketing: false, instalacoes: false };

        // --- Calcular estado de cada aba ---
        const temProjetoConcluido = gameState.projetosEmAndamento.some(p => p.status === 'concluido');
        const temOfertaPatrocinio = gameState.patrocinio.ofertas.length > 0;
        const notifEscuderia = temProjetoConcluido || temOfertaPatrocinio;

        // Instalações: usa flag — acende 1× por corrida (em finalizarCorrida), apaga ao clicar na aba
        const notifInstalacoes = !!gameState.notificacoes.instalacoes;

        const notifPilotos  = !!gameState.notificacoes.pilotos;
        const notifMarketing = !!gameState.notificacoes.marketing;

        // --- Aplicar/remover badges nas abas ---
        const abas = {
            escuderia:   notifEscuderia,
            instalacoes: notifInstalacoes,
            pilotos:     notifPilotos,
            marketing:   notifMarketing,
        };

        Object.entries(abas).forEach(([tabName, ativo]) => {
            const btn = document.querySelector(`.tab-btn[data-tab="${tabName}"]`);
            if (!btn) return;
            const jaTemBadge = btn.querySelector('.notif-dot');
            if (ativo && !jaTemBadge) {
                const dot = document.createElement('span');
                dot.className = 'notif-dot';
                btn.appendChild(dot);
            } else if (!ativo && jaTemBadge) {
                jaTemBadge.remove();
            }
        });
    }

    const updateUI = () => {
        console.log("[DEBUG] updateUI foi chamada.");
        renderEscuderia();
        renderGaragem();
        renderAbaPilotos();
        renderAbaAutodromo();
        renderAbaGaleria();
        renderAbaCorrida();
        renderAbaCampeonato();
        renderAbaNegociacoes();
        renderAbaPersonalizacao();
        renderAbaMarketing();
        renderAbaInstalacoes();
        renderAbaTelemetria();
        atualizarNotificacoes();
    };


    /****************    5.0 eventos listener ********************/

    // Watchlist: toggle pelo ícone 👁️ na tabela ou pelo botão ✕ no card
    document.body.addEventListener('click', (e) => {
        const target = e.target;
        const action = target.dataset.action;

        // Toggle monitoramento pelo ícone 👁️ na tabela
        if (action === 'toggle-watch') {
            toggleMonitorarPiloto(target.dataset.pilotoId);
            return;
        }
        // Botões P1/P2 no card IA
        if (action === 'wl-ref') {
            watchlistRefPiloto = parseInt(target.dataset.ref);
            renderWatchlistCard();
            return;
        }
        // Remover monitoramento pelo botão ✕ no card
        if (target.matches('.watchlist-remove-btn')) {
            toggleMonitorarPiloto(target.dataset.pilotoId);
            return;
        }

        if (target.matches('.tab-btn')) {
            const tabName = target.dataset.tab;

            // 🔒 Bloqueia TODAS as abas enquanto a corrida estiver ativa
            if (animacaoAtiva) {
                return;
            }

            document.querySelectorAll('.tab-btn, .tab-pane').forEach(el => el.classList.remove('active'));
            target.classList.add('active');
            const abaAtiva = document.getElementById(tabName);
            if (abaAtiva) abaAtiva.classList.add('active');

            // Limpar notificação da aba ao clicar
            if (!gameState.notificacoes) gameState.notificacoes = {};
            if (tabName === 'pilotos')     gameState.notificacoes.pilotos = false;
            if (tabName === 'marketing')   gameState.notificacoes.marketing = false;
            if (tabName === 'instalacoes') gameState.notificacoes.instalacoes = false;
            const dot = target.querySelector('.notif-dot');
            if (dot) dot.remove();

            switch (tabName) {
                case 'escuderia': renderEscuderia(); break;
                case 'instalacoes': renderAbaInstalacoes(); break;
                case 'pilotos': renderAbaPilotos(); break;
                case 'carro': renderGaragem(); break;
                case 'corrida': renderAbaCorrida(); break;
                case 'campeonato': renderAbaCampeonato(); break;
                case 'negociacoes': renderAbaNegociacoes(); break;
                case 'autodromo': renderAbaAutodromo(); break;
                case 'galeria': renderAbaGaleria(); break;
                case 'personalizacao': renderAbaPersonalizacao(); break;
                case 'marketing': renderAbaMarketing(); break;
                case 'telemetria': renderAbaTelemetria(); break;
                case 'academia':   renderAbaAcademia();   break;
            }
            return;
        }

        if (target.matches('.modal-close-btn') || target.id === 'btn-close-telemetry' || target.id === 'part-selector-modal' || target.id === 'project-modal' || target.id === 'telemetry-modal') {
            closePartSelectorModal();
            closeTelemetryModal();
            document.getElementById('project-modal').classList.add('hidden');
            return;
        }

        if (action === 'contratar-piloto') contratarPiloto(parseInt(target.dataset.pilotoId));
        else if (action === 'dispensar-piloto') dispensarPiloto(parseInt(target.dataset.pilotoId));
        else if (action === 'promover-piloto') promoverPilotoReserva(parseInt(target.dataset.pilotoId));
        else if (target.matches('#btn-salvar-nome')) {
            mudarNomeEquipe();
        }
        else if (target.matches('#btn-falencia')) declararFalencia();
        else if (target.matches('#btn-venda-massa-inventario')) abrirModalVendaMassa('inventario');
        else if (target.matches('#btn-venda-massa-projetos')) abrirModalVendaMassa('projetos');
        else if (target.matches('.btn-contratar')) {
            const esp = especialistasDisponiveis.find(e => e.id === parseInt(target.dataset.id));
            if (gameState.escuderia.dinheiro >= esp.salario) {
                gameState.escuderia.dinheiro -= esp.salario;
                gameState.escuderia.especialistas.push(esp);
                updateUI(); saveGame();
            } else { alert("Dinheiro insuficiente."); }
        }
        else if (target.matches('.btn-demitir')) {
            gameState.escuderia.especialistas = gameState.escuderia.especialistas.filter(esp => esp.id !== parseInt(target.dataset.id));
            updateUI(); saveGame();
        }
        else if (action === 'melhorar-instalacao') melhorarInstalacao(target.dataset.instalacaoId);
        else if (action === 'desbloquear-pd') desbloquearCentroPD();
        else if (action === 'iniciar-projeto-completo') iniciarProjetoCompleto();
        else if (target.closest('.seletor-item')) {
            const seletor = target.closest('.seletor-item');
            gameState.escuderia.emblema[seletor.dataset.tipo] = seletor.dataset.valor;
            atualizarPreviewEmblema();
        }
        else if (target.id === 'btn-trocar-camada') {
            gameState.escuderia.emblema.iconeNaFrente = !gameState.escuderia.emblema.iconeNaFrente;
            atualizarPreviewEmblema();
        }
        else if (target.id === 'btn-fundo-transparente') {
            gameState.escuderia.emblema.corFundo = 'transparent';
            atualizarPreviewEmblema();
            saveGame();
        }
        else if (target.id === 'btn-salvar-identidade') { salvarIdentidadeEquipe(); }
        else if (target.matches('#btn-auto-equip')) autoEquiparMelhoresPecas();
        else if (target.matches('.car-selector-btn')) {
            garagemState.carroSelecionadoIndex = parseInt(target.dataset.carIndex);
            renderGaragem();
        }
        else if (target.matches('.btn-trocar-peca')) openPartSelectorModal(target.dataset.slotKey);
        else if (target.closest('#modal-parts-list .peca-card')) {
            const card = target.closest('.peca-card');
            equiparPeca(parseFloat(card.dataset.instanceId), card.dataset.slotKey);
        }
        else if (target.matches('.btn-vender-peca[data-instance-id]')) venderPecaInventario(parseFloat(target.dataset.instanceId));
        else if (target.matches('.btn-comprar')) comprarPeca(parseFloat(target.dataset.instanceId));
        else if (target.matches('#btn-atualizar-mercado')) {
            if (gameState.escuderia.dinheiro >= 30000) {
                gameState.escuderia.dinheiro -= 30000;
                const olheiroContratado = gameState.escuderia.especialistas.find(e => e.tipo === "Olheiro");
                const fatorFinal = (gameState.campeonato.ano - 2025) + (olheiroContratado ? olheiroContratado.nivel * 2 : 0);
                gerarMercado(fatorFinal);
                renderAbaNegociacoes(); renderEscuderia(); saveGame();
            } else { alert("Dinheiro insuficiente para atualizar o mercado!"); }
        }
        else if (target.matches('.sortable-header')) {
            const newColumn = target.dataset.sort;
            if (sortState.column === newColumn) {
                sortState.direction = sortState.direction === 'asc' ? 'desc' : 'asc';
            } else {
                sortState.column = newColumn;
                sortState.direction = 'asc';
            }
            renderAbaNegociacoes();
        }
        else if (target.matches('.btn-projeto')) {
            const especialistaId = parseInt(target.dataset.especialistaId);
            const especialista = especialistasDisponiveis.find(e => e.id === especialistaId);
            projetoAtual = { especialistaId };
            document.getElementById('project-modal-title').textContent = `Novo Projeto com ${especialista.nome}`;
            const partSelect = document.getElementById('project-part-type');
            const tiposPossiveis = especialistaHabilidades[especialista.tipo] || [];
            partSelect.innerHTML = tiposPossiveis.map(tipo => `<option value="${tipo}">${tipo}</option>`).join('');
            document.getElementById('btn-confirmar-projeto').disabled = tiposPossiveis.length === 0;
            if (tiposPossiveis.length === 0) partSelect.innerHTML = `<option>Este especialista não desenvolve peças.</option>`;
            atualizarSumarioProjeto();
            document.getElementById('project-modal').classList.remove('hidden');
        }
        else if (target.matches('#btn-confirmar-projeto')) {
            iniciarNovoProjeto(projetoAtual.especialistaId, document.getElementById('project-part-type').value, parseInt(document.getElementById('project-duration').value));
            document.getElementById('project-modal').classList.add('hidden');
        }
        else if (target.matches('.btn-ficar-com-peca')) {
            const projetoId = parseFloat(target.dataset.projectId);
            const projeto = gameState.projetosEmAndamento.find(p => p.id === projetoId);
            if (!projeto) return;
            const pecaFinal = projeto.pecaConcluida;
            if (!pecaFinal) { alert("Erro ao obter a peça final."); return; }
            const custoProducao = Math.floor(calcularPrecoPeca(pecaFinal) * 0.15);
            if (confirm(`A produção final desta peça custará R$ ${custoProducao.toLocaleString('pt-BR')}. Deseja continuar?`)) {
                if (gameState.escuderia.dinheiro >= custoProducao) {
                    gameState.escuderia.dinheiro -= custoProducao;
                    gameState.todasAsPecas.push(pecaFinal);
                    gameState.projetosEmAndamento = gameState.projetosEmAndamento.filter(p => p.id !== projetoId);
                    alert("Peça produzida e adicionada ao inventário!");
                    updateUI(); saveGame();
                } else { alert("Dinheiro insuficiente para a produção!"); }
            }
        }
        else if (target.matches('.btn-vender-peca[data-project-id]')) {
            const projetoId = parseFloat(target.dataset.projectId);
            const projeto = gameState.projetosEmAndamento.find(p => p.id === projetoId);
            if (projeto) {
                const pecaVirtual = projeto.pecaConcluida;
                const valorVenda = pecaVirtual ? Math.floor(calcularPrecoPeca(pecaVirtual) * 0.7) : 0;
                if (confirm(`Colocar a peça no mercado por aprox. R$ ${valorVenda.toLocaleString('pt-BR')}?\n\nVocê será notificado quando for vendida.`)) {
                    projeto.status = 'a_venda';
                    renderProjetos(); saveGame();
                }
            }
        }
        else if (action === 'desbloquear-marketing') desbloquearItemMarketing(target.dataset.itemNome);
        else if (action === 'produzir-marketing') {
            const nomeItem = target.dataset.itemNome;
            const inputQtd = document.getElementById(`qtd-${nomeItem}`);
            if (inputQtd && inputQtd.value > 0) {
                produzirItemMarketing(nomeItem, inputQtd.value);
                inputQtd.value = '';
            } else { alert("Por favor, insira uma quantidade válida."); }
        }
        else if (action === 'liquidar-estoque') liquidarEstoqueMarketing(target.dataset.itemNome);
        else if (action === 'aumentar-icone' || action === 'diminuir-icone') {
            const nomeItem = target.dataset.itemNome;
            const itemJogo = gameState.marketing[nomeItem];
            const emblemaContainer = document.getElementById(`emblema-container-${nomeItem}`);
            if (!emblemaContainer || !itemJogo) return;
            let currentWidth = itemJogo.tamanhoIcone.width;
            let currentHeight = itemJogo.tamanhoIcone.height;
            const scaleFactor = 5;
            if (action === 'aumentar-icone') {
                currentWidth = Math.min(100, currentWidth + scaleFactor);
                currentHeight = Math.min(100, currentHeight + scaleFactor);
            } else {
                currentWidth = Math.max(10, currentWidth - scaleFactor);
                currentHeight = Math.max(10, currentHeight - scaleFactor);
            }
            itemJogo.tamanhoIcone = { width: currentWidth, height: currentHeight };
            emblemaContainer.style.width = `${currentWidth}%`;
            emblemaContainer.style.height = `${currentHeight}%`;
            saveGame();
        }
        else if (target.matches('.btn-aceitar-patrocinio')) aceitarOfertaPatrocinio(parseInt(target.dataset.ofertaId));
        else if (action === 'aceitar-encomenda') aceitarEncomendaExterna(parseFloat(target.dataset.encomendaId));
        else if (action === 'recusar-encomenda') recusarEncomendaExterna(parseFloat(target.dataset.encomendaId));
        else if (action === 'fechar-sc-resumo') {
            if (raceData) delete raceData.ultimoSCResumo;
            renderEstrategiaUI();
        }
        else if (action === 'sc-opcao') {
            const carroIndex = parseInt(target.dataset.carIndex);
            const opcao = target.dataset.opcao;
            const carro = gameState.carros[carroIndex];
            if (!carro) return;

            const ctx = raceData.scContexto?.[carro.pilotoId] || {};
            carro._scDecisao = opcao;

            // Abre sempre com paradas vazias — jogador monta a estratégia do zero
            if (opcao === 'manter-planejar') {
                carro.estrategia = { pneuInicial: ctx.pneuAtual, paradas: [] };
            } else if (opcao === 'trocar-planejar') {
                const diferenteParaTrocar = ['duro','medio','macio'].find(c => c !== ctx.pneuAtual) || 'medio';
                carro.estrategia = { pneuInicial: diferenteParaTrocar, paradas: [] };
            } else if (opcao === 'manter-final') {
                carro.estrategia = { pneuInicial: ctx.pneuAtual, paradas: [] };
            } else if (opcao === 'trocar-final') {
                // Pré-seleciona um composto diferente do atual
                const diferente = ['duro','medio','macio'].find(c => c !== ctx.pneuAtual) || 'medio';
                carro.estrategia = { pneuInicial: diferente, paradas: [] };
            }

            const voltasRestantes = raceData.totalVoltas - raceData.voltaAtual;
            renderEstrategiaModalSC(voltasRestantes);
        }
        else if (action === 'abrir-telemetria') {
            const raceIndex = parseInt(target.dataset.raceIndex);
            openTelemetryModal(raceIndex);
        }
        else if (target.id === 'btn-comprar-telemetria-premium') {
            if (telemRaceIndex === null) return;
            const corrida = gameState.campeonato.resultadosCorridas[telemRaceIndex];
            if (!corrida) return;
            if (gameState.escuderia.dinheiro < 25000) {
                alert('Saldo insuficiente! Necessário R$ 25.000.');
                return;
            }
            if (confirm('Desbloquear Análise Completa de Telemetria por R$ 25.000?')) {
                gameState.escuderia.dinheiro -= 25000;
                corrida.premiumDesbloqueado = true;
                document.getElementById('telem-premium-lock').classList.add('hidden');
                document.getElementById('telem-premium-content').classList.remove('hidden');
                renderTelemPremium(corrida);
                renderEscuderia();
                saveGame();
            }
        }
        else if (target.matches('[data-telem-tab]')) {
            const tab = target.dataset.telemTab;
            document.querySelectorAll('.telem-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.telem-panel').forEach(p => p.classList.remove('active'));
            target.classList.add('active');
            document.getElementById(`telem-panel-${tab}`).classList.add('active');
        }
        else if (target.matches('.btn-mode')) {
            if (!animacaoAtiva) return;
            const carIndex = parseInt(target.dataset.carIndex);
            const mode = target.dataset.mode;
            const pilotoId = gameState.carros[carIndex].pilotoId;
            const participante = raceData.participantes.find(p => p.piloto.id === pilotoId);
            if (participante) {
                participante.modoAgressividade = mode;
                renderEstrategiaUI();
            }
        }
        else if (target.matches('#btn-corrida-real') || target.matches('#btn-corrida-rapida')) {
            const carrosDoJogador = gameState.carros.filter(c => c.pilotoId !== null);
            if (carrosDoJogador.length < 2) { alert("Você precisa ter 2 pilotos contratados para iniciar uma corrida!"); return; }
            if (!isEstrategiaValida(carrosDoJogador[0].estrategia) || !isEstrategiaValida(carrosDoJogador[1].estrategia)) {
                const erros1 = getErrosEstrategia(carrosDoJogador[0].estrategia);
                const erros2 = getErrosEstrategia(carrosDoJogador[1].estrategia);
                let mensagem = '🚫 Estratégia Inválida!\n\n';
                if (erros1.length > 0) mensagem += `Carro 1:\n• ${erros1.join('\n• ')}\n\n`;
                if (erros2.length > 0) mensagem += `Carro 2:\n• ${erros2.join('\n• ')}`;
                alert(mensagem.trim());
                return;
            }
            if (!carrosDoJogador.every(carro => Object.values(carro.pecas).every(peca => peca !== null))) { alert("Ambos os carros precisam ter todas as peças equipadas!"); return; }
            target.disabled = true;
            document.getElementById(target.id === 'btn-corrida-real' ? 'btn-corrida-rapida' : 'btn-corrida-real').disabled = true;
            iniciarSequenciaDeLargada(target.id === 'btn-corrida-real' ? 'real' : 'rapido');
        }
        else if (target.matches('#btn-fechar-resultados')) {
            const isSeasonOver = gameState.campeonato.corridaAtualIndex >= calendarioCorridas.length;
            if (isSeasonOver) {
                exibirModalFimDeTemporada();
            } else {
                updateUI();
            }
        }
        else if (target.matches('#btn-fechar-season-modal')) {
            document.getElementById('season-end-modal').classList.add('hidden');
            // Navega para aba campeonato para o jogador aproveitar a pré-temporada
            document.querySelectorAll('.tab-btn, .tab-pane').forEach(el => el.classList.remove('active'));
            const campTabBtn = document.querySelector('.tab-btn[data-tab="campeonato"]');
            const campTabPane = document.getElementById('campeonato');
            if (campTabBtn) campTabBtn.classList.add('active');
            if (campTabPane) campTabPane.classList.add('active');
            updateUI();
        }
        else if (target.matches('#btn-encerrar-ferias')) {
            // Avança 5 ciclos de projetos (equivalente a 5 corridas de P&D)
            const projetosConcluidos = [];
            for (let ciclo = 0; ciclo < 5; ciclo++) {
                gameState.projetosEmAndamento.forEach(projeto => {
                    if (projeto.status === 'em_andamento') {
                        projeto.duracaoRestante--;
                        if (projeto.duracaoRestante <= 0) {
                            projeto.status = 'concluido';
                            projeto.pecaConcluida = criarPecaDeProjeto(projeto);
                            if (projeto.pecaConcluida && !projetosConcluidos.includes(projeto.pecaConcluida.nome)) {
                                projetosConcluidos.push(projeto.pecaConcluida.nome);
                            }
                        }
                    }
                });
            }

            // Desconta salários do período (1 ciclo — já é um custo considerável)
            processarPagamentoDeSalarios();

            // Marca férias como realizadas nesta temporada
            gameState.campeonato.feriaVeraoFeita = true;
            saveGame();
            updateUI();
        }
        else if (target.matches('#btn-confirmar-sc')) {
            fecharModalSafetyCar();
        }
        else if (target.matches('#btn-sc-auto')) {
            const voltasRestantes = raceData.totalVoltas - raceData.voltaAtual;
            aplicarEstrategiaAutoPosSC(voltasRestantes);
            renderEstrategiaModalSC(voltasRestantes);
        }
        else if (target.matches('#btn-iniciar-nova-temporada')) {
            processarFimDeTemporada();
            saveGame();
            updateUI();
        }
        else if (target.matches('#btn-toggle-pirelli')) {
            const stratContainer = document.getElementById('strategy-container');
            const guiaContainer  = document.getElementById('pirelli-guide-container');
            const estaAberto = stratContainer.dataset.guiaPirelliAberto === 'true';
            const novoEstado = !estaAberto;
            stratContainer.dataset.guiaPirelliAberto = novoEstado;
            if (guiaContainer) {
                if (novoEstado) {
                    guiaContainer.innerHTML = renderGuiaPirelliHTML();
                    guiaContainer.style.display = 'block';
                } else {
                    guiaContainer.style.display = 'none';
                }
            }
        }
        else if (target.matches('.btn-add-stint')) {
            const carroIndex = parseInt(target.dataset.carIndex);
            const carro = gameState.carros[carroIndex];
            const voltaBase = carro.estrategia.paradas.length > 0 ? carro.estrategia.paradas.at(-1).pararNaVolta : (raceData?.voltaAtual || 0);
            const voltaMax  = raceData ? raceData.totalVoltas - 1 : 999;
            const novavolta = Math.min(voltaBase + 15, voltaMax);
            carro.estrategia.paradas.push({ pararNaVolta: novavolta, colocarPneu: 'duro' });
            if (raceData.safetyCarAtivo) {
                const voltasRestantes = raceData.totalVoltas - raceData.voltaAtual;
                renderEstrategiaModalSC(voltasRestantes);
            } else {
                renderEstrategiaUI();
                saveGame();
            }
        }
        else if (target.matches('.btn-remover-stint')) {
            const carroIndex = parseInt(target.dataset.carIndex);
            const paradaIndex = parseInt(target.dataset.paradaIndex);
            gameState.carros[carroIndex].estrategia.paradas.splice(paradaIndex, 1);
            if (raceData.safetyCarAtivo) {
                const voltasRestantes = raceData.totalVoltas - raceData.voltaAtual;
                renderEstrategiaModalSC(voltasRestantes);
            } else {
                renderEstrategiaUI();
                saveGame();
            }
        }
    });

    document.body.addEventListener('change', (e) => {
        const target = e.target;
        // watchlist-select removido (card novo não usa select)
        if (target.matches('.pneu-select-inicial, .pneu-select-parada')) {
            const carroIndex = parseInt(target.dataset.carIndex);
            if (isNaN(carroIndex)) return;
            const paradaIndex = target.dataset.paradaIndex;
            if (paradaIndex) {
                gameState.carros[carroIndex].estrategia.paradas[paradaIndex].colocarPneu = target.value;
            } else {
                gameState.carros[carroIndex].estrategia.pneuInicial = target.value;
            }
            if (raceData.safetyCarAtivo) {
                const voltasRestantes = raceData.totalVoltas - raceData.voltaAtual;
                renderEstrategiaModalSC(voltasRestantes);
            } else {
                renderEstrategiaUI();
                saveGame();
            }
        } else if (target.matches('#filtro-tipo-peca')) {
            renderAbaNegociacoes();
        } else if (target.matches('#project-part-type, #project-duration')) {
            atualizarSumarioProjeto();
        }if (target.dataset.action === 'calcular-custo-pd') {
            const duracao = parseInt(target.value);
            const custo = calcularCustoProjetoCompleto(duracao);
            const display = document.getElementById('pd-custo-total');
            if (display) {
                if (custo < 0) {
                    display.textContent = "Faltam especialistas";
                } else {
                    display.textContent = `Custo Total: R$ ${custo.toLocaleString('pt-BR')}`;
                }
            }
        }
    });

    document.body.addEventListener('input', (e) => {
        const target = e.target;
        if (target.matches('.volta-input')) {
            const carroIndex = parseInt(target.dataset.carIndex);
            const paradaIndex = parseInt(target.dataset.paradaIndex);
            if (isNaN(carroIndex) || isNaN(paradaIndex)) return;
            gameState.carros[carroIndex].estrategia.paradas[paradaIndex].pararNaVolta = parseInt(target.value) || 0;
            saveGame();
        } else if (target.matches('#filtro-nivel-min')) {
            renderAbaNegociacoes();
        } else if (target.id === 'cor-fundo') {
            gameState.escuderia.emblema.corFundo = target.value;
            atualizarPreviewEmblema();
        } else if (target.id === 'cor-forma') {
            gameState.escuderia.emblema.corForma = target.value;
            atualizarPreviewEmblema();
        } else if (target.id === 'cor-icone') {
            gameState.escuderia.emblema.corIcone = target.value;
            atualizarPreviewEmblema();
        } else if (target.id === 'escala-icone') {
            const novoValor = e.target.value;
            const novaEscala = novoValor / 100;
            gameState.escuderia.emblema.escalaIcone = novaEscala;
            atualizarPreviewEmblema();
        }
        else if (target.matches('[data-action="definir-preco"]')) {
            definirPrecoVendaMarketing(target.dataset.itemNome, target.value);
            // Atualiza rosto e label em tempo real
            const nomeItem = target.dataset.itemNome;
            const card = target.closest('.marketing-item-card');
            if (card) {
                const { rosto, label, cor } = calcularRostoPreco(nomeItem);
                const rostoEl = card.querySelector('.mkt-rosto');
                const labelEl = card.querySelector('.mkt-label-preco');
                if (rostoEl) rostoEl.textContent = rosto;
                if (labelEl) { labelEl.textContent = label; labelEl.style.color = cor || '#888'; }
                // Atualiza demanda estimada
                const TAXAS_DEMANDA = { 'Chaveiro': 0.025, 'Bonés': 0.010, 'Camisa': 0.006, 'Carro em miniatura': 0.004, 'Anel com joia': 0.0008, 'Combo Presentes': 0.0015 };
                const taxa = TAXAS_DEMANDA[nomeItem] || 0.005;
                const { mod: modPreco } = calcularRostoPreco(nomeItem);
                const demandaEl = card.querySelector('.mkt-demanda-val');
                if (demandaEl) demandaEl.textContent = `~${Math.round((gameState.torcedores || 0) * taxa * modPreco).toLocaleString('pt-BR')} un.`;
            }
        }
        else if (target.matches('[data-action="calcular-custo"]')) {
            const nomeItem = target.dataset.itemNome;
            const displayCusto = document.getElementById(`custo-total-${nomeItem}`);
            if (!displayCusto) return;
            const quantidade = parseInt(target.value) || 0;
            const itemCatalogo = catalogoMarketing[nomeItem];
            if (quantidade > 0) {
                const custoTotal = quantidade * itemCatalogo.custo_producao;
                displayCusto.textContent = `Custo Total: R$ ${custoTotal.toLocaleString('pt-BR')}`;
            } else {
                displayCusto.textContent = 'Custo Total: R$ 0';
            }
        }
    });

    let currentDraggable = null;
    let offsetX, offsetY;

    document.body.addEventListener('mousedown', (e) => {
        const draggableTarget = e.target.closest('.draggable');
        if (draggableTarget) {
            e.preventDefault();
            currentDraggable = draggableTarget;
            const rect = currentDraggable.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            currentDraggable.style.cursor = 'grabbing';
        }
    });

    document.body.addEventListener('mousemove', (e) => {
        if (!currentDraggable) return;
        e.preventDefault();
        const containerRect = currentDraggable.parentElement.getBoundingClientRect();
        let newX = e.clientX - offsetX - containerRect.left;
        let newY = e.clientY - offsetY - containerRect.top;
        newX = Math.max(0, Math.min(newX, containerRect.width - currentDraggable.offsetWidth));
        newY = Math.max(0, Math.min(newY, containerRect.height - currentDraggable.offsetHeight));
        currentDraggable.style.left = `${(newX / containerRect.width) * 100}%`;
        currentDraggable.style.top = `${(newY / containerRect.height) * 100}%`;
    });

    document.body.addEventListener('mouseup', (e) => {
        if (currentDraggable) {
            currentDraggable.style.cursor = 'grab';
            const nomeItem = currentDraggable.id.replace('emblema-container-', '');
            const itemJogo = gameState.marketing[nomeItem];
            if (itemJogo) {
                itemJogo.posicaoIcone = {
                    top: parseFloat(currentDraggable.style.top),
                    left: parseFloat(currentDraggable.style.left)
                };
                saveGame();
            }
            currentDraggable = null;
        }
    });

    // --- 6. INICIALIZAÇÃO ---
    document.addEventListener('academia:desbloquear', () => desbloquearAcademia());
    document.addEventListener('academia:recrutar',    () => recrutarJunior());
    document.addEventListener('academia:dispensar',   e  => dispensarJunior(e.detail));
    document.addEventListener('academia:promover',    e  => promoverJuniorParaElenco(e.detail));
    loadGame();
    updateUI();
});

// Funções globais da Academia (necessário para onclick inline nos cards)
function desbloquearAcademiaGlobal() {
    document.dispatchEvent(new CustomEvent('academia:desbloquear'));
}
function recrutarJuniorGlobal() {
    document.dispatchEvent(new CustomEvent('academia:recrutar'));
}
function dispensarJuniorGlobal(id) {
    document.dispatchEvent(new CustomEvent('academia:dispensar', { detail: id }));
}
function promoverJuniorGlobal(id) {
    document.dispatchEvent(new CustomEvent('academia:promover', { detail: id }));
}