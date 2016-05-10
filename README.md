#C A M P W I K I
![alt tag](https://farm2.staticflickr.com/1482/26119070214_3ae105de28_o.png)

[![Build Status](https://travis-ci.org/hemangsk/campwiki.svg?branch=master)](https://travis-ci.org/hemangsk/campwiki)

![alt-tag](https://farm2.staticflickr.com/1481/26659374551_8e52dc9c20_o.png)

![alt-tag](https://farm8.staticflickr.com/7011/26333387703_c9a624af65_o.png)
![alt-tag](https://farm2.staticflickr.com/1578/26121828943_efd5bf106e_o.png)

The wiki's structure is quite simple and its divided into four levels,
<br>Semester, Subject, Chapter, Topics.

For creating a subject, chapter or topic

### Subject
1.  Create a file with name as subject name in ```_post``` directory.
2.  Inside the file, you have to add something called *Front Matter* (In case you're unfamiliar with Jekyll [Give this one a read.  ](https://jekyllrb.com/docs/frontmatter/))
3.  The Front Matter should look like,

    ```
---
    layout: subject
    semester: Choose one from { 1, 2, 3, 4, 5, 6, 7, 8}
    title: subject name
    date: timestamp
---
```

    ```
---
 layout: subject
title:  "Maths"
date:   2016-04-24 16:56:48 +0530
semester: 1
---
```




### Chapter
1.  Create a file with name as chapter in ```_post``` directory.
2.  Inside the file, you have to add something called *Front Matter* (In case you're unfamiliar with Jekyll [Give this one a read.  ](https://jekyllrb.com/docs/frontmatter/))
3.  The Front Matter should look like,

    ```
---
    layout: chapter
    subject: { parent subject of the chapter }
    title: { chapter name }
    date: timestamp
---
```

    ```
---
layout: chapter
title:  "Graph Theory"
date:   2016-04-24 16:56:48 +0530
subject: "Maths"
---
```

    ```
---
 layout: subject
title:  "Science"
date:   2016-04-24 16:56:48 +0530
semester: 1
---
```


### Topic
1.  Create a file with name as topic name in ```_post``` directory.
2.  Inside the file, you have to add something called *Front Matter* (In case you're unfamiliar with Jekyll [Give this one a read.  ](https://jekyllrb.com/docs/frontmatter/))
3.  The Front Matter should look like,

    ```
---
    layout: topics
    chapter: { parent chapter of the topic }
    title: { topic name }
    date: timestamp
    subtopics: [{"title": "Subtopic 1", "link" : "#link 1"},{"title": "Subtopic 2", "link" : "#link 2"}, ...]
---
```

    ```
---
layout: topics
title:  "Euler Paths"
date:   2016-04-24 16:56:48 +0530
chapter: "Graph Theory"
subtopics: [{"title": "Euler Circuits", "link" : "#ecircuits"},{"title": "Euler Paths", "link" : "#epaths"}]
---
```

###After adding *Front Matter* in the subject, chapter or topic file

1.  The Content to be put in that file will go after the front matter.

2.  You should check some sample posts in ```_posts``` directory of this repo and that'll give you the complete idea of subject, chapter and topic posts.

That's all folks.

>Let's make this much much bigger than it is!

####It'd be really cool if you,<br>
1.  Create some new feature and would like to integrate in CampWiki. Pull requests are most invited.
2.  Open issues if you find bugs.

>Its' all about being community driven.  :bus: :bus: :dash:

Have a great day!  :smile: :smile: :smiley:
