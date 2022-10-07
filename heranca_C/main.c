#include "point.h"
#include "namedPoint.h"
#include <stdio.h>

int main(int ac, char** av) {
    struct namedPoint* origin = makeNamedPoint(0.0, 0.0, "origin");
    struct namedPoint* upperRight = makeNamedPoint(1.0, 1.0, "upperRight");
    printf("distance=%fn", 
    distance(
        (struct Point*) origin,
        (struct Point*) upperRight));
}

