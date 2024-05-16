function getAcceleration(obj) {
    if (obj.f && obj.m && obj.m !== 0) {
        return obj.f / obj.m;
    }
    
    if (obj.Δv && obj.Δt && obj.Δt !== 0) {
        return obj.Δv / obj.Δt;
    }
    
    if (obj.d && obj.t && obj.t !== 0) {
        return 2 * obj.d / (obj.t * obj.t);
    }
    
    return "impossible";
}

const obj = {
    f: 10,
    m: 5,
    Δv: 100,
    Δt: 50,
    t: 1,
    d: 10
};
