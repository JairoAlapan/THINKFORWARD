export const SCENARIOS = [
  {
    id: "group-research",
    title: "Unequal tasks in group research",
    tag: "School",
    situation:
      "Your group of five is writing a research paper. In the first meeting everyone agrees to 'help out', but no parts are assigned. Two days before submission, three members have written the introduction, one is rewriting work that someone else already did, and the data analysis has not started.",
    consider: [
      "Which required parts of the paper currently have no owner?",
      "What does the group need in order to see progress before the deadline?",
      "What would happen on submission day if one part is still missing?",
    ],
  },
  {
    id: "announcements",
    title: "Confusing classroom announcements",
    tag: "School",
    situation:
      "Deadlines are announced in class, then corrected in the group chat, then changed again on the board. Some classmates miss the updates entirely, and two assignments are submitted with the wrong requirements.",
    consider: [
      "Where do announcements come from, and how many channels are being used?",
      "Who is most likely to miss an update, and why?",
      "What would make the current requirement easy to check at any time?",
    ],
  },
  {
    id: "waste",
    title: "Improper waste segregation",
    tag: "Community",
    situation:
      "The school has labelled bins, but the labels are text-only, different buildings use different colour schemes, and most bins end up with mixed waste. The janitors often have to re-sort by hand.",
    consider: [
      "What makes the correct bin hard to identify in a hurry?",
      "Who could help test a labelling change, and how would you know it worked?",
      "What cost or effort would your change require from the school?",
    ],
  },
  {
    id: "supplies",
    title: "Limited classroom supplies and project budget",
    tag: "School",
    situation:
      "Your section's project budget is ₱1,500 for the whole quarter. Materials for the first prototype already cost ₱900, and the remaining activities still need supplies. Some classmates can add their own money; others cannot.",
    consider: [
      "Which costs are unavoidable, and which could be reduced or shared?",
      "How can the plan stay fair to classmates with different budgets?",
      "What could you reuse from the first prototype?",
    ],
  },
  {
    id: "paper",
    title: "Excessive paper use",
    tag: "Resources",
    situation:
      "Every activity is printed: instructions, worksheets, rubrics, and draft copies. By mid-quarter, the section has used several reams of paper, and the printing allowance is nearly gone before final requirements.",
    consider: [
      "Which printed materials genuinely need to be on paper?",
      "What could be shared digitally without excluding classmates with limited data?",
      "Who needs to agree before the change can happen?",
    ],
  },
  {
    id: "group-chat",
    title: "Verifying information in the class group chat",
    tag: "Technology",
    situation:
      "A screenshot about a schedule change spreads through the class group chat within minutes. It has no date and no link. Some classmates change their plans; others say it is old news from last quarter.",
    consider: [
      "Where would the original announcement be posted?",
      "What would let a classmate verify a message in under a minute?",
      "What should the class agree on before forwarding announcements?",
    ],
  },
  {
    id: "canteen",
    title: "Long queues in the school canteen",
    tag: "Community",
    situation:
      "At lunch, three lines form but cashiers work at different speeds, and students who choose the wrong line lose most of their break. Some give up and skip eating.",
    consider: [
      "At which point in the process does the waiting actually happen?",
      "What could be changed without hiring more staff?",
      "How would you measure whether the change helped?",
    ],
  },
  {
    id: "electricity",
    title: "Saving electricity and reducing waste at home",
    tag: "Everyday",
    situation:
      "Your household's electricity bill rises every month. Lights and fans stay on in empty rooms, chargers stay plugged in, and nobody can tell which appliances actually use the most power.",
    consider: [
      "Which habits could change this week without buying anything?",
      "How could the household keep track of what changed?",
      "Who else in the household needs to agree, and what would convince them?",
    ],
  },
];

export const ACTIVITY_FIELDS = [
  {
    id: "problem",
    label: "What is the problem?",
    hint: "One or two sentences. Say who is affected and when it happens.",
    prompt: "Try naming the problem without blaming a person — focus on the situation.",
    required: true,
    rows: 4,
  },
  {
    id: "cause",
    label: "What might have caused it?",
    hint: "Look for causes, not just symptoms. More than one is fine.",
    prompt: "Ask: what is missing, what is unclear, or what is being done twice?",
    required: false,
    rows: 4,
  },
  {
    id: "solutions",
    label: "What possible solutions can you suggest?",
    hint: "Offer two or three different options, including a simple or low-cost one.",
    prompt: "What could you do with the time, materials, and people you already have?",
    required: true,
    rows: 5,
  },
  {
    id: "choice",
    label: "Which solution would you try first, and why?",
    hint: "Explain your preference rather than listing every option equally.",
    prompt: "Compare cost, effort, and how quickly it could be tested.",
    required: false,
    rows: 4,
  },
  {
    id: "why",
    label: "Why do you think your solution could work?",
    hint: "Connect it to the cause you identified.",
    prompt: "Which cause does it address directly, and what changes if it works?",
    required: true,
    rows: 5,
  },
  {
    id: "limits",
    label: "What are its possible limitations or costs?",
    hint: "Money, time, effort, or who has to do extra work.",
    prompt: "What would this cost the school, your group, or you — and is that fair?",
    required: false,
    rows: 4,
  },
  {
    id: "blockers",
    label: "What could prevent it from working?",
    hint: "Think about busy days, limited internet, and people who may not follow it.",
    prompt: "What is the most likely reason this fails after two weeks?",
    required: false,
    rows: 4,
  },
  {
    id: "improve",
    label: "How could you improve your solution?",
    hint: "One concrete change, based on a limitation you listed.",
    prompt: "What is the smallest change that would fix your biggest limitation?",
    required: true,
    rows: 4,
  },
];

export const EMPTY_ACTIVITY = ACTIVITY_FIELDS.reduce((acc, field) => ({ ...acc, [field.id]: "" }), {});