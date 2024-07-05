import React from "react"

const page = ({
  params,
}: {
  params: {postId: string}
}) => {
  return <div>postId is = {params.postId}</div>
}

export default page




// import React from "react"

// const page = ({ params }: { params: { postId: string } }) => {
//   return <div>postId is = {params.postId}</div>
// }

// export default page
