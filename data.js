const data = [
    {
        preTitle: 'GET READY',
        title: 'Save time at iPhone pre-order',
        description: 'Get ready for iPhone 13 and iPhone 13 Pro pre-order now. Then speed through checkout on 9.17.',
        img: '1',
    },
    {
        preTitle: 'PRE-ORDER 9.17',
        title: 'iPhone 13 Pro. Oh. So. Pro.',
        description: 'From $999 or $41.62/mo. for 24 mo. before trade-in*',
        img: '2',
    },
    {
        preTitle: 'IPAD MINI',
        title: 'Mega power. Mini sized. ',
        description: 'From $499 or $41.58/mo. for 12 mo.',
        img: '3',
    }
]

let container = document.querySelector('.container')

for (let item of data) {
    let box = document.createElement('div')
    let boxes = document.createElement('div')
    let box__pretitle = document.createElement('span')
    let h2 = document.createElement('h2')
    let box__desc = document.createElement('p')
    let elem = document.createElement('div')
    let img = document.createElement('img')

    box.classList.add('box')
    boxes.classList.add('boxes')
    elem.classList.add('elem')

    img.src = `./img/${item.img}.jpg`
  

    box__pretitle.innerHTML = item.preTitle
    h2.innerHTML = item.title
    box__desc.innerHTML = item.description

    elem.append(img)
    boxes.append(box__pretitle, h2, box__desc)
    box.append(boxes, elem)
    container.append(box)

    // document.body.prepent(box) 
}