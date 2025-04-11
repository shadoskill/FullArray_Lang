export const LangFr = {
    fallbackError:{
        line_1: "⚠️ Quelque chose s'est mal passé ⚠️",
        line_2: "Si vous voyez cette erreur, le HUD a rencontré une erreur critique et se rechargera dans 5 secondes.",
        line_3: "Si vous pouvez charger le HUD de façon externe, le problème est probablement dû à un viewer obsolète.",
        line_4: "Si vous ne pouvez pas charger le HUD de façon externe, veuillez créer un ticket de support sur notre Discord.",
    },
    modules:{
        profile:     "Profil",
        outfit:      "Tenue",
        accessories: "Accessoires",
        hair:        "Cheveux",
        shoe:        "Chaussures",
        relay:       "Relais",
        autoGroup:   "Groupe Auto",
    },
    misc:{
        settings: "Paramètres",
        customAccessLevel: "Niveau d'accès personnalisé",
        delete: "Supprimer ce !~MODULE~! ?",
        deleteText: "Êtes-vous sûr de vouloir supprimer ce !~MODULE~! : !~NAME~! ?",
        isAdult: "Ce !~MODULE~! est-il adulte ?",
        chatCommands: "Commandes de chat",
        chatCommandsChannel: "Canal...",
        chatCommandsCommand: "Commande...",
        moduleName: "Nom du !~MODULE~!...",
        moduleImage: "Image du !~MODULE~!...",
        moduleGroup: "Groupe du !~MODULE~!...",
        tooltip:{
            customAccessLevel: "Définit un niveau d'accès qui remplacera le niveau d'accès défini dans le menu des permissions.",
            name:      "Le nom de ce !~MODULE~!.",
            img:       "L'UUID ou l'URL de l'image de ce !~MODULE~!.",
            imgSelect: "Sélectionnez un fichier image depuis votre disque pour ce Profil.<br>png, jpg, webp, etc...",
            isAdult:   "Si le Profil est adulte, utilisé avec la fonction PG lors de la téléportation.",
            delete:    "Supprime ce !~MODULE~! et tous ses liens, cette action est irréversible.",
        },
        states:{
            outerwear: "Vêtements extérieurs",
            underwear: "Sous-vêtements",
            nude:      "Nu",
        },
        slots:{
            head:      "Tête",
            torso:     "Torse",
            arms:      "Bras",
            hands:     "Mains",
            legs:      "Jambes",
            feet:      "Pieds", 
            waist:     "Taille",
            crotch:    "Entrejambe",
            tail:      "Queue",
            wings:     "Ailes",
            ears:      "Oreilles",
        },
        effects:{
            rip:       "Déchirer",
            steal:     "Voler",
            throw:     "Lancer",
        }
    },
    cardActive:{
        id:     "ID",
        reload: "Recharger ce !~MODULE~!",
        detach: "Détacher ce !~MODULE~!",
        edit:   "Modifier ce !~MODULE~!",
        create: "Créer un nouveau !~MODULE~!",
        tooltip:{
            reload: "Recharge le !~MODULE~!.<br>Cela détachera et rattachera le dossier du !~MODULE~!.",
            detach: "Détache le dossier du !~MODULE~!.<br>D'autres modules peuvent également être désactivés.",
            edit:   "Modifie les paramètres de ce !~MODULE~!.",
        }
    },
    popups:{
        create:{
            errorName:       "Le nom ne doit pas être vide !",
            newPrefix:       "Nouveau préfixe",
            prefix:          "Préfixe...",
            name:            "Nom...",
            image:           "Image...",
            create:          "Créer",
            slurl:           "Slurl...",
            folderTemplate: "Modèle de dossier",
        }
    },
    home:{
        catagories:{
            tempHuds: "HUDs temporaires",
            interactDoll: "Poupée interactive",
        },
        tooltip:{
            doll: {
                outerwear: "Définit l'emplacement !~SLOT~! de votre Tenue à l'état Vêtements extérieurs.<br><br>Commande: @!~STATE~! !~SLOT~!",
                underwear: "Définit l'emplacement !~SLOT~! de votre Tenue à l'état Sous-vêtements.<br><br>Commande: @!~STATE~! !~SLOT~!",
                nude:      "Définit l'emplacement !~SLOT~! de votre Tenue à l'état Nu.<br><br>Commande: @!~STATE~! !~SLOT~!",
                rip:       "Déchire l'emplacement !~SLOT~! de votre Tenue.<br>Vous devrez utiliser le réparateur de vêtements pour le réparer.<br><br>Commande: @Set Outfit Effect !~SLOT~! Rip",
                steal:     "Vole l'emplacement !~SLOT~! de votre Tenue.<br>Vous devrez utiliser le réparateur de vêtements pour le réparer si vous ne bousculez pas l'avatar qui a volé votre Tenue.<br><br>Commande: @Set Outfit Effect !~SLOT~! Steal",  
                throw:     "Jette l'emplacement !~SLOT~! de votre Tenue.<br>Vous devrez utiliser le réparateur de vêtements pour le réparer si vous ne pouvez pas le récupérer.<br>Jeter créera un objet que n'importe qui peut ramasser et voler, vous pouvez le faire tomber de leurs mains en les bousculant ou en cliquant dessus, puis cliquez dessus au sol pour le récupérer.<br><br>Commande: @Set Outfit Effect !~SLOT~! Throw",
            },
            outfitOuterwear: "Définit votre Tenue à l'état Vêtements extérieurs.<br><br>Commande: @o (nom de l'emplacement)",
            outfitUnderwear: "Définit votre Tenue à l'état Sous-vêtements.<br><br>Commande: @u (nom de l'emplacement)",
            outfitNude:      "Définit votre Tenue à l'état Nu.<br><br>Commande: @n (nom de l'emplacement)<br><br>L'icône des ciseaux de doigts mettra votre Tenue à nu sans les parties génitales.<br><br>Commande: @nc",
            tempHuds: "Attacher [+] ou Détacher [-] le dossier des HUDs temporaires pour un module.<br><br>Commande: @&lt;module&gt; huds &lt;+/-&gt;",
        },
    },
    profile:{
        isAdult:              "Ce Profil est-il adulte ?",
        playOutfitAnimations: "Jouer les animations de tenue ?",
        chatReplacer:         "Autoriser le remplaçant de chat RLV ?",
        bodyType:             "Type de corps",
        bodyParts:{
            human:       "Humain",
            furry:       "Furry",
            noBoob:      "Sans poitrine",
            boob:        "Avec poitrine",
            plantigrade: "Plantigrade",
            digigrade:   "Digitigrade",
            noTail:      "Sans queue",
            tail:        "Avec queue",
            feminine:    "Féminin",
            masculine:   "Masculin",
        },
        tooltip:{
            rlvName:              "Le nom de ce Profil quand le remplaçant de chat RLV est activé.",
            playOutfitAnimations: "Active ou désactive la lecture des animations de changement de Tenue pour ce Profil.",
            chatReplacer:         "Active ou désactive si le remplaçant de chat RLV peut être utilisé avec ce Profil.",
            bodyParts:            "Sélectionnez le type de parties du corps que ce Profil possède.<br>Cela modifiera l'apparence de la poupée interactive sur la page d'accueil.<br>Ils seront également utilisés dans les modules futurs.",
            commands:             "Commandes de chat qui s'exécuteront après le chargement du Profil.<br>Les commandes de chat pour FullArray ne fonctionneront PAS !",
        },
        placeholders:{
            relayName: "Nom du relais...",
        },
        errors:{

        }
    },
    outfit:{
        setDefaultOutfit:           "Définir comme Tenue par défaut",
        outfitType:                 "Type de Tenue",
        outfitTypeAdvanced:         "Avancé",
        outfitTypeBasic:            "Basique",   
        outfitTypeSimple:           "Simple",
        linkMode:                   "Mode de liaison",
        linkModeNone:               "Aucun", 
        linkModeTorso_Crotch:       "Torse & Entrejambe",
        linkModeTorso_Crotch_Waist: "Torse & Entrejambe & Taille",
        tooltip:{
            setDefaultOutfit: "Définit cette Tenue comme votre Tenue par défaut.<br>Si définie, cette Tenue sera chargée lors du changement de Profil.",
            outfitType: "Sélectionnez le type de Tenue.<br><br>Avancé: Utilise tous les emplacements de Tenue et les 3 états.<br><br>Basique: est comme Avancé mais vous n'avez pas à utiliser les emplacements de Tenue.<br><br>Simple: vous n'utilisez que l'état Vêtements extérieurs, c'est simplement attaché ou détaché",
            linkMode: "Sélectionnez le mode de liaison de la Tenue, les emplacements liés s'attacheront et se détacheront ensemble.<br><br>Aucun: Ne lie pas la Tenue.<br><br>Torse & Entrejambe: Lie uniquement le Torse et l'Entrejambe.<br><br>Torse & Entrejambe & Taille: Lie le Torse, l'Entrejambe et la Taille.",
            genitalsCrotch: "Attachera et détachera le dossier genitalsCrotch dans votre Profil en fonction de l'état de votre Tenue.",
            genitalsTorso: "Attachera et détachera le dossier genitalsTorso dans votre Profil en fonction de l'état de votre Tenue.",
        }
    },
    accessory:{
        detachAll: "Détacher tous les Accessoires",
        genitalSlotHeader: "Remplacement d'emplacement génital.",
        genitalSlot:{
            none:    "Aucun",
            crotch:  "Entrejambe",
            torso:   "Torse",
            both:    "Les deux",
        },
        tooltip:{
            detachAll: "Détache et désactive tous les Accessoires de votre Profil actif.",
            genitalSlot: "Donne à l'Accessoire la capacité de détacher vos parties génitales lorsqu'il est attaché.",
        }
    },
    hair:{
    },
    shoe:{
    },
    rlv:{
// Leash
        categoryLeash:        "Laisse",
        leashFollowTp:        "Suivre le porteur de laisse lors de la téléportation",
        leashRecover:         "Récupérer la cible de la laisse",
        leashLookatTarget:    "Forcer à regarder le porteur de laisse",
        leashGrab:            "Prendre la laisse",
        leashRelease:         "Relâcher la laisse",
        leashYank:            "Tirer sur la laisse",
        leashToObject:        "Attacher la laisse à un objet",
        leashToAvatar:        "Attacher la laisse à un avatar",
        headerLeashPatricle:  "Particule de laisse",
        leashColor:           "< Début | Couleur | Fin >",
        leashRibbon:          "Utiliser particule de ruban",
        leashPlaceholderUUID: "UUID de texture...",
// Sit
        categorySit:         "S'asseoir",
        sit:                 "Autoriser à s'asseoir",
        unsit:               "Autoriser à se lever",
        placeholderSit:      "S'asseoir au sol ou UUID...",
        forceSit:            "S'asseoir sur un objet",
        forceUnsit:          "Forcer à se lever",
// Inventory
        categoryFolders:     "Dossiers",
        categoryinventory:   "Inventaire",
        resetFolderView:     "Réinitialiser dossier RLV",
        folderOpen:          "Ouvrir dossier",
        folderAttach:        "Attacher dossier",
        folderDetach:        "Détacher dossier",
        showinv:             "Voir l'inventaire",
        edit:                "Modifier les objets",
        unsharedFoldersLock: "Dossiers non partagés",
        addAttach:           "Ajouter des attachements",
        remAttach:           "Retirer des attachements",
        addOutfit:           "Ajouter des vêtements BOM",
        remOutfit:           "Retirer des vêtements BOM",
// Touch
        categoryTouch:       "Toucher",
        touchAll:            "Toucher tout",
        touchAttach:         "Toucher les attachements",
        touchAttachSelf:     "Toucher ses propres attachements",
        touchAttachOther:    "Toucher les attachements d'autrui",
        touchWorld:          "Toucher le monde",
        touchHud:            "Toucher les Huds",
        fartouch:            "Toucher à distance",
// Chat
        categoryChat:        "Chat",
        chatExceptions:      "Utiliser les exceptions de chat",
        speak:               "Parler (Chat)",
        recvchat:            "Entendre (Chat)",
        sendgesture:         "Utiliser les gestes",
        chatRange:           "Portée du chat",
        recvim:              "Recevoir des IMs",
        startim:             "Démarrer des IMs",
        sendim:              "Envoyer des IMs",
        replaceChat:         "Remplacer le chat",
        nameOverride:        "Remplacement de nom",
        useRlvName:          "Utiliser le remplacement de nom ?",
// Teleport
        categoryTeleport:    "Téléportation",
        tp:                  "Téléportation",
        tplure:              "Recevoir des téléportations",
        accepttp:            "Accepter de force la téléportation",
        tprequest:           "Recevoir des demandes de téléportation",
        regionBlocklist:     "Liste noire de régions",
        summon:              "Téléporter de force vers moi",
        goto:                "Force Teleport Me To Them",
// Info
        categoryInfo:        "Info",
        showworldmap:        "Afficher la carte du monde",
        showminimap:         "Afficher la mini-carte",
        showloc:             "Afficher l'emplacement",
        shownames:           "Afficher les noms",
        showhovertextworld:  "Afficher le texte flottant (Monde)",
        showhovertexthud:    "Afficher le texte flottant (Hud)",
// View
        categoryVision:      "Vision",
        visionLimit:         "Limiter la vision",
        visionType:          "Type de vision",
        visionTypes:{
            blind: "Aveugle",
            blur:  "Flou",
        },
        visionMin:           "Min: ",
        visionMax:           "Max: ",
        camunlock:           "Caméra déverrouillée",
        rlv_lookAt:          "Regarder l'avatar / UUID",
// Movement
        categoryMovement:    "Mouvement",
        movement:            "Pousser & Faire pivoter l'utilisateur",
        jump:                "Autoriser les sauts",
        walk:                "Autoriser la marche",
        run:                 "Autoriser la course",
        fly:                 "Autoriser le vol",
// Module Locking
        categoryModuleLock:  "Verrouillage de module",
        lockProfile:   "Verrouiller Profil",
        lockOutfit:    "Verrouiller Tenue",
        lockStripper:  "Verrouiller Stripper",
        lockAccessory: "Verrouiller Accessoires",
        lockHair:      "Verrouiller Cheveux",
        lockShoe:      "Verrouiller Chaussures",
        lockAo:        "Verrouiller AO",
        lockSkin:      "Verrouiller Peau",
        lockBom:       "Verrouiller Bom", 
    },
    huds:{},
    landmark:{
        updateLandmark: "Mettre à jour le Landmark",
    },
    inventory:{
        rezInstaller: "Créer l'installateur",
        rezEmptyBox: "Créer une boîte vide",
        autoSit: "S'asseoir automatiquement une fois créé ?",
        useRotation: "Utiliser la rotation ?",
        position: "Position :",
        heightOffset: "Décalage de hauteur :",
        rotation: "Rotation :",
        cleanupTime: "Temps de nettoyage :",
        rez: "Créer",
        rezAtPosition: "Créer à la position",
        rezAtCamera: "Créer à la caméra",
        derez: "Supprimer",
        cleanOnLeave: "Nettoyer au départ",
        tooltips:{
            rezInstaller: "Crée une boîte d'installation pour ajouter facilement des éléments à votre HUD.",
            rezEmptyBox: "Crée une boîte vide à utiliser avec les préfixes.",
        }
    },
    ao:{
        power:           "Puissance AO",
        doTyping:        "Jouer l'animation de frappe ?",
        doCycle:         "Alterner les animations ?",
        cycleTime:       "Temps de cycle : ",
        sitHeight:       "Hauteur assise : ",
        crouchHeight:    "Hauteur accroupie : ",
        groundSitHeight: "Hauteur assise au sol : ",
        gravity:         "Gravité : ",
        flightSpeed:     "Vitesse de vol : ",
        doSwimming:      "Activer la natation ?",
        dampen:          "Amortir la vitesse : ",
        floaty:          "Est flottant ?",
        speed:           "Vitesse de nage : ",
        useLM:           "Autoriser LockMeister à contrôler ?",
        useOC:           "Autoriser OpenCollar à contrôler ?",
        tooltip: {
            power: "Active ou désactive l'AO.",
            doTyping: "Active ou désactive l'animation de frappe de l'AO.",
            doCycle: "Active ou désactive si l'AO doit alterner les animations debout.",
            cycleTime: "Temps en secondes entre les animations cycliques.",
            sitHeight: "Valeur flottante pour que l'AO ajuste votre hauteur de survol en position assise.",
            crouchHeight: "Valeur flottante pour que l'AO ajuste votre hauteur de survol en position accroupie.",
            groundSitHeight: "Valeur flottante pour que l'AO ajuste votre hauteur de survol en position assise au sol.",
            gravity: "Valeur flottante pour la gravité de l'AO.",
            flightSpeed: "Valeur flottante pour la vitesse de vol de l'AO.",
            doSwimming: "Active ou désactive la fonction de natation de l'AO.",
            dampen: "Valeur flottante pour la vitesse d'amortissement de l'AO dans l'eau.",
            floaty: "Active ou désactive si la fonction de natation doit vous faire flotter lentement vers la surface de l'eau.",
            speed: "Valeur flottante pour la vitesse de nage de l'AO.",
            useLM: "Active ou désactive si l'AO doit écouter les commandes de puissance de LockMiester.",
            useOC: "Active ou désactive si l'AO doit écouter les commandes de puissance d'OpenCollar.",
            doGroundSit: "Active ou désactive si l'AO doit jouer des animations en position assise au sol.",
            doSit: "Active ou désactive si l'AO doit jouer des animations en position assise.",
            hudMode2: "Active l'ouverture du HUD vers le haut.",    
            hudMode3: "Active l'ouverture du HUD vers le bas.",
            hudMode0: "Active l'ouverture du HUD vers la gauche.",
            hudMode1: "Active l'ouverture du HUD vers la droite.",
        }
    },
    skin:{},
    bom:{},
    autoGroup:{
        isDefault: "Est-ce le groupe par défaut ?",
        tooltip:{
            isDefault: "Active ou désactive si ce groupe est le groupe par défaut à utiliser si aucun n'est défini pour une région.",    
        }
    },
    relay:{
        hudLock:             "Verrouiller votre HUD ?",
        resetRestrictions:   "Clear RLV Relay Restrictions",
        setting_relayTrust:  "Mode de confiance du relais",
        setting_relayAuto:   "Acceptation automatique du relais",
        setting_relayPower:  "Puissance du relais",
        setting_safeword:    "Mot de sécurité :",
        setting_useSafeword: "Autoriser l'utilisation du mot de sécurité ?",
        setting_useJasX: "Autoriser les commandes des jeux JasX ?",
        setting_useProjectClothing: "Autoriser les commandes Project Clothing ?",
        rlvBlocklist: "Liste noire RLV",
        rlvCommands: "Commandes RLV",
    },
    permissions:{
        permissions:{
            header: "Permissions",
            isSelfOwner: "Est propriétaire de soi-même ?",
            isPublic:    "Est public ?",
            sameRegion:  "Contrôle de même région",
            setAccessLevel: "Définir le niveau d'accès pour !~MODULE~!",
            setSelfAccessLevel: "Définir le niveau d'accès personnel pour !~MODULE~!",
            setPublicAccessLevel: "Définir le niveau d'accès public pour !~MODULE~!",
            tooltips:{
                isSelfOwner: "Toggles the owner status of your own HUD.\nWhen disabled you will not be able to control your own HUD without being added to your own Allowlist.",
                isPublic:    "This is the global toggle for all modules that have isPublic checked.\nWhen a module is set to public anyone not on your Blocklist can access it.",
                sameRegion:  "Active ou désactive si d'autres utilisateurs doivent être dans la même région que vous pour contrôler votre HUD.",
                location: "Allows users to see and know where you are, and teleport to you.",
            }
        },
        allowlist:{
            header: "Liste d'autorisation",
            currentLeashHolder: "Détenteur actuel de la laisse RLV",
            friends:            "Amis SL",
            placeholders:{
                addAllowlistUUID: "UUID à ajouter à votre liste d'autorisation...",
            },
            tooltips:{
                currentLeashHolder: "Le détenteur actuel de la laisse RLV de votre avatar.",
                friends:            "Le niveau d'accès pour votre liste d'amis SL.",
            }
        },
        blocklist:{
            header: "Liste de blocage",
            blocklist: "Liste de blocage",
            placeholders:{
                addBlocklistUUID: "UUID à ajouter à votre liste de blocage...",
            }
        },
        ownerlist:{
            header: "Liste des propriétaires",
            ownerlist: "Liste des propriétaires",
            placeholders:{
                addOwnerUUID: "UUID à ajouter à votre liste des propriétaires...",
            }
        },
        apiList:{
            header: "Liste API",
        }
    },
    settings:{
        uiVersion: "Version UI - ",
        hudVersion: "Version HUD - ",
        loginToken: "Jeton de connexion",
        editModuleOrder: "Modifier l'ordre des modules",
        serverInventory: "Inventaire serveur",
        saveHudPosition: "Sauvegarder la position du HUD",
        listType: "Type de liste",
        listTypes:{
            list: "Liste",
            icon: "Icône",
            iconSmall: "Petite icône",
            card: "Carte",
            cardList: "Liste de cartes",
        },
        uiScale: "Échelle de l'UI",
        uiScales:{
            small: "Petit",
            default: "Par défaut",
            large: "Grand",
        },
        apiKey: "Clé API",
        catagories:{
            account: "Compte",
            general: "Général",
            ui:      "UI",
            api:     "API",
            profile: "Profil",
            outfit:  "Tenue",
            hair:    "Cheveux",
            shoe:    "Chaussures",
            accessory: "Accessoire",
            autoGroup: "Groupe Auto",
            tempHuds: "HUDs temporaires",
        },
        checkbox:{
            useGrid:                "Utiliser la disposition en grille ?",
            sortListsByName:        "Trier la liste par nom ?",
            hudSide:                "Changer le côté du HUD",
            useTargetColor:         "Utiliser les couleurs du HUD cible",
            categoryState:          "État de catégorie par défaut",
            api_message:            "Envoyer des messages API ?",
            api_linkMessage:        "Envoyer des messages API avec llMessageLinked ?",
            autoWearOutfit:         "Porter automatiquement la Tenue lors du chargement ?",
            profile_replaceAll:     "Tout remplacer au chargement ?",
            autoWearShoe:           "Porter automatiquement les Chaussures ?",
            autoWearHair:           "Porter automatiquement les Cheveux ?",
            allowHairBald:          "Autoriser l'état chauve pour les Cheveux ?",
            autoWearAccessories:    "Porter/détacher automatiquement les Accessoires ?",
            autoPG:                 "Vérifier la région PG lors de la téléportation ?",
            shoeReplaceFeet:        "Les Chaussures remplacent les Pieds extérieurs ?",
            playOutfitAnimations:   "Activation globale des animations de Tenue.",
            playOutfitSounds:       "Activation globale des sons de Tenue.",
            allowEffects:           "Autoriser les Effets ? Voler, Déchirer, etc...",
            sameRegion:             "Contrôle de même région ?",
            showIds:                "Afficher les IDs dans les listes ?",
            defaultNavState:        "État par défaut de la Nav sur Accueil.",
            defaultActiveCardState: "État par défaut de la carte Active.",
            defaultDollState:       "État par défaut de la Poupée interactive.",
            showAfk:                "Afficher l'overlay AFK ?",
            autoGroup_power:        "Changer automatiquement de groupe lors de la téléportation ?",
            linkOnCreate:           "Lier automatiquement les nouvelles entrées ?",
            isOldAccessory:         "Utiliser les anciens dossiers d'Accessoires ?",
            isOldHair:              "Utiliser les anciens dossiers de Cheveux ?",
            isOldShoe:              "Utiliser les anciens dossiers de Chaussures ?",
            autoGroup_useNone:      "Par défaut, aucun groupe actif.",
            autoGroup_autoHuds:     "Porter automatiquement le dossier Huds.",
            hud_verbose:            "Messages HUD détaillés ?",
            log_permissions:        "Journalisation détaillée des erreurs de permission.",
            protectedFolderLock:    "Verrouiller le dossier protégé.",
            defaultTempHudState:    "État par défaut des HUDs temporaires.",
            jasx_bareAutoDress:     "S'habiller automatiquement après un jeu Bare ?",
            autoCreateFolders:      "Créer automatiquement les dossiers ?"
        },
        textbox:{
            prefixPlaceholder: "Préfixe...",
            passwordPlaceholder: "Mot de passe...",
            channelPlaceholder: "Canal...",
        },
        popup:{
            setLang:   "Définir la langue",
            hudColors: "Modifier les couleurs du HUD",
            apiHeader: "Réinitialisation de la clé API",
            apiText:   "Êtes-vous sûr de vouloir réinitialiser votre clé API ?\nCela cassera tout script qui l'utilise !",
            moduleList: "Modifier la liste des modules",
        },
        tooltip:{
            // General
            expRlvaFix:             "Active ou désactive si le HUD ajoutera un délai entre les commandes RLV.",
            editModuleOrder:        "Réorganiser et activer/désactiver les Modules sur la barre de navigation.",
            serverInventory:        "Livrables optionnels.",
            hudColors:              "La façon de rendre votre HUD joli.",
            sortListsByName:        "Trier la liste / mode grille par Nom ou ID",
            useTargetColor:         "Active ou désactive si votre HUD utilisera les couleurs de HUD de l'utilisateur que vous contrôlez.",
            hudSide:                "Définit si le HUD s'ouvrira à gauche ou à droite.",
            categoryState:          "Définit si les catégories sont ouvertes ou fermées par défaut.",
            saveHudPosition:        "Enregistre la position sur votre écran où se trouve actuellement le HUD, utile si vous avez besoin de remplacer le HUD lui-même.",
            listType:               "Change le style des listes dans les catégories.",
            uiSize:                 "Change l'échelle de toute l'interface du HUD.",
            defaultNavState:        "Définit si la barre de navigation est ouverte ou fermée par défaut.",
            defaultActiveCardState: "Définit si la carte active d'un Module est affichée ou cachée par défaut.",
            defaultDollState:       "Définit si la poupée d'interaction est affichée ou cachée par défaut.",
            showAfk:                "Définit si l'écran afk s'affichera après quelques secondes.",
            linkOnCreate:           "Définit si les nouvelles entrées créées seront automatiquement liées à votre Profil actif.",
            hud_verbose:            "Définit si le HUD affichera des informations pendant le démarrage.",
            protectedFolderLock:    "Définit si le dossier Protégé sera verrouillé en permanence.",
            defaultTempHudState:    "Définit si les contrôles des HUD temporaires sont cachés par défaut.",
            // API
            apiKey:                 "Votre clé API pour les produits que vous créez.<br/><br/>NE LA PARTAGEZ PAS!<br/><br/>Si vous regénérez cette clé, tout contenu précédent qui utilisait l'ancienne clé ne fonctionnera plus.",
            api_message:            "Définit si le HUD doit envoyer des messages API sur le canal: 698008",
            api_linkMessage:        "Définit si le HUD doit envoyer des messages API en utilisant llMessageLinked.",
            showIds:                "Définit si le HUD doit afficher l'ID des entrées.",
            log_permissions:        "Définit si le HUD indiquera dans le chat si une vérification de permission a échoué pour un autre utilisateur.",
            // Profile
            autoWearOutfit:         "Définit si le HUD portera automatiquement la dernière Tenue portée lors du chargement d'un Profil.",
            profile_replaceAll:     "Définit si le HUD détachera tout de votre avatar avant d'attacher un Profil.<br/>Cela inclut les éléments non présents dans le dossier #RLV.",
            // Outfit
            autoPG:                 "Définit si le HUD définira automatiquement votre Tenue comme vêtement extérieur ou changera pour une Tenue non adulte lors de la téléportation vers un sim PC/General.",
            shoeReplaceFeet:        "Définit si le HUD attachera ou détachera automatiquement vos Chaussures en fonction de l'état des pieds de votre Tenue.",
            playOutfitAnimations:   "Définit si le HUD jouera des animations lorsque vous changez vos Tenues ou leur état.",
            playOutfitSounds:       "Définit si le HUD jouera des sons lorsque vous changez votre Tenue ou son état.",
            allowEffects:           "Définit si votre Tenue peut être volée ou déchirée.",
            // Hair
            autoWearHair:           "Définit si le HUD portera automatiquement les derniers Cheveux portés lors du chargement d'un Profil.",
            allowHairBald:          "Définit si vos Cheveux peuvent être complètement détachés.",
            // Shoe
            autoWearShoe:           "Définit si le HUD portera automatiquement les dernières Chaussures portées lors du chargement d'une Tenue.",
            // Accessory
            autoWearAccessories:    "Définit si le HUD portera et détachera automatiquement les Accessoires lors du chargement d'un Profil.",
            // Auto Group
            autoGroup_power:        "Active ou désactive la fonction Auto Groupe.",
            autoGroup_useNone:      "Configure Auto Groupe pour définir votre groupe sur 'aucun' si aucun groupe n'est défini.",
            autoGroup_autoHuds:     "Définit si le HUD attachera automatiquement le dossier HUD Temporaires lors du changement de groupe.",
            // Temp HUDs
            isOldAccessory:         "OPTION PERMANENTE pour changer votre Module Accessoires pour utiliser la structure de dossier mise à jour.",
            isOldHair:              "OPTION PERMANENTE pour changer votre Module Cheveux pour utiliser la structure de dossier mise à jour.",
            isOldShoe:              "OPTION PERMANENTE pour changer votre Module Chaussures pour utiliser la structure de dossier mise à jour.",            
            jasx_bareAutoDress:     "Définit si le HUD s'habillera automatiquement après un Jeu Nu.",
            autoCreateFolders:      "Définit si le HUD créera automatiquement des dossiers pour les nouvelles entrées comme Profil, Tenue, etc....",
        },
        color:{
            colorHeader: "Paramètres de Couleur",
            categoryPreset:{
                header: "Préréglage",
                presetJsson: "Collez votre configuration préréglée ici....",
            },
            preset: "",
            categoryExample:{
                header: "Exemple",
                button: "Bouton",
                buttonActive: "Bouton Actif",
                static: "Statique",
                textbox: "Zone de texte",
                exmpleHeader: "En-tête",
                categoryHeader: "En-tête de Catégorie",
            },
            categoryConfig:{
                header: "Configuration",
                categoryMisc:{
                    header: "Divers",
                    border: "Bordure",
                    hudBackground: "Arrière-plan du HUD",
                    hudAlpha: "Transparence du HUD: ",
                    hudBackgroundImage: "URL de l'image d'arrière-plan du HUD",
                },
            },
            cagegoryButton:{
                header: "Bouton",
                button: "Bouton",
                buttonHover: "Bouton au survol",
                buttonText: "Texte du bouton",
                buttonTextHover: "Texte du bouton au survol",
                button3D: "Bouton 3D",
                button3DHover: "Bouton 3D au survol",
            },
            categoryButtonActive:{
                header: "Bouton Actif",
                button: "Bouton actif",
                buttonHover: "Bouton actif au survol",
                buttonText: "Texte du bouton actif",
                buttonTextHover: "Texte du bouton actif au survol",
                button3D: "Bouton actif 3D",
                button3DHover: "Bouton actif 3D au survol",
            },
            categoryStatic:{
                header: "Statique",
                static: "Statique",
                staticText: "Texte statique",
            },
            categoryHeader:{
                header: "En-tête",
                headerText: "Texte d'en-tête",
            },
            categoryCategoryHeader:{
                header: "En-tête",
                headerText: "Texte d'en-tête",
            },
            categoryTextbox:{
                header: "Zone de texte",
                textbox: "Zone de texte",
                textboxHover: "Zone de texte au survol",
                textboxText: "Texte de la zone de texte",
                textboxTextHover: "Texte de la zone de texte au survol",
                textboxPlaceholder: "Texte indicatif de la zone de texte",
            },
            categoryIcons:{
                header: "Icônes",
                iconPrimary: "Icône primaire",
                iconSecondary: "Icône secondaire",
            },
            categoryDoll:{
                header: "Poupée",
                outerwear: "Vêtements extérieurs",
                underwear: "Sous-vêtements",
                nude:      "Nu",
            },
            categoryScrollbar:{ 
                header: "Barre de défilement",
                track: "Piste de la barre de défilement",
                thumb: "Curseur de la barre de défilement",
                border: "Bordure de la barre de défilement",
            }
        }
    },
    pantyRaid:{
        noTrophySelected: "Sélectionnez un Trophée ci-dessous."
    },
    userSelect:{
        selectSelf: "Sélectionnez votre propre HUD.",
        useSupportMode: "Utiliser le mode Dev / Support?",
        selectUUID: "Sélectionner un UUID.",
        addUserUUID: "Ajouter à la liste des favoris",
        removeUserUUID: "Retirer de la liste des favoris",
        userUUID: "UUID à sélectionner comme cible...",
        favoriteUsers: "Utilisateurs favoris",
        regionList: "Liste des régions",
        hudUsers: "Utilisateurs du HUD",
        tooltip:{
            selectSelf: "Sélectionne votre propre HUD.",
            useSupportMode: "Lorsque activé, les vérifications de permission sur votre compte seront ignorées.",
            loadUserUUID: "Charge l'utilisateur sélectionné pour contrôler son HUD.",
            addUserUUID: "Ajoute l'UUID que vous avez saisi à votre liste de favoris.",
            removeUserUUID: "Retire l'UUID que vous avez saisi de votre liste de favoris.",
        }
    },
    notification:{
        notifications: "Notifications",
        changelog: "Journal des modifications",
        unread: "(Non lu)",
    },
    camera:{
        followUser: "Suivre l'utilisateur",
        releaseCamera: "Libérer la caméra",
        behindnessAngle: "Angle de recul",
        behindnessLag: "Retard de recul",
        distance: "Distance",
        focus: "Focus",
        focusLag: "Retard de focus",
        focusLocked: "Focus verrouillé",
        focusOffset: "Décalage de focus",
        focusThreshold: "Seuil de focus",
        pitch: "Inclinaison",
        position: "Position",
        positionLag: "Retard de position",
        positionLocked: "Position verrouillée",
        positionThreshold: "Seuil de position",
    }
}
