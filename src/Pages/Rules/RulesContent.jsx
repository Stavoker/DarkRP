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

      {/* Content Sections */}
      <div className="space-y-[40px] max-xl:space-y-[25px] max-xl:px-[20px] xl:px-0">
        {/* Player Conduct Section */}
        <div>
          <h2 className="text-text-primary xl:text-[36px] text-[24px] font-medium xl:mb-[20px] mb-[5px]">
            Player Conduct
          </h2>

          <div className="space-y-[15px] max-xl:space-y-[12px]">
            <div>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  1.1 Disrespect
                </span>
                Any kind of immoral language, discrimination or harassment towards anyone will not be tolerated.
              </p>
            </div>
            <div>
              <p className="text-text-secondary xl:text-[20px] text-[14px]">
                <span className="font-medium bg-accent-primary xl:px-[5px] px-[2px] xl:py-[5px] py-0 text-text-primary xl:mr-[5px] mr-[2px]">
                  1.2 Chat
                </span>
                All messages should be in English. Contain no links (unless it's a Cloud Gaming link). Contain no
                advertising of any sort.
              </p>
            </div>
          </div>
        </div>

        {/* Jobs Section */}
        <div>
          <h2 className="text-text-primary xl:text-[36px] text-[24px] font-medium xl:mb-[20px] mb-[5px]">Jobs</h2>
          <p className="text-text-secondary xl:text-[20px] text-[14px] xl:mb-[20px] mb-[15px]">
            All jobs have whether they can raid, mug or kidnap in their description.
          </p>

          <div className="space-y-[25px] max-xl:space-y-[20px]">
            {/* Mayor Subsection */}
            <div>
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
            </div>

            {/* Civil Protection Subsection */}
            <div>
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
            </div>
          </div>
        </div>

        {/* Exploiting Section */}
        <div>
          <h2 className="text-text-primary xl:text-[36px] text-[24px] font-medium xl:mb-[20px] mb-[5px]">Exploiting</h2>
          <p className="text-text-secondary xl:text-[20px] text-[14px] xl:mb-[20px] mb-[15px]">
            This is a extended version of the exploiting rule, explaining some of the way people may try to exploit on
            the server. This list contains most but is not limited to just this list. This list may be edited at anytime
            so be sure to keep yourself up to date on the latest updates.
          </p>

          <div className="space-y-[25px] max-xl:space-y-[20px]">
            {/* General Subsection */}
            <div>
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
            </div>

            {/* Criminal Subsection */}
            <div>
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
            </div>
          </div>
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
