/**
 * Created by yaling.he on 2020/11/17.
 */

//供应商管理页面上点击删除按钮弹出删除框(providerList.html)
$(function () {
    $('.removeProvider').click(function () {
        $('.zhezhao').css('display', 'block');
        $('#removeProv').fadeIn();
    });
});

$(function () {
    $('#no').click(function () {
        $('.zhezhao').css('display', 'none');
        $('#removeProv').fadeOut();
    });
});


//订单管理页面上点击删除按钮弹出删除框(billList.html)
$(function () {
    $('.removeBill').click(function () {
        $('.zhezhao').css('display', 'block');
        $('#removeBi').fadeIn();
    });
});

$(function () {
    $('#no').click(function () {
        $('.zhezhao').css('display', 'none');
        $('#removeBi').fadeOut();
    });
});

//用户管理页面上点击删除按钮弹出删除框(userList.html)
$(function () {
    $('.removeUser').click(function () {
        $('.zhezhao').css('display', 'block');
        $('#removeUse').fadeIn();
    });
});

$(function () {
    $('#no').click(function () {
        $('.zhezhao').css('display', 'none');
        $('#removeUse').fadeOut();
    });
});

//删除按扭点击事件
Array.from(document.getElementsByClassName("del-btn")).forEach(i => {
    i.onclick = function () {
        let idx = this.getAttribute("data-id");
        window.location.href = '/billList/' + idx;
    }
})

//修改按扭点击事件
Array.from(document.getElementsByClassName("mod-btn")).forEach(i => {
    i.onclick = function () {
        let idx = this.getAttribute("data-id");
        window.location.href = '/billUpdate/' + idx;
    }
})
//管理员删除点击事件
Array.from(document.getElementsByClassName("del-btng")).forEach(i => {
    i.onclick = function () {
        let idx = this.getAttribute("data-id");
        window.location.href = '/providerList/' + idx;
    }
})
//管理员修改按扭点击事件
Array.from(document.getElementsByClassName("mod-btng")).forEach(i => {
    i.onclick = function () {
        let idx = this.getAttribute("data-id");
        window.location.href = '/providerUpdate/' + idx;
    }
})
//用户删除点击事件
Array.from(document.getElementsByClassName("del-btnu")).forEach(i => {
    i.onclick = function () {
        let idx = this.getAttribute("data-id");
        window.location.href = '/userList/' + idx;
    }
})
//用户修改按扭点击事件
Array.from(document.getElementsByClassName("mod-btnu")).forEach(i => {
    i.onclick = function () {
        let idx = this.getAttribute("data-id");
        window.location.href = '/userUpdate/' + idx;
    }
})