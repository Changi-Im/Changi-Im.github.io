---
title: Smart Robot[1]
layout: post
categories: [Project]
image: /assets/img/smartbot/smile.jpg
description: "Robot expression"
---

This post is about my "Smart Pet Robot" project. I did this project with friends for a contest called hanium in korea. We initially made "Smart Robot" as shown below. 

![](/assets/img/smartbot/prototype.jpg) ![](/assets/img/smartbot/prototype1.jpg)
 
She is cute right? 
However, me and my friends thought she needed an upgrade because she looks a little creepy.😀 So we came up with a new face for her and the picture below is her new design. 

![](/assets/img/smartbot/design.jpg){: width = "400"} ![](/assets/img/smartbot/design1.jpg){: width = "400"}
 
Yea, this is better. 
We will make her face with LCD display different to previous version. It could make our "Smart Pet"  less creepy than before. I think you guys have heard about "uncanny valley". The uncanny valley is a hypothesized relation between an object's degree of resemblance to a human being and the emotional response to the object. <cite><a href="https://en.wikipedia.org/wiki/Uncanny_valley">Wikipedia</a></cite> Right, the last version of our "Smart Pet" is kind of uncanny valley. Me and my friend had felt something strange emotions with her like always. 

![](/assets/img/smartbot/Uncanny_Valley.jpg)
 
Nevertheless, as we design her face with LCD, we don't feel strange emotions anymore. So, yea, Let's begin to make it!

 
First, we need a raspberry pi and a display for raspberry pi. I used 3.5 inch LCD display. Once those two materials were prepared, you could use a display on your raspberry pi using the code below.
``` xml
sudo rm -rf LCD-show
git clone https://github.com/goodtft/LCD-show.git
chmod -R 755 LCD-show
cd LCD-show/
sudo ./LCD35-show
```
Second, we need a robot expression video. I was able to find it on youtube like this:<cite><a href="https://www.youtube.com/watch?v=S79FH99aQWk">Robot Expressions</a></cite>
 
The robot expression video was cut with blinking, smiling, and heart eyes. Under the normal state, it provides the blinking video, when the robot detects smile of user, it provides the smiling and heart eyes videos.
![](/assets/img/smartbot/blink_Moment.jpg){: width = "400"}
![](/assets/img/smartbot/smile_Moment.jpg){: width = "400"}
![](/assets/img/smartbot/heart_Moment.jpg){: width = "400"}
 
At last, I made python code for displaying the above videos according to each condition.
``` python
Vid = cv2.VideoCapture('./smart_bot_expression/blink.mp4')
while Vid.isOpened():
    for (sx, sy, sw, sh) in smiles:
        cv2.rectangle(roi_color, (sx, sy), ((sx + sw), (sy + sh)), (0, 0, 255), 2)
        if flag == 0:
            Vid = cv2.VideoCapture('./smart_bot_expression/smile.mp4')
            flag = 1
        elif flag == 1:
            Vid = cv2.VideoCapture('./smart_bot_expression/heart.mp4')
            flag = 0
```  
When the robot detects your smile, it alternates between a smile and a heart face. The below videos are the results what we did!

<video width = "450" muted autoplay controls>
    <source src="/assets/img/smartbot/test_comp.mp4" type="video/mp4">
</video>
<video width = "450" muted autoplay controls>
    <source src="/assets/img/smartbot/test_disp.mp4" type="video/mp4">
</video>
 
As you can see in the last video, the raspberry pi display shows quite slower speed than the computer monitor. We can improve the speed in the raspberry pi display by reducing color gamut. 
 
However, we did too many things today.😪 
Let's continue the above work in the next post!