

let selector = document.querySelector('.select')


let breedList = 'https://dog.ceo/api/breeds/list/all'



    fetch(breedList)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            let list = Object.keys(data.message)
            for(let i = 0; i < list.length; i++){
                let options = document.createElement('option')
                options.value = list[i]
                options.textContent = list[i]
                selector.appendChild(options)
                options.style.textTransform = 'upperCase'
            }
        })





selector.addEventListener('change', getImage)
let image = document.querySelector('img')
    
function getImage(event){
        fetch(`https://dog.ceo/api/breed/${event.target.value}/images/random`)
        .then(res => res.json())
        .then(data => {
            image.src = data.message
            // let selectedOption = selector.options[selector.selectedIndex]
            // let selectedValue = selectedOption.value

            // document.querySelector('h1').textContent = selectedValue

            changeSex()
            changeName()
            description()
        })
    }
    
    
    document.querySelector('.search-button').addEventListener('click', function(){

        let selectedOption = selector.options[selector.selectedIndex]
        let selectedValue = selectedOption.value


        fetch(`https://dog.ceo/api/breed/${selectedValue}/images`)
            .then(res => res.json())
            .then(data => {
                let imageArrays = data.message
                let randomImage = Math.floor(Math.random() * imageArrays.length)
                image.src = imageArrays[randomImage]
            })

    })
    

    /******************getting dog names, sex, description and printing to the DOM*************************/ 

    const dogInfo = {
        fNames: ['Bella', 'Bambi', 'Luna', 'Daisy', 'Lola', 'Coco', 'Lady', 'Penny', 'Quuen', 'Allie', 'Raven', 'Franie', 'Chanel', 'Storm', 'Willow', 'Sage', 'Oreo', 'Holly'],
        mNames: ['Charlie','Max','Ace','Murphy','Archie','Tucker','Henry','Simba','Bruno', 'Brody', 'Tank', 'Oscar', 'Lynx', 'Fox', 'Teddy'],
        likesList: ['Ice Water', 'Kisses', 'Snuggles', 'Sniffing Air', 'Sniffing Butts', 'Swimming'],
        dislikesList: ['Vaccums', 'Baths', 'Getting Groomed', 'Small Children', 'Thunder', 'Fireworks'],
        factList: ['Yawning is contagious—even for dogs. Research shows that the sound of a human yawn can trigger one from your dog. And it is four times as likely to happen when it is the yawn of a person he knows', ' Is the most successful land hunter in the world. They are successful in 50-70% of their hunts, which makes them consistently the best mammalian hunter, they even hold the current Guinness World Record for it.', 'Sense of smell is legendary, but did you know that his nose has as many as 300 million receptors? In comparison, a human nose has about 5 million', 'Is as smart as a two-year old! Ever wonder why children around this age seem to have a special bond with the family dog? It could be because they speak the same language, roughly 250 words and gestures in fact.', 'Has a sense of time. It has been proven that they know the difference between a hour and five. If conditioned to, they can predict future events, such as regular walk times.', 'Petting a dog can actually benefit your physical and mental health. Studies have shown that petting a dog for 15 minutes can lower blood pressure by 10%, can help lower feelings of stress, depression, and combat loneliness', 'Do you have a dog that experiences separation anxiety? Try leaving some clothing with him that you\’ve worn. It\’s been proven that the scent you leave behind on your clothes can help ease your dog\’s separation anxiety'],

    }


    function changeSex(){
        let randomSex = Math.floor(Math.random() * 3)
        randomFemaleName = dogInfo.fNames
        

        if(randomSex < 1.5){
            document.querySelector('.sex').textContent = 'Male'
            document.querySelector('.sex').style.color = 'rgb(163,203,240)'
            document.querySelector('body').style.backgroundColor = 'rgb(163,203,240)'
            document.querySelector('.search-button').style.backgroundColor = 'rgb(163,203,240)'
        }else {
            document.querySelector('.sex').textContent = 'Female' 
            document.querySelector('.sex').style.color = 'rgb(248,200,220)'
            document.querySelector('body').style.backgroundColor = 'rgb(248,200,220)'
            document.querySelector('.search-button').style.backgroundColor = 'rgb(248,200,220)'
        }
    }

    function changeName(){
        if(document.querySelector('.sex').textContent == 'Male'){
            randomMaleName = Math.floor(Math.random() * dogInfo.mNames.length)
            document.querySelector('h1').textContent = dogInfo.mNames[randomMaleName]
        }else{
            randomFemaleName = Math.floor(Math.random() * dogInfo.fNames.length)
            document.querySelector('h1').textContent = dogInfo.fNames[randomFemaleName]
        }
    }


    function description(){
        let randomDescription = Math.floor(Math.random() * dogInfo.factList.length)
        document.querySelector('.description').textContent = dogInfo.factList[randomDescription]
    }




    
    
    
    
    
    
    
    
    
    
    
    
    


        



          
          