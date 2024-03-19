// Typescript Object

/**
 * @Object represent multiple properties
 */

// Simple Example
let students: {
    name: String,
    age: Number,
    isStudent: boolean,
    subject: String []
} = {
    name: "Karthik",
    age: 18,
    isStudent: true,
    subject: ["DBMS", "CN", "CEO", "DSA"]
}

// Optional Properties Example
type TourImages = {
    tourId: String,
    imagePath?: String[], // '?' This symbol use to make optinal parameter 
    isList: Boolean,
}

let TourImage: TourImages = {
    tourId: 'SYT-204',
    isList: true
} 
TourImage.imagePath = ['/file/image1.png','/file/image2.png']

// Index Signatures Examples :- (Index signatures can be used for objects without a defined list of properties.)
type StringDictionary = {
    [key: string]: unknown // when not know about incoming data types
}
let RandomObject:StringDictionary = {}

RandomObject["intValue"] = 25;
RandomObject["boolean"] = false;
RandomObject["String"] = "Karthik"

console.log(RandomObject)