function Profile(){
    return(
        <div>
            <h1>Profile card Challange</h1>
            <ProfileCard
            name="Alice"
            age={30}
            greeting={
                <div>
                    <strong>Hi Alice,have a wonderful day</strong>
                </div>
            }
            >
                <p>Hobbies:Reading,Writing</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
            name="Bob"
            age={24}
            greeting={
                <div>
                    <strong>Hi Bob,have a wonderful day</strong>
                </div>
            }
            >
                <p>Hobbies:Swiming,Hiking</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    )
}

export default Profile;

function ProfileCard({name,age,greeting,children}){
    return(
    <>
    <h2>Name : {name}</h2>
    <p>Age : {age} </p>
    <p>{greeting}</p>
    {/* to access the nested content present between the opening and closing tags of ProfileCard component */}
    <div>{children}</div> 
    </>
    )
}