import { useState } from "react";
import Tab from "./Tab";

export function StepList() {
  const [parent, setParent] = useState(0);
  const [childList, setChildList] = useState("Account Summary & Plan");

  return (
    <div className="space-y-2 min-h-[80dvh] overflow-y-scroll">
      {steps.map((s, i) => (
        <Tab
          key={i}
          data={s}
          i={i}
          parent={parent}
          setParent={setParent}
          childList={childList}
          setChildList={setChildList}
        />
      ))}
    </div>
  );
}

const steps = [
  {
    title: "Step 01 - Account Summary & Plan",
    children: ["Account Summary & Plan"], // Fixed: changed 'child' to 'children'
  },
  {
    title: "Step 02 - User Type Detection & Info",
    children: [
      "Business Name",
      "What industry is your business based?",
      "What are the objectives of your business",
      "What is the goal of your business",
      "Knowledge + Files",
      "Business description & logo upload",
    ],
  },
  {
    title: "Step 03 - Team & Role Setup",
    children: ["Add team members to your company"],
  },
  {
    title: "Step 04: AI Assistant Creation",
    children: [
      "Choose AI assistant name",
      "Select tone, style and personality type",
      "Settings, Live Preview Chatbox",
      "Created AI Assistant Preview",
    ],
  },
  {
    title: "Step 05 - Channel Integration",
    children: [
      "Which channels would you like to connect?",
      "Connected channels settings",
      "Connected channels preview",
    ],
  },
  {
    title: "Step 06 - Per-Channel AI Configuration",
    children: [
      "Smart Suggestions (BeeBot Nudges)",
      "AI Profile selection",
      "Per-channel AI Configuration - Escalation Rules",
      "Per-channel AI Configuration - Follow-Up Triggers",
      "Per-channel AI Configuration - AI Behavior Settings (Timing)",
      "Per-channel AI Configuration - Access permissions setting",
      "Per-channel AI Configuration - AI Assistant Testing",
      "Per-channel AI Configuration - Configuration overview",
    ],
  },
  {
    title: "Step 07: Web Chat Connection",
    children: [
      "Channels & Links",
      "Appearance",
      "Copy & Localisation",
      "Installation",
    ],
  },
  {
    title:
      "Step 08: Smart Automations - UnifiedBeez Automation Template Library",
    children: [
      "Industry type preview",
      "UnifiedBeez Automation Template Library",
      "Automation Template Customisation",
    ],
  },
];
