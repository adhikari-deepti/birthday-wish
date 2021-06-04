var trans3DBoxes = document.getElementById("trans3DDemo"),
    trans3DDemo = document.getElementById("trans3DBoxes");
boxes = document.querySelectorAll(".experience-item");
titles = document.querySelectorAll(".item-title");



threeDTimeline = new TimelineMax();


TweenMax.set(trans3DBoxes, {
    css: {
        transformPerspective: 800,
        transformStyle: "preserve-3d"
    }
});


threeDTimeline.fromTo(trans3DDemo, 1, {
        css: {
            autoAlpha: 0
        }
    }, {
        css: {
            autoAlpha: 1
        },
        immediateRender: true
    })
    .staggerFrom(".experience-item", 0.75, {
        y: "200%",
        opacity: 0
    }, 0.1)
    .to(trans3DBoxes, 0.75, {
        css: {
 
            rotationX: 15
        }
    }, "-=2")
    .staggerFrom(".item-subtitle", 0.25, {
        display: "none"
    }, 0.15)
    .add("z", "+=0.2"); //add label "z" for placement of next group of tweens

//loop through each element in boxes object and give it a unique and random animation along the z-axis

[].forEach.call(boxes, function(box) {
    threeDTimeline.to(box, 0.2, {
        css: {
            z: getRandom(-150, 150)
        }
    }, "z");
});

//boxes.each(function (index, element) {
//  threeDTimeline.to(element, 0.2, {css:{z:getRandom(-50, 50)}}, "z"); //place each z-tween of each box at the label "z"
//})

//rotate the group of boxes around a few more times  
threeDTimeline.to(trans3DBoxes, 1, {
        css: {
            rotationY: 180,
            z: -180
        },
        ease: Power2.easeOut
    }, "+=0.2")
    .to(trans3DBoxes, 1, {
        css: {
            rotationX: 360,
            z: -10
        }
    })
    .staggerTo(".experience-item", 1, {
        css: {
            scale: 1.005,
            z: 0,
            ease: Back.easeOut
        }
    });

threeDTimeline.to("#trans3DDemo", 0.25, {
        css: {
            scale: 1.01
        },
        ease: Power2.easeOut
    }, "-=1.5")
    .staggerFrom(".item-subtitle", 0.25, {
        y: "-100%"
    }, 0.1)
    .staggerTo(".item-title", 1, {
        opacity: 1
    }, 0.25);

//TweenMax.staggerFrom(".bg-2", 3, {
//opacity:0,repeat:-1,repeatDelay:3,yoyo:true},2);

function getRandom(max, min) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}