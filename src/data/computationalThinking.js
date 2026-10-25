export const CT_INTRO = {
  title: "Computational Thinking",
  lead: "Computational thinking is the set of thinking skills you use to work on a problem that is too big or too messy to solve in one go: you break it down, plan steps, check what is true, work with others, and keep improving your answer.",
  body: "It is not only about computers. You already use these skills when you plan a group project, debug a mistake in a solution, or decide whether a message in your class group chat is true. ThinkForward covers five dimensions. The research behind this site found problem-solving to be the weakest of the five among STEM senior high school students, so it gets the most space here.",
};

export const DIMENSIONS = [
  {
    id: "creativity",
    index: 1,
    name: "Creativity",
    accent: "coral",
    tagline: "Finding new options when the obvious ones are not enough.",
    definition:
      "Creativity in computational thinking is the ability to generate several possible ideas, combine familiar tools in new ways, and keep looking after the first idea fails. It is not only about art or talent — it is about producing workable options when time, money, or materials are limited.",
    example: {
      title: "Shared classroom supplies on a small budget",
      situation:
        "Your section shares one cabinet for scissors, glue, and rulers. Items go missing, and every activity starts with five minutes of searching. The class has ₱500 for project materials — not enough for a new cabinet.",
      problem:
        "Supplies are shared but there is no system for returning them, so tools disappear and activity time is lost.",
      ideas: [
        "Cut used plastic bottles into holders and label each slot with the section name.",
        "Assign one supply keeper per row who checks the box at the end of the day.",
        "Ask the carpentry or industrial arts class to build a shelf from leftover wood.",
      ],
      why:
        "The labelled holder idea costs almost nothing, uses materials the class already throws away, and makes a missing item obvious at a glance.",
      limitation:
        "Paper labels fade or peel, bottles crack, and one supply keeper can forget on a busy day.",
      improvement:
        "Use colour-coded tape instead of paper labels, and rotate the supply keeper weekly so the job does not fall on one person.",
    },
    inSchool:
      "Finding a cheaper way to build a research prototype, redesigning how you take notes before an exam, or inventing a workaround when the laboratory equipment you need is already in use.",
    howItHelps:
      "Creativity gives you more than one path forward, so a single failure does not stop your work. It also makes your explanations stronger, because you can compare options instead of defending your only idea.",
  },
  {
    id: "algorithmic-thinking",
    index: 2,
    name: "Algorithmic Thinking",
    accent: "sky",
    tagline: "Turning a task into clear, ordered steps.",
    definition:
      "Algorithmic thinking means planning a sequence of steps that someone else — or a computer — could follow to finish a task. A good sequence has a clear start, a correct order, and a clear finish, and it names the decisions to make along the way.",
    example: {
      title: "Submitting an assignment online",
      situation:
        "Your teacher asks for a research draft through the class portal before 8:00 p.m. Two classmates submit after the deadline because their file was the wrong format.",
      problem:
        "The task has several steps, and skipping any one of them — reading the format rules, naming the file correctly, confirming the upload — causes a late or rejected submission.",
      steps: [
        "Read the instructions and note the deadline and file format.",
        "Save your file with the required name and export the correct format.",
        "Open the file once to check that it is complete and readable.",
        "Log in to the portal and upload the file.",
        "Wait for the confirmation, then check that the submitted file opens.",
        "Take a screenshot of the confirmation and keep a copy of the file.",
      ],
      why:
        "Each step catches a common mistake before it becomes a problem, and the confirmation step gives you proof that the work arrived.",
      limitation:
        "If the internet drops or the portal is down, the same steps still fail, so the sequence needs a backup plan.",
      improvement:
        "Add a step after submission: email the file to your teacher or save it to your own drive, so a portal failure does not cost you the deadline.",
    },
    inSchool:
      "Writing the procedure section of a laboratory report, planning the order of computations in a programming exercise, or arranging the steps of a group presentation so it flows logically.",
    howItHelps:
      "Clear steps make a task repeatable and easy to check. When something goes wrong, you can find exactly which step failed instead of starting over.",
  },
  {
    id: "cooperativity",
    index: 3,
    name: "Cooperativity",
    accent: "indigo",
    tagline: "Working with others so the pieces fit together.",
    definition:
      "Cooperativity is working with other people toward one shared goal: dividing the work fairly, listening to each other, and putting the parts together so they match. It includes the small habits that keep a group moving — checking in, sharing files, and saying when you are stuck.",
    example: {
      title: "Dividing a group research paper",
      situation:
        "Your group of five must submit a research draft in one week. In the first meeting, everyone agrees to 'help out' but nobody is assigned a part. Two days later, three people have written the introduction and nobody has started the methodology.",
      problem:
        "Unclear roles mean duplicated work in some parts and empty sections in others, and the group cannot tell who is behind.",
      ideas: [
        "List every required part of the paper on the board and assign an owner to each.",
        "Match parts to strengths — the member who likes data takes the results section.",
        "Set two internal deadlines: one for drafts, one for combining and editing.",
        "Agree on one document, one font, and one citation style before writing.",
      ],
      why:
        "Assigning owners removes duplication, internal deadlines leave time to fix gaps, and agreeing on a format makes the parts combine cleanly.",
      limitation:
        "Members still have other subjects, and someone may get sick or lose internet access near the deadline.",
      improvement:
        "Add a backup member for each part and keep a weekly check-in of two minutes so problems are seen early, not on submission day.",
    },
    inSchool:
      "Group laboratory work, peer editing, club projects, and any team output where one member's missing part blocks everyone else.",
    howItHelps:
      "Clear roles and shared formats keep the group's work consistent, and checking in early means problems are solved while there is still time.",
  },
  {
    id: "critical-thinking",
    index: 4,
    name: "Critical Thinking",
    accent: "yellow",
    tagline: "Checking whether information and ideas hold up.",
    definition:
      "Critical thinking means examining ideas and evidence before accepting or repeating them. You ask where a claim came from, what supports it, whether another explanation fits, and how confident you should be.",
    example: {
      title: "A claim in the class group chat",
      situation:
        "A screenshot circulates in your class group chat saying that classes are suspended tomorrow. Within minutes, classmates are sharing it in other groups and making plans.",
      problem:
        "The screenshot has no date, no source, and no link. Acting on it could mean missing a scheduled exam — or travelling to school when classes really are suspended.",
      ideas: [
        "Find the original announcement on the school's official page or adviser's channel.",
        "Check the date on the announcement and compare it with today.",
        "Ask your adviser or class president to confirm before sharing.",
        "Look for a second reliable source, not another copy of the same screenshot.",
      ],
      why:
        "Going back to the original source separates a real announcement from an old or edited one, and one confirmation stops the message from spreading further.",
      limitation:
        "Official announcements may come late, and not every classmate follows the same official channel.",
      improvement:
        "Agree as a class that only announcements with a link to the official source are forwarded, and pin that rule in the group.",
    },
    inSchool:
      "Evaluating sources for a research paper, checking whether a solution's statistics are current, and deciding which of two conflicting explanations your data actually supports.",
    howItHelps:
      "Critical thinking keeps your reasoning honest. It helps you defend your own solution with evidence and notice the weak parts before someone else does.",
  },
  {
    id: "problem-solving",
    index: 5,
    name: "Problem-Solving",
    accent: "teal",
    focus: true,
    tagline: "The full loop: name it, explain it, judge it, improve it.",
    definition:
      "Problem-solving brings the other four dimensions together. You name the problem precisely, work out why it happens, propose possible solutions, explain why one might work, judge its limits, and improve it. The research behind ThinkForward found that students often stop at suggesting a solution — the harder part is explaining and justifying it.",
    researchNote:
      "In the study this site is based on, problem-solving was the weakest of the five computational thinking dimensions among STEM senior high school students, and students struggled particularly with explaining and justifying their proposed solutions. That is why this dimension has its own guided activity.",
    example: {
      title: "The research group that cannot finish",
      situation:
        "Your group of four has a research output due on Friday. Three members are waiting for tasks that were never assigned, one member is rewriting work that someone else already did, and nobody has started the data analysis.",
      problem:
        "The group cannot finish its output because responsibilities were never made clear, so work is duplicated in some areas and missing in others.",
      causes: [
        "Tasks were agreed verbally in one meeting and never written down.",
        "Nobody checked the group's progress between meetings.",
        "The hardest part — data analysis — had no owner.",
      ],
      ideas: [
        "Split the remaining work by required section and assign one owner per section.",
        "Assign the data analysis to the two members most comfortable with computations, and have them work together for one session.",
        "Set an internal deadline of Wednesday noon for drafts, leaving Thursday for editing.",
      ],
      why:
        "A written allocation removes the guessing that caused the duplication, pairing members on the hardest part makes it finish faster, and the internal deadline leaves time to fix gaps instead of submitting whatever exists.",
      limitation:
        "One member may still miss the internal deadline, and if the shared file is not updated, the group cannot see progress.",
      improvement:
        "Keep a single shared document with a checklist per section and update it at the end of each day, so a late part is visible while there is still time to reassign it.",
    },
    inSchool:
      "Fixing a process that keeps failing — a schedule clash, a recurring measurement error, a group workflow — rather than only completing one task.",
    howItHelps:
      "This is the dimension that turns an idea into a defended solution. It gives your answer structure, and it gives you something to say when a teacher asks 'why would that work?'",
  },
];

