
function isHalfInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom - (rect.height - 100) <= windowHeight &&
        rect.right <= windowWidth
    );
}


document.addEventListener('DOMContentLoaded', function () {
    let lastScrollY = window.scrollY;

    let bannerImg = document.getElementById('banner-img');
    let greeting = document.getElementById('greeting');
    let myName = document.getElementById('my-name');
    let intro = document.getElementById('intro');



    let educationSection = document.getElementById('work');
    let workSection = document.getElementById('education');
    let skillsSection = document.getElementById('skills');
    let achievementSection = document.getElementById('achievement');
    let skillAndAchievementSection = document.getElementById('skill-and-achievement');

    let aboutImg = document.getElementById('about-img');
    let about = document.getElementById('about-me');

    let social = document.getElementById('social');
    let socialMargin = social.getBoundingClientRect().margin;
    let socialTop = social.getBoundingClientRect().top;

    let educationPosition = educationSection.getBoundingClientRect().top;
    let workPosition = educationSection.getBoundingClientRect().top;


    if (isHalfInViewport(skillsSection) || skillAndAchievementSection.getBoundingClientRect().y <= 0) {
        achievementSection.style.opacity = 1;
        achievementSection.style.marginTop = "20px";
        setTimeout(function () {
            skillsSection.style.opacity = 1;
            skillsSection.style.marginTop = "20px";

        }, 500);
    }

    if (isHalfInViewport(about)) {
        aboutImg.style.opacity = 1;
        aboutImg.style.transform = "scale(1)";
    }



    // Function to handle scroll event with delay
    function handleScroll() {

        let currentScrollY = window.scrollY;

        let bannerImgPos = bannerImg.getBoundingClientRect().y;
        let myNamePos = myName.getBoundingClientRect().y;
        let introPos = intro.getBoundingClientRect().y;
        let greetingPos = greeting.getBoundingClientRect().y;

        let educationPositionCurrent = educationSection.getBoundingClientRect().y;
        let workPositionCurrent = educationSection.getBoundingClientRect().y;

        let skillAndAchievementSectionY = skillAndAchievementSection.getBoundingClientRect().y;

        // Set the new position
        educationSection.style.top = (educationPositionCurrent / 1.8) + 40 + "px";
        workSection.style.top = (workPositionCurrent / 1.8) + 40 + "px";




        if (currentScrollY > lastScrollY) {
            bannerImg.style.transform = "translateY(5px)";

        }
        else {
            bannerImg.style.transform = "translateY(0px)";
        }

        // Scroll to education section with delay
        //if (educationSection) {
        //     educationSection.scrollIntoView({
        //       behavior: 'smooth'
        //  });
        //}
        if (isHalfInViewport(skillsSection)) {

            achievementSection.style.opacity = 1;
            achievementSection.style.marginTop = "20px";
            setTimeout(function () {
                skillsSection.style.opacity = 1;
                skillsSection.style.marginTop = "20px";

            }, 500);
        }

        if (isHalfInViewport(about)) {
            aboutImg.style.opacity = 1;
            aboutImg.style.transform = "scale(1)";
        }



        setTimeout(function () {
            lastScrollY = currentScrollY;

        }, 500);

        /*
        if ((skillAndAchievementSectionY - social.getBoundingClientRect().height) < 0) {
            social.style.position = "fixed";
            social.style.zIndex = 1000;
            social.style.margin = 0;
            social.style.top = 0;
            social.style.borderBottom = "1px solid var(--primary-40)";
            social.style.opacity = 1;
            social.style.padding = "2px 0px";


            if (currentScrollY > lastScrollY) {
                setTimeout(function () {
                    social.style.opacity = 0;
                }, 1000);
                
            }
            else {
                social.style.opacity = 1;
            }


        }

        if ((skillAndAchievementSectionY + social.getBoundingClientRect().height) > 0) {
            social.style.position = "relative";
            social.style.marginTop = "25px";
            social.style.zIndex = 0;
            social.style.borderBottom = "none";
            social.style.opacity = 1;
        }
            */






        console.log("Skill: " + skillAndAchievementSectionY);
        console.log("last: " + lastScrollY);
        console.log("current: " + currentScrollY);
    }




    // Event listener for scroll event
    window.addEventListener('scroll', handleScroll);
});