// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Here are my publications by categories in reversed chronological order. More to come!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Here is a list of things I have done!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-speaking-et-al",
          title: "speaking et al.",
          description: "Courses I taught, talks I gave and workshops I facilitated.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-art",
          title: "art",
          description: "A collection of my creative work and artistic projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/art/";
          },
        },{id: "post-la-pluja-no-sap-ploure",
        
          title: "La pluja no sap ploure.",
        
        description: "Reflections on (un)natural disaster.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Valencia-plutja/";
          
        },
      },{id: "post-it-s-not-only-about-gigawatts",
        
          title: "It’s Not Only About Gigawatts",
        
        description: "A comment on the COP28 renewable energy target&#39;s conceptual issues",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Cop28/";
          
        },
      },{id: "art-le-déficit",
          title: 'le déficit',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/deficit/";
            },},{id: "art-le-petrole",
          title: 'le petrole',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/petrole/";
            },},{id: "art-coming-soon",
          title: 'Coming soon',
          description: "other stuff",
          section: "Art",handler: () => {
              window.location.href = "/art/coming%20soon/";
            },},{id: "art-canal",
          title: 'Canal',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/canal/";
            },},{id: "art-ice-cream",
          title: 'Ice Cream',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/ice_cream/";
            },},{id: "art-no-doy-crédito",
          title: 'No doy crédito',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/no_doy_credito/";
            },},{id: "art-paris-mirrors",
          title: 'Paris Mirrors',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/paris_mirrors/";
            },},{id: "art-paris-moving",
          title: 'Paris Moving',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/paris_moving/";
            },},{id: "art-paris-university",
          title: 'Paris University',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/paris_uni/";
            },},{id: "art-ice",
          title: 'Ice',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/penguin1/";
            },},{id: "art-penguin-soul",
          title: 'Penguin soul',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/penguin2/";
            },},{id: "art-self-portrait",
          title: 'Self Portrait',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/self_portrait1/";
            },},{id: "art-self-portrait-ii",
          title: 'Self Portrait II',
          description: "Another perspective on self",
          section: "Art",handler: () => {
              window.location.href = "/art/self_portrait2/";
            },},{id: "art-berlin",
          title: 'Berlin',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/Berlin/";
            },},{id: "books-doppelganger-a-trip-into-the-mirror-world",
          title: 'Doppelganger: A Trip into the Mirror World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/doppleganger/";
            },},{id: "books-how-to-fall-in-love-with-the-future",
          title: 'How to Fall in Love with the Future',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/hopkins%20love%20future/";
            },},{id: "books-post-growth",
          title: 'Post-growth',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/jackson%20post-growth/";
            },},{id: "books-paresse-pour-tous",
          title: 'Paresse pour tous',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/klent%20paresse%20pour%20tous/";
            },},{id: "books-the-dispossessed",
          title: 'The dispossessed',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/leguin_Dispossessed/";
            },},{id: "books-marx-in-the-anthropocene-towards-the-idea-of-degrowth-communism",
          title: 'Marx in the Anthropocene: Towards the Idea of Degrowth Communism',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/marx%20anthropocene/";
            },},{id: "books-the-future-is-degrowth",
          title: 'The future is Degrowth',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/schmelzer%20future%20degrowth/";
            },},{id: "books-another-now",
          title: 'Another Now',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/varoufakis%20another%20now/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-models-assessments-and-policies-for-sustainability",
          title: 'Models, Assessments and Policies for Sustainability',
          description: "MAPS",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MAPS_project/";
            },},{id: "projects-coming-soon",
          title: 'Coming soon',
          description: "to be updated",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coming%20soon/";
            },},{id: "teaching-reimagining-paris-sufficiency-in-practice",
          title: 'Reimagining Paris: Sufficiency in Practice',
          description: "A sufficiency summer school",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/course_1/";
            },},{id: "teaching-to-what-extent-are-debt-for-nature-swaps-compatible-with-the-buen-vivir-concept-in-ecuador",
          title: 'To what extent are Debt for Nature Swaps compatible with the Buen Vivir...',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/talk_2/";
            },},{id: "teaching-coming-soon",
          title: 'Coming soon',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/workshop_1/";
            },},{id: "teaching-the-narratives-of-neutrality-the-making-of-the-ipcc-summary-for-policymakers",
          title: 'The narratives of neutrality: The making of the IPCC Summary for Policymakers',
          description: "Research presentation on IPCC neutrality claims and discourse analysis",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/talk_1/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/ana-diazvidal.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%61.%64%69%61%7A-%76%69%64%61@%75%62.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ana-diazvidal", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=_8n0IfwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