export const PROBLEM_SOLVING_STEPS = [
  {
    number: 1,
    title: "Identify",
    question: "What is the problem?",
    detail: "Describe it in one or two sentences, in your own words, with enough detail that someone else would recognise it.",
    nudges: [
      "Which part of your school day, project, or routine is not working?",
      "Who is affected, and how often does it happen?",
      "What would be different if the problem were solved?",
    ],
    strongAnswer: "Names one specific problem and who feels it.",
  },
  {
    number: 2,
    title: "Analyze",
    question: "What might have caused it?",
    detail: "Look for causes, not just symptoms. A problem usually has more than one.",
    nudges: [
      "Is it caused by something missing, something unclear, or something done twice?",
      "Does it happen only at certain times, or to certain people?",
      "What would you need to check to confirm your guess about the cause?",
    ],
    strongAnswer: "Gives at least one likely cause and says how it could be checked.",
  },
  {
    number: 3,
    title: "Suggest",
    question: "What possible solutions can you suggest?",
    detail: "Offer more than one option, including a cheap or simple one. Different options make your reasoning easier to see.",
    nudges: [
      "What could you do with the materials and time you already have?",
      "What would a simpler version of your idea look like?",
      "Who else could help, and what could they contribute?",
    ],
    strongAnswer: "Offers two or three distinct options, not one idea repeated.",
  },
  {
    number: 4,
    title: "Explain",
    question: "Why do you think your solution could work?",
    detail: "Connect your solution to a cause you identified. This is the part students often skip — and the part teachers look for.",
    nudges: [
      "Which cause does this solution address directly?",
      "What changes for the people affected if it works?",
      "What have you seen that suggests this could work?",
    ],
    strongAnswer: "Links the solution to a specific cause and describes the effect.",
  },
  {
    number: 5,
    title: "Evaluate",
    question: "What are its limitations, and what could prevent it from working?",
    detail: "Every solution has a cost, a limit, or a risk. Naming them makes your answer more credible, not weaker.",
    nudges: [
      "What does it cost in money, time, or effort — and who pays that cost?",
      "What could go wrong on a busy day or with limited internet?",
      "Who might find it hard to follow, and why?",
    ],
    strongAnswer: "Names a real cost, limit, or risk rather than saying there are none.",
  },
  {
    number: 6,
    title: "Improve",
    question: "How could you improve it?",
    detail: "Change one thing based on the limitations you listed. Improvement is a second pass, not a new project.",
    nudges: [
      "Which limitation could you fix with the smallest change?",
      "What would a second version look like after one week of use?",
      "Who could test it with you and tell you what to adjust?",
    ],
    strongAnswer: "Suggests one concrete change that follows from a limitation.",
  },
];

export const CT_SECTIONS = DIMENSIONS.map((d) => ({ id: d.id, label: d.name, index: d.index })).concat([
  { id: "guided-activity", label: "Guided activity", index: 6 },
]);