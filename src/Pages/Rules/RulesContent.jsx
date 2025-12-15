import { Link } from 'react-router-dom';

function RulesContent() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-start justify-between xl:mb-[15px] mb-0 max-xl:px-[20px] xl:px-0">
        <h1 className="text-text-primary xl:text-[50px] text-[28px] font-medium">Rules</h1>
      </div>

      {/* Intro Text */}
      <p className="text-text-secondary xl:text-[20px] text-[16px] xl:mb-[40px] mb-[25px] leading-relaxed max-xl:px-[20px] xl:px-0">
        The rules are made to improve players experiences. Use common sense and do not try to loop hole these rules.
        Staff have the final say in the matter even if it is not stated in the rules. If you have an issue with a staff
        member report them on the forums.
      </p>

      <p>- The Community Team</p>

      {/* Content Sections */}
      <div className="space-y-[40px] max-xl:space-y-[25px] max-xl:px-[20px] xl:px-0">
        {/* Player Conduct Section */}
        <div id="player-conduct">
          <h2 className="text-text-primary xl:text-[36px] text-[24px] font-medium xl:mb-[20px] mb-[5px]">
            Player Conduct
          </h2>

          <ul className="space-y-[15px] max-xl:space-y-[12px]">
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  1.1 Disrespect
                </span>
                Any kind of immoral language, discrimination or harassment towards anyone will not be tolerated.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  1.2 Chat
                </span>
                All messages should be in English. Contain no links (unless it's a Cloud Gaming link). Contain no
                advertising of any sort.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  1.3 Punishment
                </span>
                Avoiding punishment in any means is forbidden.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  1.4 Scamming
                </span>
                Scamming other players for money is not allowed, except when done by official in-game criminal jobs
                using in-game currency as part of roleplay. Once a custom job is transferred via !jobs, you no longer
                own it. Loans are not recognised by the server administration.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  1.5 Currency
                </span>
                The act of selling any form of in-game currency/items for real-life money is not allowed(This excludes
                Custom Jobs). You cannot use alt accounts to benefit yourself.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  1.6 Spamming
                </span>
                You must not use the microphone or chat to spam unintelligible noises or annoying sounds/words. When
                using advert you must wait at least 2 minutes before sending out the same message again.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  1.7 Cheating
                </span>
                Do not use third-party software to gain an advantage over other players.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  1.8 Problems
                </span>
                Do not attempt to cause problems within the community.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  1.9 Names
                </span>
                You must only use English characters for your name with no excessive spacing; unicode characters are not
                allowed.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  1.10 Exploiting
                </span>
                You must not attempt to exploit or loophole intended server functions for personal gain (this includes
                skills, tokens, and in-game money).
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  1.11 Admin Sits
                </span>
                Do not disrupt admin sits. If an admin sit is taking place, you cannot do any roleplay actions. E.g.,
                Raiding a base while it's being checked by a staff member.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  1.12 TOS
                </span>
                All conduct must align with the Garry's Mod Terms of Service
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  1.13 Erotic Roleplay (ERP)
                </span>
                Engaging in or facilitating Erotic Roleplay (ERP), including any actions, communications, or content
                that simulate, suggest, or involve sexual acts or content, is strictly forbidden.
              </p>
            </li>
          </ul>
        </div>

        {/* Roleplay Section */}
        <div id="roleplay">
          <h2 className="text-text-primary xl:text-[36px] text-[24px] font-medium xl:mb-[20px] mb-[5px]">Roleplay</h2>

          <ul className="space-y-[15px] max-xl:space-y-[12px]">
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  2.1 Random Death Match (RDM)
                </span>
                Harming/killing another player must carry a reasonable 'role-play reason'.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  2.2 New Life Rule (NLR)
                </span>
                Forget about your previous life and do not return to your area of death for at least 3 minutes.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  2.3 Meta Gaming
                </span>
                The use of information gained in an out-of-character is not allowed.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  2.4 Fail RP
                </span>
                To an extent, you must play in a realistic manner and roleplay with others. You can only role play with
                your gang when your jobs are compatible. E.g., CP's cannot ally/defend anyone but CP's.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  2.5 Props
                </span>
                Props surfing, climbing, blocking, and general minging is not allowed. Do not spawn/move props in other
                players' bases or during raids, this includes cameras and textscreens.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  2.6 Explosives
                </span>
                When using explosives you are held responsible for every player you kill or damage.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  2.7 Micspam
                </span>
                Only hobos/jobs with build on streets permission can micspam and they must be stationary.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  2.8 Adverts
                </span>
                Adverts are not to be used to contact another player specifically. They should be used for RP reasons
                such as businesses.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  2.9 FearRP
                </span>
                You must value and fear for your life. If you are being mugged by 3 people and you are alone, you must
                abide by what they say.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  2.10 Job Abuse
                </span>
                Do not change jobs to gain an advantage e.g., armor, ammo, etc.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  2.11 Checkpoints
                </span>
                Checkpoints can be created by two or more CP's with a valid RP reason such as searching people.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  2.12 KOS
                </span>
                When KOSing someone you must give them at least 5 seconds to respond (unless it's a base). This only
                applies when you are initiating the attack, not when defending yourself from being arrested/killed. You
                should try to warn them via the interaction menu.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  2.13 Allies
                </span>
                Up to 3 gangs can ally per base. Outside the property, you are no longer classed as "allies". This means
                you cannot defend "allied" members who are attacked outside of the property unless partaking in an RP
                activity (e.g. raid). You cannot be associated with or hired by more than 2 players outside your base
                (this excludes same gang members). If you are associated with or hired by a player, you must change your
                job title. E.g. /job w/player1 + player2.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  2.14 Taze/Stunstick
                </span>
                You may not randomly taze/stunstick other players without a reasonable roleplay reason. E.g., Using
                stunstick to get to an unreachable area.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  2.15 Kidnaps/Mugs
                </span>
                To perform a kidnap/mug you must initiate this via the interaction menu. Kidnaps can last up to 20
                minutes. You must give someone at least 10 seconds before KOSing them (unless they threaten you). You
                must wait 15 minutes before performing this action on the same player again.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  2.16 Player Events
                </span>
                Players may host small events within RP these must be held within the confines of world buildings.
                Events may range from building to fighting, in the case of players fighting they must follow NLR and are
                limited to a maximum size of 1 vs 1 no larger. These events must enhance roleplay and must not hinder
                the experience for non-participants.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  2.17 Gazza
                </span>
                When selling to Gazza you may KOS any CP coming within the enclosed zone.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  2.18 Entities
                </span>
                All printers are required to be entirely accessible, without any external aid. Included, but not limited
                to; SWEPS, Prop Climb, Entity Boost, Player boost.
              </p>
            </li>
          </ul>
        </div>

        {/* Properties Section */}
        <div id="properties">
          <h2 className="text-text-primary xl:text-[36px] text-[24px] font-medium xl:mb-[20px] mb-[5px]">Properties</h2>

          <ul className="space-y-[15px] max-xl:space-y-[12px]">
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  3.1 Layout
                </span>
                Traps, airlocks, puzzles, confusing colours, ramps, stairs, headglitch defences, or any features
                designed to mislead players are not allowed. Entrances using jump, crouch, underground, or maze designs
                are also not allowed (bases can have up to 3 turns, a turn can be up to 90°). There must be a clear,
                short & obvious path into your base beyond the final entrance fading door, which can include 1
                additional turn. After the final fading door, there must be no shooting windows or defensive structures
                allowed beyond this point.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  3.1B Tunnels/Hallways
                </span>
                Tunnel/hallway bases are not allowed. The maximum length of a hallway including turns is 2 x
                fence03a.mdl
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  3.2 Entrances
                </span>
                Jump/crouch/underground/Ramps and ladder entrances are not allowed. Entrances must fit two people side
                by side and in front/behind (apart from the door of the property). Entrances must not be hacker proof.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  3.3 Visibility
                </span>
                The raider must be able to see you clearly [head + upper torso] and shoot back. No one way shooting. All
                keypads and fading doors must be easily visible and distinguishable. You may not build with props that
                make it hard to see around or hurt your eyes, this includes very bright/very dark bases. Head glitching
                is not allowed.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  3.4 Fading Doors
                </span>
                The max fading doors linked to keypads/entrances per base is 3 or 2 for PD/Terrorist HQ/Bank. You may
                not use your keybinds to open your fading doors. Delay must be 0 on entrances. Fading doors must not
                have a size smaller than storefront_template001a_bars.mdl.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  3.5 Property
                </span>
                You may own up to two properties per base (must be adjacent/next to each other or connected via a
                bridge). You may build in the area around your base - however if an admin deems it necessarily big or
                ugly, it may be removed.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  3.6 Textscreens
                </span>
                Building text screens are allowed (do not have entities while building). KOS signs/lines are allowed but
                MUST be on the property. All textscreens on bases must be easily visible and have a minimum size of 50.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  3.6B Roleplay Buildings
                </span>
                Roleplay only building signs must only be used for bases that do not contain money making
                entities/weapons this excludes bank and PD.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  3.7 Defending
                </span>
                You must be added to the door to defend the property or have a gang sign clearly visible. You can KOS
                people only if you have a textscreen. You cannot be added to the door/place a gang sign during a raid.
                Defenders may not actively use the property's doors to their advantage during a raid. Defenders cannot
                use explosives to defend their base. Defending from afar is not allowed. You may come back to the base
                if it is being raided, but you may not build a sniper's nest opposite the base to defend it.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  3.8 Weapons
                </span>
                You cannot use the HL2 Crossbow or Double Barrel Shotgun / Minigun / Deathmachine / MG3 / Blundergat /
                Olympia / BO2 Remington 870 to defend a property
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  3.9 Shooting Windows
                </span>
                Shooting windows must be at least the size of cube05x1x05.mdl (landscape).
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  3.10 Keypads
                </span>
                Keypads must only be used for fading doors entrances. This means you should have no keypads within your
                base once past the entrance fading doors. Keypads must be clearly visible and at eye level.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  3.11 Player Entities
                </span>
                Player entities and buildings should not interfere with or obstruct another Player within Spawn and
                fountain. Large buildings in or around the main fountain area are not allowed.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  3.12 Server Entities
                </span>
                Your property/building must not block off/interfere with server entities (e.g., NPC's, Dumpsters).
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  3.13 Gun Dealer
                </span>
                Gun dealer bases can have no more than 4 members residing there and must be selling guns to the public.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  3.14 Bank
                </span>
                Bankers can only base with jobs using "Act as Guard". Bankers may also not grow Drugs or any other
                illegal money making methods except from printers.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  3.15 No-Collide
                </span>
                No-collided props are only allowed during the building phase.
              </p>
            </li>
          </ul>
        </div>

        {/* Raiding Section */}
        <div id="raiding">
          <h2 className="text-text-primary xl:text-[36px] text-[24px] font-medium xl:mb-[20px] mb-[5px]">Raiding</h2>

          <ul className="space-y-[15px] max-xl:space-y-[12px]">
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  4.1 Minge Raid
                </span>
                Raiding a base which clearly has nothing inside is not allowed or has a "Roleplay only building" sign is
                not allowed.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  4.2 PD
                </span>
                Only terrorists and jobs with raiding ability can raid the PD. You must have a valid RP reason to raid
                PD (e.g., breaking a gang member out). You cannot counter-raid terrorists or interfere with their raid
                (unless you are CP).
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  4.3 Camping
                </span>
                After raiding a base you must leave within 15 minutes.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  4.4 Checkpoints
                </span>
                Checkpoints can be raided to dismantle their purpose or for a valid RP reason. Only terrorists and
                custom jobs with PD raiding ability can raid checkpoints.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  4.5 Building
                </span>
                You cannot build or remove props during a raid. If a raid is taking place, you may not leave the server
                until it is finished.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  4.6 CP Raid
                </span>
                CP's are allowed to take control of the surrounding area during a raid. Prop block is not allowed, but
                they can make the area AOS. A textscreen and simple props should be placed to express the area e.g.,
                concrete_barrier001a.mdl.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  4.7 Timer
                </span>
                You cannot raid the same base until 15 minutes has passed from the end of the raid. If you died during
                the raid (defending/attacking), you cannot go back until the raid has finished and your NLR is up. Raids
                can last no longer than 10 minutes.
              </p>
            </li>
          </ul>
        </div>

        {/* Turf Wars Section */}
        <div id="turf-wars">
          <h2 className="text-text-primary xl:text-[36px] text-[24px] font-medium xl:mb-[20px] mb-[5px]">Turf Wars</h2>

          <ul className="space-y-[15px] max-xl:space-y-[12px]">
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  5.1 Alliances
                </span>
                During turf wars you may not team with another gang, you must KOS everyone of an opposing gang.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  5.2 Distance
                </span>
                You may not attack into a turf war from an unreasonable distance/rooftops and water e.g., if there is a
                turf war on the beach you may not snipe from the boat island. Once you have participated on turf, you
                are not allowed to leave the enclosed area.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  5.3 KOS
                </span>
                You may KOS anyone in your line of sight within the enclosed area. The enclosed area on islands is the
                island and the water around it. You cannot KOS people on other islands/through tunnels. During
                terrorist/CP turfs you can only KOS the opposite team.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  5.4 Props
                </span>
                No matter what job you are, you may not spawn props within the turf war circle and/or around the circle.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  5.5 Bases
                </span>
                If the circle breaches into a world building, you may not build within that building.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  5.6 Weapons
                </span>
                Explosives are prohibited in turf wars.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  5.7 Civil Protection
                </span>
                Civil protection may not interfere with gang turf wars.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  5.8 Building
                </span>
                You may not use buildings to your advantage.
              </p>
            </li>
          </ul>
        </div>

        {/* Protect The VIP Section */}
        <div id="protect-the-vip">
          <h2 className="text-text-primary xl:text-[36px] text-[24px] font-medium xl:mb-[20px] mb-[5px]">
            Protect The VIP
          </h2>

          <ul className="space-y-[15px] max-xl:space-y-[12px]">
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  6.1 Alliances
                </span>
                During VIP wars, you may ally with gangs you are currently basing with, you are not allowed to kill
                allied VIPs. This is only active within your property.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  6.2 Civil Protection
                </span>
                Civil protection may not interfere with VIP wars.
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  6.3 New Life Rule
                </span>
                New Life Rule/Raid Timer are not applicable when you are attacking (but does apply to defenders).
              </p>
            </li>
            <li>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  6.4 Bases
                </span>
                The defending property must be fully accessible, it must follow all basing rules. Building and "Role
                play" bases do not apply.
              </p>
            </li>
          </ul>
        </div>

        {/* Jobs Section */}
        <div id="jobs">
          <h2 className="text-text-primary xl:text-[36px] text-[24px] font-medium xl:mb-[20px] mb-[5px]">Jobs</h2>
          <p className="text-text-secondary xl:text-[20px] text-[14px] xl:mb-[20px] mb-[15px]">
            All jobs have whether they can raid, mug or kidnap in their description.
          </p>

          <ul className="space-y-[25px] max-xl:space-y-[20px]">
            {/* Mayor Subsection */}
            <li id="mayor">
              <h3 className="text-text-primary xl:text-[26px] text-[20px] font-medium xl:mb-[15px] mb-[5px]">Mayor</h3>
              <ul className="space-y-[10px] max-xl:space-y-[8px]">
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Laws/agenda must be reasonable and not break any rules.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You do not partake in raids or dangerous activities.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You can authorise civil protection to build check points.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You cannot enforce laws
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You must have a valid RP reason in order to demote
                </li>
              </ul>
            </li>

            {/* Civil Protection Subsection */}
            <li id="civil-protection">
              <h3 className="text-text-primary xl:text-[26px] text-[20px] font-medium xl:mb-[15px] mb-[5px]">
                Civil Protection
              </h3>
              <ul className="space-y-[10px] max-xl:space-y-[8px]">
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You must attempt to arrest people rather then killing them unless there is a law stating otherwise
                  (E.g. Weapons visible = KOS/AOS)
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You must follow the law.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You must follow the Mayors orders (within reason).
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You must have a valid reason to search a player.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You cannot raid without a warrant.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You can create checkpoints for valid RP reasons. You use a maximum of 2 fading doors.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You are allowed to AOS anywhere in PD (apart from lobby) by default. KOS/AOS within PD (including
                  lobby) can be dictated by current laws.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Checkpoints can not be connected to any of the paths from the main spawn.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You must have a valid reason to arrest/warrant/want someone (e.g. see printer sparks, or see them
                  commit a crime).
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You may only raid with CP jobs. Underground Mutants should not be arrested only killed.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You may not camp or cloak near Gazza. This counts as waiting within the enclosed area or watching the
                  NPC.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  PD can have maximum 2 fading doors for entering the base.
                </li>
              </ul>
            </li>

            {/* S.W.A.T Sniper Subsection */}
            <li id="swat-sniper">
              <h3 className="text-text-primary xl:text-[26px] text-[20px] font-medium xl:mb-[15px] mb-[5px]">
                S.W.A.T Sniper
              </h3>
              <ul className="space-y-[10px] max-xl:space-y-[8px]">
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You must follow civil protection rules.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You may KOS over AOS with a valid reason. E.g. bank raid/guns out in public.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You may build sniper towers within checkpoints/connected to checkpoints (raidable).
                </li>
              </ul>
            </li>

            {/* Gangster/Mob Boss Subsection */}
            <li id="gangster-mob-boss">
              <h3 className="text-text-primary xl:text-[26px] text-[20px] font-medium xl:mb-[15px] mb-[5px]">
                Gangster/Mob Boss
              </h3>
              <ul className="space-y-[10px] max-xl:space-y-[8px]">
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You cannot mug solo, you must be in a group with other gangsters (2 or more).
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Agenda must be reasonable and not break rules.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You may mug for a maximum of £10000.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You may only raid the PD to break someone out with a mob boss.
                </li>
              </ul>
            </li>

            {/* Secret Service Subsection */}
            <li id="secret-service">
              <h3 className="text-text-primary xl:text-[26px] text-[20px] font-medium xl:mb-[15px] mb-[5px]">
                Secret Service
              </h3>
              <ul className="space-y-[10px] max-xl:space-y-[8px]">
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Do not partake in civil protection activities (enforcing the law).
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Your only duty is to keep the Mayor safe.
                </li>
              </ul>
            </li>

            {/* Terrorists Subsection */}
            <li id="terrorists">
              <h3 className="text-text-primary xl:text-[26px] text-[20px] font-medium xl:mb-[15px] mb-[5px]">
                Terrorists
              </h3>
              <ul className="space-y-[10px] max-xl:space-y-[8px]">
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  There must be a goal to your actions e.g. robbing the locker. Killing random people is not a valid
                  goal.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Terrorist HQ can have maximum 2 fading doors for entering the base.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Terrorists may defend each other.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Terrorists may only base with other terrorists.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Terrorists are not associated with their gang while playing as terrorist (apart from Gang Turfs).
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Terrorists are allowed to partake in Gang Turfs.
                </li>
              </ul>
            </li>

            {/* Hacker Subsection */}
            <li id="hacker">
              <h3 className="text-text-primary xl:text-[26px] text-[20px] font-medium xl:mb-[15px] mb-[5px]">Hacker</h3>
              <ul className="space-y-[10px] max-xl:space-y-[8px]">
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You can only raid with your employer.
                </li>
              </ul>
            </li>

            {/* Underground Mutant Subsection */}
            <li id="underground-mutant">
              <h3 className="text-text-primary xl:text-[26px] text-[20px] font-medium xl:mb-[15px] mb-[5px]">
                Underground Mutant
              </h3>
              <ul className="space-y-[10px] max-xl:space-y-[8px]">
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You are KOS to everyone.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You KOS anyone who enters the underground.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You cannot KOS people above ground.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You can only use melee weapons.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You may kill other mutants (only underground).
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You may not spawn trap mutants.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You do not need to abide to NLR..
                </li>
              </ul>
            </li>

            {/* Hobo Subsection */}
            <li id="hobo">
              <h3 className="text-text-primary xl:text-[26px] text-[20px] font-medium xl:mb-[15px] mb-[5px]">Hobo</h3>
              <ul className="space-y-[10px] max-xl:space-y-[8px]">
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You may base on the street but you may only have 1 fading door.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Your building must not block/connect to any property entrances.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You are allowed to print.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Your property may not be excessively big, a member of staff will deem when it is too big.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  When "micspamming/singing" you must be stationary and have a sign indicating what you are doing.
                </li>
              </ul>
            </li>

            {/* Medic Subsection */}
            <li id="medic">
              <h3 className="text-text-primary xl:text-[26px] text-[20px] font-medium xl:mb-[15px] mb-[5px]">Medic</h3>
              <ul className="space-y-[10px] max-xl:space-y-[8px]">
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You can be hired to base.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You cannot help defend the base.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  You cannot possess/use any weapon.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Exploiting Section */}
        <div id="exploiting">
          <h2 className="text-text-primary xl:text-[36px] text-[24px] font-medium xl:mb-[20px] mb-[5px]">Exploiting</h2>
          <p className="text-text-secondary xl:text-[20px] text-[14px] xl:mb-[20px] mb-[15px]">
            This is a extended version of the exploiting rule, explaining some of the way people may try to exploit on
            the server. This list contains most but is not limited to just this list. This list may be edited at anytime
            so be sure to keep yourself up to date on the latest updates.
          </p>

          <ul className="space-y-[25px] max-xl:space-y-[20px]">
            {/* General Subsection */}
            <li id="general">
              <h3 className="text-text-primary xl:text-[26px] text-[20px] font-medium xl:mb-[15px] mb-[12px]">
                General
              </h3>
              <ul className="space-y-[10px] max-xl:space-y-[8px]">
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Bypassing mute via in game commands.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Having a custom job command with pre-set in game commands.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Placing props in skybox.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Gaining skill progress from out of rp activities.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Bypassing weapon animations to gain an advantage.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Bypassing demotion in any way.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Using hidden console commands.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">Skill abuse.</li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Using explosives with the direct intent of damaging players / entities through world walls
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Throwing Nitroglycerin through walls.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Lockpicking the roof of the industrial elevator
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Placing entities in inaccessible areas
                </li>
              </ul>
            </li>

            {/* Criminal Subsection */}
            <li id="criminal">
              <h3 className="text-text-primary xl:text-[26px] text-[20px] font-medium xl:mb-[15px] mb-[5px]">
                Criminal
              </h3>
              <ul className="space-y-[10px] max-xl:space-y-[8px]">
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Inflating prices of weed for financial gain.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Using camo to mug someone.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Putting a hit on yourself to negate wanted status.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Bypassing restrictions to complete deliveries.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Use of in-game commands to set hits.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Avoiding wanted/bounty system.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Standing within NPCs/Entities to avoid being arrested/killed.
                </li>
              </ul>
            </li>

            {/* Gangs Subsection */}
            <li id="gangs">
              <h3 className="text-text-primary xl:text-[26px] text-[20px] font-medium xl:mb-[15px] mb-[5px]">Gangs</h3>
              <ul className="space-y-[10px] max-xl:space-y-[8px]">
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Trading/giving gang printers.
                </li>
              </ul>
            </li>

            {/* Turf Subsection */}
            <li id="turf">
              <h3 className="text-text-primary xl:text-[26px] text-[20px] font-medium xl:mb-[15px] mb-[5px]">Turf</h3>
              <ul className="space-y-[10px] max-xl:space-y-[8px]">
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">Bypassing NLR.</li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Using cloak to gain an advantage.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Contesting turf from underground.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Abusing the mutant job in turf.
                </li>
                <li className="text-text-secondary xl:text-[20px] text-[14px] list-disc list-inside">
                  Killing yourself outside turf zone to avoid turf NLR and regain health and armour.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between xl:mt-[60px] xl:pt-[30px] pt-[20px] xl:mb-[80px] max-xl:px-[20px] xl:px-0">
        <p className="flex flex-col text-text-secondary xl:text-[20px] text-[14px]">
          Previous
          <Link
            to="/rules/want-to-join-staff"
            className="text-accent-primary xl:text-[18px] text-[14px] hover:opacity-80"
          >
            Want to join the Staff Team?
          </Link>
        </p>

        <p className="flex flex-col items-end text-text-secondary xl:text-[20px] text-[14px]">
          Next
          <Link to="/rules/staff-roles" className="text-accent-primary xl:text-[18px] text-[14px] hover:opacity-80">
            Staff Roles
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RulesContent;
