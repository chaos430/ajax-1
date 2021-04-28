let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', `/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li);
            });
            n += 1;
        }
    }
    request.send()
}




getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    };
    request.send()
};




getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    };
    request.send()
};



getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            //创建div
            const div = document.createElement('div')
                //填写div
            div.innerHTML = request.response
                //插入
            document.body.appendChild(div)
        }

    };
    request.send()
};





getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            //创建script标签
            const script = document.createElement('script')
                //填写script内容
            script.innerHTML = request.response
                //插到身体里
            document.body.appendChild(script)
        }
    };

    request.send()
};




getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/style.css');
    request.onreadystatechange = () => {
        //下载完成，但不知道成功还是失败
        if (request.readyState === 4) {

            if (request.status >= 200 && request.status < 300) {
                //创建 style 标签
                const style = document.createElement('style')
                    //填写style 内容
                style.innerHTML = request.response
                    //插到头里面
                document.head.appendChild(style)
            } else {
                alert('加载css失败')
            }

        }
    };
    request.send()
};