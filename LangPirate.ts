export const LangPirate = {
    fallbackError:{
        line_1: "⚠️ Arrr! Somethin' went afoul! ⚠️",
        line_2: "If ye be seein' this cursed message, the HUD's taken a broadside and'll reload in 5 ticks.",
        line_3: "If ye can summon the HUD from the deep, the trouble be a scallywag of an old viewer.",
        line_4: "If ye can't summon the HUD from the deep, file a message in a bottle on our Discord, matey!",
    },
    modules:{
        profile:     "Matey's Mark",
        outfit:      "Garb",
        accessories: "Booty",
        hair:        "Barnacles",
        shoe:        "Boots",
        rlv:         "R.L.V.",
        hudlets:     "HUDlets",
        landmark:    "Treasure Map",
        inventory:   "Cargo Hold",
        ao:          "Swagger",
        pantyRaid:   "Panty Plunder",
        skin:        "Hide",
        bom:         "BOOM!",
        autoGroup:   "Crew Auto",
        relay:       "Parrot Relay",
        telepathy:   "Speak o' the Mind",
        camera:      "Spyglass",
        asn:         "ASN",
    },
    misc:{
        settings: "Captain's Log",
        customAccessLevel: "Privateer's Privilege",
        delete: "Scuttle this !~MODULE~!?",
        deleteText: "Ye sure ye want to send this !~MODULE~! to Davy Jones: !~NAME~!?",
        isAdult: "Be this !~MODULE~! for the grown pirates?",
        chatCommands: "Parley Commands",
        chatCommandsChannel: "Channel...",
        chatCommandsCommand: "Command...",
        moduleName: "!~MODULE~! name...",
        moduleImage: "!~MODULE~! image...",
        moduleGroup: "!~MODULE~! crew...",
        linkMode: "Tie-off Mode",
        tooltip:{
            customAccessLevel: "Set a privilege that trumps the one in the permissions chest.",
            name:      "The name o' this !~MODULE~!.",
            img:       "The mark or map of this !~MODULE~!.",
            imgSelect: "Choose a portrait for this Matey's Mark.<br>png, jpg, webp, etc...",
            isAdult:   "Be this Matey's Mark for salty dogs only?",
            delete:    "Scuttles this !~MODULE~! and all her ties. There be no return from the Locker.",
            linkMode:  "Tie-off mode lets ye lash items to the active Matey's Mark.",
            listMode:  "List mode shows what booty or garb ye got on ye.",
        },
        states:{
            outerwear: "Coat",
            underwear: "Unmentionables",
            nude:      "Bare Bones",
        },
        slots:{
            head:      "Crown",
            torso:     "Trunk",
            arms:      "Spars",
            hands:     "Hooks",
            legs:      "Pegs",
            feet:      "Boots", 
            waist:     "Girdle",
            crotch:    "Treasure",
            tail:      "Tail",
            wings:     "Wings",
            ears:      "Ears",
        },
        effects:{
            rip:       "Slash",
            steal:     "Plunder",
            throw:     "Heave",
        }
    },
    cardActive:{
        id:     "Mark",
        reload: "Reload this !~MODULE~!",
        detach: "Cast off this !~MODULE~!",
        edit:   "Tweak this !~MODULE~!",
        create: "Forge a new !~MODULE~!",
        tooltip:{
            reload: "Reloads the !~MODULE~!.<br>This will cast off and reattach the !~MODULE~! locker.",
            detach: "Casts off the !~MODULE~! locker.<br>Other modules might be dropped overboard as well.",
            edit:   "Change the settings of this !~MODULE~!.",
        }
    },
    popups:{
        create:{
            errorName:       "A name be needed, ye scallywag!",
            newPrefix:       "New Figurehead",
            prefix:          "Figurehead...",
            name:            "Name...",
            image:           "Portrait...",
            create:          "Forge",
            slurl:           "Seaway URL...",
            folderTemplate:  "Locker Template",
        }
    },
    home:{
        catagories:{
            tempHuds: "Spare HUDs",
            interactDoll: "Jolly Doll",
        },
        tooltip:{
            doll: {
                outerwear: "Set the !~SLOT~! of yer Garb to Coat.<br><br>Command: @!~STATE~! !~SLOT~!",
                underwear: "Set the !~SLOT~! of yer Garb to Unmentionables.<br><br>Command: @!~STATE~! !~SLOT~!",
                nude:      "Set the !~SLOT~! of yer Garb to Bare Bones.<br><br>Command: @!~STATE~! !~SLOT~!",
                rip:       "Slash the !~SLOT~! of yer Garb.<br>Use the tailor to mend.<br><br>Command: @Set Garb Effect !~SLOT~! Slash",
                steal:     "Plunder the !~SLOT~! of yer Garb.<br>Use the tailor to mend if ye don't nick it back.<br><br>Command: @Set Garb Effect !~SLOT~! Plunder",  
                throw:     "Heave the !~SLOT~! of yer Garb.<br>If lost, use the tailor. Heave will toss it for any buccaneer to claim!<br>Bump or click to reclaim.<br><br>Command: @Set Garb Effect !~SLOT~! Heave",
            },
            outfitOuterwear: "Set yer Garb to Coat.<br><br>Command: @o (slot name)",
            outfitUnderwear: "Set yer Garb to Unmentionables.<br><br>Command: @u (slot name)",
            outfitNude:      "Set yer Garb to Bare Bones.<br><br>Command: @n (slot name)<br><br>Cutlass icon leaves ye bare without treasure.<br><br>Command: @nc",
            tempHuds: "Strap [+] or Unstrap [-] spare HUDs for a module.<br><br>Command: @&lt;module&gt; huds &lt;+/-&gt;",
        },
    },
    profile:{
        isAdult:              "Be this Matey's Mark for grown pirates?",
        playOutfitAnimations: "Set sail with Garb Animations?",
        chatReplacer:         "Permit Parrot chat replace?",
        bodyType:             "Hull Type",
        bodyParts:{
            human:       "Landlubber",
            furry:       "Beast",
            noBoob:      "No Booty",
            boob:        "Booty",
            plantigrade: "Flatfoot",
            digigrade:   "Beastfoot",
            noTail:      "No Tail",
            tail:        "Tail",
            feminine:    "Wench",
            masculine:   "Gent",
        },
        tooltip:{
            rlvName:              "Name for this Mark when Parrot chat be enabled.",
            playOutfitAnimations: "Toggle Garb change shanties.",
            chatReplacer:         "Toggle if Parrot chat can be used for this Mark.",
            bodyParts:            "Choose hull and rigging.<br>Changes the Jolly Doll on the home page.<br>Used in future modules.",
            commands:             "Parley commands to shout after loading the Mark.<br>FullArray commands be off-limits!",
        },
        placeholders:{
            relayName: "ParrotName...",
        },
        errors:{}
    },
    outfit:{
        setDefaultOutfit:           "Hoist as Default Garb",
        outfitType:                 "Garb Class",
        outfitTypeAdvanced:         "Fancy",
        outfitTypeBasic:            "Basic",   
        outfitTypeSimple:           "Simple",
        linkMode:                   "Tie Mode",
        linkModeNone:               "None", 
        linkModeTorso_Crotch:       "Trunk & Treasure",
        linkModeTorso_Crotch_Waist: "Trunk & Treasure & Girdle",
        linkMode_Crotch_Waist:       "Treasure & Girdle",
        tooltip:{
            setDefaultOutfit: "Set this Garb as yer go-to.<br>It'll be donned on Mark change.",
            outfitType: "Pick Garb class.<br><br>Fancy: All Garb slots and 3 states.<br><br>Basic: Like Fancy but fewer slots.<br><br>Simple: Just a Coat, attach or detach.",
            linkMode: "Choose tie mode, tied slots go on/off together.<br><br>None: No ties.<br><br>Trunk & Treasure: Only trunk and treasure tied.<br><br>Trunk & Treasure & Girdle: All three lashed together.",
            genitalsCrotch: "Will attach/detach the treasure locker in yer Mark based on Garb state.",
            genitalsTorso: "Will attach/detach the trunk locker in yer Mark based on Garb state.",
        }
    },
    accessory:{
        detachAll: "Unstrap all Booty",
        genitalSlotHeader: "Treasure slot override.",
        reload: "Hoist the trinkets again, ye scallywag!",
        genitalSlot:{
            none:    "None",
            crotch:  "Treasure",
            torso:   "Trunk",
            both:    "Both",
        },
        tooltip:{
            detachAll: "Unstraps and stows all Booty from yer active Mark.",
            genitalSlot: "Lets the Booty detach yer treasure when it's lashed.",
            reload: "This be attemptin’ to plunder all yer worn booty ‘n strap it back on, arrr!",
        }
    },
    hair:{},
    shoe:{},
    rlv:{
        categoryLeash:        "Leash",
        leashFollowTp:        "Follow Leash Holder On Teleport",
        leashRecover:         "Recover Leash Target",
        leashLookatTarget:    "Force Look At The Leash Holder",
        leashGrab:            "Grab Leash",
        leashRelease:         "Release Leash",
        leashYank:            "Yank Leash",
        leashToObject:        "Leash To Object",
        leashToAvatar:        "Leash To Avatar",
        headerLeashPatricle:  "Leash Particle",
        leashColor:           "< Start | Color | End >",
        leashRibbon:          "Use Ribbon Particle",
        leashPlaceholderUUID: "Texture UUID...",
        leashFullBright:      "Full Bright",
        leashGlow:            "Glow",
        categorySit:         "Sit",
        sit:                 "Allow Sitting",
        unsit:               "Allow Stand Up",
        placeholderSit:      "Ground Sit Or UUID...",
        forceSit:            "Sit On A Object",
        forceUnsit:          "Force Stand Up",
        categoryFolders:     "Folders",
        categoryinventory:   "Cargo Hold",
        resetFolderView:     "Reset to RLV locker",
        folderOpen:          "Open Locker",
        folderAttach:        "Stow Locker",
        folderDetach:        "Unstow Locker",
        showinv:             "View Cargo",
        edit:                "Edit Trinkets",
        unsharedFoldersLock: "Secret Lockers",
        addAttach:           "Add Trinkets",
        remAttach:           "Remove Trinkets",
        addOutfit:           "Add BOOM! Garb",
        remOutfit:           "Remove BOOM! Garb",
        categoryTouch:       "Touch",
        touchAll:            "Touch All",
        touchAttach:         "Touch Trinkets",
        touchAttachSelf:     "Touch Yer Trinkets",
        touchAttachOther:    "Touch Matey's Trinkets",
        touchWorld:          "Touch World",
        touchHud:            "Touch HUDs",
        fartouch:            "Far Touch",
        categoryChat:        "Parley",
        chatExceptions:      "Use Parley Exceptions",
        chatExceptionsTooltip: "Toggles whether Cap'ns and crew on yer Allowlist with RLV_CHAT access can still send ye parley messages, savvy?",
        speak:               "Speak (Parley)",
        recvchat:            "Hear (Parley)",
        sendgesture:         "Use Jigs",
        chatRange:           "Parley Range",
        recvim:              "Receive Messages",
        startim:             "Start Messages",
        sendim:              "Send Messages",
        replaceChat:         "Replace Parley",
        nameOverride:        "Name Override",
        useRlvName:          "Use name override?",
        categoryTeleport:    "Teleport",
        tp:                  "Teleport",
        tplure:              "Receive Teleports",
        accepttp:            "Force Accept Teleport",
        tprequest:           "Receive Teleport Requests",
        regionBlocklist:     "Region Blocklist",
        summon:              "Summon to Me",
        goto:                "Teleport Me to Them",
        categoryInfo:        "Info",
        showworldmap:        "Show World Map",
        showminimap:         "Show Mini-Map",
        showloc:             "Show Location",
        shownames:           "Show Names",
        showhovertextworld:  "Show Hovertext (World)",
        showhovertexthud:    "Show Hovertext (Hud)",
        categoryVision:      "Spyin'",
        visionLimit:         "Limit Spyin'",
        visionType:          "Spyglass Type",
        visionTypes:{
            blind: "Blind",
            blur:  "Blurry",
        },
        visionMin:           "Min: ",
        visionMax:           "Max: ",
        camunlock:           "Unlocked Spyglass",
        rlv_lookAt:          "Look at Pirate / UUID",
        categoryMovement:    "Maneuvers",
        movement:            "Nudge & Spin Crew",
        jump:                "Allow Leapin'",
        walk:                "Allow Marchin'",
        run:                 "Allow Runnin'",
        fly:                 "Allow Flyin'",
        categoryModuleLock:  "Module Lock",
        lockProfile:   "Lock Matey's Mark",
        lockOutfit:    "Lock Garb",
        lockStripper:  "Lock Stripper",
        lockAccessory: "Lock Booty",
        lockHair:      "Lock Barnacles",
        lockShoe:      "Lock Boots",
        lockAo:        "Lock Swagger",
        lockSkin:      "Lock Hide",
        lockBom:       "Lock BOOM!", 
    },
    huds:{},
    landmark:{
        updateLandmark: "Update Treasure Map",
    },
    inventory:{
        rezInstaller: "Rez Installer",
        rezEmptyBox: "Rez Empty Box",
        autoSit: "Auto sit when rezzed?",
        useRotation: "Use Rotation?",
        position: "Position:",
        heightOffset: "Height Offset:",
        rotation: "Rotation:",
        cleanupTime: "Cleanup Time:",
        rez: "Rez",
        rezAtPosition: "Rez At Position",
        rezAtCamera: "Rez At Spyglass",
        derez: "Derez",
        cleanOnLeave: "Cleanup on Leave",
        tooltips:{
            rezInstaller: "Rez an Installer chest to fill yer HUD with plunder.",
            rezEmptyBox: "Rez an empty chest for use with figureheads.",
        }
    },
    ao:{
        power:           "Swagger Power",
        doTyping:        "Play Typin' Jig?",
        doCycle:         "Cycle Jigs?",
        cycleTime:       "Cycle Time: ",
        sitHeight:       "Sit Height: ",
        crouchHeight:    "Crouch Height: ",
        groundSitHeight: "Deck Sit Height: ",
        gravity:         "Gravity: ",
        flightSpeed:     "Flight Speed: ",
        doSwimming:      "Swimmin'?",
        dampen:          "Dampen Speed: ",
        floaty:          "Buoyant?",
        speed:           "Swim Speed: ",
        useLM:           "Let LockMeister steer?",
        useOC:           "Let OpenCollar steer?",
        tooltip: {
            power: "Toggle the Swagger on or off.",
            doTyping: "Toggle the Swagger typin' jig.",
            doCycle: "Toggle if Swagger cycles standin' jigs.",
            cycleTime: "Time 'twixt jigs.",
            sitHeight: "Float value to adjust yer sit height.",
            crouchHeight: "Float value to adjust yer crouch height.",
            groundSitHeight: "Float value to adjust yer deck sit height.",
            gravity: "Float value for yer gravity.",
            flightSpeed: "Float value for yer flight speed.",
            doSwimming: "Toggle Swagger's swimmin'.",
            dampen: "Float value for Swagger's dampen speed in the drink.",
            floaty: "Toggle if Swagger floats ye to the surface.",
            speed: "Float value for Swagger's swim speed.",
            useLM: "Toggle if Swagger listens to LockMeister.",
            useOC: "Toggle if Swagger listens to OpenCollar.",
            doGroundSit: "Toggle if Swagger plays deck sit jigs.",
            doSit: "Toggle if Swagger plays sit jigs.",
            hudMode2: "HUD opens to the crow’s nest.",
            hudMode3: "HUD opens to the bilge.",
            hudMode0: "HUD opens to port.",
            hudMode1: "HUD opens to starboard.",
        }
    },
    skin:{},
    bom:{},
    autoGroup:{
        isDefault: "Be Default Crew?",
        tooltip:{
            isDefault: "Toggle if this crew be yer default when none's set for a port.",    
        }
    },
    relay:{
        hudLock:             "Lock yer HUD?",
        resetRestrictions:   "Clear RLV Parrot Restrictions",
        setting_relayTrust:  "Parrot Trust Mode",
        setting_relayAuto:   "Parrot Auto Accept",
        setting_relayPower:  "Parrot Power",
        setting_safeword:    "Safe Word:",
        setting_useSafeword: "Allow Safe Word?",
        setting_useJasX: "Allow JasX game orders?",
        setting_useProjectClothing: "Allow Project Clothing orders?",
        rlvBlocklist: "RLV Blocklist",
        rlvCommands: "RLV Orders",
    },
    permissions:{
        permissions:{
            header: "Privileges",
            isSelfOwner: "Cap'n of yer own ship?",
            isPublic:    "Open to all hands?",
            sameRegion:  "Same port control",
            setAccessLevel: "Set privilege for !~MODULE~!",
            setSelfAccessLevel: "Set yer own privilege for !~MODULE~!",
            setPublicAccessLevel: "Set public privilege for !~MODULE~!",
            tooltips:{
                isSelfOwner: "Toggle if ye be the cap'n of yer own HUD. If off, ye can't steer without bein' on yer own crew list.",
                isPublic:    "Toggle public access for all modules marked public. When open, any scurvy dog not on yer blocklist can use 'em. By default, modules be open.",
                sameRegion:  "Toggle if other pirates need be in the same port to steer yer HUD.",
                location:    "Allows pirates to see yer location and teleport to ye.",
            }
        },
        allowlist:{
            header: "Crew List",
            currentLeashHolder: "Current RLV Leash Holder",
            friends:            "First Mates",
            placeholders:{
                addAllowlistUUID: "ID to add to yer Crew List...",
            },
            tooltips:{
                about: "The Crew List be mates who can fiddle with yer HUD. Each module and mate has a privilege—if the mate's be as high or higher, they can use it.",
                currentLeashHolder: "The current RLV leash holder of yer avatar.",
                friends:            "Privilege for yer first mates.",
            }
        },
        blocklist:{
            header: "Blocklist",
            blocklist: "Block List",
            placeholders:{
                addBlocklistUUID: "ID to add to yer Blocklist...",
            }
        },
        ownerlist:{
            header: "Cap'n List",
            ownerlist: "Cap'n List",
            placeholders:{
                addOwnerUUID: "ID to add to yer Cap'n List...",
            },
            tooltips:{
                about: "Cap'n List be mates who near run yer ship. They can't change the settings in the captain's log, though.",
            }
        },
        apiList:{
            header: "API List",
        }
    },
    settings:{
        uiVersion: "UI Version - ",
        hudVersion: "HUD Version - ",
        loginToken: "Login Token",
        editModuleOrder: "Edit Module Order",
        serverInventory: "Server Cargo",
        saveHudPosition: "Save HUD Position",
        listType: "List Type",
        listTypes:{
            list: "List",
            icon: "Icon",
            iconSmall: "Icon Small",
            card: "Card",
            cardList: "Card List",
        },
        uiScale: "UI Scale",
        uiScales:{
            small: "Small",
            default: "Default",
            large: "Large",
        },
        uiVolume: "Tis the UI Volume ye be seekin! ",
        apiKey: "API Key",
        catagories:{
            account: "Account",
            general: "General",
            ui:      "UI",
            api:     "API",
            profile: "Matey's Mark",
            outfit:  "Garb",
            hair:    "Barnacles",
            shoe:    "Boots",
            accessory: "Booty",
            autoGroup: "Crew Auto",
            tempHuds: "Spare HUDs",
        },
        checkbox:{
            useGrid:                "Use Grid Layout?",
            sortListsByName:        "Sort List By Name?",
            hudSide:                "Toggle HUD Side",
            useTargetColor:         "Use Target HUD Colors",
            categoryState:          "Default Category State",
            api_message:            "Send API Messages?",
            api_linkMessage:        "Send API Link Messages?",
            autoWearOutfit:         "Auto don Garb on load?",
            profile_replaceAll:     "Replace all on load?",
            autoWearShoe:           "Auto don Boots?",
            autoWearHair:           "Auto don Barnacles?",
            allowHairBald:          "Allow bald state?",
            autoWearAccessories:    "Auto don/ditch Booty?",
            autoPG:                 "Check PG port on teleport?",
            shoeReplaceFeet:        "Boots replace Coat's feet?",
            playOutfitAnimations:   "Global Garb animation toggle.",
            playOutfitSounds:       "Global Garb sound toggle.",
            allowEffects:           "Allow Effects? Plunder, Slash, etc...",
            sameRegion:             "Same port control?",
            showIds:                "Show IDs in lists?",
            defaultNavState:        "Default state for Nav on Home.",
            defaultActiveCardState: "Default state for Active card.",
            defaultDollState:       "Default state for Jolly Doll.",
            showAfk:                "Show AFK overlay?",
            autoGroup_power:        "Auto change crews on teleport?",
            linkOnCreate:           "Auto tie new entries?",
            isOldAccessory:         "Using old Booty Lockers?",
            isOldHair:              "Using old Barnacles Lockers?",
            isOldShoe:              "Using old Boots Lockers?",
            autoGroup_useNone:      "Default to no active crew.",
            autoGroup_autoHuds:     "Auto don HUDs locker.",
            hud_verbose:            "Verbose HUD messages?",
            log_permissions:        "Verbose Permission error logs.",
            protectedFolderLock:    "Lock the Protected Locker.",
            defaultTempHudState:    "Default state for SpareHUDs.",
            jasx_bareAutoDress:     "Auto Dress after Bare Game?",
            autoCreateFolders:      "Auto create treasure chests?",
            hud_sideDock:           "HUDs dock mode.",
            outfit_pcUseEffect:     "Throw garb with landlubber clumsiness?",
        },
        textbox:{
            prefixPlaceholder: "Figurehead...",
            passwordPlaceholder: "Password...",
            channelPlaceholder: "Channel...",
        },
        popup:{
            setLang:   "Set Lingo",
            hudColors: "Edit HUD Colors",
            apiHeader: "API Key Reset",
            apiText:   "Ye sure ye want to reset yer API key? Scripts usin' it will be marooned!",
            moduleList: "Edit Module List",
            about: "About",
            lang: "Lingo Selection",
        },
        tooltip:{
            expRlvaFix:             "Toggle if HUD adds delay between RLV orders.",
            editModuleOrder:        "Rearrange and toggle Modules on the helm.",
            serverInventory:        "Optional cargo.",
            hudColors:              "Make yer HUD look shipshape.",
            sortListsByName:        "Sort list/grid by Name or ID",
            useTargetColor:         "Toggle if yer HUD uses colors of the pirate ye command.",
            hudSide:                "Toggle if the HUD opens port or starboard.",
            categoryState:          "Toggle if categories open or closed by default.",
            saveHudPosition:        "Saves where yer HUD sits on yer spyglass.",
            listType:               "Change the style o' lists in categories.",
            uiSize:                 "Change the scale o' yer HUD.",
            defaultNavState:        "Toggle if the helm is open or closed by default.",
            defaultActiveCardState: "Toggle if the active card for a Module be shown or hidden by default.",
            defaultDollState:       "Toggle if the Jolly Doll is shown or hidden by default.",
            showAfk:                "Toggle showin' the AFK sail after a few ticks.",
            linkOnCreate:           "Toggle if new entries get tied to yer active Matey's Mark.",
            hud_verbose:            "Toggle if the HUD shouts startup info.",
            protectedFolderLock:    "Toggle if the Protected Locker always locked.",
            defaultTempHudState:    "Toggle if SpareHUDs controls be hidden by default.",
            hud_sideDock:           "Controls if HUDs dock under the main mast or where they were shifted.",
            apiKey:                 "Yer API key for ship's goods.<br/><br/>GUARD THIS CLOSE!<br/><br>If ye re-roll, old loot be lost at sea.",
            api_message:            "Toggle if the HUD sends API messages on channel: 698008",
            api_linkMessage:        "Toggle if the HUD sends API messages usin' llMessageLinked.",
            showIds:                "Toggle if the HUD shows the ID of items.",
            log_permissions:        "Toggle if the HUD shouts if a permission check fails for another pirate.",
            autoWearOutfit:         "Toggle if the HUD auto dons the last Garb when loading a Matey's Mark.",
            profile_replaceAll:     "Toggle if the HUD strips all before attachin' a Mark. Even outside the #RLV locker.",
            autoPG:                 "Toggle if the HUD sets yer Garb to coat or non-adult when teleportin' to a PG port.",
            shoeReplaceFeet:        "Toggle if the HUD auto attaches or removes Boots with yer Garb's feet state.",
            playOutfitAnimations:   "Toggle if the HUD sings a shanty when ye change Garb.",
            playOutfitSounds:       "Toggle if the HUD plays a tune when ye change Garb.",
            allowEffects:           "Toggle if yer Garb can be plundered or slashed.",
            autoWearHair:           "Toggle if the HUD auto dons the last Barnacles when loadin' a Mark.",
            allowHairBald:          "Toggle if yer Barnacles can be fully cast off.",
            autoWearShoe:           "Toggle if the HUD auto dons the last Boots when donning Garb.",
            autoWearAccessories:    "Toggle if the HUD auto dons and ditches Booty when loadin' a Mark.",
            autoGroup_power:        "Toggle the Crew Auto feature.",
            autoGroup_useNone:      "Toggle Crew Auto to set crew to 'none' if none set.",
            autoGroup_autoHuds:     "Toggle if the HUD auto straps Spare HUDs when changing crew.",
            isOldAccessory:         "PERMANENT TOGGLE: change yer Booty module to the new locker plan.",
            isOldHair:              "PERMANENT TOGGLE: change yer Barnacles module to the new locker plan.",
            isOldShoe:              "PERMANENT TOGGLE: change yer Boots module to the new locker plan.",            
            jasx_bareAutoDress:     "Toggle if the HUD auto dresses after a Bare Game.",
            autoCreateFolders:      "Toggle if the HUD auto creates lockers for new entries.",
            outfit_pcUseEffect:     "Toggles whether the Outfit will throw garb when the landlubber clumsiness effect happens.",
        },
        color:{
            colorHeader: "Color Settings",
            categoryPreset:{
                header: "Preset",
                presetJsson: "Paste yer config here....",
            },
            preset: "",
            categoryExample:{
                header: "Example",
                button: "Button",
                buttonActive: "Button Active",
                static: "Static",
                textbox: "Textbox",
                exmpleHeader: "Header",
                categoryHeader: "Category Header",
            },
            categoryConfig:{
                header: "Config",
                categoryMisc:{
                    header: "Misc",
                    border: "Border",
                    hudBackground: "HUD Background",
                    hudAlpha: "HUD Alpha: ",
                    hudBackgroundImage: "HUD Background Image URL",
                },
            },
            cagegoryButton:{
                header: "Button",
                button: "Button",
                buttonHover: "Button Hover",
                buttonText: "Button Text",
                buttonTextHover: "Button Text Hover",
                button3D: "Button 3D",
                button3DHover: "Button 3D Hover",
            },
            categoryButtonActive:{
                header: "Button Active",
                button: "Active Button",
                buttonHover: "Active Button Hover",
                buttonText: "Active Button Text",
                buttonTextHover: "Active Button Text Hover",
                button3D: "Active Button 3D",
                button3DHover: "Active Button 3D Hover",
            },
            categoryStatic:{
                header: "Static",
                static: "Static",
                staticText: "Static Text",
            },
            categoryHeader:{
                header: "Header",
                headerText: "Header Text",
            },
            categoryCategoryHeader:{
                header: "Category Header",
                headerText: "Category Header Text",
            },
            categoryTextbox:{
                header: "Textbox",
                textbox: "Textbox",
                textboxHover: "Textbox Hover",
                textboxText: "Textbox Text",
                textboxTextHover: "Textbox Text Hover",
                textboxPlaceholder: "Textbox Placeholder",
            },
            categoryIcons:{
                header: "Icons",
                iconPrimary: "Main Icon",
                iconSecondary: "Second Icon",
            },
            categoryDoll:{
                header: "Jolly Doll",
                outerwear: "Coat",
                underwear: "Unmentionables",
                nude:      "Bare Bones",
                disabled:  "Disabled",
            },
            categoryScrollbar:{ 
                header: "Scrollbar",
                track: "Scrollbar Track",
                thumb: "Scrollbar Thumb",
                border: "Scrollbar Border",
            }
        }
    },
    pantyRaid:{
        noTrophySelected: "Pick a Trophy below, matey."
    },
    userSelect:{
        selectSelf: "Select yer own HUD.",
        useSupportMode: "Use Deckhand/Support mode?",
        selectUUID: "Pick a Pirate ID.",
        addUserUUID: "Add to Favorite Crew",
        removeUserUUID: "Remove from Favorite Crew",
        userUUID: "ID to target...",
        favoriteUsers: "Favorite Crew",
        regionList: "Port List",
        hudUsers: "HUD Pirates",
        tooltip:{
            selectSelf: "Selects yer own HUD.",
            useSupportMode: "Permission checks ignored when this be on.",
            loadUserUUID: "Loads the pirate to command their HUD.",
            addUserUUID: "Adds the ID ye entered to yer favorite crew.",
            removeUserUUID: "Removes the ID ye entered from yer favorite crew.",
        }
    },
    notification:{
        notifications: "Messages in Bottles",
        changelog: "Ship's Log",
        unread: "(Unread parchment)",
    },
    camera:{
        followUser: "Tail Pirate",
        releaseCamera: "Drop Spyglass",
        behindnessAngle: "Astern Angle",
        behindnessLag: "Astern Lag",
        distance: "Leeway",
        focus: "Spy",
        focusLag: "Spy Lag",
        focusLocked: "Spy Locked",
        focusOffset: "Spy Offset",
        focusThreshold: "Spy Threshold",
        pitch: "Pitch",
        position: "Position",
        positionLag: "Position Lag",
        positionLocked: "Position Locked",
        positionThreshold: "Position Threshold",
    },
    calendar:{
        tooltip:{
            addUUID: "Add a pirate by ID to track their birthday at sea.",
        }
    },
    login:{
        error:{
            userPass: "Check yer pirate name and secret word.",
            token: "Bad login token, reattach the HUD, matey.",
        }
    },
    setupPage:{
        infoText: "Welcome aboard, and thank ye for pickin' up Full Array!<br/>This here setup is to help ye set the basics. Look things over, and click \"Finish Setup\" when ready. If ye have questions, hover the <info icon> for more details.<br/><br/>These choices can be changed later in the captain's log.",
        themeText: "Pick a shipshape HUD theme.<br>All can be changed in the captain's log after.",
        categories:{
            theme: "Theme Selection",
            account: "Account & Privileges",            
        },
        buttonSaveTheme: "Save Theme",
        buttonFinish: "Finish Setup",
    }
}