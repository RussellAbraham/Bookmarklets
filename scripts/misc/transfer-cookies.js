h = location.host;

z = "Bookmarklet: <a href=\"javascript:if(location.host!='" + h + "')location='http://" + h;

v = document;

function s(c, y) {
    v.cookie = a = c + "; domain=" + d + "; path=/; expires=" + new Date((new Date).getTime() + y * 1e11).toGMTString()
}

C = v.cookie.split("; ");

d = ".." + h;

while (d = ("" + d).substr(1).match(/\..*$/))
    for (i in C)
        if (c = C[i]) {
            s(c.match(/.*=/) + C, 1);
            q = v.cookie;
            q.split(";").length > C.length ? s(c, -1) : q.match(C) ? (s(c, 1),
            z = a + "<br>" + z + "';document.cookie='" + a) : 0
        }
v.write(z + "';[].v\">my " + h + " cookies</a>")
