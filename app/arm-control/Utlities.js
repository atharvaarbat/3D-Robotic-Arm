export function radialDist(r){
    let x = Number(r)
    let y = 0.824839
    let z = 0.722161
    let half = x/2
    let alpha = Math.asin(half/y)
    let beta = Math.asin(half/z)
    
    return {
        theta: 1.5708 - alpha,
        gamma: 1.5708 - beta,
        mid: alpha + beta
    }
}