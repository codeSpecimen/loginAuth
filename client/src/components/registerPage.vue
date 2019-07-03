<template>
  <div class="w-25">
    <div class="container">
    <div class="row w-50">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <form method="post" action="http://localhost:5000/users/register">
          <label for="firstname">firstname</label>
          <input type="text" name="first_name" placeholder="enter firstname" /><br />
          <label for="lasstname">lastname</label>
          <input type="text" name="last_name" placeholder="enter lastname" /><br />
          <label for="email">email</label>
          <input type="text" name="email" placeholder="enter email" /><br />
          <label for="password" name="password">password</label>
          <input type="password" name="password" placeholder="password">
          <button type="submit">Submit</button>
        </form>
        
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12">
        
      </div>
    </div>
  </div>
  </div>
</template>
