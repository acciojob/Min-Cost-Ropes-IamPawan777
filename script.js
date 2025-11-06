function mincost(arr)
{ 
//write your code here
// return the min cost
	if (arr.length <= 1) return 0;
    
    let cost = 0;
    let ropes = [...arr];             // Create a copy
    
    // Continue until only one rope remains
    while (ropes.length > 1) {
        // Sort in ascending order to get smallest ropes
        ropes.sort((a, b) => a - b);
        
        // Take two smallest ropes
        const first = ropes.shift();
        const second = ropes.shift();
        
        // Connect them and add to cost
        const newRope = first + second;
        cost += newRope;
        
        // Add the new rope back
        ropes.push(newRope);
    }
    
    return cost;  
}

module.exports=mincost;
