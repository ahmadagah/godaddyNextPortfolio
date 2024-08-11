import { animate, motion } from "framer-motion"

// variants
const stairAnimate = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}

// calculate the reverse index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
    {/*  render 6 motion divs, each representing a staircase step.
    Each div will have the same animation defined by the strairsAnimation object.>*/}
    {[...Array(6)].map((_, index) => (
        <motion.div
            key={index}
            variants={stairAnimate}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
                delay: reverseIndex(index) * 0.1,
                duration: 0.2,
                ease: "easeInOut",
            }}
            className="h-full w-full bg-white relative"
            />
        ))}

    </>
  )
}

export default Stairs