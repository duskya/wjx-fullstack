envelopes=[[5,4],[6,4],[6,7],[2,3]]
    if (envelopes.length === 0) {
        return 0;
    }

    const n = envelopes.length;
    envelopes.sort((e1, e2) => {
        if (e1[0] !== e2[0]) {
            return e1[0] - e2[0];
        } else {
            return e1[1] - e2[1];
        }
    })
    console.log(envelopes)
    const f = new Array(n).fill(1);
    let ans = 1;
    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            if (envelopes[j][1] < envelopes[i][1]) {
                console.log(f[i],f[j]+1)
                f[i] = Math.max(f[i], f[j] + 1);
                console.log(envelopes[j][1],envelopes[i][1],f[i])
            }
        }
        ans = Math.max(ans, f[i]);
    }
    // return ans;
    console.log(ans)

