export const parentVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren", //use this instead of delay
            staggerChildren: 0.1, //apply stagger on the parent tag
        },
    },
};

export const childVariant = {
    hidden: {
        y: -50, //move out of the site
        opacity: 0,
    },
    visible: {
        y: 0, // bring it back to nrmal
        opacity: 1,
    },
};

export const navItemParentVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren", //use this instead of delay
            staggerChildren: 0.05, //apply stagger on the parent tag
        },
    },
};
export const navItemVariant = {
    hidden: {
        x: -20, //move out of the site
        opacity: 0,
    },
    visible: {
        x: 0, // bring it back to nrmal
        opacity: 1,
    },
};
