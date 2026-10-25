export const FACTS = [
  {
    title: "Velcro started as a walk in the woods",
    body: "An engineer noticed burrs sticking to his dog's fur after a hike, examined how the hooks worked, and spent years copying the idea in fabric. The innovation was borrowed from nature rather than invented from nothing.",
    accent: "teal",
  },
  {
    title: "Sticky notes came from a failed glue",
    body: "The adhesive behind sticky notes was first an experiment that failed: it was too weak to hold permanently. Years later, someone used it on paper bookmarks that needed to be re-stuck without tearing the page.",
    accent: "yellow",
  },
  {
    title: "Wheels are ancient; rolling luggage is not",
    body: "Wheels have existed for thousands of years, but suitcase wheels only became common in the 1970s. The improvement was not inventing a wheel — it was noticing where a wheel was missing.",
    accent: "indigo",
  },
  {
    title: "A paperclip replaced something that caused damage",
    body: "Before paperclips, papers were held together with straight pins, which left holes and could prick fingers. The clip held the same papers and could be removed without damage — a small change with a clear benefit.",
    accent: "coral",
  },
];

export const IMPROVEMENTS = [
  {
    id: "canteen",
    name: "School canteen queue",
    whatItDoes:
      "Students line up at several cashiers to buy lunch during a short break. Separate lines move at different speeds, and students often choose the slow one.",
    nudge: "How would you make the wait feel shorter or fairer without hiring more staff?",
    startingIdeas: [
      "One queue feeding all cashiers, with a numbered board showing whose turn is next.",
      "A pre-order slip collected before the break so food is packed in advance.",
      "Posting what each line is serving so students choose deliberately, not by luck.",
    ],
  },
  {
    id: "segregation",
    name: "Waste-segregation bins",
    whatItDoes:
      "Bins are meant to separate biodegradable, recyclable, and residual waste. Labels are often text-only and differ from building to building.",
    nudge: "How would you make the correct bin obvious in two seconds, without new bins?",
    startingIdeas: [
      "The same three colours across the whole campus, plus a photo of what belongs inside each lid.",
      "A shape or cut-out opening that only fits the right kind of waste.",
      "A weekly check by one class to see which bins are contaminated, reported on a board.",
    ],
  },
  {
    id: "group-chat",
    name: "Class group chat",
    whatItDoes:
      "Announcements, questions, and screenshots arrive in one long thread. Important updates get buried within hours.",
    nudge: "How would you make the latest official instruction easy to find and easy to trust?",
    startingIdeas: [
      "One pinned message per subject, updated by an assigned classmate, with the original link.",
      "A rule that only announcements with an official source are forwarded.",
      "A short daily digest posted at a fixed time instead of scattered updates.",
    ],
  },
  {
    id: "handouts",
    name: "Printed handouts and modules",
    whatItDoes:
      "Instructions, worksheets, and rubrics are printed for every activity. Paper runs out before the final requirements.",
    nudge: "How would you keep the information accessible while using less paper?",
    startingIdeas: [
      "One QR code on the board linking to a shared folder of the week's materials.",
      "Double-sided printing with two pages per sheet for reference sheets.",
      "A single printed copy per table group instead of one per student, where appropriate.",
    ],
  },
  {
    id: "tracking",
    name: "Assignment tracking",
    whatItDoes:
      "Requirements are announced verbally and in the group chat. Students keep track in their heads, in different notebooks, or not at all.",
    nudge: "How would one place show every requirement and its status?",
    startingIdeas: [
      "A board with three columns: given, in progress, submitted — updated by a rotating classmate.",
      "A single shared checklist with the requirement, deadline, and format for each task.",
      "A five-minute end-of-day routine where each row checks its own list.",
    ],
  },
  {
    id: "study",
    name: "Study schedule for a heavy week",
    whatItDoes:
      "Several subjects set requirements in the same week. Plans usually list tasks but leave no room for delays.",
    nudge: "How would you plan a week that still works when one task takes longer than expected?",
    startingIdeas: [
      "Block the hardest task first, when your attention is best.",
      "Keep one buffer block per week that is reserved for whatever overruns.",
      "Group similar tasks — all reading together, all computations together.",
    ],
  },
];

export const CASE_STUDIES = [
  {
    title: "Sticky notes: a failure that found a use",
    problem: "Bookmarks and notes kept falling out of books, and tape damaged the pages.",
    change:
      "A weak, reusable adhesive was applied to small paper squares, so a note could be stuck, moved, and removed without tearing paper.",
    whyItWorked:
      "It solved a small, repeated annoyance without requiring the user to change their habits.",
    tradeoff: "The adhesive is deliberately weak — notes fall off smooth or dusty surfaces.",
    notice: "The original experiment was not aimed at notes; the value came from matching an existing failure to a new use.",
  },
  {
    title: "Velcro: copying a structure instead of inventing one",
    problem: "Fastenings like zippers and buttons were slow for children, shoes, and medical equipment.",
    change:
      "Hooks and loops imitated the way burrs grip fabric, creating a fastening that pulls apart and reattaches quickly.",
    whyItWorked: "It replaced a fiddly action with a single press, and it worked on flexible materials.",
    tradeoff: "It wears out with repeated use, collects lint, and is noisy to open.",
    notice: "The idea came from careful observation — the improvement was in the transfer, not the invention.",
  },
  {
    title: "Rolling luggage: applying an old idea to a new place",
    problem: "Travellers carried heavy suitcases through long terminals and queue lines.",
    change: "A suitcase was given wheels and a pulling handle, turning carrying into rolling.",
    whyItWorked: "It used an existing technology in a place it had simply never been applied.",
    tradeoff: "Wheels add weight and break on stairs, rough pavements, and uneven ground.",
    notice: "Innovation often means asking where a well-known solution is still missing.",
  },
];

export const CORNER_PROMPTS = [
  "Look at the last thing that annoyed you at school. What caused the annoyance — the task, the tool, or the instructions?",
  "Pick one process you follow weekly. Which single step could be removed without losing anything?",
  "Think of a rule everyone ignores. Is the rule wrong, or is it just hard to follow?",
  "Which object in your classroom is used differently from how it was designed? Why?",
];

export const CORNER_LINKS = [
  {
    label: "Stanford d.school — design thinking methods",
    description: "Free activities for understanding a problem from the user's point of view before proposing a fix.",
    url: "https://dschool.stanford.edu/",
  },
  {
    label: "TED-Ed — short lessons on problem-solving and creativity",
    description: "Animated lessons you can watch in class and discuss afterwards.",
    url: "https://ed.ted.com/",
  },
  {
    label: "CS Unplugged — computational thinking without computers",
    description: "Printable activities that teach the thinking behind computing using paper and everyday objects.",
    url: "https://csunplugged.org/",
  },
];