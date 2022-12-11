$(function () {

    $('.menu li.for-mobile a').click(function (e) {
        e.preventDefault();
        var target = $($(this).attr('href'));
        var scrollTo = target.offset().top;
        $('body, html').animate({scrollTop: scrollTo + 'px'}, 500);
    });

    if ($(".graph").length) {
        var i, a = {
            container: document.getElementById("graph1"), renderer: "svg", loop: !1, autoplay: !1, animationData: {
                v: "5.1.7",
                fr: 25,
                ip: 0,
                op: 152,
                w: 1170,
                h: 860,
                nm: "Comp 3",
                ddd: 0,
                assets: [],
                fonts: {
                    list: [{
                        fName: "MuseoSansCyrl-100",
                        fFamily: "Museo Sans Cyrl",
                        fStyle: "100",
                        ascent: 69.9996948242188
                    }, {
                        fName: "MuseoSansCyrl-300",
                        fFamily: "Museo Sans Cyrl",
                        fStyle: "300",
                        ascent: 70.2987670898438
                    }]
                },
                layers: [{
                    ddd: 0,
                    ind: 1,
                    ty: 5,
                    nm: "CPA, $",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 59,
                                s: [0],
                                e: [100]
                            }, {t: 106}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [618.879, 790.492, 0], ix: 2},
                        a: {a: 0, k: [35.879, -8.508, 0], ix: 1},
                        s: {a: 0, k: [100, 100, 100], ix: 6}
                    },
                    ao: 0,
                    t: {
                        d: {
                            k: [{
                                s: {
                                    s: 24,
                                    f: "MuseoSansCyrl-300",
                                    t: "CPA, $",
                                    j: 0,
                                    tr: 2,
                                    lh: 28.8,
                                    ls: 0,
                                    fc: [.67, .67, .68]
                                }, t: 0
                            }]
                        }, p: {}, m: {g: 1, a: {a: 0, k: [0, 0], ix: 2}}, a: []
                    },
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 2,
                    ty: 5,
                    nm: "FTDs per/mo",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 59,
                                s: [0],
                                e: [100]
                            }, {t: 106}],
                            ix: 11
                        },
                        r: {a: 0, k: -90, ix: 10},
                        p: {a: 0, k: [29.225, 409.45, 0], ix: 2},
                        a: {a: 0, k: [72.225, -6.55, 0], ix: 1},
                        s: {a: 0, k: [100, 100, 100], ix: 6}
                    },
                    ao: 0,
                    t: {
                        d: {
                            k: [{
                                s: {
                                    s: 24,
                                    f: "MuseoSansCyrl-300",
                                    t: "FTDs per/mo",
                                    j: 0,
                                    tr: 2,
                                    lh: 28.8,
                                    ls: 0,
                                    fc: [.67, .67, .68]
                                }, t: 0
                            }]
                        }, p: {}, m: {g: 1, a: {a: 0, k: [0, 0], ix: 2}}, a: []
                    },
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 3,
                    ty: 5,
                    nm: "CPA",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 59,
                                s: [0],
                                e: [100]
                            }, {t: 106}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [362.5, 159, 0], ix: 2},
                        a: {a: 0, k: [0, 0, 0], ix: 1},
                        s: {a: 0, k: [100, 100, 100], ix: 6}
                    },
                    ao: 0,
                    t: {
                        d: {
                            k: [{
                                s: {
                                    s: 38,
                                    f: "MuseoSansCyrl-100",
                                    t: "CPA",
                                    j: 2,
                                    tr: 100,
                                    lh: 45.6,
                                    ls: 0,
                                    fc: [1, 1, 1]
                                }, t: 0
                            }]
                        }, p: {}, m: {g: 1, a: {a: 0, k: [0, 0], ix: 2}}, a: []
                    },
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 4,
                    ty: 4,
                    nm: "CPA/addictionals Outlines",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 59,
                                s: [0],
                                e: [100]
                            }, {t: 106}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [585, 430, 0], ix: 2},
                        a: {a: 0, k: [296, 186.5, 0], ix: 1},
                        s: {a: 0, k: [239.501, 239.501, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, -2.244], [2.243, 0], [0, 2.244], [-2.244, 0]],
                                    o: [[0, 2.244], [-2.244, 0], [0, -2.244], [2.243, 0]],
                                    v: [[4.063, 0], [0, 4.062], [-4.063, 0], [0, -4.062]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-156.253, 304.164], [435.086, 304.164], [435.086, -68.295], [-156.253, -68.295]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-156.253, -68.295], [435.086, -68.295], [435.086, 304.164], [-156.253, 304.164]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [156.253, 68.295], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 4,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[-18.032, .5], [18.031, .5], [18.031, -.5], [-18.032, -.5]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.243000000598, .305999995213, .375999989229, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [156.253, 68.295], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 2",
                        np: 2,
                        cix: 2,
                        ix: 2,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[138.221, 68.295], [174.284, 68.295]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 3",
                        np: 2,
                        cix: 2,
                        ix: 3,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 6,
                    ty: 4,
                    nm: "Down markers",
                    sr: 1,
                    ks: {
                        o: {a: 0, k: 100, ix: 11},
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [585, 430, 0], ix: 2},
                        a: {a: 0, k: [296, 186.5, 0], ix: 1},
                        s: {a: 0, k: [229.152, 229.152, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[156.336, 302.17], [156.336, 306.135]],
                                    c: !1
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "st",
                            c: {a: 0, k: [.243000000598, .305999995213, .375999989229, 1], ix: 3},
                            o: {a: 0, k: 100, ix: 4},
                            w: {a: 0, k: 1, ix: 5},
                            lc: 1,
                            lj: 1,
                            ml: 10,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[392.003, 302.17], [392.003, 306.135]],
                                    c: !1
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "st",
                            c: {a: 0, k: [.243000000598, .305999995213, .375999989229, 1], ix: 3},
                            o: {a: 0, k: 100, ix: 4},
                            w: {a: 0, k: 1, ix: 5},
                            lc: 1,
                            lj: 1,
                            ml: 10,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 3",
                        np: 2,
                        cix: 2,
                        ix: 2,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[392.003, 306.134], [392.003, 302.169]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 4",
                        np: 2,
                        cix: 2,
                        ix: 3,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[450.919, 302.17], [450.919, 306.135]],
                                    c: !1
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "st",
                            c: {a: 0, k: [.243000000598, .305999995213, .375999989229, 1], ix: 3},
                            o: {a: 0, k: 100, ix: 4},
                            w: {a: 0, k: 1, ix: 5},
                            lc: 1,
                            lj: 1,
                            ml: 10,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 5",
                        np: 2,
                        cix: 2,
                        ix: 4,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[450.92, 306.134], [450.92, 302.169]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 6",
                        np: 2,
                        cix: 2,
                        ix: 5,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[450.919, 302.17], [450.919, 306.135]],
                                    c: !1
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "st",
                            c: {a: 0, k: [.243000000598, .305999995213, .375999989229, 1], ix: 3},
                            o: {a: 0, k: 100, ix: 4},
                            w: {a: 0, k: 1, ix: 5},
                            lc: 1,
                            lj: 1,
                            ml: 10,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 7",
                        np: 2,
                        cix: 2,
                        ix: 6,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[450.92, 306.134], [450.92, 302.169]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 8",
                        np: 2,
                        cix: 2,
                        ix: 7,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[333.086, 302.17], [333.086, 306.135]],
                                    c: !1
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "st",
                            c: {a: 0, k: [.243000000598, .305999995213, .375999989229, 1], ix: 3},
                            o: {a: 0, k: 100, ix: 4},
                            w: {a: 0, k: 1, ix: 5},
                            lc: 1,
                            lj: 1,
                            ml: 10,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 9",
                        np: 2,
                        cix: 2,
                        ix: 8,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[333.086, 306.134], [333.086, 302.169]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 10",
                        np: 2,
                        cix: 2,
                        ix: 9,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[215.253, 302.17], [215.253, 306.135]],
                                    c: !1
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "st",
                            c: {a: 0, k: [.243000000598, .305999995213, .375999989229, 1], ix: 3},
                            o: {a: 0, k: 100, ix: 4},
                            w: {a: 0, k: 1, ix: 5},
                            lc: 1,
                            lj: 1,
                            ml: 10,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 11",
                        np: 2,
                        cix: 2,
                        ix: 10,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[215.253, 306.134], [215.253, 302.169]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 12",
                        np: 2,
                        cix: 2,
                        ix: 11,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[274.169, 302.17], [274.169, 306.135]],
                                    c: !1
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "st",
                            c: {a: 0, k: [.243000000598, .305999995213, .375999989229, 1], ix: 3},
                            o: {a: 0, k: 100, ix: 4},
                            w: {a: 0, k: 1, ix: 5},
                            lc: 1,
                            lj: 1,
                            ml: 10,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 13",
                        np: 2,
                        cix: 2,
                        ix: 12,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[274.17, 306.134], [274.17, 302.169]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 14",
                        np: 2,
                        cix: 2,
                        ix: 13,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "tm",
                        s: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 32,
                                s: [0],
                                e: [100]
                            }, {t: 54}],
                            ix: 1
                        },
                        e: {a: 0, k: 0, ix: 2},
                        o: {a: 0, k: 0, ix: 3},
                        m: 1,
                        ix: 14,
                        nm: "Trim Paths 1",
                        mn: "ADBE Vector Filter - Trim",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 7,
                    ty: 4,
                    nm: "Left side marks",
                    sr: 1,
                    ks: {
                        o: {a: 0, k: 100, ix: 11},
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [585, 430, 0], ix: 2},
                        a: {a: 0, k: [296, 186.5, 0], ix: 1},
                        s: {a: 0, k: [229.152, 229.152, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[97.419, 53.536], [93.169, 53.536]],
                                    c: !1
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "st",
                            c: {a: 0, k: [.243000000598, .305999995213, .375999989229, 1], ix: 3},
                            o: {a: 0, k: 100, ix: 4},
                            w: {a: 0, k: 1, ix: 5},
                            lc: 1,
                            lj: 1,
                            ml: 10,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[93.169, 53.537], [97.42, 53.537]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 2",
                        np: 2,
                        cix: 2,
                        ix: 2,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[97.419, 103.17], [93.169, 103.17]],
                                    c: !1
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "st",
                            c: {a: 0, k: [.243000000598, .305999995213, .375999989229, 1], ix: 3},
                            o: {a: 0, k: 100, ix: 4},
                            w: {a: 0, k: 1, ix: 5},
                            lc: 1,
                            lj: 1,
                            ml: 10,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 3",
                        np: 2,
                        cix: 2,
                        ix: 3,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[93.169, 103.17], [97.42, 103.17]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 4",
                        np: 2,
                        cix: 2,
                        ix: 4,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[97.419, 152.336], [93.169, 152.336]],
                                    c: !1
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "st",
                            c: {a: 0, k: [.243000000598, .305999995213, .375999989229, 1], ix: 3},
                            o: {a: 0, k: 100, ix: 4},
                            w: {a: 0, k: 1, ix: 5},
                            lc: 1,
                            lj: 1,
                            ml: 10,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 5",
                        np: 2,
                        cix: 2,
                        ix: 5,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[93.169, 152.336], [97.42, 152.336]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 6",
                        np: 2,
                        cix: 2,
                        ix: 6,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[97.419, 202.045], [93.169, 202.045]],
                                    c: !1
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "st",
                            c: {a: 0, k: [.243000000598, .305999995213, .375999989229, 1], ix: 3},
                            o: {a: 0, k: 100, ix: 4},
                            w: {a: 0, k: 1, ix: 5},
                            lc: 1,
                            lj: 1,
                            ml: 10,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 7",
                        np: 2,
                        cix: 2,
                        ix: 7,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[93.169, 202.045], [97.42, 202.045]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 8",
                        np: 2,
                        cix: 2,
                        ix: 8,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[97.419, 252.232], [93.169, 252.232]],
                                    c: !1
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "st",
                            c: {a: 0, k: [.243000000598, .305999995213, .375999989229, 1], ix: 3},
                            o: {a: 0, k: 100, ix: 4},
                            w: {a: 0, k: 1, ix: 5},
                            lc: 1,
                            lj: 1,
                            ml: 10,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 9",
                        np: 2,
                        cix: 2,
                        ix: 9,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[93.169, 252.233], [97.42, 252.233]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 10",
                        np: 2,
                        cix: 2,
                        ix: 10,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "tm",
                        s: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 30,
                                s: [0],
                                e: [100]
                            }, {t: 52}],
                            ix: 1
                        },
                        e: {a: 0, k: 0, ix: 2},
                        o: {a: 0, k: 0, ix: 3},
                        m: 1,
                        ix: 11,
                        nm: "Trim Paths 1",
                        mn: "ADBE Vector Filter - Trim",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 8,
                    ty: 4,
                    nm: "Down line",
                    sr: 1,
                    ks: {
                        o: {a: 0, k: 100, ix: 11},
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [585, 430, 0], ix: 2},
                        a: {a: 0, k: [296, 186.5, 0], ix: 1},
                        s: {a: 0, k: [229.152, 229.152, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[93.169, 302.17], [532.599, 302.17]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "st",
                            c: {a: 0, k: [.243000000598, .305999995213, .375999989229, 1], ix: 3},
                            o: {a: 0, k: 100, ix: 4},
                            w: {a: 0, k: 1, ix: 5},
                            lc: 1,
                            lj: 1,
                            ml: 10,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[93.169, 302.17], [532.599, 302.17]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 2",
                        np: 2,
                        cix: 2,
                        ix: 2,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "tm",
                        s: {
                            a: 1,
                            k: [{
                                i: {x: [.306], y: [1.005]},
                                o: {x: [.793], y: [.013]},
                                n: ["0p306_1p005_0p793_0p013"],
                                t: 15,
                                s: [0],
                                e: [100]
                            }, {t: 53}],
                            ix: 1
                        },
                        e: {a: 0, k: 0, ix: 2},
                        o: {a: 0, k: 0, ix: 3},
                        m: 1,
                        ix: 3,
                        nm: "Trim Paths 1",
                        mn: "ADBE Vector Filter - Trim",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 9,
                    ty: 4,
                    nm: "Down numbers",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 59,
                                s: [0],
                                e: [100]
                            }, {t: 106}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [585, 430, 0], ix: 2},
                        a: {a: 0, k: [296, 186.5, 0], ix: 1},
                        s: {a: 0, k: [229.152, 229.152, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.027], [1.608, 0], [0, -2.003], [-1.595, 0]],
                                    o: [[0, -2.003], [-1.595, 0], [0, 2.027], [1.608, 0]],
                                    v: [[2.045, -.006], [-.007, -3.568], [-2.044, -.006], [-.007, 3.58]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.435], [-2.182, 0], [0, -2.423], [2.196, 0]],
                                    o: [[0, -2.423], [2.196, 0], [0, 2.435], [-2.182, 0]],
                                    v: [[-2.908, -.006], [-.007, -4.36], [2.909, -.006], [-.007, 4.36]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 2",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-461.039, 52.688], [130.3, 52.688], [130.3, -319.771], [-461.039, -319.771]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-461.039, -319.771], [130.3, -319.771], [130.3, 52.688], [-461.039, 52.688]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 4,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [461.039, 319.771], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 6,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-.949, 0], [0, 1.151], [1.211, 0], [.42, -.288], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-.492, 0], [0, -1.512], [1.643, 0], [.564, .755]],
                                    o: [[.324, .468], [1.163, 0], [0, -1.151], [-.515, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-.036, .299], [0, 0], [.227, -.145], [1.691, 0], [0, 1.558], [-.971, 0], [0, 0]],
                                    v: [[-2.158, 2.512], [-.262, 3.484], [1.836, 1.517], [-.299, -.474], [-1.835, -.007], [-2.362, -.199], [-1.906, -4.288], [2.172, -4.288], [2.172, -3.544], [-1.176, -3.544], [-1.427, -1.384], [-1.499, -.905], [-1.474, -.905], [-.203, -1.229], [2.699, 1.517], [-.227, 4.288], [-2.698, 3.1]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-454.025, 52.615], [137.314, 52.615], [137.314, -319.844], [-454.025, -319.844]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-454.025, -319.844], [137.314, -319.844], [137.314, 52.615], [-454.025, 52.615]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [454.025, 319.844], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 2",
                        np: 4,
                        cix: 2,
                        ix: 2,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, .168], [0, 2.278], [1.055, 0], [.408, -.66], [0, 0], [-1.14, 0], [0, -1.319], [.025, -2.243], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, -2.963], [0, -.924], [-.792, 0], [0, 0], [.468, -.851], [1.595, 0], [0, 2.83], [0, 0], [0, 0], [0, 0], [-.024, -.191]],
                                    v: [[-2.662, 3.748], [1.668, -1.877], [-.083, -3.496], [-1.978, -2.345], [-2.59, -2.764], [-.035, -4.288], [2.531, -1.924], [-1.751, 3.544], [2.663, 3.544], [2.663, 4.287], [-2.615, 4.287]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-447.269, 52.759], [144.07, 52.759], [144.07, -319.7], [-447.269, -319.7]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-447.269, -319.7], [144.07, -319.7], [144.07, 52.759], [-447.269, 52.759]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [447.269, 319.7], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 3",
                        np: 4,
                        cix: 2,
                        ix: 3,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-.815, 0], [0, .911], [0, 2.566], [-1.332, .168], [0, 0], [0, 0], [0, 0], [-.563, -.516], [0, 0], [.67, 0], [0, -.744], [0, -2.723], [1.391, -.131], [0, 0], [0, 0], [0, 0], [.599, .635]],
                                    o: [[.528, .54], [.924, 0], [0, -2.051], [0, -1.104], [0, 0], [0, 0], [0, 0], [.732, .036], [0, 0], [-.456, -.42], [-1.081, 0], [0, 1.943], [0, 1.163], [0, 0], [0, 0], [0, 0], [-.84, -.059], [0, 0]],
                                    v: [[-2.123, 2.65], [.084, 3.574], [1.763, 2.111], [-2.482, -2.087], [-.275, -4.318], [-.275, -5.457], [.396, -5.457], [.396, -4.329], [2.398, -3.538], [1.991, -2.842], [.145, -3.562], [-1.631, -2.111], [2.614, 2.087], [.396, 4.341], [.396, 5.457], [-.275, 5.457], [-.275, 4.341], [-2.614, 3.286]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-440.501, 52.693], [150.838, 52.693], [150.838, -319.766], [-440.501, -319.766]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-440.501, -319.766], [150.838, -319.766], [150.838, 52.693], [-440.501, 52.693]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [440.501, 319.766], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 4",
                        np: 4,
                        cix: 2,
                        ix: 4,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.027], [1.608, 0], [0, -2.003], [-1.595, 0]],
                                    o: [[0, -2.003], [-1.595, 0], [0, 2.027], [1.608, 0]],
                                    v: [[2.045, -.006], [-.006, -3.568], [-2.045, -.006], [-.006, 3.58]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.435], [-2.182, 0], [0, -2.423], [2.196, 0]],
                                    o: [[0, -2.423], [2.196, 0], [0, 2.435], [-2.182, 0]],
                                    v: [[-2.908, -.006], [-.006, -4.36], [2.908, -.006], [-.006, 4.36]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 2",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-343.577, 52.688], [247.762, 52.688], [247.762, -319.771], [-343.577, -319.771]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-343.577, -319.771], [247.762, -319.771], [247.762, 52.688], [-343.577, 52.688]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 4,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [343.577, 319.771], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 5",
                        np: 6,
                        cix: 2,
                        ix: 5,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.027], [1.608, 0], [0, -2.003], [-1.595, 0]],
                                    o: [[0, -2.003], [-1.595, 0], [0, 2.027], [1.608, 0]],
                                    v: [[2.045, -.006], [-.007, -3.568], [-2.044, -.006], [-.007, 3.58]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.435], [-2.181, 0], [0, -2.423], [2.196, 0]],
                                    o: [[0, -2.423], [2.196, 0], [0, 2.435], [-2.181, 0]],
                                    v: [[-2.908, -.006], [-.007, -4.36], [2.909, -.006], [-.007, 4.36]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 2",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-336.174, 52.688], [255.165, 52.688], [255.165, -319.771], [-336.174, -319.771]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-336.174, -319.771], [255.165, -319.771], [255.165, 52.688], [-336.174, 52.688]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 4,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [336.174, 319.771], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 6",
                        np: 6,
                        cix: 2,
                        ix: 6,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, .168], [0, 2.278], [1.056, 0], [.408, -.66], [0, 0], [-1.141, 0], [0, -1.319], [.025, -2.243], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, -2.963], [0, -.924], [-.791, 0], [0, 0], [.467, -.851], [1.595, 0], [0, 2.83], [0, 0], [0, 0], [0, 0], [-.025, -.191]],
                                    v: [[-2.662, 3.748], [1.668, -1.877], [-.084, -3.496], [-1.978, -2.345], [-2.59, -2.764], [-.035, -4.288], [2.531, -1.924], [-1.751, 3.544], [2.662, 3.544], [2.662, 4.287], [-2.614, 4.287]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-329.064, 52.759], [262.275, 52.759], [262.275, -319.7], [-329.064, -319.7]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-329.064, -319.7], [262.275, -319.7], [262.275, 52.759], [-329.064, 52.759]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [329.064, 319.7], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 7",
                        np: 4,
                        cix: 2,
                        ix: 7,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-.816, 0], [0, .911], [0, 2.566], [-1.332, .168], [0, 0], [0, 0], [0, 0], [-.563, -.516], [0, 0], [.67, 0], [0, -.744], [0, -2.723], [1.391, -.131], [0, 0], [0, 0], [0, 0], [.599, .635]],
                                    o: [[.527, .54], [.924, 0], [0, -2.051], [0, -1.104], [0, 0], [0, 0], [0, 0], [.731, .036], [0, 0], [-.455, -.42], [-1.081, 0], [0, 1.943], [0, 1.163], [0, 0], [0, 0], [0, 0], [-.84, -.059], [0, 0]],
                                    v: [[-2.122, 2.65], [.084, 3.574], [1.763, 2.111], [-2.482, -2.087], [-.275, -4.318], [-.275, -5.457], [.396, -5.457], [.396, -4.329], [2.398, -3.538], [1.99, -2.842], [.145, -3.562], [-1.631, -2.111], [2.615, 2.087], [.396, 4.341], [.396, 5.457], [-.275, 5.457], [-.275, 4.341], [-2.615, 3.286]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-322.296, 52.693], [269.043, 52.693], [269.043, -319.766], [-322.296, -319.766]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-322.296, -319.766], [269.043, -319.766], [269.043, 52.693], [-322.296, 52.693]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [322.296, 319.766], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 8",
                        np: 4,
                        cix: 2,
                        ix: 8,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-.949, 0], [0, 1.151], [1.211, 0], [.42, -.288], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-.492, 0], [0, -1.512], [1.643, 0], [.564, .755]],
                                    o: [[.324, .468], [1.163, 0], [0, -1.151], [-.515, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-.036, .299], [0, 0], [.227, -.145], [1.691, 0], [0, 1.558], [-.971, 0], [0, 0]],
                                    v: [[-2.158, 2.512], [-.262, 3.484], [1.836, 1.517], [-.299, -.474], [-1.835, -.007], [-2.362, -.199], [-1.906, -4.288], [2.172, -4.288], [2.172, -3.544], [-1.176, -3.544], [-1.427, -1.384], [-1.499, -.905], [-1.474, -.905], [-.203, -1.229], [2.699, 1.517], [-.227, 4.288], [-2.698, 3.1]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-401.944, 52.615], [189.395, 52.615], [189.395, -319.844], [-401.944, -319.844]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-401.944, -319.844], [189.395, -319.844], [189.395, 52.615], [-401.944, 52.615]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [401.944, 319.844], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 9",
                        np: 4,
                        cix: 2,
                        ix: 9,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, .168], [0, 2.278], [1.056, 0], [.407, -.66], [0, 0], [-1.14, 0], [0, -1.319], [.024, -2.243], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, -2.963], [0, -.924], [-.792, 0], [0, 0], [.468, -.851], [1.596, 0], [0, 2.83], [0, 0], [0, 0], [0, 0], [-.025, -.191]],
                                    v: [[-2.662, 3.748], [1.667, -1.877], [-.084, -3.496], [-1.978, -2.345], [-2.591, -2.764], [-.036, -4.288], [2.53, -1.924], [-1.751, 3.544], [2.662, 3.544], [2.662, 4.287], [-2.614, 4.287]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-395.189, 52.759], [196.15, 52.759], [196.15, -319.7], [-395.189, -319.7]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-395.189, -319.7], [196.15, -319.7], [196.15, 52.759], [-395.189, 52.759]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [395.189, 319.7], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 10",
                        np: 4,
                        cix: 2,
                        ix: 10,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, .168], [0, 2.278], [1.055, 0], [.408, -.66], [0, 0], [-1.14, 0], [0, -1.319], [.025, -2.243], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, -2.963], [0, -.924], [-.792, 0], [0, 0], [.468, -.851], [1.595, 0], [0, 2.83], [0, 0], [0, 0], [0, 0], [-.024, -.191]],
                                    v: [[-2.663, 3.748], [1.667, -1.877], [-.084, -3.496], [-1.979, -2.345], [-2.591, -2.764], [-.036, -4.288], [2.53, -1.924], [-1.752, 3.544], [2.662, 3.544], [2.662, 4.287], [-2.615, 4.287]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-388.421, 52.759], [202.918, 52.759], [202.918, -319.7], [-388.421, -319.7]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-388.421, -319.7], [202.918, -319.7], [202.918, 52.759], [-388.421, 52.759]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [388.421, 319.7], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 11",
                        np: 4,
                        cix: 2,
                        ix: 11,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-.815, 0], [0, .911], [0, 2.566], [-1.332, .168], [0, 0], [0, 0], [0, 0], [-.563, -.516], [0, 0], [.671, 0], [0, -.744], [0, -2.723], [1.391, -.131], [0, 0], [0, 0], [0, 0], [.599, .635]],
                                    o: [[.528, .54], [.924, 0], [0, -2.051], [0, -1.104], [0, 0], [0, 0], [0, 0], [.732, .036], [0, 0], [-.456, -.42], [-1.08, 0], [0, 1.943], [0, 1.163], [0, 0], [0, 0], [0, 0], [-.84, -.059], [0, 0]],
                                    v: [[-2.123, 2.65], [.084, 3.574], [1.763, 2.111], [-2.482, -2.087], [-.275, -4.318], [-.275, -5.457], [.396, -5.457], [.396, -4.329], [2.398, -3.538], [1.991, -2.842], [.144, -3.562], [-1.631, -2.111], [2.614, 2.087], [.396, 4.341], [.396, 5.457], [-.275, 5.457], [-.275, 4.341], [-2.614, 3.286]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-381.653, 52.693], [209.686, 52.693], [209.686, -319.766], [-381.653, -319.766]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-381.653, -319.766], [209.686, -319.766], [209.686, 52.693], [-381.653, 52.693]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [381.653, 319.766], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 12",
                        np: 4,
                        cix: 2,
                        ix: 12,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.027], [1.608, 0], [0, -2.003], [-1.595, 0]],
                                    o: [[0, -2.003], [-1.595, 0], [0, 2.027], [1.608, 0]],
                                    v: [[2.045, -.006], [-.007, -3.568], [-2.044, -.006], [-.007, 3.58]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.435], [-2.182, 0], [0, -2.423], [2.195, 0]],
                                    o: [[0, -2.423], [2.195, 0], [0, 2.435], [-2.182, 0]],
                                    v: [[-2.908, -.006], [-.007, -4.36], [2.909, -.006], [-.007, 4.36]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 2",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-224.821, 52.891], [366.518, 52.891], [366.518, -319.568], [-224.821, -319.568]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-224.821, -319.568], [366.518, -319.568], [366.518, 52.891], [-224.821, 52.891]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 4,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [224.821, 319.568], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 13",
                        np: 6,
                        cix: 2,
                        ix: 13,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-.948, 0], [0, 1.151], [1.211, 0], [.42, -.288], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-.492, 0], [0, -1.512], [1.643, 0], [.564, .755]],
                                    o: [[.324, .468], [1.163, 0], [0, -1.151], [-.516, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-.036, .299], [0, 0], [.227, -.145], [1.691, 0], [0, 1.558], [-.972, 0], [0, 0]],
                                    v: [[-2.158, 2.512], [-.264, 3.484], [1.835, 1.517], [-.299, -.474], [-1.835, -.007], [-2.363, -.199], [-1.906, -4.288], [2.171, -4.288], [2.171, -3.544], [-1.176, -3.544], [-1.428, -1.385], [-1.499, -.906], [-1.475, -.906], [-.204, -1.229], [2.699, 1.517], [-.227, 4.287], [-2.699, 3.1]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-217.807, 52.818], [373.532, 52.818], [373.532, -319.641], [-217.807, -319.641]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-217.807, -319.641], [373.532, -319.641], [373.532, 52.818], [-217.807, 52.818]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [217.807, 319.641], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 14",
                        np: 4,
                        cix: 2,
                        ix: 14,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [.336, -.336], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, -.241], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[-2.285, 3.472], [-.39, 3.472], [-.39, -2.716], [-.378, -3.184], [-.402, -3.184], [-.822, -2.68], [-1.722, -1.794], [-2.249, -2.321], [-.342, -4.215], [.425, -4.215], [.425, 3.472], [2.284, 3.472], [2.284, 4.215], [-2.285, 4.215]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-211.765, 52.89], [379.574, 52.89], [379.574, -319.569], [-211.765, -319.569]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-211.765, -319.569], [379.574, -319.569], [379.574, 52.89], [-211.765, 52.89]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [211.765, 319.569], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 15",
                        np: 4,
                        cix: 2,
                        ix: 15,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-.816, 0], [0, .911], [0, 2.566], [-1.331, .168], [0, 0], [0, 0], [0, 0], [-.563, -.516], [0, 0], [.671, 0], [0, -.744], [0, -2.723], [1.391, -.131], [0, 0], [0, 0], [0, 0], [.6, .635]],
                                    o: [[.528, .54], [.923, 0], [0, -2.051], [0, -1.104], [0, 0], [0, 0], [0, 0], [.731, .036], [0, 0], [-.456, -.42], [-1.08, 0], [0, 1.943], [0, 1.163], [0, 0], [0, 0], [0, 0], [-.84, -.059], [0, 0]],
                                    v: [[-2.122, 2.65], [.084, 3.574], [1.763, 2.111], [-2.482, -2.087], [-.276, -4.318], [-.276, -5.457], [.396, -5.457], [.396, -4.329], [2.398, -3.538], [1.992, -2.842], [.145, -3.562], [-1.631, -2.111], [2.615, 2.087], [.396, 4.341], [.396, 5.457], [-.276, 5.457], [-.276, 4.341], [-2.615, 3.286]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-205.387, 52.896], [385.952, 52.896], [385.952, -319.563], [-205.387, -319.563]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-205.387, -319.563], [385.952, -319.563], [385.952, 52.896], [-205.387, 52.896]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [205.387, 319.563], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 16",
                        np: 4,
                        cix: 2,
                        ix: 16,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-.948, 0], [0, 1.151], [1.212, 0], [.42, -.288], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-.491, 0], [0, -1.512], [1.642, 0], [.563, .755]],
                                    o: [[.323, .468], [1.163, 0], [0, -1.151], [-.515, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-.036, .299], [0, 0], [.227, -.145], [1.692, 0], [0, 1.558], [-.972, 0], [0, 0]],
                                    v: [[-2.158, 2.512], [-.263, 3.484], [1.835, 1.517], [-.3, -.474], [-1.835, -.007], [-2.362, -.199], [-1.907, -4.288], [2.171, -4.288], [2.171, -3.544], [-1.175, -3.544], [-1.427, -1.385], [-1.499, -.906], [-1.474, -.906], [-.204, -1.229], [2.698, 1.517], [-.227, 4.287], [-2.698, 3.1]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-283.337, 52.818], [308.002, 52.818], [308.002, -319.641], [-283.337, -319.641]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-283.337, -319.641], [308.002, -319.641], [308.002, 52.818], [-283.337, 52.818]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [283.337, 319.641], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 17",
                        np: 4,
                        cix: 2,
                        ix: 17,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [.42, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[.228, -.455], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[1.373, -2.693], [1.829, -3.472], [1.829, -3.497], [1.205, -3.472], [-2.74, -3.472], [-2.74, -4.215], [2.74, -4.215], [2.74, -3.64], [-1.17, 4.215], [-2.033, 4.215]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-276.936, 52.89], [314.403, 52.89], [314.403, -319.569], [-276.936, -319.569]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-276.936, -319.569], [314.403, -319.569], [314.403, 52.89], [-276.936, 52.89]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [276.936, 319.569], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 18",
                        np: 4,
                        cix: 2,
                        ix: 18,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [.335, -.336], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, -.241], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[-2.284, 3.472], [-.388, 3.472], [-.388, -2.716], [-.378, -3.184], [-.401, -3.184], [-.82, -2.68], [-1.721, -1.794], [-2.249, -2.321], [-.341, -4.215], [.427, -4.215], [.427, 3.472], [2.284, 3.472], [2.284, 4.215], [-2.284, 4.215]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-270.971, 52.89], [320.368, 52.89], [320.368, -319.569], [-270.971, -319.569]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-270.971, -319.569], [320.368, -319.569], [320.368, 52.89], [-270.971, 52.89]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [270.971, 319.569], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 19",
                        np: 4,
                        cix: 2,
                        ix: 19,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-.816, 0], [0, .911], [0, 2.566], [-1.331, .168], [0, 0], [0, 0], [0, 0], [-.563, -.516], [0, 0], [.671, 0], [0, -.744], [0, -2.723], [1.391, -.131], [0, 0], [0, 0], [0, 0], [.599, .635]],
                                    o: [[.527, .54], [.923, 0], [0, -2.051], [0, -1.104], [0, 0], [0, 0], [0, 0], [.731, .036], [0, 0], [-.455, -.42], [-1.08, 0], [0, 1.943], [0, 1.163], [0, 0], [0, 0], [0, 0], [-.84, -.059], [0, 0]],
                                    v: [[-2.122, 2.65], [.084, 3.574], [1.763, 2.111], [-2.483, -2.087], [-.276, -4.318], [-.276, -5.457], [.396, -5.457], [.396, -4.329], [2.398, -3.538], [1.99, -2.842], [.145, -3.562], [-1.632, -2.111], [2.615, 2.087], [.396, 4.341], [.396, 5.457], [-.276, 5.457], [-.276, 4.341], [-2.615, 3.286]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-264.594, 52.896], [326.745, 52.896], [326.745, -319.563], [-264.594, -319.563]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-264.594, -319.563], [326.745, -319.563], [326.745, 52.896], [-264.594, 52.896]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [264.594, 319.563], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 20",
                        np: 4,
                        cix: 2,
                        ix: 20,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.027], [1.608, 0], [0, -2.003], [-1.595, 0]],
                                    o: [[0, -2.003], [-1.595, 0], [0, 2.027], [1.608, 0]],
                                    v: [[2.045, -.006], [-.007, -3.568], [-2.045, -.006], [-.007, 3.58]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.435], [-2.182, 0], [0, -2.423], [2.195, 0]],
                                    o: [[0, -2.423], [2.195, 0], [0, 2.435], [-2.182, 0]],
                                    v: [[-2.909, -.006], [-.007, -4.36], [2.909, -.006], [-.007, 4.36]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 2",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-97.417, 52.891], [493.922, 52.891], [493.922, -319.568], [-97.417, -319.568]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-97.417, -319.568], [493.922, -319.568], [493.922, 52.891], [-97.417, 52.891]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 4,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [97.417, 319.568], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 21",
                        np: 6,
                        cix: 2,
                        ix: 21,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-.948, 0], [0, 1.151], [1.211, 0], [.42, -.288], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-.492, 0], [0, -1.512], [1.643, 0], [.564, .755]],
                                    o: [[.324, .468], [1.163, 0], [0, -1.151], [-.516, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-.036, .299], [0, 0], [.227, -.145], [1.691, 0], [0, 1.558], [-.972, 0], [0, 0]],
                                    v: [[-2.158, 2.512], [-.264, 3.484], [1.835, 1.517], [-.299, -.474], [-1.835, -.007], [-2.363, -.199], [-1.906, -4.288], [2.171, -4.288], [2.171, -3.544], [-1.176, -3.544], [-1.428, -1.385], [-1.499, -.906], [-1.475, -.906], [-.204, -1.229], [2.699, 1.517], [-.227, 4.287], [-2.699, 3.1]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-165.726, 52.818], [425.613, 52.818], [425.613, -319.641], [-165.726, -319.641]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-165.726, -319.641], [425.613, -319.641], [425.613, 52.818], [-165.726, 52.818]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [165.726, 319.641], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 22",
                        np: 4,
                        cix: 2,
                        ix: 22,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, .168], [0, 2.278], [1.055, 0], [.407, -.66], [0, 0], [-1.139, 0], [0, -1.319], [.024, -2.243], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, -2.963], [0, -.924], [-.792, 0], [0, 0], [.468, -.851], [1.596, 0], [0, 2.83], [0, 0], [0, 0], [0, 0], [-.024, -.191]],
                                    v: [[-2.662, 3.749], [1.667, -1.876], [-.083, -3.495], [-1.979, -2.344], [-2.59, -2.764], [-.036, -4.287], [2.531, -1.924], [-1.751, 3.545], [2.663, 3.545], [2.663, 4.288], [-2.615, 4.288]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-158.97, 52.963], [432.368, 52.963], [432.368, -319.496], [-158.97, -319.496]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-158.97, -319.496], [432.368, -319.496], [432.368, 52.963], [-158.97, 52.963]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [158.97, 319.496], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 23",
                        np: 4,
                        cix: 2,
                        ix: 23,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [.336, -.336], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, -.241], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[-2.285, 3.472], [-.39, 3.472], [-.39, -2.716], [-.378, -3.184], [-.402, -3.184], [-.822, -2.68], [-1.722, -1.794], [-2.249, -2.321], [-.342, -4.215], [.425, -4.215], [.425, 3.472], [2.284, 3.472], [2.284, 4.215], [-2.285, 4.215]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-152.916, 52.89], [438.423, 52.89], [438.423, -319.569], [-152.916, -319.569]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-152.916, -319.569], [438.423, -319.569], [438.423, 52.89], [-152.916, 52.89]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [152.916, 319.569], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 24",
                        np: 4,
                        cix: 2,
                        ix: 24,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-.816, 0], [0, .911], [0, 2.566], [-1.331, .168], [0, 0], [0, 0], [0, 0], [-.563, -.516], [0, 0], [.671, 0], [0, -.744], [0, -2.723], [1.391, -.131], [0, 0], [0, 0], [0, 0], [.6, .635]],
                                    o: [[.528, .54], [.923, 0], [0, -2.051], [0, -1.104], [0, 0], [0, 0], [0, 0], [.731, .036], [0, 0], [-.456, -.42], [-1.08, 0], [0, 1.943], [0, 1.163], [0, 0], [0, 0], [0, 0], [-.84, -.059], [0, 0]],
                                    v: [[-2.122, 2.65], [.084, 3.574], [1.763, 2.111], [-2.482, -2.087], [-.276, -4.318], [-.276, -5.457], [.396, -5.457], [.396, -4.329], [2.398, -3.538], [1.992, -2.842], [.145, -3.562], [-1.631, -2.111], [2.615, 2.087], [.396, 4.341], [.396, 5.457], [-.276, 5.457], [-.276, 4.341], [-2.615, 3.286]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-146.538, 52.896], [444.801, 52.896], [444.801, -319.563], [-146.538, -319.563]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-146.538, -319.563], [444.801, -319.563], [444.801, 52.896], [-146.538, 52.896]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [146.538, 319.563], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 25",
                        np: 4,
                        cix: 2,
                        ix: 25,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 10,
                    ty: 4,
                    nm: "Left line",
                    sr: 1,
                    ks: {
                        o: {a: 0, k: 100, ix: 11},
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [585, 430, 0], ix: 2},
                        a: {a: 0, k: [296, 186.5, 0], ix: 1},
                        s: {a: 0, k: [229.152, 229.152, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[97.419, 306.135], [97.419, 53.038]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "tm",
                            s: {
                                a: 1,
                                k: [{
                                    i: {x: [.306], y: [.995]},
                                    o: {x: [.793], y: [-.013]},
                                    n: ["0p306_0p995_0p793_-0p013"],
                                    t: 17,
                                    s: [100],
                                    e: [0]
                                }, {t: 53}],
                                ix: 1
                            },
                            e: {a: 0, k: 100, ix: 2},
                            o: {a: 0, k: 0, ix: 3},
                            m: 1,
                            ix: 2,
                            nm: "Trim Paths 1",
                            mn: "ADBE Vector Filter - Trim",
                            hd: !1
                        }, {
                            ty: "st",
                            c: {a: 0, k: [.243000000598, .305999995213, .375999989229, 1], ix: 3},
                            o: {a: 0, k: 100, ix: 4},
                            w: {a: 0, k: 1, ix: 5},
                            lc: 1,
                            lj: 1,
                            ml: 10,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 3,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 11,
                    ty: 4,
                    nm: "Left numbers",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 59,
                                s: [0],
                                e: [100]
                            }, {t: 106}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [585, 430, 0], ix: 2},
                        a: {a: 0, k: [296, 186.5, 0], ix: 1},
                        s: {a: 0, k: [229.152, 229.152, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.026], [1.608, 0], [0, -2.003], [-1.595, 0]],
                                    o: [[0, -2.003], [-1.595, 0], [0, 2.026], [1.608, 0]],
                                    v: [[2.045, -.006], [-.007, -3.569], [-2.045, -.006], [-.007, 3.581]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.435], [-2.182, 0], [0, -2.423], [2.195, 0]],
                                    o: [[0, -2.423], [2.195, 0], [0, 2.435], [-2.182, 0]],
                                    v: [[-2.909, -.006], [-.007, -4.359], [2.909, -.006], [-.007, 4.359]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 2",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-83.861, 70.541], [507.478, 70.541], [507.478, -301.918], [-83.861, -301.918]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-83.861, -301.918], [507.478, -301.918], [507.478, 70.541], [-83.861, 70.541]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 4,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [83.861, 301.918], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 6,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.026], [1.608, 0], [0, -2.003], [-1.595, 0]],
                                    o: [[0, -2.003], [-1.595, 0], [0, 2.026], [1.608, 0]],
                                    v: [[2.045, -.006], [-.007, -3.569], [-2.045, -.006], [-.007, 3.581]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.435], [-2.182, 0], [0, -2.423], [2.195, 0]],
                                    o: [[0, -2.423], [2.195, 0], [0, 2.435], [-2.182, 0]],
                                    v: [[-2.909, -.006], [-.007, -4.359], [2.909, -.006], [-.007, 4.359]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 2",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-83.861, 120.557], [507.478, 120.557], [507.478, -251.902], [-83.861, -251.902]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-83.861, -251.902], [507.478, -251.902], [507.478, 120.557], [-83.861, 120.557]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 4,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [83.861, 251.902], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 2",
                        np: 6,
                        cix: 2,
                        ix: 2,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, .168], [0, 2.279], [1.055, 0], [.407, -.659], [0, 0], [-1.139, 0], [0, -1.319], [.024, -2.242], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, -2.962], [0, -.923], [-.792, 0], [0, 0], [.468, -.851], [1.596, 0], [0, 2.83], [0, 0], [0, 0], [0, 0], [-.024, -.192]],
                                    v: [[-2.663, 3.747], [1.667, -1.878], [-.084, -3.496], [-1.979, -2.345], [-2.59, -2.766], [-.036, -4.288], [2.531, -1.926], [-1.752, 3.544], [2.663, 3.544], [2.663, 4.288], [-2.615, 4.288]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-76.751, 120.629], [514.588, 120.629], [514.588, -251.83], [-76.751, -251.83]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-76.751, -251.83], [514.588, -251.83], [514.588, 120.629], [-76.751, 120.629]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [76.751, 251.83], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 3",
                        np: 4,
                        cix: 2,
                        ix: 3,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.027], [1.608, 0], [0, -2.003], [-1.595, 0]],
                                    o: [[0, -2.003], [-1.595, 0], [0, 2.027], [1.608, 0]],
                                    v: [[2.045, -.006], [-.007, -3.568], [-2.045, -.006], [-.007, 3.58]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.435], [-2.182, 0], [0, -2.423], [2.195, 0]],
                                    o: [[0, -2.423], [2.195, 0], [0, 2.435], [-2.182, 0]],
                                    v: [[-2.909, -.006], [-.007, -4.36], [2.909, -.006], [-.007, 4.36]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 2",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-83.861, 170.984], [507.478, 170.984], [507.478, -201.475], [-83.861, -201.475]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-83.861, -201.475], [507.478, -201.475], [507.478, 170.984], [-83.861, 170.984]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 4,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [83.861, 201.475], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 4",
                        np: 6,
                        cix: 2,
                        ix: 4,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [.216, -.3], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, -.36], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[1.092, 1.157], [1.092, -2.381], [1.14, -3.185], [1.116, -3.185], [.696, -2.536], [-2.122, 1.133], [-2.122, 1.157]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[-3.118, 1.337], [1.02, -4.215], [1.92, -4.215], [1.92, 1.157], [3.118, 1.157], [3.118, 1.876], [1.92, 1.876], [1.92, 4.215], [1.092, 4.215], [1.092, 1.876], [-3.118, 1.876]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 2",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-76.523, 170.984], [514.816, 170.984], [514.816, -201.475], [-76.523, -201.475]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-76.523, -201.475], [514.816, -201.475], [514.816, 170.984], [-76.523, 170.984]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 4,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [76.523, 201.475], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 5",
                        np: 6,
                        cix: 2,
                        ix: 5,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.027], [1.608, 0], [0, -2.003], [-1.595, 0]],
                                    o: [[0, -2.003], [-1.595, 0], [0, 2.027], [1.608, 0]],
                                    v: [[2.045, -.006], [-.007, -3.568], [-2.045, -.006], [-.007, 3.58]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.435], [-2.182, 0], [0, -2.423], [2.195, 0]],
                                    o: [[0, -2.423], [2.195, 0], [0, 2.435], [-2.182, 0]],
                                    v: [[-2.909, -.006], [-.007, -4.36], [2.909, -.006], [-.007, 4.36]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 2",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-83.799, 219.838], [507.54, 219.838], [507.54, -152.621], [-83.799, -152.621]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-83.799, -152.621], [507.54, -152.621], [507.54, 219.838], [-83.799, 219.838]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 4,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [83.799, 152.621], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 6",
                        np: 6,
                        cix: 2,
                        ix: 6,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 1.164], [1.152, 0], [0, -.911], [-1.451, 0]],
                                    o: [[0, -1.211], [-1.031, 0], [0, .864], [1.056, 0]],
                                    v: [[2.003, 1.553], [.096, -.438], [-1.944, 1.097], [.251, 3.58]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-2.603, 0], [-.48, -.24], [0, 0], [.431, 0], [.144, -1.631], [0, 0], [-.875, 0], [0, -1.643], [1.475, 0], [0, 2.254]],
                                    o: [[.539, 0], [0, 0], [-.312, -.18], [-1.739, 0], [0, 0], [.408, -.6], [1.535, 0], [0, 1.703], [-1.835, 0], [0, -2.123]],
                                    v: [[.852, -4.36], [2.411, -4.012], [2.098, -3.28], [.852, -3.568], [-1.932, -.198], [-1.908, -.198], [.228, -1.181], [2.842, 1.577], [.204, 4.36], [-2.842, .414]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 2",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-76.618, 219.838], [514.721, 219.838], [514.721, -152.621], [-76.618, -152.621]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-76.618, -152.621], [514.721, -152.621], [514.721, 219.838], [-76.618, 219.838]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 4,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [76.618, 152.621], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 7",
                        np: 6,
                        cix: 2,
                        ix: 7,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.027], [1.608, 0], [0, -2.003], [-1.595, 0]],
                                    o: [[0, -2.003], [-1.595, 0], [0, 2.027], [1.608, 0]],
                                    v: [[2.045, -.006], [-.007, -3.568], [-2.045, -.006], [-.007, 3.58]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.435], [-2.182, 0], [0, -2.423], [2.195, 0]],
                                    o: [[0, -2.423], [2.195, 0], [0, 2.435], [-2.182, 0]],
                                    v: [[-2.909, -.006], [-.007, -4.36], [2.909, -.006], [-.007, 4.36]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 2",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-83.799, 270.089], [507.54, 270.089], [507.54, -102.371], [-83.799, -102.371]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-83.799, -102.371], [507.54, -102.371], [507.54, 270.089], [-83.799, 270.089]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 4,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [83.799, 102.371], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 8",
                        np: 6,
                        cix: 2,
                        ix: 8,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, .959], [1.019, 0], [0, -.756], [-1.163, -.54]],
                                    o: [[0, -.923], [-1.08, 0], [0, 1.116], [.204, -.204]],
                                    v: [[1.878, -2.117], [.126, -3.592], [-1.577, -2.213], [.941, -.21]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-.995, 0], [0, .971], [1.224, .587], [0, -1.091]],
                                    o: [[.995, 0], [0, -1.152], [-.288, .18], [0, 1.091]],
                                    v: [[.019, 3.592], [1.973, 1.937], [-.726, -.138], [-1.961, 1.781]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 2",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 2,
                            ty: "sh",
                            ix: 3,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-.324, .204], [0, .78], [-1.703, 0], [0, -1.295], [.252, -.24], [0, -.875], [1.643, 0], [0, 1.535]],
                                    o: [[-.588, -.384], [0, -1.127], [1.559, 0], [0, 1.14], [.684, .396], [0, 1.319], [-1.511, 0], [0, -1.368]],
                                    v: [[-1.396, -.522], [-2.417, -2.201], [.138, -4.36], [2.717, -2.177], [1.626, .126], [2.825, 1.925], [.031, 4.36], [-2.825, 1.841]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 3",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-76.49, 270.088], [514.849, 270.088], [514.849, -102.371], [-76.49, -102.371]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-76.49, -102.371], [514.849, -102.371], [514.849, 270.088], [-76.49, 270.088]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 5,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [76.49, 102.371], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 9",
                        np: 7,
                        cix: 2,
                        ix: 9,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.027], [1.608, 0], [0, -2.003], [-1.595, 0]],
                                    o: [[0, -2.003], [-1.595, 0], [0, 2.027], [1.608, 0]],
                                    v: [[2.045, -.006], [-.007, -3.568], [-2.045, -.006], [-.007, 3.58]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.435], [-2.182, 0], [0, -2.423], [2.195, 0]],
                                    o: [[0, -2.423], [2.195, 0], [0, 2.435], [-2.182, 0]],
                                    v: [[-2.909, -.006], [-.007, -4.36], [2.909, -.006], [-.007, 4.36]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 2",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-84.937, 319.089], [506.402, 319.089], [506.402, -53.371], [-84.937, -53.371]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-84.937, -53.371], [506.402, -53.371], [506.402, 319.089], [-84.937, 319.089]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 4,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [84.937, 53.371], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 10",
                        np: 6,
                        cix: 2,
                        ix: 10,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.027], [1.608, 0], [0, -2.003], [-1.595, 0]],
                                    o: [[0, -2.003], [-1.595, 0], [0, 2.027], [1.608, 0]],
                                    v: [[2.045, -.006], [-.007, -3.568], [-2.045, -.006], [-.007, 3.58]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 2.435], [-2.182, 0], [0, -2.423], [2.195, 0]],
                                    o: [[0, -2.423], [2.195, 0], [0, 2.435], [-2.182, 0]],
                                    v: [[-2.909, -.006], [-.007, -4.36], [2.909, -.006], [-.007, 4.36]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 2",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-77.534, 319.089], [513.805, 319.089], [513.805, -53.371], [-77.534, -53.371]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-77.534, -53.371], [513.805, -53.371], [513.805, 319.089], [-77.534, 319.089]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 4,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [77.534, 53.371], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 11",
                        np: 6,
                        cix: 2,
                        ix: 11,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [.336, -.336], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, -.24], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[-2.285, 3.471], [-.389, 3.471], [-.389, -2.717], [-.378, -3.184], [-.402, -3.184], [-.822, -2.68], [-1.721, -1.794], [-2.249, -2.322], [-.342, -4.215], [.426, -4.215], [.426, 3.471], [2.285, 3.471], [2.285, 4.215], [-2.285, 4.215]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-71.137, 319.088], [520.202, 319.088], [520.202, -53.371], [-71.137, -53.371]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-71.137, -53.371], [520.202, -53.371], [520.202, 319.088], [-71.137, 319.088]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [71.137, 53.371], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 12",
                        np: 4,
                        cix: 2,
                        ix: 12,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 12,
                    ty: 4,
                    nm: "Circle 6",
                    sr: 1,
                    ks: {
                        o: {a: 0, k: 100, ix: 11},
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [264.957, 654.242, 0], ix: 2},
                        a: {a: 0, k: [156.336, 284.357, 0], ix: 1},
                        s: {
                            a: 1,
                            k: [{
                                i: {x: [.092, .092, .667], y: [.976, .976, 1]},
                                o: {x: [.222, .222, .333], y: [.006, .006, 0]},
                                n: ["0p092_0p976_0p222_0p006", "0p092_0p976_0p222_0p006", "0p667_1_0p333_0"],
                                t: 35,
                                s: [0, 0, 100],
                                e: [229, 229, 100]
                            }, {t: 42}],
                            ix: 6
                        }
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, -2.244], [2.243, 0], [0, 2.244], [-2.244, 0]],
                                    o: [[0, 2.244], [-2.244, 0], [0, -2.244], [2.243, 0]],
                                    v: [[4.063, 0], [0, 4.062], [-4.063, 0], [0, -4.062]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-156.336, 88.102], [435.003, 88.102], [435.003, -284.357], [-156.336, -284.357]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-156.336, -284.357], [435.003, -284.357], [435.003, 88.102], [-156.336, 88.102]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [156.336, 284.357], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 4,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 13,
                    ty: 4,
                    nm: "Circle 5",
                    sr: 1,
                    ks: {
                        o: {a: 0, k: 100, ix: 11},
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [399.966, 604.402, 0], ix: 2},
                        a: {a: 0, k: [215.253, 262.607, 0], ix: 1},
                        s: {
                            a: 1,
                            k: [{
                                i: {x: [.092, .092, .667], y: [.976, .976, 1]},
                                o: {x: [.222, .222, .333], y: [.006, .006, 0]},
                                n: ["0p092_0p976_0p222_0p006", "0p092_0p976_0p222_0p006", "0p667_1_0p333_0"],
                                t: 42,
                                s: [0, 0, 100],
                                e: [229, 229, 100]
                            }, {t: 49}],
                            ix: 6
                        }
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-.799, -2.097], [2.097, -.799], [.799, 2.097], [-2.096, .799]],
                                    o: [[.799, 2.097], [-2.097, .798], [-.798, -2.096], [2.097, -.799]],
                                    v: [[3.796, -1.446], [1.446, 3.797], [-3.797, 1.446], [-1.447, -3.796]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-215.253, 109.852], [376.086, 109.852], [376.086, -262.607], [-215.253, -262.607]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-215.253, -262.607], [376.086, -262.607], [376.086, 109.852], [-215.253, 109.852]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [215.253, 262.607], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 4,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 14,
                    ty: 4,
                    nm: "Circle 4",
                    sr: 1,
                    ks: {
                        o: {a: 0, k: 100, ix: 11},
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [534.975, 546.254, 0], ix: 2},
                        a: {a: 0, k: [274.169, 237.232, 0], ix: 1},
                        s: {
                            a: 1,
                            k: [{
                                i: {x: [.092, .092, .667], y: [.976, .976, 1]},
                                o: {x: [.222, .222, .333], y: [.006, .006, 0]},
                                n: ["0p092_0p976_0p222_0p006", "0p092_0p976_0p222_0p006", "0p667_1_0p333_0"],
                                t: 49,
                                s: [0, 0, 100],
                                e: [229, 229, 100]
                            }, {t: 56}],
                            ix: 6
                        }
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-.799, -2.097], [2.097, -.799], [.799, 2.097], [-2.096, .799]],
                                    o: [[.799, 2.097], [-2.097, .798], [-.798, -2.096], [2.097, -.799]],
                                    v: [[3.796, -1.446], [1.446, 3.797], [-3.797, 1.446], [-1.447, -3.796]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-274.17, 135.227], [317.169, 135.227], [317.169, -237.232], [-274.17, -237.232]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-274.17, -237.232], [317.169, -237.232], [317.169, 135.227], [-274.17, 135.227]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [274.17, 237.232], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 4,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 15,
                    ty: 4,
                    nm: "Circle 3",
                    sr: 1,
                    ks: {
                        o: {a: 0, k: 100, ix: 11},
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [669.984, 477.126, 0], ix: 2},
                        a: {a: 0, k: [333.086, 207.066, 0], ix: 1},
                        s: {
                            a: 1,
                            k: [{
                                i: {x: [.092, .092, .667], y: [.976, .976, 1]},
                                o: {x: [.222, .222, .333], y: [.006, .006, 0]},
                                n: ["0p092_0p976_0p222_0p006", "0p092_0p976_0p222_0p006", "0p667_1_0p333_0"],
                                t: 56,
                                s: [0, 0, 100],
                                e: [229, 229, 100]
                            }, {t: 63}],
                            ix: 6
                        }
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-.799, -2.097], [2.097, -.799], [.799, 2.097], [-2.096, .799]],
                                    o: [[.799, 2.097], [-2.097, .798], [-.798, -2.096], [2.097, -.799]],
                                    v: [[3.796, -1.446], [1.446, 3.797], [-3.797, 1.446], [-1.447, -3.796]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-333.086, 165.394], [258.253, 165.394], [258.253, -207.065], [-333.086, -207.065]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-333.086, -207.065], [258.253, -207.065], [258.253, 165.394], [-333.086, 165.394]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [333.086, 207.065], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 4,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 16,
                    ty: 4,
                    nm: "Circle 2",
                    sr: 1,
                    ks: {
                        o: {a: 0, k: 100, ix: 11},
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [804.993, 394.632, 0], ix: 2},
                        a: {a: 0, k: [392.003, 171.066, 0], ix: 1},
                        s: {
                            a: 1,
                            k: [{
                                i: {x: [.092, .092, .667], y: [.976, .976, 1]},
                                o: {x: [.222, .222, .333], y: [.006, .006, 0]},
                                n: ["0p092_0p976_0p222_0p006", "0p092_0p976_0p222_0p006", "0p667_1_0p333_0"],
                                t: 63,
                                s: [0, 0, 100],
                                e: [229, 229, 100]
                            }, {t: 70}],
                            ix: 6
                        }
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-.799, -2.097], [2.096, -.799], [.799, 2.097], [-2.096, .799]],
                                    o: [[.799, 2.097], [-2.097, .798], [-.798, -2.096], [2.097, -.799]],
                                    v: [[3.796, -1.446], [1.446, 3.797], [-3.797, 1.446], [-1.447, -3.796]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-392.003, 201.394], [199.336, 201.394], [199.336, -171.065], [-392.003, -171.065]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-392.003, -171.065], [199.336, -171.065], [199.336, 201.394], [-392.003, 201.394]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [392.003, 171.065], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 4,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 17,
                    ty: 4,
                    nm: "Circle 1",
                    sr: 1,
                    ks: {
                        o: {a: 0, k: 100, ix: 11},
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [939.766, 293.514, 0], ix: 2},
                        a: {a: 0, k: [450.919, 126.899, 0], ix: 1},
                        s: {
                            a: 1,
                            k: [{
                                i: {x: [0, 0, .667], y: [.999, .999, 1]},
                                o: {x: [.259, .259, .333], y: [0, 0, 0]},
                                n: ["0_0p999_0p259_0", "0_0p999_0p259_0", "0p667_1_0p333_0"],
                                t: 70,
                                s: [0, 0, 100],
                                e: [229, 229, 100]
                            }, {t: 77}],
                            ix: 6
                        }
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-.799, -2.097], [2.096, -.799], [.799, 2.097], [-2.096, .799]],
                                    o: [[.799, 2.097], [-2.097, .798], [-.798, -2.096], [2.097, -.799]],
                                    v: [[3.796, -1.446], [1.446, 3.797], [-3.797, 1.446], [-1.447, -3.796]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-450.92, 245.56], [140.419, 245.56], [140.419, -126.899], [-450.92, -126.899]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 1",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[-450.92, -126.899], [140.419, -126.899], [140.419, 245.56], [-450.92, 245.56]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "Path 2",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ty: "tr",
                                p: {a: 0, k: [0, 0], ix: 2},
                                a: {a: 0, k: [0, 0], ix: 1},
                                s: {a: 0, k: [100, 100], ix: 3},
                                r: {a: 0, k: 0, ix: 6},
                                o: {a: 0, k: 100, ix: 7},
                                sk: {a: 0, k: 0, ix: 4},
                                sa: {a: 0, k: 0, ix: 5},
                                nm: "Transform"
                            }],
                            nm: "Group 1",
                            np: 2,
                            cix: 2,
                            ix: 2,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }, {ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [450.92, 126.899], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 4,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "tm",
                        s: {a: 0, k: 0, ix: 1},
                        e: {a: 0, k: 100, ix: 2},
                        o: {a: 0, k: 0, ix: 3},
                        m: 1,
                        ix: 2,
                        nm: "Trim Paths 1",
                        mn: "ADBE Vector Filter - Trim",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 18,
                    ty: 4,
                    nm: "Chart line",
                    sr: 1,
                    ks: {
                        o: {a: 0, k: 100, ix: 11},
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [585, 430, 0], ix: 2},
                        a: {a: 0, k: [296, 186.5, 0], ix: 1},
                        s: {a: 0, k: [229.152, 229.152, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-141, 181]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[-214.125, 125.75], [214.125, -125.75]],
                                    c: !1
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "st",
                            c: {a: 0, k: [.243000000598, .305999995213, .375999989229, 1], ix: 3},
                            o: {a: 0, k: 100, ix: 4},
                            w: {a: 0, k: 1, ix: 5},
                            lc: 1,
                            lj: 1,
                            ml: 10,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [311.544, 176.42], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "tm",
                        s: {a: 0, k: 0, ix: 1},
                        e: {
                            a: 1,
                            k: [{
                                i: {x: [.334], y: [.998]},
                                o: {x: [.732], y: [0]},
                                n: ["0p334_0p998_0p732_0"],
                                t: 19,
                                s: [0],
                                e: [100]
                            }, {t: 70}],
                            ix: 2
                        },
                        o: {a: 0, k: 0, ix: 3},
                        m: 1,
                        ix: 2,
                        nm: "Trim Paths 1",
                        mn: "ADBE Vector Filter - Trim",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }],
                markers: [],
                chars: [{
                    ch: "C",
                    size: 38,
                    style: "100",
                    w: 70.1,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, -20.444], [-21.149, 0], [-5.841, 5.64], [0, 0], [8.661, 0], [0, 18.329], [-17.926, 0], [-5.74, -5.136], [0, 0], [8.862, 0]],
                                        o: [[0, 20.444], [12.286, 0], [0, 0], [-6.345, 6.244], [-18.329, 0], [0, -18.228], [7.956, 0], [0, 0], [-6.647, -6.244], [-20.444, 0]],
                                        v: [[6.042, -35.751], [41.391, 1.208], [67.978, -9.467], [65.259, -12.488], [41.391, -2.921], [10.574, -35.751], [41.089, -67.575], [63.547, -59.619], [66.165, -62.842], [40.988, -71.704]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "C",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "C",
                            np: 3,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "P",
                    size: 38,
                    style: "100",
                    w: 58.9,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 12.79], [12.286, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [12.286, 0], [0, -12.79], [0, 0], [0, 0]],
                                        v: [[10.776, 0], [15.106, 0], [15.106, -29.205], [33.939, -29.205], [55.389, -49.951], [33.939, -70.496], [10.776, -70.496]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "P",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, -10.574], [10.272, 0]],
                                        o: [[0, 0], [0, 0], [10.272, 0], [0, 10.574], [0, 0]],
                                        v: [[15.106, -33.234], [15.106, -66.467], [33.737, -66.467], [50.858, -49.951], [33.737, -33.234]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "P",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "P",
                            np: 5,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "A",
                    size: 38,
                    style: "100",
                    w: 62.4,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[2.719, 0], [7.352, 0], [16.415, -24.371], [46.326, -24.371], [55.49, 0], [60.123, 0], [33.737, -70.496], [29.105, -70.496]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "A",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0], [-1.108, -3.021], [0, 0]],
                                        o: [[0, 0], [1.108, -3.021], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[17.926, -28.4], [28.702, -57.001], [31.32, -65.46], [31.522, -65.46], [34.14, -57.001], [44.815, -28.4]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "A",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "A",
                            np: 5,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "F",
                    size: 24,
                    style: "300",
                    w: 50.6,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[10.172, 0], [17.12, 0], [17.12, -31.723], [43.103, -31.723], [43.103, -37.967], [17.12, -37.967], [17.12, -64.554], [47.333, -64.554], [47.333, -70.798], [10.172, -70.798]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "F",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "F",
                            np: 3,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "T",
                    size: 24,
                    style: "300",
                    w: 60.7,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[27.09, 0], [34.039, 0], [34.039, -64.554], [59.518, -64.554], [59.518, -70.798], [1.712, -70.798], [1.712, -64.554], [27.09, -64.554]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "T",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "T",
                            np: 3,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "D",
                    size: 24,
                    style: "300",
                    w: 73.8,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 22.458], [21.35, 0], [0, 0]],
                                        o: [[0, 0], [21.35, 0], [0, -22.357], [0, 0], [0, 0]],
                                        v: [[10.172, 0], [32.932, 0], [68.481, -35.449], [32.932, -70.798], [10.172, -70.798]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "D",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, -18.832], [17.422, 0]],
                                        o: [[0, 0], [0, 0], [17.422, 0], [0, 19.034], [0, 0]],
                                        v: [[17.12, -6.244], [17.12, -64.554], [32.227, -64.554], [61.23, -35.449], [32.227, -6.244]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "D",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "D",
                            np: 5,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "s",
                    size: 24,
                    style: "300",
                    w: 43.8,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [-6.747, 0], [0, 8.359], [0, 11.581], [-5.338, 0], [-2.921, -2.921], [0, 0], [5.539, 0], [0, -9.265], [0, -11.279], [5.64, 0], [3.827, 3.928]],
                                        o: [[4.834, 5.035], [9.97, 0], [0, -16.718], [0, -5.539], [4.532, 0], [0, 0], [-4.129, -3.928], [-9.265, 0], [0, 16.617], [0, 5.338], [-5.539, 0], [0, 0]],
                                        v: [[3.726, -6.143], [22.559, 1.208], [39.679, -13.092], [12.589, -37.967], [22.76, -45.822], [35.449, -41.19], [38.672, -46.326], [23.062, -51.865], [5.841, -37.766], [32.831, -12.991], [22.659, -4.834], [7.352, -10.977]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "s",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "s",
                            np: 3,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {ch: " ", size: 24, style: "300", w: 25, data: {}, fFamily: "Museo Sans Cyrl"}, {
                    ch: "p",
                    size: 24,
                    style: "300",
                    w: 58.9,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-7.15, 0], [0, 16.113], [13.696, 0], [3.122, -6.546], [0, 0], [0, 2.216], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, -2.618], [0, 0], [3.323, 6.345], [13.193, 0], [0, -15.61], [-7.855, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[8.157, 20.142], [15.005, 20.142], [15.005, -4.431], [14.703, -8.862], [14.905, -8.862], [31.622, 1.208], [54.282, -25.378], [32.227, -51.865], [14.603, -41.391], [14.401, -41.391], [14.703, -45.319], [14.703, -50.656], [8.157, -50.656]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "p",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 10.172], [-8.459, 0], [0, -12.387], [8.963, 0]],
                                        o: [[0, -14.401], [9.467, 0], [0, 12.891], [-10.373, 0]],
                                        v: [[14.804, -25.177], [31.219, -45.621], [47.333, -25.278], [30.917, -4.935]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "p",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "p",
                            np: 5,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "e",
                    size: 24,
                    style: "300",
                    w: 55.3,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, -16.617], [-15.106, 0], [-4.733, 4.33], [0, 0], [5.539, 0], [.302, 12.891], [0, 0], [0, 1.108], [13.998, 0]],
                                        o: [[0, 15.61], [6.647, 0], [0, 0], [-4.129, 3.726], [-10.474, 0], [0, 0], [.101, -1.108], [0, -12.589], [-13.696, 0]],
                                        v: [[4.733, -25.278], [31.32, 1.208], [50.052, -5.841], [46.93, -11.078], [31.522, -5.035], [11.884, -25.076], [50.757, -25.076], [50.958, -28.5], [29.81, -51.865]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "e",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [-8.459, 0], [-.403, -10.574]],
                                        o: [[1.611, -10.172], [7.553, 0], [0, 0]],
                                        v: [[12.186, -30.515], [29.608, -46.225], [44.009, -30.515]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "e",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "e",
                            np: 5,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "r",
                    size: 24,
                    style: "300",
                    w: 35.7,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [-11.38, 0], [-.302, -.101], [0, 0], [.906, 0], [2.518, -7.654], [0, 0], [0, 2.216], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, -10.071], [1.007, 0], [0, 0], [-.806, -.201], [-7.855, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[8.157, 0], [15.005, 0], [15.005, -21.451], [31.119, -44.312], [33.636, -44.11], [33.636, -50.858], [30.917, -51.16], [14.703, -37.262], [14.502, -37.262], [14.905, -41.29], [14.905, -50.656], [8.157, -50.656]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "r",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "r",
                            np: 3,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "/",
                    size: 24,
                    style: "300",
                    w: 28.6,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[4.23, 4.23], [10.675, 4.23], [36.255, -74.725], [29.81, -74.725]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "/",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "/",
                            np: 3,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "m",
                    size: 24,
                    style: "300",
                    w: 91.6,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [-10.272, 0], [0, -7.654], [0, 0], [0, 0], [0, 0], [-10.172, 0], [0, -8.359], [0, 0], [0, 0], [0, 0], [12.286, 0], [2.82, -6.445], [0, 0], [9.366, 0], [2.518, -6.848], [0, 0], [0, 2.216], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, -10.272], [9.567, 0], [0, 0], [0, 0], [0, 0], [0, -10.474], [9.164, 0], [0, 0], [0, 0], [0, 0], [0, -12.488], [-8.459, 0], [0, 0], [-1.41, -8.258], [-7.956, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[8.157, 0], [15.005, 0], [15.005, -24.472], [32.327, -45.52], [43.002, -30.515], [43.002, 0], [49.85, 0], [49.85, -24.472], [66.87, -45.52], [77.747, -30.515], [77.747, 0], [84.595, 0], [84.595, -32.227], [67.776, -51.865], [49.146, -39.175], [48.944, -39.175], [33.334, -51.865], [14.703, -38.672], [14.502, -38.672], [14.905, -42.7], [14.905, -50.656], [8.157, -50.656]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "m",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "m",
                            np: 3,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "o",
                    size: 24,
                    style: "300",
                    w: 62.4,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, -15.005], [-14.804, 0], [0, 15.308], [14.804, 0]],
                                        o: [[0, 15.308], [14.804, 0], [0, -15.005], [-14.804, 0]],
                                        v: [[4.733, -25.58], [31.421, 1.208], [58.209, -25.58], [31.421, -51.865]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "o",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 11.884], [-10.876, 0], [0, -11.481], [10.876, 0]],
                                        o: [[0, -11.481], [10.876, 0], [0, 11.884], [-10.876, 0]],
                                        v: [[11.783, -25.58], [31.421, -45.721], [51.16, -25.58], [31.421, -5.035]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "o",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "o",
                            np: 5,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "C",
                    size: 24,
                    style: "300",
                    w: 70,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, -20.544], [-21.552, 0], [-5.942, 5.841], [0, 0], [8.359, 0], [0, 16.818], [-17.221, 0], [-5.539, -4.834], [0, 0], [8.963, 0]],
                                        o: [[0, 20.645], [12.488, 0], [0, 0], [-6.042, 5.942], [-17.523, 0], [0, -16.617], [7.654, 0], [0, 0], [-6.747, -6.445], [-20.746, 0]],
                                        v: [[5.539, -35.852], [41.391, 1.208], [68.481, -9.769], [64.453, -14.703], [41.592, -5.338], [12.79, -35.953], [41.29, -65.46], [62.943, -57.706], [66.669, -62.842], [41.089, -72.006]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "C",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "C",
                            np: 3,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "P",
                    size: 24,
                    style: "300",
                    w: 59.7,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 13.193], [12.589, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [12.589, 0], [0, -13.092], [0, 0], [0, 0]],
                                        v: [[10.172, 0], [17.12, 0], [17.12, -27.795], [34.644, -27.795], [56.497, -49.448], [34.644, -70.798], [10.172, -70.798]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "P",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, -9.567], [9.467, 0]],
                                        o: [[0, 0], [0, 0], [9.366, 0], [0, 9.668], [0, 0]],
                                        v: [[17.12, -34.039], [17.12, -64.554], [33.838, -64.554], [49.347, -49.448], [33.737, -34.039]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "P",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "P",
                            np: 5,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "A",
                    size: 24,
                    style: "300",
                    w: 63.2,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[2.115, 0], [9.467, 0], [17.523, -22.559], [46.024, -22.559], [54.181, 0], [61.533, 0], [35.55, -70.798], [28.098, -70.798]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "A",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0], [-1.208, -3.323], [0, 0]],
                                        o: [[0, 0], [1.208, -3.323], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[19.638, -28.601], [29.004, -54.282], [31.723, -63.547], [31.924, -63.547], [34.644, -54.282], [43.909, -28.601]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "A",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "A",
                            np: 5,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: ",",
                    size: 24,
                    style: "300",
                    w: 26.2,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[4.431, 9.769], [10.373, 9.769], [18.027, -8.258], [10.172, -8.258]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: ",",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: ",",
                            np: 3,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "$",
                    size: 24,
                    style: "300",
                    w: 56.8,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [-7.05, -.504], [0, 0], [0, 0], [0, 0], [0, 9.769], [0, 16.315], [-9.064, 0], [-3.827, -3.525], [0, 0], [6.143, .302], [0, 0], [0, 0], [0, 0], [0, -9.265], [0, -17.221], [7.755, 0], [4.431, 4.532]],
                                        o: [[5.035, 5.338], [0, 0], [0, 0], [0, 0], [11.682, -1.108], [0, -22.861], [0, -6.244], [5.64, 0], [0, 0], [-4.733, -4.33], [0, 0], [0, 0], [0, 0], [-11.179, 1.41], [0, 21.552], [0, 7.654], [-6.848, 0], [0, 0]],
                                        v: [[6.647, -7.855], [26.285, 1.007], [26.285, 10.373], [31.924, 10.373], [31.924, 1.007], [50.555, -17.926], [14.905, -53.174], [29.81, -65.359], [45.319, -59.317], [48.743, -65.158], [31.924, -71.805], [31.924, -81.271], [26.285, -81.271], [26.285, -71.704], [7.755, -52.972], [43.405, -17.725], [29.306, -5.438], [10.776, -13.193]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "$",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "$",
                            np: 3,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }]
            }
        };
        i = lottie.loadAnimation(a);
        var r, t = {
            container: document.getElementById("graph2"), renderer: "svg", loop: !1, autoplay: !1, animationData: {
                v: "5.1.7",
                fr: 25,
                ip: 0,
                op: 163,
                w: 1170,
                h: 860,
                nm: "Comp 1",
                ddd: 0,
                assets: [],
                fonts: {
                    list: [{
                        fName: "MuseoSansCyrl-300",
                        fFamily: "Museo Sans Cyrl",
                        fStyle: "300",
                        ascent: 70.2987670898438
                    }]
                },
                layers: [{
                    ddd: 0,
                    ind: 1,
                    ty: 5,
                    nm: "FTDs per/mo",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 71,
                                s: [0],
                                e: [100]
                            }, {t: 97}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [118.313, 162.792, 0], ix: 2},
                        a: {a: 0, k: [60.188, -5.458, 0], ix: 1},
                        s: {a: 0, k: [100, 100, 100], ix: 6}
                    },
                    ao: 0,
                    t: {
                        d: {
                            k: [{
                                s: {
                                    s: 24,
                                    f: "MuseoSansCyrl-300",
                                    t: "FTDs per/mo",
                                    j: 0,
                                    tr: 2,
                                    lh: 28.8,
                                    ls: 0,
                                    fc: [.67, .67, .68]
                                }, t: 0
                            }]
                        }, p: {}, m: {g: 1, a: {a: 0, k: [0, 0], ix: 2}}, a: []
                    },
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 2,
                    ty: 4,
                    nm: "Revenue share Outlines",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 71,
                                s: [0],
                                e: [100]
                            }, {t: 97}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [322.758, 158.953, 0], ix: 2},
                        a: {a: 0, k: [.758, -9.047, 0], ix: 1},
                        s: {a: 0, k: [100, 100, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 2.487], [1.65, .786], [1.754, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-.288, -.497], [0, 0], [2.095, -.576], [0, -2.226], [-.759, -.34], [0, 0], [0, 0]],
                                    v: [[-83.389, 0], [-81.582, 0], [-81.582, -7.75], [-76.947, -7.75], [-72.81, 0], [-70.715, 0], [-74.722, -7.41], [-75.219, -8.143], [-75.219, -8.196], [-71.71, -13.275], [-74.434, -17.884], [-77.811, -18.407], [-83.389, -18.407]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "R",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [-.524, -.236], [0, -1.466], [2.226, 0]],
                                    o: [[0, 0], [0, 0], [1.309, 0], [1.231, .55], [0, 2.304], [0, 0]],
                                    v: [[-81.582, -9.374], [-81.582, -16.784], [-77.916, -16.784], [-75.507, -16.444], [-73.57, -13.223], [-77.209, -9.374]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "R",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [.666669957778, .674510043275, .682350009095, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "R",
                        np: 5,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, -4.32], [-3.928, 0], [-1.231, 1.126], [0, 0], [1.44, 0], [.079, 3.352], [0, 0], [0, .288], [3.64, 0]],
                                    o: [[0, 4.059], [1.728, 0], [0, 0], [-1.074, .969], [-2.723, 0], [0, 0], [.026, -.288], [0, -3.273], [-3.561, 0]],
                                    v: [[-69.203, -6.572], [-62.29, .314], [-57.42, -1.519], [-58.232, -2.88], [-62.238, -1.309], [-67.344, -6.52], [-57.237, -6.52], [-57.184, -7.41], [-62.683, -13.485]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "e",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-2.199, 0], [-.105, -2.749]],
                                    o: [[.419, -2.645], [1.964, 0], [0, 0]],
                                    v: [[-67.265, -7.934], [-62.735, -12.018], [-58.991, -7.934]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "e",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [.666669957778, .674510043275, .682350009095, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "e",
                        np: 5,
                        cix: 2,
                        ix: 2,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [.236, .655], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0], [-.236, .655], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[-50.607, 0], [-48.669, 0], [-43.642, -13.171], [-45.527, -13.171], [-49.167, -3.509], [-49.638, -1.911], [-49.69, -1.911], [-50.136, -3.509], [-53.775, -13.171], [-55.687, -13.171]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "v",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.666669957778, .674510043275, .682350009095, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "v",
                        np: 3,
                        cix: 2,
                        ix: 3,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, -4.32], [-3.928, 0], [-1.231, 1.126], [0, 0], [1.44, 0], [.079, 3.352], [0, 0], [0, .288], [3.64, 0]],
                                    o: [[0, 4.059], [1.728, 0], [0, 0], [-1.074, .969], [-2.723, 0], [0, 0], [.026, -.288], [0, -3.273], [-3.561, 0]],
                                    v: [[-42.215, -6.572], [-35.302, .314], [-30.432, -1.519], [-31.244, -2.88], [-35.25, -1.309], [-40.356, -6.52], [-30.249, -6.52], [-30.196, -7.41], [-35.695, -13.485]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "e",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-2.199, 0], [-.105, -2.749]],
                                    o: [[.419, -2.645], [1.964, 0], [0, 0]],
                                    v: [[-40.277, -7.934], [-35.747, -12.018], [-32.003, -7.934]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "e",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [.666669957778, .674510043275, .682350009095, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "e",
                        np: 5,
                        cix: 2,
                        ix: 4,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [-2.802, 0], [0, -2.069], [0, 0], [0, 0], [0, 0], [3.273, 0], [.497, -1.204], [0, 0], [0, .576], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, -3.064], [2.54, 0], [0, 0], [0, 0], [0, 0], [0, -3.247], [-3.09, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[-26.947, 0], [-25.166, 0], [-25.166, -6.441], [-20.165, -11.809], [-17.285, -7.908], [-17.285, 0], [-15.504, 0], [-15.504, -8.379], [-19.929, -13.485], [-25.245, -10.055], [-25.297, -10.055], [-25.192, -11.102], [-25.192, -13.171], [-26.947, -13.171]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "n",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.666669957778, .674510043275, .682350009095, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "n",
                        np: 3,
                        cix: 2,
                        ix: 5,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-3.116, 0], [-.497, 1.283], [0, 0], [0, -.576], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [3.011, 0], [0, 2.069], [0, 0], [0, 0]],
                                    o: [[0, 3.43], [2.906, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 2.854], [-2.54, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[-11.66, -4.792], [-7.235, .314], [-2.05, -3.116], [-1.998, -3.116], [-2.103, -2.069], [-2.103, 0], [-.349, 0], [-.349, -13.171], [-2.129, -13.171], [-2.129, -6.86], [-6.999, -1.362], [-9.853, -5.263], [-9.853, -13.171], [-11.66, -13.171]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "u",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.666669957778, .674510043275, .682350009095, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "u",
                        np: 3,
                        cix: 2,
                        ix: 6,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, -4.32], [-3.928, 0], [-1.231, 1.126], [0, 0], [1.44, 0], [.079, 3.352], [0, 0], [0, .288], [3.64, 0]],
                                    o: [[0, 4.059], [1.728, 0], [0, 0], [-1.074, .969], [-2.723, 0], [0, 0], [.026, -.288], [0, -3.273], [-3.561, 0]],
                                    v: [[2.895, -6.572], [9.807, .314], [14.678, -1.519], [13.866, -2.88], [9.86, -1.309], [4.754, -6.52], [14.861, -6.52], [14.913, -7.41], [9.415, -13.485]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "e",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-2.199, 0], [-.105, -2.749]],
                                    o: [[.419, -2.645], [1.964, 0], [0, 0]],
                                    v: [[4.832, -7.934], [9.362, -12.018], [13.107, -7.934]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "e",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [.666669957778, .674510043275, .682350009095, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "e",
                        np: 5,
                        cix: 2,
                        ix: 7,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-1.754, 0], [0, 2.173], [0, 3.011], [-1.388, 0], [-.759, -.759], [0, 0], [1.44, 0], [0, -2.409], [0, -2.933], [1.466, 0], [.995, 1.021]],
                                    o: [[1.257, 1.309], [2.592, 0], [0, -4.347], [0, -1.44], [1.178, 0], [0, 0], [-1.074, -1.021], [-2.409, 0], [0, 4.32], [0, 1.388], [-1.44, 0], [0, 0]],
                                    v: [[23.511, -1.597], [28.407, .314], [32.858, -3.404], [25.815, -9.871], [28.46, -11.914], [31.759, -10.709], [32.597, -12.045], [28.538, -13.485], [24.061, -9.819], [31.078, -3.378], [28.433, -1.257], [24.453, -2.854]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "s",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.666669957778, .674510043275, .682350009095, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "s",
                        np: 3,
                        cix: 2,
                        ix: 8,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [-2.776, 0], [0, -2.069], [0, 0], [0, 0], [0, 0], [3.273, 0], [.497, -1.231], [0, 0], [0, .602], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, -3.168], [2.54, 0], [0, 0], [0, 0], [0, 0], [0, -3.247], [-2.985, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[36.051, 0], [37.831, 0], [37.831, -6.363], [42.832, -11.809], [45.712, -7.908], [45.712, 0], [47.493, 0], [47.493, -8.379], [43.068, -13.485], [37.805, -10.107], [37.752, -10.107], [37.831, -11.181], [37.831, -18.407], [36.051, -18.407]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "h",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.666669957778, .674510043275, .682350009095, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "h",
                        np: 3,
                        cix: 2,
                        ix: 9,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, -4.32], [-2.226, 0], [-.681, 1.597], [0, 0], [0, -.655], [0, 0], [0, 0], [0, 0], [3.168, 0], [1.047, -.89], [0, 0], [-1.335, 0], [0, -2.54], [0, 0], [0, 0]],
                                    o: [[0, 2.54], [2.121, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -3.299], [-1.754, 0], [0, 0], [1.074, -.786], [1.859, 0], [0, 0], [0, 0], [-2.514, 0]],
                                    v: [[50.342, -3.535], [54.794, .314], [59.245, -2.645], [59.297, -2.645], [59.219, -1.545], [59.219, 0], [60.921, 0], [60.921, -8.431], [55.998, -13.485], [51.337, -11.992], [52.149, -10.631], [55.893, -11.888], [59.14, -8.484], [59.14, -8.117], [58.355, -8.117]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "a",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 1.231], [-2.042, 0], [0, 0], [0, 0], [2.54, 0]],
                                    o: [[0, -2.933], [0, 0], [0, 0], [0, 2.304], [-1.964, 0]],
                                    v: [[52.149, -3.692], [58.381, -6.703], [59.14, -6.703], [59.14, -6.101], [55.108, -1.178]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "a",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [.666669957778, .674510043275, .682350009095, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "a",
                        np: 5,
                        cix: 2,
                        ix: 10,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [-2.959, 0], [-.079, -.026], [0, 0], [.236, 0], [.655, -1.99], [0, 0], [0, .576], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, -2.618], [.262, 0], [0, 0], [-.209, -.052], [-2.042, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[64.936, 0], [66.717, 0], [66.717, -5.577], [70.906, -11.521], [71.561, -11.469], [71.561, -13.223], [70.854, -13.302], [66.638, -9.688], [66.586, -9.688], [66.691, -10.735], [66.691, -13.171], [64.936, -13.171]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "r",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.666669957778, .674510043275, .682350009095, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "r",
                        np: 3,
                        cix: 2,
                        ix: 11,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, -4.32], [-3.928, 0], [-1.231, 1.126], [0, 0], [1.44, 0], [.079, 3.352], [0, 0], [0, .288], [3.64, 0]],
                                    o: [[0, 4.059], [1.728, 0], [0, 0], [-1.074, .969], [-2.723, 0], [0, 0], [.026, -.288], [0, -3.273], [-3.561, 0]],
                                    v: [[72.886, -6.572], [79.799, .314], [84.669, -1.519], [83.857, -2.88], [79.851, -1.309], [74.745, -6.52], [84.852, -6.52], [84.904, -7.41], [79.406, -13.485]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "e",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-2.199, 0], [-.105, -2.749]],
                                    o: [[.419, -2.645], [1.964, 0], [0, 0]],
                                    v: [[74.824, -7.934], [79.353, -12.018], [83.098, -7.934]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "e",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [.666669957778, .674510043275, .682350009095, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "e",
                        np: 5,
                        cix: 2,
                        ix: 12,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 3,
                    ty: 4,
                    nm: "45% Outlines",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 83,
                                s: [0],
                                e: [100]
                            }, {t: 144}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {
                            a: 1,
                            k: [{
                                i: {x: .181, y: 1},
                                o: {x: .458, y: 0},
                                n: "0p181_1_0p458_0",
                                t: 71,
                                s: [325.064, 259.214, 0],
                                e: [550.064, 259.214, 0],
                                to: [1.12949681282043, 0, 0],
                                ti: [-36.3705101013184, 0, 0]
                            }, {t: 132}],
                            ix: 2
                        },
                        a: {a: 0, k: [-.186, -12.036, 0], ix: 1},
                        s: {a: 0, k: [100, 100, 100], ix: 6}
                    },
                    ao: 0,
                    ef: [{
                        ty: 5,
                        nm: "Slider Control",
                        np: 3,
                        mn: "ADBE Slider Control",
                        ix: 1,
                        en: 1,
                        ef: [{ty: 0, nm: "Slider", mn: "ADBE Slider Control-0001", ix: 1, v: {a: 0, k: 0, ix: 1}}]
                    }],
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[-30.727, -6.677], [-18.708, -6.677], [-18.708, 0], [-16.346, 0], [-16.346, -6.677], [-12.921, -6.677], [-12.921, -8.731], [-16.346, -8.731], [-16.346, -24.071], [-18.914, -24.071], [-30.727, -8.218]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "4",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -1.027], [0, 0]],
                                    o: [[0, 0], [0, 0], [.616, -.856], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[-27.885, -8.731], [-27.885, -8.8], [-19.838, -19.278], [-18.64, -21.127], [-18.571, -21.127], [-18.708, -18.832], [-18.708, -8.731]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "4",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "4",
                        np: 5,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-2.773, 0], [0, 4.451], [4.828, 0], [.651, -.411], [0, 0], [-.103, .856], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-1.472, 0], [0, -3.287], [3.321, 0], [.924, 1.335]],
                                    o: [[1.609, 2.157], [4.691, 0], [0, -4.314], [-1.404, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1.198, -.822], [3.458, 0], [0, 3.287], [-2.705, 0], [0, 0]],
                                    v: [[-9.745, -2.979], [-2.691, .411], [5.663, -7.499], [-2.623, -15.34], [-6.252, -14.415], [-6.321, -14.415], [-6.115, -15.785], [-5.396, -21.948], [4.157, -21.948], [4.157, -24.071], [-7.485, -24.071], [-8.786, -12.395], [-7.28, -11.847], [-2.897, -13.183], [3.198, -7.499], [-2.794, -1.883], [-8.204, -4.657]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "5",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "5",
                        np: 3,
                        cix: 2,
                        ix: 2,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-2.671, 0], [0, 2.637], [2.637, 0], [0, -2.602]],
                                    o: [[2.637, 0], [0, -2.602], [-2.671, 0], [0, 2.637]],
                                    v: [[13.953, -14.963], [18.781, -19.723], [13.953, -24.482], [9.159, -19.723]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[9.365, 0], [11.83, 0], [30.149, -24.071], [27.683, -24.071]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 2,
                            ty: "sh",
                            ix: 3,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[1.575, 0], [0, 1.575], [-1.575, 0], [0, -1.541]],
                                    o: [[-1.575, 0], [0, -1.541], [1.575, 0], [0, 1.575]],
                                    v: [[13.953, -16.881], [11.179, -19.723], [13.953, -22.565], [16.726, -19.723]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 3,
                            ty: "sh",
                            ix: 4,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, -2.637], [-2.671, 0], [0, 2.602], [2.671, 0]],
                                    o: [[0, 2.602], [2.671, 0], [0, -2.637], [-2.671, 0]],
                                    v: [[20.732, -4.314], [25.526, .411], [30.354, -4.314], [25.526, -9.108]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 4,
                            ty: "sh",
                            ix: 5,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 1.575], [-1.575, 0], [0, -1.541], [1.575, 0]],
                                    o: [[0, -1.541], [1.575, 0], [0, 1.575], [-1.575, 0]],
                                    v: [[22.753, -4.349], [25.526, -7.191], [28.334, -4.349], [25.526, -1.507]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "%",
                        np: 8,
                        cix: 2,
                        ix: 3,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 4,
                    ty: 4,
                    nm: "35% Outlines",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 92,
                                s: [0],
                                e: [100]
                            }, {t: 153}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {
                            a: 1,
                            k: [{
                                i: {x: .134, y: 1},
                                o: {x: .259, y: 0},
                                n: "0p134_1_0p259_0",
                                t: 87,
                                s: [254.002, 477.464, 0],
                                e: [465.002, 477.464, 0],
                                to: [35.1666679382324, 0, 0],
                                ti: [-35.1666679382324, 0, 0]
                            }, {t: 141}],
                            ix: 2
                        },
                        a: {a: 0, k: [.002, -12.036, 0], ix: 1},
                        s: {a: 0, k: [100, 100, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-2.808, 0], [0, 4.109], [3.013, .137], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [.651, -.753], [0, 0], [0, 0], [0, 0], [0, -3.39], [2.876, 0], [1.335, 1.472]],
                                    o: [[1.986, 2.054], [4.554, 0], [0, -5.205], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1.267, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [3.116, 0], [0, 3.082], [-2.5, 0], [0, 0]],
                                    v: [[-29.687, -2.876], [-22.051, .411], [-14.142, -7.122], [-21.64, -14.21], [-14.484, -22.496], [-14.484, -24.071], [-28.557, -24.071], [-28.557, -21.948], [-19.517, -21.948], [-17.566, -22.051], [-17.566, -21.983], [-18.833, -20.647], [-24.859, -13.594], [-24.277, -12.19], [-22.599, -12.19], [-16.573, -7.054], [-22.051, -1.883], [-28.215, -4.691]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "3",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "3",
                        np: 3,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-2.773, 0], [0, 4.451], [4.828, 0], [.651, -.411], [0, 0], [-.103, .856], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-1.472, 0], [0, -3.287], [3.321, 0], [.924, 1.335]],
                                    o: [[1.609, 2.157], [4.691, 0], [0, -4.314], [-1.404, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1.198, -.822], [3.458, 0], [0, 3.287], [-2.705, 0], [0, 0]],
                                    v: [[-10.408, -2.979], [-3.354, .411], [5, -7.499], [-3.286, -15.34], [-6.915, -14.415], [-6.984, -14.415], [-6.778, -15.785], [-6.059, -21.948], [3.494, -21.948], [3.494, -24.071], [-8.148, -24.071], [-9.449, -12.395], [-7.943, -11.847], [-3.56, -13.183], [2.535, -7.499], [-3.457, -1.883], [-8.867, -4.657]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "5",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "5",
                        np: 3,
                        cix: 2,
                        ix: 2,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-2.671, 0], [0, 2.637], [2.637, 0], [0, -2.602]],
                                    o: [[2.637, 0], [0, -2.602], [-2.671, 0], [0, 2.637]],
                                    v: [[13.29, -14.963], [18.118, -19.723], [13.29, -24.482], [8.496, -19.723]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[8.702, 0], [11.167, 0], [29.486, -24.071], [27.02, -24.071]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 2,
                            ty: "sh",
                            ix: 3,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[1.575, 0], [0, 1.575], [-1.575, 0], [0, -1.541]],
                                    o: [[-1.575, 0], [0, -1.541], [1.575, 0], [0, 1.575]],
                                    v: [[13.29, -16.881], [10.516, -19.723], [13.29, -22.565], [16.063, -19.723]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 3,
                            ty: "sh",
                            ix: 4,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, -2.637], [-2.671, 0], [0, 2.602], [2.671, 0]],
                                    o: [[0, 2.602], [2.671, 0], [0, -2.637], [-2.671, 0]],
                                    v: [[20.069, -4.314], [24.863, .411], [29.691, -4.314], [24.863, -9.108]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 4,
                            ty: "sh",
                            ix: 5,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 1.575], [-1.575, 0], [0, -1.541], [1.575, 0]],
                                    o: [[0, -1.541], [1.575, 0], [0, 1.575], [-1.575, 0]],
                                    v: [[22.09, -4.349], [24.863, -7.191], [27.671, -4.349], [24.863, -1.507]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "%",
                        np: 8,
                        cix: 2,
                        ix: 3,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 5,
                    ty: 4,
                    nm: "30% Outlines",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 99,
                                s: [0],
                                e: [100]
                            }, {t: 160}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {
                            a: 1,
                            k: [{
                                i: {x: .14, y: 1},
                                o: {x: .333, y: 0},
                                n: "0p14_1_0p333_0",
                                t: 88,
                                s: [235.002, 587.464, 0],
                                e: [419.002, 587.464, 0],
                                to: [30.6666660308838, 0, 0],
                                ti: [-30.6666660308838, 0, 0]
                            }, {t: 144}],
                            ix: 2
                        },
                        a: {a: 0, k: [.002, -12.036, 0], ix: 1},
                        s: {a: 0, k: [100, 100, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-2.808, 0], [0, 4.109], [3.013, .137], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [.651, -.753], [0, 0], [0, 0], [0, 0], [0, -3.39], [2.876, 0], [1.335, 1.472]],
                                    o: [[1.986, 2.054], [4.554, 0], [0, -5.205], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1.267, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [3.116, 0], [0, 3.082], [-2.5, 0], [0, 0]],
                                    v: [[-30.741, -2.876], [-23.105, .411], [-15.196, -7.122], [-22.694, -14.21], [-15.538, -22.496], [-15.538, -24.071], [-29.611, -24.071], [-29.611, -21.948], [-20.571, -21.948], [-18.62, -22.051], [-18.62, -21.983], [-19.887, -20.647], [-25.913, -13.594], [-25.331, -12.19], [-23.653, -12.19], [-17.627, -7.054], [-23.105, -1.883], [-29.269, -4.691]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "3",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "3",
                        np: 3,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-6.232, 0], [0, 6.951], [6.266, 0], [0, -6.917]],
                                    o: [[6.266, 0], [0, -6.917], [-6.232, 0], [0, 6.951]],
                                    v: [[-2.765, .411], [5.556, -12.053], [-2.765, -24.482], [-11.051, -12.053]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "0",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[4.588, 0], [0, 5.787], [-4.554, 0], [0, -5.718]],
                                    o: [[-4.554, 0], [0, -5.718], [4.588, 0], [0, 5.787]],
                                    v: [[-2.765, -1.815], [-8.586, -12.053], [-2.765, -22.222], [3.09, -12.053]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "0",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "0",
                        np: 5,
                        cix: 2,
                        ix: 2,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-2.671, 0], [0, 2.637], [2.637, 0], [0, -2.602]],
                                    o: [[2.637, 0], [0, -2.602], [-2.671, 0], [0, 2.637]],
                                    v: [[14.344, -14.963], [19.172, -19.723], [14.344, -24.482], [9.55, -19.723]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[9.755, 0], [12.221, 0], [30.54, -24.071], [28.074, -24.071]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 2,
                            ty: "sh",
                            ix: 3,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[1.575, 0], [0, 1.575], [-1.575, 0], [0, -1.541]],
                                    o: [[-1.575, 0], [0, -1.541], [1.575, 0], [0, 1.575]],
                                    v: [[14.344, -16.881], [11.57, -19.723], [14.344, -22.565], [17.117, -19.723]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 3,
                            ty: "sh",
                            ix: 4,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, -2.637], [-2.671, 0], [0, 2.602], [2.671, 0]],
                                    o: [[0, 2.602], [2.671, 0], [0, -2.637], [-2.671, 0]],
                                    v: [[21.123, -4.314], [25.917, .411], [30.745, -4.314], [25.917, -9.108]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 4,
                            ty: "sh",
                            ix: 5,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 1.575], [-1.575, 0], [0, -1.541], [1.575, 0]],
                                    o: [[0, -1.541], [1.575, 0], [0, 1.575], [-1.575, 0]],
                                    v: [[23.144, -4.349], [25.917, -7.191], [28.725, -4.349], [25.917, -1.507]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "%",
                        np: 8,
                        cix: 2,
                        ix: 3,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 6,
                    ty: 4,
                    nm: "40% Outlines",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 86,
                                s: [0],
                                e: [100]
                            }, {t: 147}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {
                            a: 1,
                            k: [{
                                i: {x: .058, y: 1},
                                o: {x: .333, y: 0},
                                n: "0p058_1_0p333_0",
                                t: 80,
                                s: [230.814, 368.464, 0],
                                e: [504.814, 368.464, 0],
                                to: [45.6666679382324, 0, 0],
                                ti: [-45.6666679382324, 0, 0]
                            }, {t: 135}],
                            ix: 2
                        },
                        a: {a: 0, k: [-.186, -12.036, 0], ix: 1},
                        s: {a: 0, k: [100, 100, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[-31.781, -6.677], [-19.762, -6.677], [-19.762, 0], [-17.399, 0], [-17.399, -6.677], [-13.975, -6.677], [-13.975, -8.731], [-17.399, -8.731], [-17.399, -24.071], [-19.968, -24.071], [-31.781, -8.218]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "4",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -1.027], [0, 0]],
                                    o: [[0, 0], [0, 0], [.616, -.856], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[-28.939, -8.731], [-28.939, -8.8], [-20.892, -19.278], [-19.694, -21.127], [-19.625, -21.127], [-19.762, -18.832], [-19.762, -8.731]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "4",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "4",
                        np: 5,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-6.232, 0], [0, 6.951], [6.266, 0], [0, -6.917]],
                                    o: [[6.266, 0], [0, -6.917], [-6.232, 0], [0, 6.951]],
                                    v: [[-2.102, .411], [6.219, -12.053], [-2.102, -24.482], [-10.388, -12.053]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "0",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[4.588, 0], [0, 5.787], [-4.554, 0], [0, -5.718]],
                                    o: [[-4.554, 0], [0, -5.718], [4.588, 0], [0, 5.787]],
                                    v: [[-2.102, -1.815], [-7.923, -12.053], [-2.102, -22.222], [3.754, -12.053]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "0",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "0",
                        np: 5,
                        cix: 2,
                        ix: 2,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-2.671, 0], [0, 2.637], [2.637, 0], [0, -2.602]],
                                    o: [[2.637, 0], [0, -2.602], [-2.671, 0], [0, 2.637]],
                                    v: [[15.007, -14.963], [19.835, -19.723], [15.007, -24.482], [10.213, -19.723]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[10.419, 0], [12.884, 0], [31.203, -24.071], [28.737, -24.071]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 2,
                            ty: "sh",
                            ix: 3,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[1.575, 0], [0, 1.575], [-1.575, 0], [0, -1.541]],
                                    o: [[-1.575, 0], [0, -1.541], [1.575, 0], [0, 1.575]],
                                    v: [[15.007, -16.881], [12.233, -19.723], [15.007, -22.565], [17.78, -19.723]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 3,
                            ty: "sh",
                            ix: 4,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, -2.637], [-2.671, 0], [0, 2.602], [2.671, 0]],
                                    o: [[0, 2.602], [2.671, 0], [0, -2.637], [-2.671, 0]],
                                    v: [[21.786, -4.314], [26.58, .411], [31.408, -4.314], [26.58, -9.108]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 4,
                            ty: "sh",
                            ix: 5,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 1.575], [-1.575, 0], [0, -1.541], [1.575, 0]],
                                    o: [[0, -1.541], [1.575, 0], [0, 1.575], [-1.575, 0]],
                                    v: [[23.807, -4.349], [26.58, -7.191], [29.388, -4.349], [26.58, -1.507]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "%",
                        np: 8,
                        cix: 2,
                        ix: 3,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 7,
                    ty: 4,
                    nm: "25% Outlines",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 104,
                                s: [0],
                                e: [100]
                            }, {t: 160}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {
                            a: 1,
                            k: [{
                                i: {x: .114, y: 1},
                                o: {x: .381, y: 0},
                                n: "0p114_1_0p381_0",
                                t: 91,
                                s: [219.906, 696.464, 0],
                                e: [379.906, 696.464, 0],
                                to: [26.6666660308838, 0, 0],
                                ti: [-26.6666660308838, 0, 0]
                            }, {t: 149}],
                            ix: 2
                        },
                        a: {a: 0, k: [.156, -12.036, 0], ix: 1},
                        s: {a: 0, k: [100, 100, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-.068, -.548], [0, 0], [0, 0], [0, 0], [0, 8.081], [4.554, 0], [1.335, -2.431], [0, 0], [-2.26, 0], [0, -2.637], [0, -8.457]],
                                    o: [[0, 0], [0, 0], [0, 0], [.068, -6.403], [0, -3.766], [-3.253, 0], [0, 0], [1.164, -1.883], [3.013, 0], [0, 6.506], [0, .479]],
                                    v: [[-29.276, 0], [-14.21, 0], [-14.21, -2.123], [-26.81, -2.123], [-14.587, -17.737], [-21.914, -24.482], [-29.207, -20.134], [-27.461, -18.935], [-22.051, -22.222], [-17.052, -17.6], [-29.413, -1.541]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "2",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "2",
                        np: 3,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-2.773, 0], [0, 4.451], [4.828, 0], [.651, -.411], [0, 0], [-.103, .856], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-1.472, 0], [0, -3.287], [3.321, 0], [.924, 1.335]],
                                    o: [[1.609, 2.157], [4.691, 0], [0, -4.314], [-1.404, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1.198, -.822], [3.458, 0], [0, 3.287], [-2.705, 0], [0, 0]],
                                    v: [[-10.374, -2.979], [-3.32, .411], [5.034, -7.499], [-3.252, -15.34], [-6.881, -14.415], [-6.95, -14.415], [-6.744, -15.785], [-6.025, -21.948], [3.528, -21.948], [3.528, -24.071], [-8.114, -24.071], [-9.415, -12.395], [-7.909, -11.847], [-3.526, -13.183], [2.569, -7.499], [-3.423, -1.883], [-8.833, -4.657]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "5",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "5",
                        np: 3,
                        cix: 2,
                        ix: 2,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-2.671, 0], [0, 2.637], [2.637, 0], [0, -2.602]],
                                    o: [[2.637, 0], [0, -2.602], [-2.671, 0], [0, 2.637]],
                                    v: [[13.324, -14.963], [18.152, -19.723], [13.324, -24.482], [8.53, -19.723]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[8.736, 0], [11.201, 0], [29.52, -24.071], [27.054, -24.071]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 2,
                            ty: "sh",
                            ix: 3,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[1.575, 0], [0, 1.575], [-1.575, 0], [0, -1.541]],
                                    o: [[-1.575, 0], [0, -1.541], [1.575, 0], [0, 1.575]],
                                    v: [[13.324, -16.881], [10.55, -19.723], [13.324, -22.565], [16.097, -19.723]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 3,
                            ty: "sh",
                            ix: 4,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, -2.637], [-2.671, 0], [0, 2.602], [2.671, 0]],
                                    o: [[0, 2.602], [2.671, 0], [0, -2.637], [-2.671, 0]],
                                    v: [[20.103, -4.314], [24.897, .411], [29.725, -4.314], [24.897, -9.108]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 4,
                            ty: "sh",
                            ix: 5,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 1.575], [-1.575, 0], [0, -1.541], [1.575, 0]],
                                    o: [[0, -1.541], [1.575, 0], [0, 1.575], [-1.575, 0]],
                                    v: [[22.124, -4.349], [24.897, -7.191], [27.705, -4.349], [24.897, -1.507]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "%",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "%",
                        np: 8,
                        cix: 2,
                        ix: 3,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 8,
                    ty: 4,
                    nm: "30+ 20-30 10-20 5-10 >5 Outlines",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 33,
                                s: [0],
                                e: [100]
                            }, {t: 59}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [104.941, 458.964, 0], ix: 2},
                        a: {a: 0, k: [46.941, 187.964, 0], ix: 1},
                        s: {a: 0, k: [100, 100, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-2.808, 0], [0, 4.109], [3.013, .137], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [.651, -.753], [0, 0], [0, 0], [0, 0], [0, -3.39], [2.876, 0], [1.335, 1.472]],
                                    o: [[1.986, 2.054], [4.554, 0], [0, -5.205], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1.267, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [3.116, 0], [0, 3.082], [-2.5, 0], [0, 0]],
                                    v: [[1.678, -2.876], [9.313, .411], [17.223, -7.122], [9.724, -14.21], [16.881, -22.496], [16.881, -24.071], [2.808, -24.071], [2.808, -21.948], [11.847, -21.948], [13.799, -22.051], [13.799, -21.983], [12.532, -20.647], [6.506, -13.594], [7.088, -12.19], [8.766, -12.19], [14.792, -7.054], [9.313, -1.883], [3.15, -4.691]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "3",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "3",
                        np: 3,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-6.232, 0], [0, 6.951], [6.266, 0], [0, -6.917]],
                                    o: [[6.266, 0], [0, -6.917], [-6.232, 0], [0, 6.951]],
                                    v: [[29.654, .411], [37.975, -12.053], [29.654, -24.482], [21.368, -12.053]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "0",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[4.588, 0], [0, 5.787], [-4.554, 0], [0, -5.718]],
                                    o: [[-4.554, 0], [0, -5.718], [4.588, 0], [0, 5.787]],
                                    v: [[29.654, -1.815], [23.833, -12.053], [29.654, -22.222], [35.509, -12.053]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "0",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "0",
                        np: 5,
                        cix: 2,
                        ix: 2,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[40.873, -8.731], [48.783, -8.731], [48.783, 0], [50.871, 0], [50.871, -8.731], [58.747, -8.731], [58.747, -10.717], [50.871, -10.717], [50.871, -19.449], [48.783, -19.449], [48.783, -10.717], [40.873, -10.717]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "+",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "+",
                        np: 3,
                        cix: 2,
                        ix: 3,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-.068, -.548], [0, 0], [0, 0], [0, 0], [0, 8.081], [4.554, 0], [1.335, -2.431], [0, 0], [-2.26, 0], [0, -2.637], [0, -8.457]],
                                    o: [[0, 0], [0, 0], [0, 0], [.068, -6.403], [0, -3.766], [-3.253, 0], [0, 0], [1.164, -1.883], [3.013, 0], [0, 6.506], [0, .479]],
                                    v: [[2.123, 109], [17.189, 109], [17.189, 106.877], [4.588, 106.877], [16.812, 91.263], [9.485, 84.518], [2.191, 88.866], [3.938, 90.065], [9.348, 86.778], [14.347, 91.4], [1.986, 107.459]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "2",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "2",
                        np: 3,
                        cix: 2,
                        ix: 4,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-6.232, 0], [0, 6.951], [6.266, 0], [0, -6.917]],
                                    o: [[6.266, 0], [0, -6.917], [-6.232, 0], [0, 6.951]],
                                    v: [[29.722, 109.411], [38.042, 96.947], [29.722, 84.518], [21.436, 96.947]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "0",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[4.588, 0], [0, 5.787], [-4.554, 0], [0, -5.718]],
                                    o: [[-4.554, 0], [0, -5.718], [4.588, 0], [0, 5.787]],
                                    v: [[29.722, 107.185], [23.901, 96.947], [29.722, 86.778], [35.577, 96.947]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "0",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "0",
                        np: 5,
                        cix: 2,
                        ix: 5,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[42.687, 100.337], [52.412, 100.337], [52.412, 98.214], [42.687, 98.214]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "-",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "-",
                        np: 3,
                        cix: 2,
                        ix: 6,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-2.808, 0], [0, 4.109], [3.013, .137], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [.651, -.753], [0, 0], [0, 0], [0, 0], [0, -3.39], [2.876, 0], [1.335, 1.472]],
                                    o: [[1.986, 2.054], [4.554, 0], [0, -5.205], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1.267, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [3.116, 0], [0, 3.082], [-2.5, 0], [0, 0]],
                                    v: [[55.907, 106.124], [63.543, 109.411], [71.453, 101.878], [63.954, 94.79], [71.11, 86.504], [71.11, 84.929], [57.037, 84.929], [57.037, 87.052], [66.077, 87.052], [68.029, 86.949], [68.029, 87.017], [66.762, 88.353], [60.735, 95.406], [61.317, 96.81], [62.995, 96.81], [69.022, 101.946], [63.543, 107.117], [57.38, 104.309]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "3",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "3",
                        np: 3,
                        cix: 2,
                        ix: 7,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-6.232, 0], [0, 6.951], [6.266, 0], [0, -6.917]],
                                    o: [[6.266, 0], [0, -6.917], [-6.232, 0], [0, 6.951]],
                                    v: [[83.884, 109.411], [92.204, 96.947], [83.884, 84.518], [75.597, 96.947]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "0",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[4.588, 0], [0, 5.787], [-4.554, 0], [0, -5.718]],
                                    o: [[-4.554, 0], [0, -5.718], [4.588, 0], [0, 5.787]],
                                    v: [[83.884, 107.185], [78.063, 96.947], [83.884, 86.778], [89.739, 96.947]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "0",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "0",
                        np: 5,
                        cix: 2,
                        ix: 8,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -.685], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [.959, -.959], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[1.952, 218], [14.997, 218], [14.997, 215.877], [9.69, 215.877], [9.69, 193.929], [7.499, 193.929], [2.054, 199.339], [3.561, 200.845], [6.129, 198.312], [7.328, 196.873], [7.396, 196.873], [7.362, 198.209], [7.362, 215.877], [1.952, 215.877]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "1",
                        np: 3,
                        cix: 2,
                        ix: 9,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-6.232, 0], [0, 6.951], [6.266, 0], [0, -6.917]],
                                    o: [[6.266, 0], [0, -6.917], [-6.232, 0], [0, 6.951]],
                                    v: [[26.594, 218.411], [34.914, 205.947], [26.594, 193.518], [18.307, 205.947]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "0",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[4.588, 0], [0, 5.787], [-4.554, 0], [0, -5.718]],
                                    o: [[-4.554, 0], [0, -5.718], [4.588, 0], [0, 5.787]],
                                    v: [[26.594, 216.185], [20.773, 205.947], [26.594, 195.778], [32.449, 205.947]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "0",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "0",
                        np: 5,
                        cix: 2,
                        ix: 10,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[39.559, 209.337], [49.283, 209.337], [49.283, 207.214], [39.559, 207.214]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "-",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "-",
                        np: 3,
                        cix: 2,
                        ix: 11,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-.068, -.548], [0, 0], [0, 0], [0, 0], [0, 8.081], [4.554, 0], [1.335, -2.431], [0, 0], [-2.26, 0], [0, -2.637], [0, -8.457]],
                                    o: [[0, 0], [0, 0], [0, 0], [.068, -6.403], [0, -3.766], [-3.253, 0], [0, 0], [1.164, -1.883], [3.013, 0], [0, 6.506], [0, .479]],
                                    v: [[53.258, 218], [68.324, 218], [68.324, 215.877], [55.723, 215.877], [67.947, 200.263], [60.62, 193.518], [53.326, 197.866], [55.073, 199.065], [60.483, 195.778], [65.482, 200.4], [53.121, 216.459]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "2",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "2",
                        np: 3,
                        cix: 2,
                        ix: 12,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-6.232, 0], [0, 6.951], [6.266, 0], [0, -6.917]],
                                    o: [[6.266, 0], [0, -6.917], [-6.232, 0], [0, 6.951]],
                                    v: [[80.857, 218.411], [89.177, 205.947], [80.857, 193.518], [72.571, 205.947]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "0",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[4.588, 0], [0, 5.787], [-4.554, 0], [0, -5.718]],
                                    o: [[-4.554, 0], [0, -5.718], [4.588, 0], [0, 5.787]],
                                    v: [[80.857, 216.185], [75.036, 205.947], [80.857, 195.778], [86.712, 205.947]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "0",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "0",
                        np: 5,
                        cix: 2,
                        ix: 13,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-2.773, 0], [0, 4.451], [4.828, 0], [.651, -.411], [0, 0], [-.103, .856], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-1.472, 0], [0, -3.287], [3.321, 0], [.924, 1.335]],
                                    o: [[1.609, 2.157], [4.691, 0], [0, -4.314], [-1.404, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1.198, -.822], [3.458, 0], [0, 3.287], [-2.705, 0], [0, 0]],
                                    v: [[1.849, 324.021], [8.903, 327.411], [17.257, 319.501], [8.971, 311.66], [5.342, 312.585], [5.273, 312.585], [5.479, 311.215], [6.198, 305.052], [15.751, 305.052], [15.751, 302.929], [4.109, 302.929], [2.808, 314.605], [4.314, 315.153], [8.697, 313.817], [14.792, 319.501], [8.8, 325.117], [3.39, 322.343]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "5",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "5",
                        np: 3,
                        cix: 2,
                        ix: 14,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[21.404, 318.337], [31.128, 318.337], [31.128, 316.214], [21.404, 316.214]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "-",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "-",
                        np: 3,
                        cix: 2,
                        ix: 15,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -.685], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [.959, -.959], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[34.727, 327], [47.773, 327], [47.773, 324.877], [42.466, 324.877], [42.466, 302.929], [40.274, 302.929], [34.83, 308.339], [36.337, 309.845], [38.905, 307.312], [40.103, 305.873], [40.172, 305.873], [40.137, 307.209], [40.137, 324.877], [34.727, 324.877]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "1",
                        np: 3,
                        cix: 2,
                        ix: 16,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[-6.232, 0], [0, 6.951], [6.266, 0], [0, -6.917]],
                                    o: [[6.266, 0], [0, -6.917], [-6.232, 0], [0, 6.951]],
                                    v: [[59.369, 327.411], [67.69, 314.947], [59.369, 302.518], [51.083, 314.947]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "0",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[4.588, 0], [0, 5.787], [-4.554, 0], [0, -5.718]],
                                    o: [[-4.554, 0], [0, -5.718], [4.588, 0], [0, 5.787]],
                                    v: [[59.369, 325.185], [53.548, 314.947], [59.369, 304.778], [65.224, 314.947]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "0",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1}, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "0",
                        np: 5,
                        cix: 2,
                        ix: 17,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[2.431, 434.048], [17.874, 427.132], [17.874, 425.42], [2.431, 418.503], [2.431, 420.797], [14.997, 426.241], [14.997, 426.31], [2.431, 431.754]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: ">",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: ">",
                        np: 3,
                        cix: 2,
                        ix: 18,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [-2.773, 0], [0, 4.451], [4.828, 0], [.651, -.411], [0, 0], [-.103, .856], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-1.472, 0], [0, -3.287], [3.321, 0], [.924, 1.335]],
                                    o: [[1.609, 2.157], [4.691, 0], [0, -4.314], [-1.404, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1.198, -.822], [3.458, 0], [0, 3.287], [-2.705, 0], [0, 0]],
                                    v: [[21.161, 433.021], [28.214, 436.411], [36.569, 428.501], [28.283, 420.66], [24.653, 421.585], [24.585, 421.585], [24.79, 420.215], [25.509, 414.052], [35.063, 414.052], [35.063, 411.929], [23.421, 411.929], [22.12, 423.605], [23.626, 424.153], [28.009, 422.817], [34.104, 428.501], [28.112, 434.117], [22.702, 431.343]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "5",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [1, 1, 1, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "5",
                        np: 3,
                        cix: 2,
                        ix: 19,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 19,
                    ty: 4,
                    nm: "side part 25/bar chart copy111 Outlines",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 138,
                                s: [0],
                                e: [100]
                            }, {t: 146}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [585, 430, 0], ix: 2},
                        a: {a: 0, k: [292.5, 215, 0], ix: 1},
                        s: {a: 0, k: [213.504, 213.504, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[1, 15.583], [-1, 15.583], [-1, -15.584], [1, -15.584]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.573000021542, .736999990426, .925, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [227.5, 340.854], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 20,
                    ty: 4,
                    nm: "side part 30/bar chart copy111 Outlines",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 136,
                                s: [0],
                                e: [100]
                            }, {t: 142}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [585, 430, 0], ix: 2},
                        a: {a: 0, k: [292.5, 215, 0], ix: 1},
                        s: {a: 0, k: [213.504, 213.504, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[1, 15.583], [-1, 15.583], [-1, -15.584], [1, -15.584]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.573000021542, .736999990426, .925, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [247, 289.354], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 21,
                    ty: 4,
                    nm: "side part 35/bar chart copy111 Outlines",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 133,
                                s: [0],
                                e: [100]
                            }, {t: 141}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [585, 430, 0], ix: 2},
                        a: {a: 0, k: [292.5, 215, 0], ix: 1},
                        s: {a: 0, k: [213.504, 213.504, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[1, 15.584], [-1, 15.584], [-1, -15.583], [1, -15.583]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.573000021542, .736999990426, .925, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [267.5, 237.854], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 22,
                    ty: 4,
                    nm: "side part 40/bar chart copy111 Outlines",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 130,
                                s: [0],
                                e: [100]
                            }, {t: 138}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [585, 430, 0], ix: 2},
                        a: {a: 0, k: [292.5, 215, 0], ix: 1},
                        s: {a: 0, k: [213.504, 213.504, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[1, 15.584], [-1, 15.584], [-1, -15.583], [1, -15.583]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.573000021542, .736999990426, .925, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [287, 187.854], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 23,
                    ty: 4,
                    nm: "side part 45/bar chart copy111 Outlines",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 128,
                                s: [0],
                                e: [100]
                            }, {t: 136}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [585, 430, 0], ix: 2},
                        a: {a: 0, k: [292.5, 215, 0], ix: 1},
                        s: {a: 0, k: [213.504, 213.504, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[1, 15.583], [-1, 15.583], [-1, -15.583], [1, -15.583]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.573000021542, .736999990426, .925, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [308, 136.354], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 29,
                    ty: 4,
                    nm: "chart  25%/bar chart copy111 Outlines",
                    sr: 1,
                    ks: {
                        o: {a: 0, k: 100, ix: 11},
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [237.454, 698.703, 0], ix: 2},
                        a: {a: 0, k: [129.727, 340.854, 0], ix: 1},
                        s: {
                            a: 1,
                            k: [{
                                i: {x: [.085, .667, .667], y: [1, 1, 1]},
                                o: {x: [.35, .333, .333], y: [0, 0, 0]},
                                n: ["0p085_1_0p35_0", "0p667_1_0p333_0", "0p667_1_0p333_0"],
                                t: 87.225,
                                s: [0, 213.504, 100],
                                e: [213.504, 213.504, 100]
                            }, {t: 141}],
                            ix: 6
                        }
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[48.773, 15.583], [-48.773, 15.583], [-48.773, -15.584], [48.773, -15.584]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.322000002394, .404000016755, .497999991623, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [177.727, 340.854], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 30,
                    ty: 4,
                    nm: "chart  30%/bar chart copy111 Outlines",
                    sr: 1,
                    ks: {
                        o: {a: 0, k: 100, ix: 11},
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [235.895, 588.748, 0], ix: 2},
                        a: {a: 0, k: [128.477, 289.354, 0], ix: 1},
                        s: {
                            a: 1,
                            k: [{
                                i: {x: [.085, .667, .667], y: [1, 1, 1]},
                                o: {x: [.35, .333, .333], y: [0, 0, 0]},
                                n: ["0p085_1_0p35_0", "0p667_1_0p333_0", "0p667_1_0p333_0"],
                                t: 85.225,
                                s: [0, 213.504, 100],
                                e: [213.504, 213.504, 100]
                            }, {t: 139}],
                            ix: 6
                        }
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[58.523, 15.583], [-58.523, 15.583], [-58.523, -15.584], [58.523, -15.584]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.322000002394, .404000016755, .497999991623, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [187.477, 289.354], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 31,
                    ty: 4,
                    nm: "chart  35%/bar chart copy111 Outlines",
                    sr: 1,
                    ks: {
                        o: {a: 0, k: 100, ix: 11},
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [235.655, 478.795, 0], ix: 2},
                        a: {a: 0, k: [128.727, 237.854, 0], ix: 1},
                        s: {
                            a: 1,
                            k: [{
                                i: {x: [.085, .667, .667], y: [1, 1, 1]},
                                o: {x: [.35, .333, .333], y: [0, 0, 0]},
                                n: ["0p085_1_0p35_0", "0p667_1_0p333_0", "0p667_1_0p333_0"],
                                t: 82.225,
                                s: [0, 213.504, 100],
                                e: [213.504, 213.504, 100]
                            }, {t: 136}],
                            ix: 6
                        }
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[68.773, 15.584], [-68.773, 15.584], [-68.773, -15.583], [68.773, -15.583]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.322000002394, .404000016755, .497999991623, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [197.727, 237.854], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 32,
                    ty: 4,
                    nm: "chart  40%/bar chart copy111 Outlines",
                    sr: 1,
                    ks: {
                        o: {a: 0, k: 100, ix: 11},
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [235.471, 372.043, 0], ix: 2},
                        a: {a: 0, k: [128.477, 187.854, 0], ix: 1},
                        s: {
                            a: 1,
                            k: [{
                                i: {x: [.085, .667, .667], y: [1, 1, 1]},
                                o: {x: [.35, .333, .333], y: [0, 0, 0]},
                                n: ["0p085_1_0p35_0", "0p667_1_0p333_0", "0p667_1_0p333_0"],
                                t: 78.225,
                                s: [0, 213.504, 100],
                                e: [213.504, 213.504, 100]
                            }, {t: 132}],
                            ix: 6
                        }
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[78.523, 15.584], [-78.523, 15.584], [-78.523, -15.583], [78.523, -15.583]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.322000002394, .404000016755, .497999991623, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [207.477, 187.854], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 33,
                    ty: 4,
                    nm: "chart 45%/bar chart copy111 Outlines",
                    sr: 1,
                    ks: {
                        o: {a: 0, k: 100, ix: 11},
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [236.889, 262.213, 0], ix: 2},
                        a: {a: 0, k: [128.977, 136.354, 0], ix: 1},
                        s: {
                            a: 1,
                            k: [{
                                i: {x: [.085, .667, .667], y: [1, 1, 1]},
                                o: {x: [.35, .333, .333], y: [0, 0, 0]},
                                n: ["0p085_1_0p35_0", "0p667_1_0p333_0", "0p667_1_0p333_0"],
                                t: 72,
                                s: [0, 213.504, 100],
                                e: [213.504, 213.504, 100]
                            }, {t: 125.775390625}],
                            ix: 6
                        }
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[89.023, 15.583], [-89.023, 15.583], [-89.023, -15.583], [89.023, -15.583]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.322000002394, .404000016755, .497999991623, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [217.977, 136.354], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 34,
                    ty: 4,
                    nm: "Line 1/bar chart copy111 Outlines",
                    sr: 1,
                    ks: {
                        o: {a: 0, k: 100, ix: 11},
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [585, 430, 0], ix: 2},
                        a: {a: 0, k: [292.5, 215, 0], ix: 1},
                        s: {a: 0, k: [213.504, 213.504, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[108, 104.438], [46, 104.438]],
                                    c: !1
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "st",
                            c: {a: 0, k: [.289999988032, .322000002394, .365000017952, 1], ix: 3},
                            o: {a: 0, k: 100, ix: 4},
                            w: {a: 0, k: .75, ix: 5},
                            lc: 1,
                            lj: 1,
                            ml: 10,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "tm",
                        s: {
                            a: 1,
                            k: [{
                                i: {x: [.006], y: [1]},
                                o: {x: [.275], y: [0]},
                                n: ["0p006_1_0p275_0"],
                                t: 61,
                                s: [100],
                                e: [0]
                            }, {t: 108}],
                            ix: 1
                        },
                        e: {a: 0, k: 100, ix: 2},
                        o: {a: 0, k: 0, ix: 3},
                        m: 1,
                        ix: 2,
                        nm: "Trim Paths 1",
                        mn: "ADBE Vector Filter - Trim",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 35,
                    ty: 4,
                    nm: "Line 1111/bar chart copy111 Outlines",
                    sr: 1,
                    ks: {
                        o: {a: 0, k: 100, ix: 11},
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [585, 430, 0], ix: 2},
                        a: {a: 0, k: [292.5, 215, 0], ix: 1},
                        s: {a: 0, k: [213.504, 213.504, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0]],
                                    v: [[526.98, 104.438], [129.016, 104.438]],
                                    c: !1
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "st",
                            c: {a: 0, k: [.289999988032, .322000002394, .365000017952, 1], ix: 3},
                            o: {a: 0, k: 100, ix: 4},
                            w: {a: 0, k: .75, ix: 5},
                            lc: 1,
                            lj: 1,
                            ml: 10,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [0, 0], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }, {
                        ty: "tm",
                        s: {
                            a: 1,
                            k: [{
                                i: {x: [.006], y: [1]},
                                o: {x: [.275], y: [0]},
                                n: ["0p006_1_0p275_0"],
                                t: 61,
                                s: [100],
                                e: [0]
                            }, {t: 108}],
                            ix: 1
                        },
                        e: {a: 0, k: 100, ix: 2},
                        o: {a: 0, k: 0, ix: 3},
                        m: 1,
                        ix: 2,
                        nm: "Trim Paths 1",
                        mn: "ADBE Vector Filter - Trim",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 37,
                    ty: 4,
                    nm: "chart  25%/bar chart copy111 Outlines 2",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 33,
                                s: [0],
                                e: [100]
                            }, {t: 59}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [339.954, 698.703, 0], ix: 2},
                        a: {a: 0, k: [177.727, 340.854, 0], ix: 1},
                        s: {a: 0, k: [213.504, 213.504, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[48.773, 15.583], [-48.773, 15.583], [-48.773, -15.584], [48.773, -15.584]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.16862745098, .207843137255, .254901960784, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [328.543, 340.854], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [409.373, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 38,
                    ty: 4,
                    nm: "chart  30%/bar chart copy111 Outlines 2",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 33,
                                s: [0],
                                e: [100]
                            }, {t: 59}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [662, 588.748, 0], ix: 2},
                        a: {a: 0, k: [187.477, 289.354, 0], ix: 1},
                        s: {a: 0, k: [727.828, 213.504, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[58.523, 15.583], [-58.523, 15.583], [-58.523, -15.584], [58.523, -15.584]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.16862745098, .207843137255, .254901960784, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [187.477, 289.354], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 39,
                    ty: 4,
                    nm: "chart  35%/bar chart copy111 Outlines 2",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 33,
                                s: [0],
                                e: [100]
                            }, {t: 59}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [662, 478.795, 0], ix: 2},
                        a: {a: 0, k: [197.727, 237.854, 0], ix: 1},
                        s: {a: 0, k: [619.275, 213.504, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[68.773, 15.584], [-68.773, 15.584], [-68.773, -15.583], [68.773, -15.583]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.16862745098, .207843137255, .254901960784, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [197.727, 237.854], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 40,
                    ty: 4,
                    nm: "chart  40%/bar chart copy111 Outlines 2",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 33,
                                s: [0],
                                e: [100]
                            }, {t: 59}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [662, 372.043, 0], ix: 2},
                        a: {a: 0, k: [207.477, 187.854, 0], ix: 1},
                        s: {a: 0, k: [542.387, 213.504, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[78.523, 15.584], [-78.523, 15.584], [-78.523, -15.583], [78.523, -15.583]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.16862745098, .207843137255, .254901960784, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [207.477, 187.854], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }, {
                    ddd: 0,
                    ind: 41,
                    ty: 4,
                    nm: "chart 45%/bar chart copy111 Outlines 2",
                    sr: 1,
                    ks: {
                        o: {
                            a: 1,
                            k: [{
                                i: {x: [.833], y: [.833]},
                                o: {x: [.167], y: [.167]},
                                n: ["0p833_0p833_0p167_0p167"],
                                t: 33,
                                s: [0],
                                e: [100]
                            }, {t: 59}],
                            ix: 11
                        },
                        r: {a: 0, k: 0, ix: 10},
                        p: {a: 0, k: [662, 262.088, 0], ix: 2},
                        a: {a: 0, k: [217.977, 136.354, 0], ix: 1},
                        s: {a: 0, k: [478.462, 213.504, 100], ix: 6}
                    },
                    ao: 0,
                    shapes: [{
                        ty: "gr",
                        it: [{
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                                a: 0,
                                k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                    v: [[89.023, 15.583], [-89.023, 15.583], [-89.023, -15.583], [89.023, -15.583]],
                                    c: !0
                                },
                                ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1
                        }, {
                            ty: "fl",
                            c: {a: 0, k: [.16862745098, .207843137255, .254901960784, 1], ix: 4},
                            o: {a: 0, k: 100, ix: 5},
                            r: 1,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1
                        }, {
                            ty: "tr",
                            p: {a: 0, k: [217.977, 136.354], ix: 2},
                            a: {a: 0, k: [0, 0], ix: 1},
                            s: {a: 0, k: [100, 100], ix: 3},
                            r: {a: 0, k: 0, ix: 6},
                            o: {a: 0, k: 100, ix: 7},
                            sk: {a: 0, k: 0, ix: 4},
                            sa: {a: 0, k: 0, ix: 5},
                            nm: "Transform"
                        }],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1
                    }],
                    ip: 0,
                    op: 750,
                    st: 0,
                    bm: 0
                }],
                markers: [],
                chars: [{
                    ch: "F",
                    size: 24,
                    style: "300",
                    w: 50.6,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[10.172, 0], [17.12, 0], [17.12, -31.723], [43.103, -31.723], [43.103, -37.967], [17.12, -37.967], [17.12, -64.554], [47.333, -64.554], [47.333, -70.798], [10.172, -70.798]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "F",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "F",
                            np: 3,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "T",
                    size: 24,
                    style: "300",
                    w: 60.7,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[27.09, 0], [34.039, 0], [34.039, -64.554], [59.518, -64.554], [59.518, -70.798], [1.712, -70.798], [1.712, -64.554], [27.09, -64.554]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "T",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "T",
                            np: 3,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "D",
                    size: 24,
                    style: "300",
                    w: 73.8,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 22.458], [21.35, 0], [0, 0]],
                                        o: [[0, 0], [21.35, 0], [0, -22.357], [0, 0], [0, 0]],
                                        v: [[10.172, 0], [32.932, 0], [68.481, -35.449], [32.932, -70.798], [10.172, -70.798]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "D",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, -18.832], [17.422, 0]],
                                        o: [[0, 0], [0, 0], [17.422, 0], [0, 19.034], [0, 0]],
                                        v: [[17.12, -6.244], [17.12, -64.554], [32.227, -64.554], [61.23, -35.449], [32.227, -6.244]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "D",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "D",
                            np: 5,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "s",
                    size: 24,
                    style: "300",
                    w: 43.8,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [-6.747, 0], [0, 8.359], [0, 11.581], [-5.338, 0], [-2.921, -2.921], [0, 0], [5.539, 0], [0, -9.265], [0, -11.279], [5.64, 0], [3.827, 3.928]],
                                        o: [[4.834, 5.035], [9.97, 0], [0, -16.718], [0, -5.539], [4.532, 0], [0, 0], [-4.129, -3.928], [-9.265, 0], [0, 16.617], [0, 5.338], [-5.539, 0], [0, 0]],
                                        v: [[3.726, -6.143], [22.559, 1.208], [39.679, -13.092], [12.589, -37.967], [22.76, -45.822], [35.449, -41.19], [38.672, -46.326], [23.062, -51.865], [5.841, -37.766], [32.831, -12.991], [22.659, -4.834], [7.352, -10.977]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "s",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "s",
                            np: 3,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {ch: " ", size: 24, style: "300", w: 25, data: {}, fFamily: "Museo Sans Cyrl"}, {
                    ch: "p",
                    size: 24,
                    style: "300",
                    w: 58.9,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-7.15, 0], [0, 16.113], [13.696, 0], [3.122, -6.546], [0, 0], [0, 2.216], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, -2.618], [0, 0], [3.323, 6.345], [13.193, 0], [0, -15.61], [-7.855, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[8.157, 20.142], [15.005, 20.142], [15.005, -4.431], [14.703, -8.862], [14.905, -8.862], [31.622, 1.208], [54.282, -25.378], [32.227, -51.865], [14.603, -41.391], [14.401, -41.391], [14.703, -45.319], [14.703, -50.656], [8.157, -50.656]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "p",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 10.172], [-8.459, 0], [0, -12.387], [8.963, 0]],
                                        o: [[0, -14.401], [9.467, 0], [0, 12.891], [-10.373, 0]],
                                        v: [[14.804, -25.177], [31.219, -45.621], [47.333, -25.278], [30.917, -4.935]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "p",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "p",
                            np: 5,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "e",
                    size: 24,
                    style: "300",
                    w: 55.3,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, -16.617], [-15.106, 0], [-4.733, 4.33], [0, 0], [5.539, 0], [.302, 12.891], [0, 0], [0, 1.108], [13.998, 0]],
                                        o: [[0, 15.61], [6.647, 0], [0, 0], [-4.129, 3.726], [-10.474, 0], [0, 0], [.101, -1.108], [0, -12.589], [-13.696, 0]],
                                        v: [[4.733, -25.278], [31.32, 1.208], [50.052, -5.841], [46.93, -11.078], [31.522, -5.035], [11.884, -25.076], [50.757, -25.076], [50.958, -28.5], [29.81, -51.865]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "e",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [-8.459, 0], [-.403, -10.574]],
                                        o: [[1.611, -10.172], [7.553, 0], [0, 0]],
                                        v: [[12.186, -30.515], [29.608, -46.225], [44.009, -30.515]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "e",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "e",
                            np: 5,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "r",
                    size: 24,
                    style: "300",
                    w: 35.7,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [-11.38, 0], [-.302, -.101], [0, 0], [.906, 0], [2.518, -7.654], [0, 0], [0, 2.216], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, -10.071], [1.007, 0], [0, 0], [-.806, -.201], [-7.855, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[8.157, 0], [15.005, 0], [15.005, -21.451], [31.119, -44.312], [33.636, -44.11], [33.636, -50.858], [30.917, -51.16], [14.703, -37.262], [14.502, -37.262], [14.905, -41.29], [14.905, -50.656], [8.157, -50.656]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "r",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "r",
                            np: 3,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "/",
                    size: 24,
                    style: "300",
                    w: 28.6,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[4.23, 4.23], [10.675, 4.23], [36.255, -74.725], [29.81, -74.725]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "/",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "/",
                            np: 3,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "m",
                    size: 24,
                    style: "300",
                    w: 91.6,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 0], [0, 0], [0, 0], [-10.272, 0], [0, -7.654], [0, 0], [0, 0], [0, 0], [-10.172, 0], [0, -8.359], [0, 0], [0, 0], [0, 0], [12.286, 0], [2.82, -6.445], [0, 0], [9.366, 0], [2.518, -6.848], [0, 0], [0, 2.216], [0, 0], [0, 0]],
                                        o: [[0, 0], [0, 0], [0, -10.272], [9.567, 0], [0, 0], [0, 0], [0, 0], [0, -10.474], [9.164, 0], [0, 0], [0, 0], [0, 0], [0, -12.488], [-8.459, 0], [0, 0], [-1.41, -8.258], [-7.956, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                                        v: [[8.157, 0], [15.005, 0], [15.005, -24.472], [32.327, -45.52], [43.002, -30.515], [43.002, 0], [49.85, 0], [49.85, -24.472], [66.87, -45.52], [77.747, -30.515], [77.747, 0], [84.595, 0], [84.595, -32.227], [67.776, -51.865], [49.146, -39.175], [48.944, -39.175], [33.334, -51.865], [14.703, -38.672], [14.502, -38.672], [14.905, -42.7], [14.905, -50.656], [8.157, -50.656]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "m",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "m",
                            np: 3,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }, {
                    ch: "o",
                    size: 24,
                    style: "300",
                    w: 62.4,
                    data: {
                        shapes: [{
                            ty: "gr",
                            it: [{
                                ind: 0,
                                ty: "sh",
                                ix: 1,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, -15.005], [-14.804, 0], [0, 15.308], [14.804, 0]],
                                        o: [[0, 15.308], [14.804, 0], [0, -15.005], [-14.804, 0]],
                                        v: [[4.733, -25.58], [31.421, 1.208], [58.209, -25.58], [31.421, -51.865]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "o",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }, {
                                ind: 1,
                                ty: "sh",
                                ix: 2,
                                ks: {
                                    a: 0,
                                    k: {
                                        i: [[0, 11.884], [-10.876, 0], [0, -11.481], [10.876, 0]],
                                        o: [[0, -11.481], [10.876, 0], [0, 11.884], [-10.876, 0]],
                                        v: [[11.783, -25.58], [31.421, -45.721], [51.16, -25.58], [31.421, -5.035]],
                                        c: !0
                                    },
                                    ix: 2
                                },
                                nm: "o",
                                mn: "ADBE Vector Shape - Group",
                                hd: !1
                            }],
                            nm: "o",
                            np: 5,
                            cix: 2,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: !1
                        }]
                    },
                    fFamily: "Museo Sans Cyrl"
                }]
            }
        };
        r = lottie.loadAnimation(t)
    }
    $(".counter2").counterUp({delay: 10, time: 2e3}), $(".counter3").counterUp({
        delay: 10,
        time: 5e3
    }), $("#fp-nav").wrap('<div class="fp-nav-wrapper"></div>'), $("#buter").click(function () {
        $(this).toggleClass("open"), $(".mobile-container").toggleClass("open")
    });
    var x = new fullpage("#fullpage", {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        // anchors: ["home", "aboutus", "brands", "comission-plans", "transparent-comission-plans", "testimonials", "contacts"],
        anchors: ["home", "aboutus", "brands", "comission-plans", "transparent-comission-plans", "testimonials", "contacts"],
        navigation: !0,
        navigationPosition: "right",
        navigationTooltips: ["01", "02", "03", "04", "05", "06", "07"],
        responsiveWidth: 992,
        responsiveHeight: 800,
        afterResponsive: function (i) {
        },
        onLeave: function (a, t, x) {
            $("#casino-slider"), $("#casino-slider2");

            function n(i) {
                return i.preventDefault(), i.stopPropagation(), !1
            }

            $(t.item).is("#section1") ? $(window).width() > 991 && $(window).height() > 800 && ($("body").on("scroll wheel touchmove", n), $(".boom-ball").addClass("ready"), setTimeout(function () {
                $(".boom-ball").addClass("active")
            }, 600), setTimeout(function () {
                $("#section0").addClass("non-active"), $("body").off("scroll wheel touchmove", n)
            }, 1600)) : $(t.item).is("#section0") ? $(window).width() > 991 && $(window).height() > 800 && ($("body").on("scroll wheel touchmove", n), $("#section0").removeClass("non-active"), setTimeout(function () {
                $(".boom-ball").removeClass("active")
            }, 1e3), setTimeout(function () {
                $(".boom-ball").removeClass("ready"), $("body").off("scroll wheel touchmove", n)
            }, 2e3)) : $(t.item).is("#section3") ? (i.play(), r.play()) : $(".boom-ball").removeClass("active"), $(t.item).is("#section2") ? $("#casino-slider0").slick("slickPlay").slick("slickSetOption", "autoplay", !0).slick("slickPlay") : $("#casino-slider0").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause")
        }
    });
    $(".main-arrow, .first__link").click(function () {
        x.moveSectionDown()
    }),
        $("#casino-slider0").slick({
        autoplay: !1,
        autoplaySpeed: 5e3,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: !0,
        arrows: !1,
        fade: !0,
        dots: !0,
        speed: 300,
        swipe: !1,
        pauseOnFocus: !1,
        pauseOnHover: !1,
        pauseOnDotsHover: !1
    }),
        $("#casino-slider0 .slick-dots").addClass("brand__img-nav"), $(".brand__img-nav li").addClass("brand__img-img"), $("#casino-slider0").on("afterChange", function (i, a, r, t) {
        if (3 == a.currentSlide) {
            $(".brand-blocks .active .brand__img-img").is(".clicked") ? clearTimeout() : setTimeout(function () {
                $("#elroyal").click(), $("#casino-slider0").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"), $("#casino-slider").slick("slickPlay").slick("slickSetOption", "autoplay", !0).slick("slickPlay"), $("#casino-slider3").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"), $("#casino-slider2").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"),$("#casino-slider4").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"), clearTimeout(), $(".slick-slider.active").slick("slickGoTo", 0)
            }, 5e3), $(".brand-blocks .active .brand__img-img").click(function () {
                clearTimeout()
            })
        }
    }),
        $("#casino-slider").slick({
        autoplay: !1,
        autoplaySpeed: 5e3,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: !0,
        arrows: !1,
        fade: !0,
        dots: !0,
        speed: 300,
        swipe: !1,
        pauseOnFocus: !1,
        pauseOnHover: !1,
        pauseOnDotsHover: !1
    }),
        $("#casino-slider .slick-dots").addClass("brand__img-nav"), $(".brand__img-nav li").addClass("brand__img-img"), $("#casino-slider").on("afterChange", function (i, a, r, t) {
        if (3 == a.currentSlide) {
            $(".brand-blocks .active .brand__img-img").is(".clicked") ? clearTimeout() : setTimeout(function () {
                $("#reddog").click(), $("#casino-slider").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"), $("#casino-slider2").slick("slickPlay").slick("slickSetOption", "autoplay", !0).slick("slickPlay"), $("#casino-slider3").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"), $("#casino-slider0").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"),$("#casino-slider4").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"), clearTimeout(), $(".slick-slider.active").slick("slickGoTo", 0)
            }, 5e3), $(".brand-blocks .active .brand__img-img").click(function () {
                clearTimeout()
            })
        }
    })
        , $("#casino-slider2").slick({
        autoplay: !1,
        autoplaySpeed: 5e3,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: !0,
        arrows: !1,
        fade: !0,
        dots: !0,
        speed: 300,
        swipe: !1,
        pauseOnFocus: !1,
        pauseOnHover: !1,
        pauseOnDotsHover: !1
    }), $("#casino-slider2 .slick-dots").addClass("brand__img-nav"), $(".brand__img-nav li").addClass("brand__img-img"),
        $("#casino-slider2").on("afterChange", function (i, a, r, t) {
        if (3 == a.currentSlide) {
            $(".brand-blocks .active .brand__img-img").is(".clicked") ? clearTimeout() : setTimeout(function () {
                $("#aussie").click(), $("#casino-slider").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"), $("#casino-slider2").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"), $("#casino-slider3").slick("slickPlay").slick("slickSetOption", "autoplay", !0).slick("slickPlay"), $("#casino-slider4").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"), clearTimeout(), $(".slick-slider.active").slick("slickGoTo", 0)
            }, 5e3), $(".brand-blocks .active .brand__img-img").click(function () {
                clearTimeout()
            })
        }
    }), $("#casino-slider3").slick({
        autoplay: !1,
        autoplaySpeed: 5e3,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: !0,
        arrows: !1,
        fade: !0,
        dots: !0,
        speed: 300,
        swipe: !1,
        pauseOnFocus: !1,
        pauseOnHover: !1,
        pauseOnDotsHover: !1
    }), $("#casino-slider3 .slick-dots").addClass("brand__img-nav"), $(".brand__img-nav li").addClass("brand__img-img"),
        $("#casino-slider3").on("afterChange", function (i, a, r, t) {
            if (3 == a.currentSlide) {
                $(".brand-blocks .active .brand__img-img").is(".clicked") ? clearTimeout() : setTimeout(function () {
                    $("#elroyal").click(), $("#casino-slider").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"), $("#casino-slider2").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"), $("#casino-slider0").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"),$("#casino-slider3").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"), $("#casino-slider4").slick("slickPlay").slick("slickSetOption", "autoplay", !0).slick("slickPlay"), clearTimeout(), $(".slick-slider.active").slick("slickGoTo", 0)
                }, 5e3), $(".brand-blocks .active .brand__img-img").click(function () {
                    clearTimeout()
                })
            }
        }),
        $("#casino-slider4").slick({
            autoplay: !1,
            autoplaySpeed: 5e3,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !0,
            arrows: !1,
            fade: !0,
            dots: !0,
            speed: 300,
            swipe: !1,
            pauseOnFocus: !1,
            pauseOnHover: !1,
            pauseOnDotsHover: !1
        }),
        $("#casino-slider4 .slick-dots").addClass("brand__img-nav"),
        $(".brand__img-nav li").addClass("brand__img-img"),
        $("#casino-slider4").on("afterChange", function (i, a, r, t) {
        if (3 == a.currentSlide) {
            $(".brand-blocks .active .brand__img-img").is(".clicked") ? clearTimeout() : setTimeout(function () {
                $("#atlantis").click(), $("#casino-slider0").slick("slickPlay").slick("slickSetOption", "autoplay", !0).slick("slickPlay"), $("#casino-slider2").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"), $("#casino-slider").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"),$("#casino-slider3").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"), $("#casino-slider4").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"), clearTimeout(), $(".slick-slider.active").slick("slickGoTo", 0)
            }, 5e3), $(".brand-blocks .active .brand__img-img").click(function () {
                clearTimeout()
            })
        }
    }), $(".cntrl-btn").on("click", function () {
        let i = $(this).index(), a = $(".slick-slider.active"), r = $(".brand__img-nav.active"),
            t = $(".brand__info-top.active");
        $(".slick-slider").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"),
            $(".cntrl-btn").removeClass("active"), $(".slick-dots li").removeClass("clicked"),
            $(this).addClass("active"), a.removeClass("active"), r.removeClass("active"), t.removeClass("active"),
            $(".slick-slider").slick("slickGoTo", 0),
            a.hasClass("active") && r.hasClass("active") && t.hasClass("active") ? $(this).removeClass("active") : ($(".slick-slider").eq(i).addClass("active"),
                $(".brand__img-nav").eq(i).addClass("active"), $(".brand__info-top").eq(i).addClass("active"),
                $(".slick-slider.active").slick("slickPlay").slick("slickSetOption", "autoplay", !0).slick("slickPlay"))
    }),




        $("#review-slider").owlCarousel({
        margin: 10,
        loop: !0,
        nav: !0,
        smartSpeed: 1e3,
        dots: !0,
        autoplay: !0,
        autoplayTimeout: 1e4,
        responsive: {0: {items: 1, dots: !1}, 600: {items: 1}, 1000: {items: 1}}
    }), $(".btn-show-more").on("click", function () {
        var i = $(this).prev(), a = $(this).text();
        i.slideToggle(700), $(this).text("less info" == a ? "more info" : "less info")
    }), $(".brand-blocks .slick-dots li").click(function () {
        $(".slick-slider.active").slick("slickPause").slick("slickSetOption", "autoplay", !1).slick("slickPause"), $(this).not(".slick-active") && ($(".clicked").removeClass("clicked"), $(this).addClass("clicked"))
    }), $(".owl-next,.owl-prev").click(function () {
        $(".owl-next,.owl-prev").removeClass("clicked"), $(this).addClass("clicked")
    })
});
