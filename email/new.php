<?php
include('./vendor/autoload.php');

use Egulias\EmailValidator\EmailValidator;
use Egulias\EmailValidator\Validation\RFCValidation;
use Egulias\EmailValidator\Validation\DNSCheckValidation;

if (isset($_POST['email'])) {
    $email = $_POST['email'];

    $validator = new EmailValidator();
    $result = $validator->isValid($email, new DNSCheckValidation()); //true

    var_dump($result);
}
?>
<form method="post">
    <input type="text" name="email">
    <input type="submit" value="submit">
</form>


<!-- https://github.com/egulias/EmailValidator#how-to-extend -->