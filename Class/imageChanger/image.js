var image = document.querySelector('img');
var nxtBtn = document.querySelector('button');
var count = 0;

const img = [
       "https://imgs.search.brave.com/ss6xbRqvgNlYsIGIL58OHufCs4nZd8FViHelvpBDjXc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvb25l/LXBpZWNlLWRlc2t0/b3AtbWVhdC1wYXR0/ZXJuLWtyNDdodDE2/anlyZjd3OGQuanBn",
       "https://imgs.search.brave.com/9AH2Qp-BGu7TE5DhMLjz1TxK9l_eQ2v313fmdQnR7eY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvb25l/LXBpZWNlLXpvcm8t/NGstZ3JlZW4tMjhx/YmRudXltbHNqcTJ4/ci5qcGc",
       "https://imgs.search.brave.com/uYil_IO1ug8jEeOTxSceCU5uKfRImJdlnfYx58iDD7E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjUv/MTAvb25lLXBpZWNl/LWFuaW1lLWZlYXR1/cmVkLWltYWdlLXRo/ZS1zdHJhdy1oYXQt/cGlyYXRlLWNyZXct/ZnJvbS10aGUtb25l/LXBpZWNlLWFuaW1l/LnBuZz9xPTQ5JmZp/dD1jcm9wJnc9ODI1/JmRwcj0y",
       "https://imgs.search.brave.com/zgyGwaLDgwyuInF7SYBd4WNz5H-LB5QnGPWyHT1iXwg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZW1l/aGVpc3QuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA4/L0phbGRpLVdhaGEt/U2UtSGF0by1tZW1l/LTc1OHg0NDIuanBn",
       "https://imgs.search.brave.com/gHIuhp2cj-NXz4DCvAFzqIiPt4DoFHiVCFsXMz4-Kp0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/ZFBFNDRNcjl4ajhB/QUFBTS9tYWFrYWJo/b3NkYS1hYnVzaXZl/LmdpZg.gif",
       "https://imgs.search.brave.com/ECS49ZTivCtwa_-7NgItqOwaXo_7lWcKF2L1KCI53MA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YTEuZ2lwaHkuY29t/L21lZGlhL3YxLlky/bGtQVGM1TUdJM05q/RXhlakJwWjNwbU0z/UTFaek5sY0hodWVq/Tm9kM1oyYmpOd2NY/ZG1NbXM1T0RseU0z/Z3daRGsxYmlabGNE/MTJNVjluYVdaelgz/TmxZWEpqYUNaamRE/MW4vMjZGZVlOY1Jy/SE5jNG1HNmsvMjAw/LmdpZg.jpeg",
       "https://imgs.search.brave.com/x2nno3q6s-tYHJfuHmkmYx0oHAfXEk8t82LO_bvnjVY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/Zy1xTGQ4RGVpdU1B/QUFBTS9hbWl0YWJo/LWJhY2hjaGFuLmdp/Zg.gif",
       "https://imgs.search.brave.com/CPRMjAxt2mtVvxDMgzGeMn9bZCToT65wZmnjFO_pyWw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/allmLUdYM3lNeTBB/QUFBTS9zaGFoaWQt/a2Fwb29yLWphYmJh/LmdpZg.gif",
       "https://imgs.search.brave.com/3iaHa2KJqhDz4ijdf4ZcNfTf1o-QBefZPYhFbpDf0Eg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/ZjhxaW1fWnBXUzBB/QUFBTS9iaG9vbC1i/aHVsYWl5YWEuZ2lm.gif",
       "https://imgs.search.brave.com/AfcDhgEbIERnG3SwVXdyIDcQ6c5WqWCe9y8npnZQUa0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA4L2M3/LzE5LzA4YzcxOWRh/YjQ4YTRiOTA5YjM4/YzQ0ZjlmMDQ0NDkw/LmpwZw",
];

function nextImg(){
      image.setAttribute('src',img[count]);
      count++;
      if(count==10){
        count=0;
      }
}





nxtBtn.addEventListener('click',nextImg);