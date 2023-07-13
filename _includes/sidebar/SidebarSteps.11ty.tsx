import h, { JSX } from "vhtml";
import SidebarStep from "./SidebarStep.11ty";
import { TutorialStep } from "../resources/tutorial/TutorialStepModels";

export type SidebarStepsProps = {
  steps: TutorialStep[];
  tutorialStep: TutorialStep;
};
const SidebarSteps = ({
  tutorialStep,
  steps,
}: SidebarStepsProps): JSX.Element => {
  {
    return (
      <div
        class="bio-page-sidebar-references-group"
        style="margin-top: 1rem"
      >
        {steps.length > 0 && (
          <>
            <p class="menu-label bio-page-sidebar-published">
              Tutorial Steps
            </p>
            <ul class="steps has-content-centered is-vertical is-small">
              {steps.map((step, index) => (
                <SidebarStep
                  label={step.title}
                  target={step.url}
                  marker={index + 1}
                  isActive={step.url === tutorialStep.url}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
};

export default SidebarSteps;
